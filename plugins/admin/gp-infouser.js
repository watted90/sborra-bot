import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function handler(m, { conn, isAdmin, isModerator, args }) {
  if (!m.isGroup) {
    return conn.sendMessage(m.chat, { text: 'ⓘ Questo comando funziona solo nei gruppi' }, { quoted: m })
  }

  if (!isAdmin && !isModerator) {
    return conn.sendMessage(m.chat, { text: 'ⓘ Solo admin e moderatori possono usare questo comando' }, { quoted: m })
  }

  const mention = m.mentionedJid[0] || m.quoted?.sender
  if (!mention) {
    return conn.sendMessage(m.chat, { text: 'ⓘ Tagga un utente per vedere le informazioni' }, { quoted: m })
  }

  const groupMetadata = await conn.groupMetadata(m.chat).catch(() => null)
  const participants = groupMetadata?.participants || []
  const user = participants.find(p => conn.decodeJid(p.id) === mention)

  if (!user) {
    return conn.sendMessage(m.chat, { text: 'ⓘ Utente non trovato nel gruppo' }, { quoted: m })
  }

  const userJid = conn.decodeJid(user.id)
  const phoneNumber = userJid.split('@')[0]
  const isUserAdmin = user.admin === 'admin' || user.admin === 'superadmin'

  // Controlla se è moderatore
  const modList = global.db.data.chats[m.chat]?.moderatori || []
  const isUserModerator = modList.includes(userJid)

  // Controlla warn
  const warnList = global.db.data.chats[m.chat]?.warnings || []
  const userWarns = warnList.filter(w => w.jid === userJid).length

  // Controlla se è bannato
  const banList = global.db.data.chats[m.chat]?.banned || []
  const isBanned = banList.some(b => b.jid === userJid)

  const status = isUserAdmin ? '👑 Admin' : (isUserModerator ? '🛡️ Moderatore' : '👤 Membro')
  const banStatus = isBanned ? '❌ Bannato' : '✅ Non bannato'

  const infoText = `👤 *INFORMAZIONI UTENTE*

┌─「 ℹ️ 」
│ *Numero:* @${phoneNumber}
│ *Stato:* ${status}
│ *Warn:* ${userWarns}/3
│ *Ban:* ${banStatus}
└──────────────`

  await conn.sendMessage(m.chat, {
    text: infoText,
    mentions: [userJid]
  }, { quoted: m })
}

handler.customPrefix = /^(infouser|userinfo|profilo|profile)$/i
handler.command = new RegExp
handler.group = true
handler.admin = true
handler.moderator = true

export default handler