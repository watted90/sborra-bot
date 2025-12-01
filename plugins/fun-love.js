let handler = async (m, { conn, command, text }) => {
    let love = `︶︶ ⊹ ︶︶ ⊹ ︶︶︶ ୨♡୧ ︶︶︶ ⊹ ︶︶ ⊹ ︶︶\n𝐂𝐀𝐋𝐂𝐎𝐋𝐀𝐓𝐎𝐑𝐄 𝐃𝐈 𝐀𝐌𝐎𝐑𝐄 ❤️\nAffinità tra ${text} e te: ${Math.floor(Math.random() * 100)}%\n︶︶ ⊹ ︶︶ ⊹ ︶︶︶ ୨♡୧ ︶︶︶ ⊹ ︶︶ ⊹ ︶︶`.trim()
    
  
    await conn.sendMessage(m.chat, { 
      text: love,
      contextInfo: {
        mentionedJid: conn.parseMention(love),
        forwardingScore: 99,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363420674060561@newsletter',
          serverMessageId: '',
          newsletterName: `${nomebot}`
        }
      }
    }, { quoted: m })
  }
  
  handler.help = ['love']
  handler.tags = ['fun']
  handler.command = /^(love|amore)$/i
  export default handler