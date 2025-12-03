let handler = async (m, { conn, text, usedPrefix, command }) => {
const tipoEffetto = command.toLowerCase().replace(/ /g, ''); // per gestire "i love"

if (['il', 'ilove', 'ilove'].includes(tipoEffetto)) {  
    let name = text?.trim()  

    if (m.mentionedJid?.[0]) {  
        name = await conn.getName(m.mentionedJid[0])  
    }  

    if (!name) return m.reply(`*Esempio:* \( {usedPrefix}ilove @nome o \){usedPrefix}ilove Mario`)  

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
