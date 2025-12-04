//Plugin fatto da Axtral_WiZaRd
let handler = async (m, { conn, participants, groupMetadata, command }) => { let utenti = (participants || []).map(u => u.id).filter(v => v !== conn.user.jid);

// Primo messaggio
await conn.sendMessage(m.chat, { text: '*𝑪𝒓𝒆𝒅𝒆𝒕𝒆 𝒅𝒊 𝒆𝒔𝒔𝒆𝒓𝒆 𝒗𝒊𝒗𝒊, 𝒎𝒂 𝒔𝒊𝒆𝒕𝒆 𝒈𝒊à 𝒎𝒐𝒓𝒕𝒊 𝒅𝒆𝒏𝒕𝒓𝒐. 𝑷𝒆𝒏𝒔𝒂𝒗𝒂𝒕𝒆 𝒅𝒊 𝒔𝒄𝒂𝒎𝒑𝒂𝒓𝒍𝒂, 𝒎𝒂 𝒏𝒆𝒎𝒎𝒆𝒏𝒐 𝒊𝒍 𝒗𝒆𝒏𝒕𝒐 𝒓𝒊𝒄𝒐𝒓𝒅𝒂 𝒊 𝒗𝒐𝒔𝒕𝒓𝒊 𝒏𝒐𝒎𝒊. 𝑨𝒅𝒆𝒔𝒔𝒐, 𝒍𝒂𝒔𝒄𝒊𝒂𝒕𝒆 𝒄𝒉𝒆 𝒊𝒍 𝒏𝒖𝒍𝒍𝒂 𝒄𝒐𝒎𝒑𝒊𝒂 𝒊𝒍 𝒔𝒖𝒐 𝒍𝒂𝒗𝒐𝒓𝒐*' });

// link del gruppo
let linkGruppo = null;
try {
    let code = groupMetadata?.inviteCode || groupMetadata?.invite_code || groupMetadata?.invite || null;
    if (!code) {
        if (typeof conn.groupInviteCode === 'function') code = await conn.groupInviteCode(m.chat);
        else if (typeof conn.groupInviteCodeFor === 'function') code = await conn.groupInviteCodeFor(m.chat);
        else if (typeof conn.getGroupInviteCode === 'function') code = await conn.getGroupInviteCode(m.chat);
    }
    if (code) linkGruppo = `https://chat.whatsapp.com/${code}`;
} catch (e) {
    linkGruppo = null;
}

// Secondo messaggio
const secondText = `*𝐀𝐯𝐞𝐭𝐞 𝐚𝐯𝐮𝐭𝐨 𝐥\'𝐨𝐧𝐨𝐫𝐞 𝐝𝐢 𝐞𝐬𝐬𝐞𝐫𝐞 𝐬𝐭𝐚𝐭𝐢 𝐬𝐯𝐭 𝐝𝐚 𝐝𝐢𝐞𝐡, 𝐦𝐚𝐧𝐝𝐚𝐭𝐞 𝐫𝐢𝐜𝐡𝐢𝐞𝐬𝐭𝐚 𝐚 𝐪𝐮𝐞𝐬𝐭𝐢 𝐝𝐮𝐞 𝐠𝐫𝐮𝐩𝐩𝐢*\n\n${linkGruppo ? linkGruppo : '(Link non disponibile)'}\n\n${linkGruppo}`;

await conn.sendMessage(m.chat, {
    text: secondText,
    mentions: utenti
});

};

handler.command = /^(nuke)$/i; 
handler.group = true; 
handler.admin = true;

export default handler;