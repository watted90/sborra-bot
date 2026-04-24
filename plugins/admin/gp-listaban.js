import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function handler(m, { conn, isAdmin, isModerator }) {
  if (!m.isGroup) {
    return conn.sendMessage(m.chat, { text: 'ⓘ Questo comando funziona solo nei gruppi' }, { quoted: m })
  }

  if (!isAdmin && !isModerator) {
    return conn.sendMessage(m.chat, { text: 'ⓘ Solo admin e moderatori possono usare questo comando' }, { quoted: m })
  }

  if (!global.db.data.chats[m.chat]) global.db.data.chats[m.chat] = {}
  if (!global.db.data.chats[m.chat].banned) global.db.data.chats[m.chat].banned = []

  const banList = global.db.data.chats[m.chat].banned

  if (banList.length === 0) {
    return conn.sendMessage(m.chat, { text: '📛 *NESSUN UTENTE BANNATO*\n\nNessun utente è stato bannato in questo gruppo.' }, { quoted: m })
  }

  const list = banList.map((b, i) => {
    const date = new Date(b.timestamp).toLocaleDateString('it-IT')
    return `✦ ${i + 1}. @${b.jid.split('@')[0]}
   └ 💬 Motivo: ${b.reason}
   └ 📅 Data: ${date}`
  }).join('\n\n')

  await conn.sendMessage(m.chat, {
    text: `🚫 *LISTA UTENTI BANNATI*\n\n${list}`,
    mentions: banList.map(b => b.jid)
  }, { quoted: m })
}

handler.customPrefix = /^(listaban|listban|bannedlist)$/i
handler.command = new RegExp
handler.group = true
handler.admin = true
handler.moderator = true

export default handler