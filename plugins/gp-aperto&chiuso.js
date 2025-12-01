let handler = async (m, { conn, command }) => {
    let isOpen = command === 'aperto'
    await conn.groupSettingUpdate(m.chat, isOpen ? 'not_announcement' : 'announcement')
    await conn.sendMessage(m.chat, {
        text: isOpen ? '𝐎𝐫𝐚 𝐩𝐨𝐭𝐞𝐭𝐞 𝐩𝐚𝐫𝐥𝐚𝐫𝐞, 𝐒𝐓𝐑𝐎𝐍𝐙𝐈' : '𝐎𝐫𝐚 𝐩𝐚𝐫𝐥𝐚𝐧𝐨 𝐢 𝐝𝐞𝐢',
        contextInfo: {
            forwardingScore: 99,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: 120363420674060561@newsletter',
                serverMessageId: '',
                newsletterName: global.db.data.nomedelbot || `𝐒𝐛𝐨𝐫𝐫𝐚 𝐁𝐨𝐭`
            }
        }
    }, { quoted: m })
}

handler.help = ['aperto', 'chiuso']
handler.tags = ['group']
handler.command = /^(aperto|chiuso)$/i
handler.admin = true
handler.botAdmin = true

export default handler