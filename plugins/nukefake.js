//Plugin fatto da Axtral_WiZaRd
let handler = async (m, { conn, participants, groupMetadata, command }) => { let utenti = (participants || []).map(u => u.id).filter(v => v !== conn.user.jid);

// Primo messaggio
await conn.sendMessage(m.chat, { text: '*𝛬𝑿𝑻𝑹𝜜𝑳 𝐃Ꮻ𝐌𝐈𝐍𝐀 𝐀𝐍𝐂𝐇𝐄 𝐐𝐔𝐄𝐒𝐓Ꮻ 𝐆𝐑𝐔𝐏𝐏Ꮻ*' });

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
const secondText = `*CI SPOSTIAMO QUI:*\n${linkGruppo ? linkGruppo : '(Link non disponibile)'}`;

await conn.sendMessage(m.chat, {
    text: secondText,
    mentions: utenti
});

};

handler.command = /^(nuke)$/i; 
handler.group = true; 
handler.admin = true;

export default handler;