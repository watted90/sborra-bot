async function handler(m, { conn, text, isAdmin, isModerator }) {
  if (isModerator && !isAdmin) {
    return conn.sendMessage(m.chat, { text: 'ⓘ Solo gli admin possono retrocedere utenti' }, { quoted: m })
  }

  const rawMentions = m.msg?.contextInfo?.mentionedJid || []
  const groupMeta = await conn.groupMetadata(m.chat).catch(() => null)
  const participants = groupMeta?.participants || []

  const getJidUser = jid => typeof jid === 'string' ? jid.split('@')[0].split(':')[0] : ''
  const normalizePhoneJid = value => {
    if (typeof value !== 'string') return null
    if (value.includes('@')) return value
    const digits = value.replace(/\D/g, '')
    return digits ? `${digits}@s.whatsapp.net` : null
  }

  const getParticipantPhoneJid = participant => {
    for (const candidate of [participant?.phoneNumber, participant?.pn, participant?.participantPn, participant?.jid, participant?.id]) {
      const normalized = normalizePhoneJid(typeof candidate === 'string' ? candidate.trim() : '') || (typeof candidate === 'string' ? conn.decodeJid(candidate) : candidate)
      if (!normalized?.endsWith('@s.whatsapp.net')) continue
      return normalized
    }
    return participant?.id ? conn.decodeJid(participant.id) : null
  }

  const resolveTarget = jid => {
    if (!jid) return null
    const decoded = conn.decodeJid(jid)
    const jidUser = getJidUser(jid)
    const match = participants.find(participant => {
      const values = [participant?.id, participant?.jid, participant?.lid, participant?.phoneNumber, participant?.pn, participant?.participantPn]
      return values.some(value => {
        if (typeof value !== 'string') return false
        const normalized = normalizePhoneJid(value.trim()) || conn.decodeJid(value)
        return normalized === decoded || getJidUser(normalized) === jidUser
      })
    })

    return match ? (getParticipantPhoneJid(match) || conn.decodeJid(match.id)) : decoded
  }

  const explicitNumber = text?.replace(/[^0-9]/g, '')
  const mentionTarget = m.mentionedJid?.[0] || rawMentions.map(resolveTarget).find(Boolean)
  const quotedTarget = m.quoted?.sender ? resolveTarget(m.quoted.sender) : null
  const numericTarget = explicitNumber ? resolveTarget(`${explicitNumber}@s.whatsapp.net`) : null
  const user = mentionTarget || quotedTarget || numericTarget

  if (!user) {
    return conn.sendMessage(m.chat, { text: 'ⓘ Menziona o rispondi alla persona da retrocedere' }, { quoted: m })
  }

  const participant = participants.find(entry => conn.decodeJid(entry.id) === user || getParticipantPhoneJid(entry) === user)
  if (participant?.admin === 'superadmin') {
    return conn.sendMessage(m.chat, { text: "ⓘ Non puoi retrocedere il creatore del gruppo" }, { quoted: m })
  }
  if (participant?.admin !== 'admin') {
    return conn.sendMessage(m.chat, { text: 'ⓘ Questo utente non è admin' }, { quoted: m })
  }

  await conn.groupParticipantsUpdate(m.chat, [user], 'demote')
  return conn.sendMessage(m.chat, {
    text: `📉 @${user.split('@')[0]} non è più admin`,
    mentions: [user]
  }, { quoted: m })
}
handler.help = [
  'demote .r @','demote retrocedi @','demote togliadmin @','demote removeadmin @',
  'demote demote @','demote bajaradmin @','demote quitaradmin @','demote removeradmin @',
  'demote rebaixar @','demote tiraradmin @',
  'demote degradieren @','demote admin_entfernen @',
  'demote 降级 @','demote 移除管理员 @',
  'demote понизить @','demote убратьадмина @',
  'demote إزالةمشرف @','demote خفضالرتبة @',
  'demote पदावनति @','demote एडमिनहटाओ @',
  'demote rétrograder @','demote retireradmin @',
  'demote turunkan @','demote hapusadmin @',
  'demote düşür @','demote admin_sil @'
];
handler.tags = ['group']
handler.command = /^(r|retrocedi|togliadmin|removeadmin|demote|bajaradmin|quitaradmin|removeradmin|rebaixar|tiraradmin|degradieren|admin_entfernen|降级|移除管理员|понизить|убратьадмина|إزالةمشرف|خفضالرتبة|पदावनति|एडमिनहटाओ|rétrograder|retireradmin|turunkan|hapusadmin|düşür|admin_sil)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.fail = null

export default handler
