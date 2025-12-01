import fetch from 'node-fetch';

const handler = async (_0x498b4a, { conn, command, text, isAdmin }) => {
    if (!isAdmin) throw '𝐂𝐨𝐦𝐚𝐧𝐝𝐨 𝐝𝐢𝐬𝐩𝐨𝐧𝐢𝐛𝐢𝐥𝐞 𝐬𝐨𝐥𝐨 𝐩𝐞𝐫 𝐚𝐝𝐦𝐢𝐧👑 ';

    if (command === 'freeze') {
        const muteDuration = parseInt(text) || 10; // Durata in minuti, default 10 minuti
        const mentionedJid = _0x498b4a.mentionedJid?.[0] || _0x498b4a.quoted?.sender;
        if (!mentionedJid) throw '𝐌𝐚𝐧𝐜𝐚 𝐢𝐥 𝐭𝐚𝐠!';

        const user = global.db.data.users[mentionedJid] || {};
        if (user.muto) throw '⚠︎ 𝐔𝐭𝐞𝐧𝐭𝐞 𝐠𝐢𝐚̀ 𝐦𝐮𝐭𝐚𝐭𝐨 ⚠︎';

        user.muto = true;

        // Notifica di mutazione
        const muteMessage = {
            text: `𝐋'𝐮𝐭𝐞𝐧𝐭𝐞 @${mentionedJid.split('@')[0]} 𝐞̀ 𝐬𝐭𝐚𝐭𝐨 𝐦𝐮𝐭𝐚𝐭𝐨 𝐩𝐞𝐫 ${muteDuration} 𝐦𝐢𝐧𝐮𝐭𝐢 ⏱️.𝐬𝐦𝐮𝐭𝐚 @ 𝐩𝐞𝐫 𝐬𝐦𝐮𝐭𝐚𝐫𝐞`,
            mentions: [mentionedJid],
        };
        await conn.sendMessage(_0x498b4a.chat, muteMessage);

        // Rimuove il muto dopo il tempo specificato
        setTimeout(() => {
            user.muto = false;
            conn.sendMessage(_0x498b4a.chat, {
                text: ` @${mentionedJid.split('@')[0]} 𝐞̀ 𝐬𝐭𝐚𝐭𝐨 𝐬𝐦𝐮𝐭𝐚𝐭𝐨 𝐚𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐜𝐚𝐦𝐞𝐧𝐭𝐞 ✅`,
                mentions: [mentionedJid],
            });
        }, muteDuration * 60 * 1000);
    }

    if (command === 'cold') {
        const mentionedJid = _0x498b4a.mentionedJid?.[0] || _0x498b4a.quoted?.sender;
        if (!mentionedJid) throw '𝐌𝐚𝐧𝐜𝐚 𝐢𝐥 𝐭𝐚𝐠❗';

        const user = global.db.data.users[mentionedJid] || {};
        if (!user.muto) throw '𝐐𝐮𝐞𝐬𝐭𝐨 𝐮𝐭𝐞𝐧𝐭𝐞 𝐧𝐨𝐧 𝐞̀ 𝐦𝐮𝐭𝐚𝐭𝐨❕';

        user.muto = false;

        // Notifica di smutazione
        const unmuteMessage = {
            text: `𝐋'𝐮𝐭𝐞𝐧𝐭𝐞 @${mentionedJid.split('@')[0]} 𝐞̀ 𝐬𝐭𝐚𝐭𝐨 𝐬𝐦𝐮𝐭𝐚𝐭𝐨 ✔︎`,
            mentions: [mentionedJid],
        };
        await conn.sendMessage(_0x498b4a.chat, unmuteMessage);
    }
};

// Definisci i comandi e le opzioni
handler.command = /^(cold|freeze)$/i;
handler.admin = true;
handler.botAdmin = true;
handler.group = true;

export default handler;
