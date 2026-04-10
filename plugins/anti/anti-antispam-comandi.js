const COMMAND_SPAM_USER_WINDOW = 15000
const COMMAND_SPAM_USER_MAX = 4
const COMMAND_SPAM_REPEAT_WINDOW = 7000
const COMMAND_SPAM_REPEAT_MAX = 3
const COMMAND_SPAM_GROUP_WINDOW = 12000
const COMMAND_SPAM_GROUP_MAX = 7
const COMMAND_SPAM_USER_COOLDOWN = 60000
const COMMAND_SPAM_GROUP_COOLDOWN = 30000

global.groupSpam = global.groupSpam || {}

function getJidUser(jid) {
  return typeof jid === 'string' ? jid.split('@')[0].split(':')[0] : ''
}

function hasValidPrefix(text, prefixes) {
  if (!text || typeof text !== 'string') return false
  if (prefixes instanceof RegExp) return prefixes.test(text)
  const prefixList = Array.isArray(prefixes) ? prefixes : [prefixes]
  return prefixList.some((prefix) => {
    if (prefix instanceof RegExp) return prefix.test(text)
    if (typeof prefix === 'string') return text.startsWith(prefix)
    return false
  })
}

function getCommandKey(text, prefixes) {
  if (typeof text !== 'string') return ''
  let withoutPrefix = text.trim()

  if (prefixes instanceof RegExp) {
    const match = prefixes.exec(withoutPrefix)
    if (match?.[0]) withoutPrefix = withoutPrefix.slice(match[0].length)
  } else {
    const prefixList = Array.isArray(prefixes) ? prefixes : [prefixes]
    for (const prefix of prefixList) {
      if (prefix instanceof RegExp) {
        const match = prefix.exec(withoutPrefix)
        if (match?.[0]) {
          withoutPrefix = withoutPrefix.slice(match[0].length)
          break
        }
      } else if (typeof prefix === 'string' && withoutPrefix.startsWith(prefix)) {
        withoutPrefix = withoutPrefix.slice(prefix.length)
        break
      }
    }
  }

  return (withoutPrefix.trim().split(/\s+/)[0] || '').toLowerCase()
}

function getCommandSpamState(chatId) {
  if (!global.groupSpam[chatId]) {
    global.groupSpam[chatId] = {
      suspendedUntil: 0,
      lastNoticeAt: 0,
      group: { count: 0, windowStart: 0 },
      users: {}
    }
  }

  return global.groupSpam[chatId]
}

function getUserSpamState(groupState, sender) {
  if (!groupState.users[sender]) {
    groupState.users[sender] = {
      count: 0,
      windowStart: 0,
      repeatCount: 0,
      lastCommand: '',
      lastCommandAt: 0,
      lastNoticeAt: 0,
      suspendedUntil: 0
    }
  }

  return groupState.users[sender]
}

function cleanupSpamState(groupState, now) {
  for (const [sender, state] of Object.entries(groupState.users)) {
    const isIdle = now - state.lastCommandAt > COMMAND_SPAM_USER_COOLDOWN && now > state.suspendedUntil
    if (isIdle) delete groupState.users[sender]
  }
}

function isPrivilegedUser(conn, m) {
  const decodedUserId = conn.decodeJid ? conn.decodeJid(global.conn?.user?.id) : global.conn?.user?.id || ''
  const ownerNumbers = Array.isArray(global.owner) ? global.owner.map(([number]) => number).filter(Boolean) : []
  const ownerJids = [decodedUserId, ...ownerNumbers]
    .filter(Boolean)
    .map((value) => value.replace(/[^0-9]/g, '') + '@s.whatsapp.net')

  const isROwner = ownerJids.includes(m.sender)
  const isOwner = isROwner || m.fromMe
  const modsJids = Array.isArray(global.mods) ? global.mods.map((value) => value.replace(/[^0-9]/g, '') + '@s.whatsapp.net') : []
  const isMods = isOwner || modsJids.includes(m.sender)
  const isPrems = isROwner || isOwner || isMods || global.db.data.users[m.sender]?.premiumTime > 0

  return { isOwner, isMods, isPrems }
}

