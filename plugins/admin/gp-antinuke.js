// antinuke by Kinder × varebot

const PROMO_TRACK_WINDOW = 30 * 60_000
const TRACKER_CLEANUP_INT = 5 * 60_000

const STUB = {
    TITLE_CHANGE: 21,
    LINK_RESET: 23,
    PARTICIPANT_REMOVE: 28,
    PARTICIPANT_PROMOTE: 29,
    PARTICIPANT_DEMOTE: 30,
    PARTICIPANT_DEMOTE2: 31,
}

const DESTRUCTIVE_STUBS = new Set([STUB.PARTICIPANT_REMOVE, STUB.PARTICIPANT_DEMOTE, STUB.PARTICIPANT_DEMOTE2])
const MODIFICATION_STUBS = new Set([STUB.TITLE_CHANGE, STUB.LINK_RESET])
const MONITORED_STUBS = new Set([...DESTRUCTIVE_STUBS, ...MODIFICATION_STUBS, STUB.PARTICIPANT_PROMOTE])

const WHITELIST = [
    '393892016995@s.whatsapp.net',
    '447476676459@s.whatsapp.net',
    '39377384246145@s.whatsapp.net',
    
]

if (!global._antinukeTracker) {
    global._antinukeTracker = {
        promotions: {},
        _lastCleanup: Date.now(),
    }
}
const tracker = global._antinukeTracker

function cleanupTracker() {
    const now = Date.now()
    if (now - tracker._lastCleanup < TRACKER_CLEANUP_INT) return
    tracker._lastCleanup = now

    for (const chat in tracker.promotions) {
        if (!Array.isArray(tracker.promotions[chat])) continue
        tracker.promotions[chat] = tracker.promotions[chat].filter(p => now - p.timestamp < PROMO_TRACK_WINDOW)
        if (tracker.promotions[chat].length === 0) delete tracker.promotions[chat]
    }
}

function pushPromotion(chatId, promoterJid, promotedJid) {
    if (!tracker.promotions[chatId]) tracker.promotions[chatId] = []
    tracker.promotions[chatId].push({ promoterJid, promotedJid, timestamp: Date.now() })
}

function isWhitelisted(conn, executor) {
    const botJid = conn.decodeJid(conn.user?.jid || conn.user?.id)
    if (executor === botJid) return true

    const samJids = (global.sam || []).map(s => String(s).replace(/[^0-9]/g, '') + '@s.whatsapp.net')
    if (samJids.includes(executor)) return true

    const ownerJids = (global.owner || [])
        .flatMap(v => Array.isArray(v) ? v.filter(x => typeof x === 'string') : [v])
        .map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net')
    if (ownerJids.includes(executor)) return true

    if (WHITELIST.includes(executor)) return true

    return false
}

function isDemoteStub(stubType) {
    return stubType === STUB.PARTICIPANT_DEMOTE || stubType === STUB.PARTICIPANT_DEMOTE2
}

async function handleNukeDetection(conn, chatId, nukerJid, reason, chat) {
    let metadata
    try {
        metadata = await conn.groupMetadata(chatId)
    } catch { return }

    const toDemote = []
    const mentions = []

    for (const p of metadata.participants) {
        const jid = conn.decodeJid(p.jid)
        
        if (p.admin === 'superadmin') continue
        
        if (isWhitelisted(conn, jid)) continue

        if (p.admin === 'admin') {
            toDemote.push(jid)
            mentions.push(jid)
        }
    }

    if (toDemote.length > 0) {
        await conn.groupParticipantsUpdate(chatId, toDemote, 'demote').catch(() => {})
    }

    let alertText = `ㅤㅤ⋆｡˚『 ╭ \`ANTINUKE MASSIVO\` ╯ 』˚｡⋆\n╭\n`
    alertText += `│ 🚨 \`Innescato da:\` *@${nukerJid.split('@')[0]}*\n`
    alertText += `│ 📋 \`Motivo:\` *${reason}*\n`
    alertText += `│ ⚡ \`Azione:\` *Pulizia Amministratori*\n`
    alertText += `│ 👥 \`Demotati:\` *${toDemote.length} utenti*\n`
    alertText += `╰⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─\n\n> ˗ˏˋ ☾ 𝚟𝚊𝚛𝚎𝚋𝚘𝚝 ☽ ˎˊ˗`

    await conn.sendMessage(chatId, { text: alertText, mentions: [nukerJid, ...mentions] }).catch(() => {})
}

let handler = m => m

handler.before = async function (m) {
    if (!m.isGroup || !m.messageStubType) return
    if (!MONITORED_STUBS.has(m.messageStubType)) return

    const chat = global.db?.data?.chats?.[m.chat]
    if (!chat?.antinuke) return

    const conn = this
    const stubType = m.messageStubType
    const botJid = conn.decodeJid(conn.user?.jid || conn.user?.id)
    const executor = m.key?.participant
        ? conn.decodeJid(m.key.participant)
        : conn.decodeJid(m.sender)

    if (!executor || executor === botJid) return

    cleanupTracker()

    if (isWhitelisted(conn, executor)) {
        if (stubType === STUB.TITLE_CHANGE && m.messageStubParameters?.[0]) {
            chat._antinukeLastTitle = m.messageStubParameters[0]
        }
        return
    }

    let isBotAdmin = false
    try {
        const meta = await conn.groupMetadata(m.chat).catch(() => null)
        if (meta?.participants) {
            isBotAdmin = meta.participants.some(p => {
                const pJid = conn.decodeJid(p.jid)
                return pJid === botJid && (p.admin === 'admin' || p.admin === 'superadmin')
            })
        }
    } catch {}

    if (!isBotAdmin) return

    if (stubType === STUB.PARTICIPANT_PROMOTE && m.messageStubParameters?.[0]) {
        const promotedJid = conn.decodeJid(m.messageStubParameters[0])
        if (promotedJid && promotedJid !== botJid) {
            pushPromotion(m.chat, executor, promotedJid)
            await handleNukeDetection(conn, m.chat, executor, `Promozione non autorizzata`, chat)
        }
        return
    }

    if (stubType === STUB.PARTICIPANT_REMOVE) {
        if (m.messageStubType === 28 && m.messageStubParameters?.[0] === executor) return 
        await handleNukeDetection(conn, m.chat, executor, `Rimozione utente`, chat)
    }

    if (isDemoteStub(stubType)) {
        await handleNukeDetection(conn, m.chat, executor, `Demote di un admin`, chat)
    }

    if (stubType === STUB.TITLE_CHANGE && m.messageStubParameters?.[0]) {
        const newTitle = m.messageStubParameters[0]
        const oldTitle = chat._antinukeLastTitle || ''
        await handleNukeDetection(conn, m.chat, executor, `Modifica nome gruppo`, chat)
        if (oldTitle) {
            await conn.groupUpdateSubject(m.chat, oldTitle).catch(() => {})
        }
    }

    if (stubType === STUB.LINK_RESET) {
        await handleNukeDetection(conn, m.chat, executor, `Reset link d'invito`, chat)
    }
}

export default handler