import fs from 'fs'
import path from 'path'

const handler = async (m, { conn, participants, groupMetadata, args, isOwner, isAdmin, isModerator }) => {
    const userId = m.sender
    const groupId = m.isGroup ? m.chat : null

    const cooldownInMilliseconds = 18 * 60 * 60 * 1000

    if (!isOwner && !isAdmin && !isModerator) {
        const lastUsed = handler.cooldowns.get(m.sender) || 0
        const now = Date.now()

        if (now - lastUsed < cooldownInMilliseconds) {
            const timeLeft = cooldownInMilliseconds - (now - lastUsed)
            const hours = Math.floor(timeLeft / (1000 * 60 * 60))
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)
            const timeString = `${hours > 0 ? `${hours} ore, ` : ''}${minutes > 0 ? `${minutes} minuti e ` : ''}${seconds} secondi`
            await m.reply(global.t('adminsCooldown', userId, groupId, { time: timeString }))
            return
        }
        handler.cooldowns.set(m.sender, now)
    }

    // Ottieni lista moderatori dal database
    const moderatorList = (global.db.data.chats[m.chat]?.moderatori || [])
    const mentionList = moderatorList.map(mod => mod)
    
    const messaggioUtente = args.join` ` || global.t('adminsNoMessage', userId, groupId)

    const title = '🛡️ *MODERATORI DEL GRUPPO*'
    const messageLabel = global.t('adminsMessage', userId, groupId)
    const warning = '> ℹ️ I moderatori sono stati notificati'

    const testo = `${title}

꒷꒦ ✦ ୧・︶ : ︶ ꒷꒦ ‧₊ ୧
${mentionList.length > 0 ? mentionList.map((jid, index) => `୧ ${index + 1}. @${jid.split('@')[0]}`).join('\n') : '୧ Nessun moderatore'}
꒷꒦ ✦ ୧・︶ : ︶ ꒷꒦ ‧₊ ୧

╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
${messageLabel}:
${messaggioUtente}
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱

> ${warning}

╰♡꒷ ๑ ⋆˚₊⋆───ʚ˚ɞ───⋆˚₊⋆ ๑ ⪩`.trim()

    const videoPath = path.join(process.cwd(), 'media', 'gif', 'admin.mp4')

    try {
        const videoBuffer = fs.readFileSync(videoPath)
        await conn.sendMessage(m.chat, {
            video: videoBuffer,
            gifPlayback: true,
            mimetype: 'video/mp4',
            caption: testo,
            mentions: mentionList.length > 0 ? mentionList : undefined
        }, { quoted: m })
    } catch (e) {
        console.error('GIF moderatori error:', e.message, '| path:', videoPath)
        await conn.sendMessage(m.chat, {
            text: testo,
            mentions: mentionList.length > 0 ? mentionList : undefined
        }, { quoted: m })
    }
}

handler.cooldowns = new Map()

handler.help = ['moderatori <text>', '@moderatori <text>', 'mod <text>', 'mods <text>']
handler.tags = ['group']
handler.command = /^(moderatori|@moderatori|mod|mods)$/i
handler.group = true
handler.cooldown = 18 * 60 * 60 * 1000

export default handler
