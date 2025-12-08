let handler = async (m, { conn, usedPrefix, command, args: [evento], text }) => {
    if (!evento) return await m.reply(
`ⓘ 𝐔𝐬𝐨 𝐝𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨:\n
> ${usedPrefix + command} benvenuto @user
> ${usedPrefix + command} addio @user
> ${usedPrefix + command} promozione/p @user
> ${usedPrefix + command} retrocessione/r @user`) 
    
    let mentions = text.replace(evento, '').trim()
    let who = conn.parseMention(mentions) || []
    let part = (who.length ? who : [m.sender]).filter(v => typeof v === 'string' && v.includes('@'))

    if (!part.length) 
        return m.reply("❌ Non è stato possibile ottenere un JID valido.")

    let act = false
    let testoEvento = ''

    switch (evento.toLowerCase()) {
        case 'add':
        case 'invite':
        case 'welcome':
        case 'bienvenida':
        case 'benvenuto':       
            act = 'add'
            testoEvento = "𝐛𝐞𝐧𝐯𝐞𝐧𝐮𝐭𝐨"
            break
        case 'bye':
        case 'kick':
        case 'leave':
        case 'remove':
        case 'sacar':
        case 'addio':
            act = 'remove'
            testoEvento = "𝐚𝐝𝐝𝐢𝐨"
            break
        case 'promote':
        case 'daradmin':
        case 'darpoder':
        case 'promozione':
        case 'p':       
            act = 'promote'
            testoEvento = "𝐩𝐫𝐨𝐦𝐨𝐳𝐢𝐨𝐧𝐞"
            break
        case 'demote':
        case 'quitaradmin':
        case 'quitarpoder':
        case 'retrocessione':
        case 'r':       
            act = 'demote'
            testoEvento = "𝐫𝐞𝐭𝐫𝐨𝐜𝐞𝐬𝐬𝐢𝐨𝐧𝐞"
            break
        default:
            return m.reply(
`ⓘ 𝐈𝐧𝐬𝐞𝐫𝐢𝐬𝐜𝐢 𝐮𝐧𝐚 𝐨𝐩𝐳𝐢𝐨𝐧𝐞 𝐯𝐚𝐥𝐢𝐝𝐚:\n
> ${usedPrefix + command} benvenuto @user
> ${usedPrefix + command} addio @user
> ${usedPrefix + command} promozione/p @user
> ${usedPrefix + command} retrocessione/r @user`)
    }

    m.reply(`> ⚠️ 𝐒𝐢𝐦𝐮𝐥𝐚𝐳𝐢𝐨𝐧𝐞 ${testoEvento}...\n> ⓘ 𝐈𝐥 𝐛𝐨𝐭 𝐬𝐭𝐚 𝐬𝐢𝐦𝐮𝐥𝐚𝐧𝐝𝐨 𝐮𝐧 𝐞𝐯𝐞𝐧𝐭𝐨, 𝐬𝐞𝐧𝐳𝐚 𝐞𝐟𝐟𝐞𝐭𝐭𝐢 𝐜𝐨𝐧𝐜𝐫𝐞𝐭𝐢 𝐧𝐞𝐥 𝐠𝐫𝐮𝐩𝐩𝐨.`)

    if (act) return conn.participantsUpdate({
        id: m.chat,
        participants: part,
        action: act
    })
}

handler.help = ['simula <evento> [@mention]','sim <evento>'] 
handler.tags = ['owner']
handler.command = /^sim|simula$/i
handler.group = true

export default handler
