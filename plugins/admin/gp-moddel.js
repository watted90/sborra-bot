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
		return conn.sendMessage(m.chat, { text: 'ⓘ Menziona o rispondi alla persona da rimuovere come moderatore' }, { quoted: m })
	}

	// Inizializza il database
	if (!global.db.data.chats[m.chat]) global.db.data.chats[m.chat] = {}
	if (!Array.isArray(global.db.data.chats[m.chat].moderatori)) {
		global.db.data.chats[m.chat].moderatori = []
	}

	// Verifica se è moderatore
	if (!global.db.data.chats[m.chat].moderatori.includes(user)) {
		return conn.sendMessage(m.chat, { text: 'ⓘ Questo utente non è moderatore' }, { quoted: m })
	}

	// Rimuovi come moderatore
	global.db.data.chats[m.chat].moderatori = global.db.data.chats[m.chat].moderatori.filter(mod => mod !== user)

	return conn.sendMessage(m.chat, {
		text: `✂️ @${user.split('@')[0]} non è più moderatore`,
		mentions: [user]
	}, { quoted: m })
}

handler.help = ['moddel @user']
handler.tags = ['group']
handler.command = /^(moddel|rimuovimod|removemod|unmoderator|demod)$/i
handler.group = true
handler.admin = true
handler.fail = null

export default handler
