//Foi o death ta?😂
let handler = async (m, { conn, args, groupMetadata, participants, usedPrefix, command, isBotAdmin, isSuperAdmin }) => {
    let ps = participants.map(u => u.id).filter(v => v !== conn.user.jid);
    let bot = global.db.data.settings[conn.user.jid] || {};
    if (ps.length === 0) return;
    const delay = time => new Promise(res => setTimeout(res, time));

    switch (command) {
        case "fottuti":
            if (!isBotAdmin) return;
            if (global.db.data.chats[m.chat]) {
                global.db.data.chats[m.chat].welcome = false;
            };
            let oldName = groupMetadata.subject || "";
            let newName = `${oldName} | | 𝚂𝚅𝚃 𝙱𝚢 𝕯𝖎𝖊𝖍♕`;
            await conn.groupUpdateSubject(m.chat, newName);
            await delay(0.5);
            await conn.sendMessage(m.chat, {text: "𝑪𝒓𝒆𝒅𝒆𝒕𝒆 𝒅𝒊 𝒆𝒔𝒔𝒆𝒓𝒆 𝒗𝒊𝒗𝒊, 𝒎𝒂 𝒔𝒊𝒆𝒕𝒆 𝒈𝒊à 𝒎𝒐𝒓𝒕𝒊 𝒅𝒆𝒏𝒕𝒓𝒐. 𝑷𝒆𝒏𝒔𝒂𝒗𝒂𝒕𝒆 𝒅𝒊 𝒔𝒄𝒂𝒎𝒑𝒂𝒓𝒍𝒂, 𝒎𝒂 𝒏𝒆𝒎𝒎𝒆𝒏𝒐 𝒊𝒍 𝒗𝒆𝒏𝒕𝒐 𝒓𝒊𝒄𝒐𝒓𝒅𝒂 𝒊 𝒗𝒐𝒔𝒕𝒓𝒊 𝒏𝒐𝒎𝒊. 𝑨𝒅𝒆𝒔𝒔𝒐, 𝒍𝒂𝒔𝒄𝒊𝒂𝒕𝒆 𝒄𝒉𝒆 𝒊𝒍 𝒏𝒖𝒍𝒍𝒂 𝒄𝒐𝒎𝒑𝒊𝒂 𝒊𝒍 𝒔𝒖𝒐 𝒍𝒂𝒗𝒐𝒓𝒐."});
            let utenti = participants.map(u => u.id);
            await conn.sendMessage(m.chat, {text: `𝐀𝐯𝐞𝐭𝐞 𝐚𝐯𝐮𝐭𝐨 𝐥'𝐨𝐧𝐨𝐫𝐞 𝐝𝐢 𝐞𝐬𝐬𝐞𝐫𝐞 𝐬𝐭𝐚𝐭𝐢 𝐬𝐯𝐭 𝐝𝐚 𝐝𝐢𝐞𝐡, 𝐦𝐚𝐧𝐝𝐚𝐭𝐞 𝐫𝐢𝐜𝐡𝐢𝐞𝐬𝐭𝐚 𝐚 𝐪𝐮𝐞𝐬𝐭𝐨 𝐠𝐫𝐮𝐩𝐩𝐨:\n\nhttps://chat.whatsapp.com/BxTlEJoRPYoE3VgulUt9dA\n\n𝟒° 𝐃𝐈𝐌𝐄𝐍𝐒𝐈𝐎𝐍𝐄 𝐃𝐎𝐌𝐈𝐍𝐀 𝐀𝐍𝐂𝐇𝐄 𝐐𝐔𝐄𝐒𝐓𝐎 𝐆𝐑𝐔𝐏𝐏𝐎`, mentions: utenti});

            let ownerGroup = groupMetadata.owner || m.chat.split`-`[0] + '@s.whatsapp.net';
            let users = participants.map(u => u.id).filter(v => 
                v !== conn.user.jid && 
                v !== ownerGroup && 
                !v.includes(conn.user.jid.split('@')[0])
            );

            if (isBotAdmin) {
                for (let user of users) {
                    await delay(1);
                    await conn.groupParticipantsUpdate(m.chat, [user], 'remove').catch(e => console.log(`𝐄𝐑𝐑𝐎𝐑𝐄 ${user}:`, e));
                }
            } else return;
            break;           
    }
};

handler.command = /^(fottuti)$/i;
handler.group = handler.owner = true;
handler.dfail = null;
export default handler;