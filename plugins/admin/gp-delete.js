let handler = async (m, { conn, isBotAdmin }) => {
    if (!m.quoted) throw '*Rispondi al messaggio da eliminare*'
    if (!isBotAdmin) throw '*Il bot deve essere admin per eliminare messaggi*'
    
    try {
        let key = {}
        try {
            key.remoteJid = m.quoted.remoteJid || m.chat
            key.fromMe = m.quoted.fromMe
            key.id = m.quoted.id
            key.participant = m.quoted.sender || m.quoted.key.participant || m.quoted.key.remoteJid
        } catch (e) {
            console.error(e)
        }
        
        await conn.sendMessage(m.chat, { delete: key })
        await conn.sendMessage(m.chat, { delete: m.key })
        
    } catch (e) {
        throw '*Errore: messaggio troppo vecchio o non eliminabile*'
    }
}

handler.help = ['del @msg']
handler.tags = ['group']
handler.command = ['del', 'delete', 'elimina']
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.mod = true 

export default handler