let handler = async (m, { conn, isOwner, text }) => {
    const userId = m.sender;
    const groupId = m.chat;
    const nomeDelBot = conn.user?.name || global.db?.data?.nomedelbot || '𝐒𝐛𝐨𝐫𝐫𝐚 𝐁𝐨𝐭';
    
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
    
    const customMessage = text || 'Messaggio non specificato.';
    
    let groups = [];
    try {
        const groupData = await conn.groupFetchAllParticipating();
        groups = Object.keys(groupData);
    } catch (e) {
        const chats = Object.keys(conn.chats || {});
        groups = chats.filter(chat => chat.endsWith('@g.us'));
    }
    
    if (groups.length === 0) {
        return conn.sendMessage(m.chat, {
            text: 'Nessun gruppo trovato.',
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
    
    const hiddenTag = "‎";
    let successCount = 0;
    let failCount = 0;
    
    for (let group of groups) {
        try {
            const metadata = await conn.groupMetadata(group).catch(() => null);
            
            if (!metadata || !metadata.participants || metadata.participants.length === 0) {
                failCount++;
                continue;
            }
            
            const participants = metadata.participants.map(u => u.id);
            
            const messageText = `${customMessage}${hiddenTag}`;
            
            await conn.sendMessage(group, { 
                text: messageText,
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
            await new Promise(resolve => setTimeout(resolve, 5000));
            
        } catch (err) {
            failCount++;
            if (err.message && err.message.includes('rate-overlimit')) {
                await new Promise(resolve => setTimeout(resolve, 30000));
            }
        }
    }
    
    await conn.sendMessage(m.chat, {
        text: `Messaggi inviati: ${successCount}`,
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
};

handler.help = ['everygroup <messaggio>'];
handler.tags = ['owner'];
handler.command = /^(everygroup|broadcastgroup|bcgroup)$/i;
handler.owner = true;

export default handler;