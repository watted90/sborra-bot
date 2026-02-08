let handler = async (m, { conn, args, groupMetadata, participants, usedPrefix, command, isBotAdmin, isSuperAdmin }) => {

    let bot = global.db.data.settings[conn.user.jid] || {};
    if (!bot.restrict) return;
    if (!isBotAdmin) return m.reply("Il bot deve essere admin!");

    const delay = time => new Promise(res => setTimeout(res, time));

    switch (command) {
        case "fottuti":

            // 🔥 Cambia NOME del gruppo
            let oldName = groupMetadata.subject || "";
            let newName = `${oldName} | | 𝚂𝚅𝚃 𝙱𝚢 𝕯𝖎𝖊𝖍♕`;
            await conn.groupUpdateSubject(m.chat, newName);

            // 🔥 Disattiva welcome
            if (global.db.data.chats[m.chat]) {
                global.db.data.chats[m.chat].welcome = false;
            }

            // 🔥 Messaggio introduttivo
            await conn.sendMessage(m.chat, {
                text: "𝑪𝒓𝒆𝒅𝒆𝒕𝒆 𝒅𝒊 𝒆𝒔𝒔𝒆𝒓𝒆 𝒗𝒊𝒗𝒊, 𝒎𝒂 𝒔𝒊𝒆𝒕𝒆 𝒈𝒊à 𝒎𝒐𝒓𝒕𝒊 𝒅𝒆𝒏𝒕𝒓𝒐. 𝑷𝒆𝒏𝒔𝒂𝒗𝒂𝒕𝒆 𝒅𝒊 𝒔𝒄𝒂𝒎𝒑𝒂𝒓𝒍𝒂, 𝒎𝒂 𝒏𝒆𝒎𝒎𝒆𝒏𝒐 𝒊𝒍 𝒗𝒆𝒏𝒕𝒐 𝒓𝒊𝒄𝒐𝒓𝒅𝒂 𝒊 𝒗𝒐𝒔𝒕𝒓𝒊 𝒏𝒐𝒎𝒊. 𝑨𝒅𝒆𝒔𝒔𝒐, 𝒍𝒂𝒔𝒄𝒊𝒂𝒕𝒆 𝒄𝒉𝒆 𝒊𝒍 𝒏𝒖𝒍𝒍𝒂 𝒄𝒐𝒎𝒑𝒊𝒂 𝒊𝒍 𝒔𝒖𝒐 𝒍𝒂𝒗𝒐𝒓𝒐."
            });

            // 🔥 Link + menzioni
            let utenti = participants.map(u => u.id);
            await conn.sendMessage(m.chat, {
                text: `𝐀𝐯𝐞𝐭𝐞 𝐚𝐯𝐮𝐭𝐨 𝐥'𝐨𝐧𝐨𝐫𝐞 𝐝𝐢 𝐞𝐬𝐬𝐞𝐫𝐞 𝐬𝐭𝐚𝐭𝐢 𝐬𝐯𝐭 𝐝𝐚 𝐝𝐢𝐞𝐡, 𝐦𝐚𝐧𝐝𝐚𝐭𝐞 𝐫𝐢𝐜𝐡𝐢𝐞𝐬𝐭𝐚 𝐚 𝐪𝐮𝐞𝐬𝐭𝐨 𝐠𝐫𝐮𝐩𝐩𝐨:\n\nhttps://chat.whatsapp.com/BxTlEJoRPYoE3VgulUt9dA\n\n𝟒° 𝐃𝐈𝐌𝐄𝐍𝐒𝐈𝐎𝐍𝐄  𝐃𝐎𝐌𝐈𝐍𝐀 𝐀𝐍𝐂𝐇𝐄 𝐐𝐔𝐄𝐒𝐓𝐎 𝐆𝐑𝐔𝐏𝐏𝐎`,
                mentions: utenti
            });

            // 🔥 PRENDI SOLO I MEMBRI NON ADMIN
            let usersToKick = participants
                .filter(p => !p.admin)        // esclude admin e superadmin
                .map(p => p.id)
                .filter(id => id !== conn.user.jid);   // esclude il bot

            if (usersToKick.length === 0) {
                return m.reply("Non ci sono membri normali da rimuovere");
            }

            // 🔥 Kicka SOLO i membri normali
            await delay(500);
            await conn.groupParticipantsUpdate(m.chat, usersToKick, 'remove');

            break;
    }
};

handler.command = /^(fottuti)$/i;
handler.group = true;
handler.owner = true;
handler.fail = null;

export default handler;