let handler = async (m, { conn }) => {
    if (!m.quoted) return m.reply('Rispondi al messaggio che vuoi eliminare')

    try {
        // Prendi la key del messaggio quotato in modo sicuro
        let deletable = m.quoted.fakeObj || m.quoted.vM || m.quoted
        let quotedKey = deletable.key
        
        // Fix per alcuni bot dove manca participant
        if (!quotedKey.participant && !quotedKey.fromMe) {
            quotedKey.participant = m.quoted.sender
        }

        // Elimina il messaggio quotato
        await conn.sendMessage(m.chat, { delete: quotedKey })
        
        // Elimina il comando .del
        await conn.sendMessage(m.chat, { delete: m.key })
        
    } catch (e) {
        console.error(e)
        m.reply('Non posso eliminare il messaggio. Forse non sono admin o è troppo vecchio')
    }
}

handler.help = ['del']
handler.tags = ['admin']
handler.command = /^(del|delete|elimina)$/i
handler.group = true
handler.admin = true
handler.mod = true 
handler.botAdmin = true

export default handler