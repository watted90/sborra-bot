import fs from 'fs'
import path from 'path'

const handler = async (m, { conn, participants, groupMetadata, args, isOwner, isAdmin }) => {
    const userId = m.sender
    const groupId = m.isGroup ? m.chat : null

    const cooldownInMilliseconds = 18 * 60 * 60 * 1000

    if (!isOwner && !isAdmin) {
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

    const adminGruppo = participants.filter((p) => p.admin)
    const mentionList = adminGruppo.map(p => p.id)
    const messaggioUtente = args.join` ` || global.t('adminsNoMessage', userId, groupId)

    const title = global.t('adminsTitle', userId, groupId)
    const messageLabel = global.t('adminsMessage', userId, groupId)
    const warning = global.t('adminsWarning', userId, groupId)

    const testo = `${title}

꒷꒦ ✦ ୧・︶ : ︶ ꒷꒦ ‧₊ ୧
${mentionList.map((jid, index) => `୧ ${index + 1}. @${jid.split('@')[0]}`).join('\n')}
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
            mentions: mentionList
        }, { quoted: m })
    } catch (e) {
        console.error('GIF admin error:', e.message, '| path:', videoPath)
        await conn.sendMessage(m.chat, {
            text: testo,
            mentions: mentionList
        }, { quoted: m })
    }
}

handler.cooldowns = new Map()

handler.help = [
    'admins <text>', '@admins <text>', 'admin <text>', 'amministratori <text>',
    'administradores <text>', 'admins_es <text>', 'admin_es <text>',
    'administradores_pt <text>', 'admins_pt <text>', 'admin_pt <text>',
    'administratoren <text>', 'admins_de <text>', 'admin_de <text>',
    '管理员 <text>', '管理者 <text>',
    'админы <text>', 'администраторы <text>',
    'المشرفين <text>', 'ادمن <text>',
    'प्रशासक <text>', 'एडमिन्स <text>',
    'administrateurs <text>', 'admins_fr <text>', 'admin_fr <text>',
    'admin_id <text>', 'pengurus <text>',
    'yöneticiler <text>', 'admin_tr <text>'
]
handler.tags = ['group']
handler.command = /^(admins|@admins|admin|amministratori|administradores|admins_es|admin_es|administradores_pt|admins_pt|admin_pt|administratoren|admins_de|admin_de|管理员|管理者|админы|администраторы|المشرفين|ادمن|प्रशासक|एडमिन्स|administrateurs|admins_fr|admin_fr|admin_id|pengurus|yöneticiler|admin_tr)$/i
handler.group = true
handler.cooldown = 18 * 60 * 60 * 1000

export default handler
