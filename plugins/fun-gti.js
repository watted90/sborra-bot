async function applicaEffetto(m, conn, tipoEffetto) {
    let target = m.mentionedJid?.[0] || m.sender
    let nome = await conn.getName(target)

    let pp
    try {
        pp = await conn.profilePictureUrl(target, 'image')
    } catch {
        pp = 'https://i.ibb.co/ZK7sqnJ/avatar.png'
    }

    const overlayURL = {
        gay: "https://some-random-api.com/canvas/gay?avatar=",
        trans: "https://some-random-api.com/canvas/trans?avatar=",
        sborra: "https://some-random-api.com/canvas/cum?avatar="
    }

    if (!overlayURL[tipoEffetto]) return m.reply("Effetto non valido.")

    try {
        await conn.sendFile(m.chat, overlayURL[tipoEffetto] + encodeURIComponent(pp), tipoEffetto + '.jpg', `${nome}`, m)
    } catch (e) {
        console.error(e)
        m.reply(`Errore nell'applicazione dell'effetto`)
    }
}

import { createCanvas } from 'canvas'

async function createILoveImage(name) {
    const width = 800
    const height = 400
    const canvas = createCanvas(width, height)
    const ctx = canvas.getContext('2d')

    ctx.fillStyle = "#ffffff"
    ctx.fillRect(0, 0, width, height)

    ctx.fillStyle = "#ff0000"
    ctx.font = "60px Sans"
    ctx.fillText(`I ❤️ ${name}`, 100, 200)

    return canvas.toBuffer()
}

let handler = async (m, { conn, text, usedPrefix, command }) => {
    const tipoEffetto = command.toLowerCase().replace(/ /g, ''); // per gestire "i love"

    if (['il', 'ilove', 'i love'].includes(tipoEffetto)) {
        let name = text?.trim()

        if (m.mentionedJid?.[0]) {
            name = await conn.getName(m.mentionedJid[0])
        }

        if (!name) return m.reply(`*Esempio:* ${usedPrefix}ilove @nome o ${usedPrefix}ilove Mario`)

        try {
            const imageBuffer = await createILoveImage(name)
            await conn.sendFile(m.chat, imageBuffer, 'ilove.jpg', `I ❤️ ${name.toUpperCase()}`, m)
        } catch (e) {
            console.error(e)
            m.reply('Errore nella creazione dell\'immagine I Love')
        }
        return
    }

    // Gli altri effetti (gay, trans, sborra)
    await applicaEffetto(m, conn, tipoEffetto, usedPrefix, command)
}

handler.help = ['gay @user', 'trans', 'sborra', 'ilove <nome>', 'il @nome']
handler.tags = ['fun', 'sticker']
handler.command = /^(gay|trans|sborra|ilove|il|i ?love)$/i // <-- QUESTA È LA CHIAVE

export default handler
