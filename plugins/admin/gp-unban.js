import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function handler(m, { conn, isAdmin, isModerator, text, args }) {
  if (!m.isGroup) {
    return conn.sendMessage(m.chat, { text: 'ⓘ Questo comando funziona solo nei gruppi' }, { quoted: m })
  }

  if (!isAdmin && !isModerator) {
    return conn.sendMessage(m.chat, { text: 'ⓘ Solo admin e moderatori possono usare questo comando' }, { quoted: m })
  }

  if (!global.db.data.chats[m.chat]) global.db.data.chats[m.chat] = {}
  if (!global.db.data.chats[m.chat].banned) global.db.data.chats[m.chat].banned = []

  const banList = global.db.data.chats[m.chat].banned

  // Se non c'è argomento, mostra la lista dei bannati
  if (!args.length) {
    if (banList.length === 0) {
      return conn.sendMessage(m.chat, { text: 'ⓘ Nessun utente bannato in questo gruppo' }, { quoted: m })
    }

    const list = banList.map((b, i) => `${i + 1}. @${b.jid.split('@')[0]}\n   📝 Motivo: ${b.reason}`).join('\n\n')
    return conn.sendMessage(m.chat, {
      text: `📋 *UTENTI BANNATI*\n\n${list}`,
      mentions: banList.map(b => b.jid)
    }, { quoted: m })
  }

  // Rimuovi un utente dalla lista ban
  const userToUnban = args[0].replace('@', '') + '@s.whatsapp.net'
  const index = banList.findIndex(b => b.jid === userToUnban || b.jid.includes(args[0].replace('@', '')))

  if (index === -1) {
    return conn.sendMessage(m.chat, { text: 'ⓘ Utente non trovato nella lista ban' }, { quoted: m })
  }

  banList.splice(index, 1)

  await conn.sendMessage(m.chat, {
    text: `✅ @${args[0].replace('@', '')} è stato sbannato`,
    mentions: [userToUnban]
  }, { quoted: m })
}

handler.customPrefix = /^(unban|sban|sgombra)$/i
handler.command = new RegExp
handler.group = true
handler.admin = true
handler.moderator = true

export default handler