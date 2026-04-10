async function handler(m, { conn, text }) {
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
		return conn.sendMessage(m.chat, { text: 'ⓘ Menziona o rispondi alla persona da promuovere' }, { quoted: m })
	}

	if (user === conn.user.jid) {
		return conn.sendMessage(m.chat, { text: 'ⓘ Il bot è già admin' }, { quoted: m })
	}

	const participant = participants.find(entry => conn.decodeJid(entry.id) === user || getParticipantPhoneJid(entry) === user)
	if (participant?.admin === 'admin' || participant?.admin === 'superadmin') {
		return conn.sendMessage(m.chat, { text: 'ⓘ Questo utente è già admin' }, { quoted: m })
	}

	await conn.groupParticipantsUpdate(m.chat, [user], 'promote')
	return conn.sendMessage(m.chat, {
		text: `👑 @${user.split('@')[0]} è stato promosso admin`,
		mentions: [user]
	}, { quoted: m })
}

handler.help = ['promuovi @user']
handler.tags = ['group']
handler.command = /^(p|promuovi|mettiadmin|giveadmin|promote|makeadmin|setadmin|ascender|haceradmin|daradmin|promover|tornaradmin|admin_pt|befördern|admin_de|管理员|设为管理员|повысить|сделатьадмином|ترقية|جعل_مشرف|प्रमोट|एडमिनबनाओ|promouvoir|nommeradmin|saranakan|jadikanadmin|yükselt|admin_yap)$/i
handler.admin = true
handler.botAdmin = true
handler.group = true
handler.fail = null

export default handler