async function enforceCommandAntispam(conn, m, chat) {
  if (!m.isGroup || !chat?.antispamcomandi || typeof m.text !== 'string') return false

  const prefixes = conn.prefix || global.prefix
  if (!hasValidPrefix(m.text, prefixes)) return false

  const { isOwner, isMods, isPrems } = isPrivilegedUser(conn, m)
  if (isOwner || isMods || isPrems) return false

  const commandKey = getCommandKey(m.text, prefixes)
  if (!commandKey) return false

  const now = Date.now()
  const groupState = getCommandSpamState(m.chat)
  cleanupSpamState(groupState, now)

  if (groupState.suspendedUntil > now) {
    m.commandBlocked = true
    return true
  }

  const userState = getUserSpamState(groupState, m.sender)
  if (userState.suspendedUntil > now) {
    if (now - userState.lastNoticeAt >= 5000) {
      userState.lastNoticeAt = now
      const seconds = Math.ceil((userState.suspendedUntil - now) / 1000)
      await conn.sendMessage(m.chat, {
        text: `『 ⚠ 』 Anti-spam comandi\n\n@${getJidUser(m.sender)} stai inviando troppi comandi troppo velocemente.\nRiprova tra *${seconds} secondi*.`,
        mentions: [m.sender]
      })
    }
    m.commandBlocked = true
    return true
  }

  if (now - groupState.group.windowStart > COMMAND_SPAM_GROUP_WINDOW) {
    groupState.group.count = 0
    groupState.group.windowStart = now
  }
  groupState.group.count += 1

  if (now - userState.windowStart > COMMAND_SPAM_USER_WINDOW) {
    userState.count = 0
    userState.windowStart = now
  }
  userState.count += 1

  if (userState.lastCommand === commandKey && now - userState.lastCommandAt <= COMMAND_SPAM_REPEAT_WINDOW) {
    userState.repeatCount += 1
  } else {
    userState.repeatCount = 1
  }

  userState.lastCommand = commandKey
  userState.lastCommandAt = now

  if (groupState.group.count >= COMMAND_SPAM_GROUP_MAX) {
    groupState.suspendedUntil = now + COMMAND_SPAM_GROUP_COOLDOWN
    if (now - groupState.lastNoticeAt >= 5000) {
      groupState.lastNoticeAt = now
      await conn.sendMessage(m.chat, {
        text: `『 ⚠ 』 Anti-spam comandi\n\nTroppi comandi ravvicinati nel gruppo.\nComandi bloccati per *${Math.ceil(COMMAND_SPAM_GROUP_COOLDOWN / 1000)} secondi*.`
      })
    }
    m.commandBlocked = true
    return true
  }

  if (userState.count >= COMMAND_SPAM_USER_MAX || userState.repeatCount >= COMMAND_SPAM_REPEAT_MAX) {
    userState.suspendedUntil = now + COMMAND_SPAM_USER_COOLDOWN
    userState.lastNoticeAt = now
    await conn.sendMessage(m.chat, {
      text: `『 ⚠ 』 Anti-spam comandi\n\n@${getJidUser(m.sender)} hai superato il limite di comandi consecutivi.\nAttendi *${Math.ceil(COMMAND_SPAM_USER_COOLDOWN / 1000)} secondi* prima di riprovare.`,
      mentions: [m.sender]
    })
    m.commandBlocked = true
    return true
  }

  return false
}

let handler = function () {}

handler.all = async function (m) {
  if (!m?.isGroup || typeof m.text !== 'string') return
  const chat = global.db?.data?.chats?.[m.chat] || {}
  await enforceCommandAntispam(this, m, chat)
}

export default handler