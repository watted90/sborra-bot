import { performance } from 'perf_hooks'

let handler = async (m, { conn, usedPrefix }) => {
  
  
  const messageOptions = {
    contextInfo: {
      forwardingScore: 999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: '120363420674060561@newsletter',
        serverMessageId: '',
        newsletterName: `${nomebot}`
      }
    }
  }

  await conn.sendMessage(m.chat, {
    text: `𝐑𝐢𝐭𝐞𝐧𝐭𝐚, 𝐬𝐚𝐫𝐚𝐢 𝐩𝐢𝐮́ 𝐟𝐨𝐫𝐭𝐮𝐧𝐚𝐭𝐨 😂`,
    ...messageOptions
  })
}

handler.help = ['autoadmin']
handler.tags = ['fun']
handler.command = /^(autoadmin)$/i

export default handler
