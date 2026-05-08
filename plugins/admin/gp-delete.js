


import { areJidsSameUser } from '@chatunity/baileys'
const handler = async (m, { conn, isAdmin, isBotAdmin }) => {
  if (!m.isGroup) {
    return m.reply('Questo comando funziona solo nei gruppi.')
  }
  if (!isAdmin) {
    return m.reply('Solo gli amministratori e i moderatori possono usare questo comando.')
  }
  if (!isBotAdmin) {
    return m.reply('Il bot deve essere amministratore per eliminare i messaggi.')
  }
  const q = m.quoted
  if (!q) {
    return m.reply('Rispondi al messaggio che vuoi eliminare con .del')
  }
  try {
    const key = {
      remoteJid: m.chat,
      fromMe: areJidsSameUser(conn.user.id, q.sender),
      id: q.id,
      participant: q.sender
    }
    await conn.sendMessage(m.chat, { delete: key })
  } catch (e) {
    console.error(e)
    m.reply('Non sono riuscito a eliminare quel messaggio.')
  }
}
handler.help = ['del']
handler.tags = ['gruppo','mod']
handler.command = /^(del|delete|cancella)$/i
handler.group = true
handler.admin = true
handler.mod = true 
handler.botAdmin = true
export default handler