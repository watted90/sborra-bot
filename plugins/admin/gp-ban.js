import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function handler(m, { conn, isBotAdmin, isAdmin, isModerator, text, args }) {
  if (!m.isGroup) {
    return conn.sendMessage(m.chat, { text: 'ⓘ Questo comando funziona solo nei gruppi' }, { quoted: m })
  }

  if (!isBotAdmin) {
    return conn.sendMessage(m.chat, { text: 'ⓘ Devo essere admin per poter funzionare' }, { quoted: m })
  }

  if (!isAdmin && !isModerator) {
    return conn.sendMessage(m.chat, { text: 'ⓘ Solo admin e moderatori possono usare questo comando' }, { quoted: m })
  }

  const mention = m.mentionedJid[0] || m.quoted?.sender
  if (!mention) {
    return conn.sendMessage(m.chat, { text: 'ⓘ Tagga qualcuno da bannare' }, { quoted: m })
  }

  const groupMetadata = await conn.groupMetadata(m.chat).catch(() => null)
  const participants = groupMetadata?.participants || []
  const utente = participants.find(u => conn.decodeJid(u.id) === mention)

  if (utente?.admin === 'superadmin' || utente?.admin === 'admin') {
    return conn.sendMessage(m.chat, { text: 'ⓘ Non posso bannare un admin' }, { quoted: m })
  }

  const reason = args.join(' ').trim() || 'Nessun motivo specificato'

  // Aggiungi alla lista ban
  if (!global.db.data.chats[m.chat]) global.db.data.chats[m.chat] = {}
  if (!global.db.data.chats[m.chat].banned) global.db.data.chats[m.chat].banned = []

  const banList = global.db.data.chats[m.chat].banned
  if (!banList.includes(mention)) {
    banList.push({ jid: mention, reason, bannedBy: m.sender, timestamp: Date.now() })
  }

  await conn.sendMessage(m.chat, {
    text: `🚫 @${mention.split('@')[0]} è stato bannato dal gruppo\n💬 Motivo: ${reason}`,
    mentions: [mention]
  }, { quoted: m })

  await conn.groupParticipantsUpdate(m.chat, [mention], 'remove')
}

handler.customPrefix = /^(ban|bannato|blocca)$/i
handler.command = new RegExp
handler.group = true
handler.admin = true
handler.moderator = true

export default handler