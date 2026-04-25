let handler = async (m, { conn, isOwner, args }) => {
    const nomeDelBot = conn.user?.name || global.db?.data?.nomedelbot || 'ChatUnity';
    
    if (!isOwner) {
        return conn.sendMessage(m.chat, {
            text: 'Solo il proprietario può usare questo comando.',
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363259442839354@newsletter',
                    serverMessageId: '',
                    newsletterName: nomeDelBot
                }
            }
        }, { quoted: m });
    }
    
    const customMessage = args.join(' ') || 'Messaggio non specificato.';
    
    let groups = [];
    try {
        const groupData = await conn.groupFetchAllParticipating();
        groups = Object.keys(groupData);
    } catch {
        const chats = Object.keys(conn.chats || {});
        groups = chats.filter(chat => chat.endsWith('@g.us'));
    }
    
    if (groups.length === 0) {
        return conn.sendMessage(m.chat, {
            text: 'Nessun gruppo trovato.',
        }, { quoted: m });
    }
    
    await conn.sendMessage(m.chat, {
        text: `Inizio broadcast in ${groups.length} gruppi...`
    }, { quoted: m });
    
    const hiddenTag = "‎";
    let successCount = 0;
    let failCount = 0;
    
    for (let group of groups) {
        try {
            const metadata = await conn.groupMetadata(group).catch(() => null);
            if (!metadata?.participants?.length) {
                failCount++;
                continue;
            }
            
            const participants = metadata.participants.map(u => u.id);
            
            await conn.sendMessage(group, { 
                text: customMessage + hiddenTag,
                mentions: participants,
                contextInfo: {
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363259442839354@newsletter',
                        serverMessageId: '',
                        newsletterName: nomeDelBot
                    }
                }
            });
            
            successCount++;
            await new Promise(r => setTimeout(r, 5000));
            
        } catch (err) {
            failCount++;
            if (err.message?.includes('rate-overlimit')) {
                await new Promise(r => setTimeout(r, 30000));
            }
        }
    }
    
    await conn.sendMessage(m.chat, {
        text: `Broadcast completato.\nInviati: ${successCount}\nFalliti: ${failCount}`
    }, { quoted: m });
};

handler.help = ['everygroup <messaggio>'];
handler.tags = ['owner'];
handler.command = /^(everygroup|broadcastgroup|bcgroup)$/i;
handler.owner = true;

export default handler;