


import { areJidsSameUser } from '@chatunity/baileys'
const handler = async (m, { conn, isAdmin, isBotAdmin }) => {
  if (!m.isGroup) {
    return m.reply('Questo comando funziona solo nei gruppi.')
  }
  if (!isAdmin) {
    return m.reply('Solo gli amministratori possono usare questo comando.')
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
handler.botAdmin = true
export default handler
Se vuoi una versione ancora più compatibile col tuo bot, puoi usare anche questa, più corta:
const handler = async (m, { conn, isAdmin, isBotAdmin }) => {
  if (!m.isGroup) return m.reply('Solo nei gruppi.')
  if (!isAdmin) return m.reply('Solo admin.')
  if (!isBotAdmin) return m.reply('Devo essere admin.')
  if (!m.quoted) return m.reply('Rispondi a un messaggio con .del')
  try {
    await conn.sendMessage(m.chat, { delete: m.quoted.key })
  } catch (e) {
    m.reply('Errore durante l’eliminazione del messaggio.')
  }
}
handler.help = ['del']
handler.tags = ['gruppo']
handler.command = /^(del)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler