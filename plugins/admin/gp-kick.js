

async function handler(m, { isBotAdmin, isOwner, text, command, conn, isAdmin, isModerator }) {
  const isSimulation = /simkick/i.test(command)

  if (!isBotAdmin && !isSimulation) {
    return conn.sendMessage(m.chat, { text: 'ⓘ Devo essere admin per poter funzionare' }, { quoted: m })
  }

  if (!isAdmin && !isModerator) {
    return conn.sendMessage(m.chat, { text: 'ⓘ Solo admin e moderatori possono usare questo comando' }, { quoted: m })
  }

  const rawMentions = m.msg?.contextInfo?.mentionedJid || []
  const groupMeta = await conn.groupMetadata(m.chat).catch(() => null)
  const participants = groupMeta?.participants || []

  const getJidUser = jid => typeof jid === 'string' ? jid.split('@')[0].split(':')[0] : ''

  const getParticipantPhoneJid = participant => {
    for (const candidate of [participant?.phoneNumber, participant?.pn, participant?.participantPn, participant?.jid, participant?.id]) {
      const normalized = typeof candidate === 'string'
        ? (candidate.includes('@') ? candidate : `${candidate.replace(/\D/g, '')}@s.whatsapp.net`)
        : null
      if (!normalized?.endsWith('@s.whatsapp.net')) continue
      return normalized
    }
    return participant?.id ? conn.decodeJid(participant.id) : null
  }

  const mention = rawMentions[0] || m.quoted?.sender
  if (!mention) {
    return conn.sendMessage(m.chat, { text: 'ⓘ Tagga qualcuno da rimuovere' }, { quoted: m })
  }

  const ownerBot = global.owner[0][0] + '@s.whatsapp.net'

  if (mention === ownerBot) {
    return await conn.sendMessage(m.chat, {
      text: '𝐧𝐨𝐧 𝐩𝐮𝐨𝐢 𝐫𝐢𝐦𝐨𝐬𝐬𝐞𝐫𝐞 𝐝𝐢𝐞𝐡'
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

}

handler.customPrefix = /kick|avadachedavra|sparisci|puffo|cozze|kamehamea|labubu/i
handler.command = new RegExp
handler.admin = true

export default handler