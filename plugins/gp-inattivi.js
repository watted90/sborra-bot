import { areJidsSameUser } from '@chatunity/baileys';

let handler = async (m, { conn, text, participants, command }) => {
    // Lista di tutti i partecipanti del gruppo
    const participantIds = participants.map(p => p.id);

    // Se l'utente non ha taggato nessuno né scritto un numero, prende tutti i partecipanti
    const totalToCheck = text ? 1 : participantIds.length;
    const targetCount = text ? 1 : participantIds.length;

    let inactiveCount = 0;
    let inactiveList = [];

    // Ciclo per controllare ogni utente (o solo quello taggato)
    for (let i = 0; i < targetCount; i++) {
        const userId = text ? text : participantIds[i];

        // Ottieni info partecipante (per verificare se è admin)
        const participant = m.isGroup ? participants.find(p => p.id === userId) : {};

        // Condizioni per considerare un utente "inattivo":
        // - Non è nella whitelist
        // - Non è admin del gruppo
        // - Non è superadmin (owner del bot)
        // - Non ha mai usato comandi (warning == 0 o undefined)
        const isInDatabase = typeof global.db.data.users[userId] !== 'undefined';
        const hasNoWarnings = isInDatabase ? global.db.data.users[userId].warning === 0 : true;
        const isWhitelisted = isInDatabase ? global.db.data.users[userId].whitelist === true : false;

        if (
            !participant.isAdmin &&
            !participant.isSuperAdmin &&
            !isWhitelisted &&
            hasNoWarnings
        ) {
            inactiveCount++;
            inactiveList.push(userId);
        }
    }

    // COMANDO: inattivi → solo lista degli inattivi
    if (command === 'inattivi') {
        if (inactiveCount === 0) {
            return conn.reply(m.chat, 'Non ci sono utenti inattivi in questo gruppo.', m);
        }

        const mentionedJid = inactiveList;

        await m.reply(`
『💬』 ══ •⊰✰⊱• ══ 『💬』
𝐑𝐞𝐯𝐢𝐬𝐢𝐨𝐧𝐞 𝐢𝐧𝐚𝐭𝐭𝐢𝐯𝐢 😴
${await conn.getName(m.chat)}

${inactiveCount} inattivi:
\( {inactiveList.map(jid => `   👉🏻 @ \){jid.replace(/@.+/g, '')}`).join('\n')}
『💬』 ══ •⊰✰⊱• ══ 『💬』
        `.trim(), null, { mentions: mentionedJid });

    }

    // COMANDO: viainattivi → rimuove automaticamente gli inattivi
    if (command === 'viainattivi') {
        if (inactiveCount === 0) {
            return conn.reply(m.chat, '𝐧𝐞𝐬𝐬𝐮𝐧 𝐢𝐧𝐚𝐭𝐭𝐢𝐯𝐨', m);
        }

        // Avvisa chi sta per essere rimosso
        await m.reply(`
𝐑𝐈𝐌𝐎𝐙𝐈𝐎𝐍𝐄 𝐈𝐍𝐀𝐓𝐓𝐈𝐕𝐈 🚫

${inactiveList.map(jid => '@' + jid.replace(/@.+/g, '')).join('\n')}
        `.trim(), null, { mentions: inactiveList });

        // Rimuovi dal gruppo
        await conn.groupParticipantsUpdate(m.chat, inactiveList, 'remove');
    }
};

// Trigger dei comandi
handler.command = /^(inattivi|viainattivi)$/i;

// Permessi richiesti
handler.group = true;      // Solo nei gruppi
handler.admin = true;      // Solo admin
handler.botAdmin = true;   // Il bot deve essere admin

export default handler;