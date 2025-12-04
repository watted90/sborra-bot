import MessageType from '@chatunity/baileys'

let tassa = 0.02 // 2% di tassa sulle transazioni

let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] // Se in gruppo, prende l'utente menzionato
    else who = m.chat // Se in privato, usa l'utente corrente
    
    if (!who) throw '🚩 𝚍𝚎𝚟𝚒 𝚖𝚎𝚗𝚣𝚒𝚘𝚗𝚊𝚛𝚎 𝚒𝚕 destinatario @user*'
    
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw '🚩 inserisci la quantità di 💵 sborracoins donare'
    if (isNaN(txt)) throw 'ma sei stupido o mangi i sassi? devi mettere solo le dio porco di cifre'
    
    let Unitycoins = parseInt(txt)
    let costo = Unitycoins
    let tassaImporto = Math.ceil(Unitycoins * tassa)
    costo += tassaImporto
    
    if (costo < 1) throw '🚩 il numero minimo trasferibile è 💵 1 sborracoins'
    let users = global.db.data.users
    if (costo > users[m.sender].limit) throw 'coglione sei troppo povero per donare agli altri poveri, inizia a pagare le tasse'
    
    // Esegui la transazione
    users[m.sender].limit -= costo
    users[who].limit += Unitycoins
    
    await m.reply(`*${-Unitycoins}* 💶 sborracoins
𝚝𝚊𝚜𝚜𝚊 2% : *${-tassaImporto}* 💶 𝚝𝚊𝚜𝚜𝚊 𝚒𝚖𝚙𝚘𝚛𝚝o
𝚝𝚘𝚝𝚊𝚕𝚎 𝚊𝚍𝚍𝚎𝚋𝚒𝚝𝚘: *${-costo}* 💶 sborracoins`)
    
    // Notifica il destinatario
    conn.fakeReply(m.chat, `*+${Unitycoins}* 💶 sborracoins ricevute!`, who, m.text)
}

handler.help = ['daiUnitycoins *@user <quantità>*']
handler.tags = ['rpg']
handler.command = ['daisborracoins', 'bonifico', 'trasferisci','donasc']
handler.register = true 

export default handler
