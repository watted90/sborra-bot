let handler = async (m, { conn }) => {
    let who = m.quoted ? m.quoted.sender : (m.mentionedJid?.[0] ? m.mentionedJid[0] : (m.fromMe ? conn.user.jid : m.sender))
    let user = global.db.data.users[who]
    let name = await conn.getName(who)

    if (!user) throw '🚩 𝐢𝐥 bot 𝐧𝐨𝐧 𝐞 𝐬𝐭𝐚𝐭𝐨 𝐭𝐫𝐨𝐯𝐚𝐭𝐨 𝐧𝐞𝐥 𝐝𝐚𝐭𝐚𝐛𝐚𝐬𝐞'

    user.limit ||= 15000
    user.bank ||= 0

    let imgUrl = 'https://i.ibb.co/4RSNsdx9/Sponge-Bob-friendship-wallet-meme-9.png'

    let message = `
╭─「 💰 𝐖𝐀𝐋𝐋𝐄𝐓」─
│
│ 👤 user: ${name}
│ 💰 sborracoins: ${formatNumber(user.limit)} 💶
│ 🏛️ bank: ${formatNumber(user.bank)} 💳
│
╰───────✦───────
`.trim()

    await conn.sendMessage(m.chat, { 
        image: { url: imgUrl },    
        caption: message,          
        contextInfo: {
            forwardingScore: 99,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363420674060561@newsletter',
                serverMessageId: '',
                newsletterName: `${nomebot}` 
            }
        }
    }, { quoted: m, detectLink: true })
}

handler.help = ['wallet']
handler.tags = ['economy']
handler.command = ['soldi', 'wallet', 'portafoglio', 'sc', 'saldo', 'unitycoins']
handler.register = true

export default handler

function formatNumber(num) {
    return new Intl.NumberFormat('it-IT').format(num)
}