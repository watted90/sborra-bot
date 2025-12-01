async function handler(m, { isBotAdmin, isOwner, text, conn }) {
  if (!isBotAdmin) {
    return await conn.sendMessage(m.chat, {
      text: '𝐦𝐞𝐭𝐭𝐢 𝐩𝐫𝐢𝐦𝐚 𝐚𝐝𝐦𝐢𝐧 𝐢𝐥 𝐛𝐨𝐭 𝐫𝐢𝐭𝐚𝐫𝐝𝐚𝐭𝐨'
    }, { quoted: m })
  }

  const mention = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.quoted
  if (!mention) {
    return await conn.sendMessage(m.chat, {
      text: '𝐭𝐚𝐠𝐠𝐚 𝐢𝐥 𝐝𝐨𝐰𝐧 𝐝𝐚 𝐭𝐨𝐠𝐥𝐢𝐞𝐫𝐞'
    }, { quoted: m })
  }

  const ownerBot = global.owner[0][0] + '@s.whatsapp.net'

  if (mention === ownerBot) {
    return await conn.sendMessage(m.chat, {
      text: '𝐧𝐨𝐧 𝐩𝐮𝐨𝐢 𝐫𝐢𝐦𝐮𝐨𝐯𝐞𝐫𝐞 𝐝𝐢𝐞𝐡'
    }, { quoted: m })
  }

  if (mention === conn.user.jid) {
    return await conn.sendMessage(m.chat, {
      text: '𝐜𝐚𝐳𝐳𝐨 𝐭𝐨𝐠𝐥𝐢 𝐢𝐥 𝐛𝐨𝐭 𝐫𝐢𝐭𝐚𝐫𝐝𝐚𝐭𝐨'
    }, { quoted: m })
  }

  if (mention === m.sender) {
    return await conn.sendMessage(m.chat, {
      text: '𝐪𝐮𝐢𝐭𝐭𝐚 𝐝𝐚 𝐬𝐨𝐥𝐨 𝐝𝐨𝐰𝐧'
    }, { quoted: m })
  }

  const groupMetadata = conn.chats[m.chat]?.metadata
  const participants = groupMetadata?.participants || []
  const utente = participants.find(u => conn.decodeJid(u.id) === mention)

  const owner = utente?.admin === 'superadmin'
  const admin = utente?.admin === 'admin'

  if (owner) {
    return await conn.sendMessage(m.chat, {
      text: "𝐢𝐥 𝐫𝐢𝐭𝐚𝐫𝐝𝐚𝐭𝐨 𝐡𝐚 𝐩𝐫𝐨𝐯𝐚𝐭𝐨 𝐚 𝐭𝐨𝐠𝐥𝐢𝐞𝐫𝐞 𝐢𝐥 𝐟𝐨𝐮𝐧𝐝𝐞𝐫"
    }, { quoted: m })
  }

  if (admin) {
    return await conn.sendMessage(m.chat, {
      text: "𝐢𝐥 𝐫𝐢𝐭𝐚𝐫𝐝𝐚𝐭𝐨 𝐡𝐚 𝐩𝐫𝐨𝐯𝐚𝐭𝐨 𝐚 𝐭𝐨𝐠𝐥𝐢𝐞𝐫𝐞 𝐮𝐧 𝐚𝐝𝐦𝐢𝐧"
    }, { quoted: m })
  }

  const reason = text ? `\n\n𝐌𝐨𝐭𝐢𝐯𝐨: ${text.replace(/@\d+/g, '').trim()}` : ''
  
  await conn.sendMessage(m.chat, {
    text: `@${mention.split`@`[0]} 𝐞̀ 𝐬𝐭𝐚𝐭𝐨 𝐫𝐢𝐦𝐨𝐬𝐬𝐨 𝐝𝐚: @${m.sender.split`@`[0]}${reason}`,
    mentions: [mention, m.sender]
  }, { quoted: m })

  await conn.groupParticipantsUpdate(m.chat, [mention], 'remove')
}

handler.customPrefix = /kick|avadachedavra|sparisci|puffo|cozze|kamehamea|labubu/i
handler.command = new RegExp
handler.admin = true

export default handler