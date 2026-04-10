 import { execSync } from 'child_process';

let handler = async (m, { conn, text }) => {
    const userId = m.sender;
    const groupId = m.chat;
    const nomeDelBot = conn.user?.name || global.db?.data?.nomedelbot || '𝐒𝐛𝐨𝐫𝐫𝐚 𝐁𝐨𝐭';
    
    try {
        await conn.sendMessage(m.chat, {
            text: global.t('updateInitiating', userId, groupId),
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363420674060561@newsletter',
                    serverMessageId: '',
                    newsletterName: `${global.nomebot || 'Bot'}`
                }
            }
        }, { quoted: m });
        
        const gitCommand = 'git pull' + (m.fromMe && text ? ' ' + text : '');
        const stdout = execSync(gitCommand, { encoding: 'utf8' });
        
        const output = stdout.trim();
        
        if (output.includes('Already up to date') || output.includes('Already up-to-date')) {
            await conn.sendMessage(m.chat, {
                text: global.t('updateNoChanges', userId, groupId),
                contextInfo: {
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363420674060561@newsletter',
                        serverMessageId: '',
                        newsletterName: `${global.nomebot || 'Bot'}`
                    }
                }
            }, { quoted: m });
        } else {
            await conn.sendMessage(m.chat, {
                text: global.t('updateSuccess', userId, groupId, { output }),
                contextInfo: {
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363420674060561@newsletter',
                        serverMessageId: '',
                        newsletterName: `${global.nomebot || 'Bot'}`
                    }
                }
            }, { quoted: m });
        }
        
    } catch (error) {
        await conn.sendMessage(m.chat, {
            text: global.t('updateError', userId, groupId, { error: error.message }),
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363420674060561@newsletter',
                    serverMessageId: '',
                    newsletterName: `${global.nomebot || 'Bot'}`
                }
            }
        }, { quoted: m });
    }
};

handler.help = ['aggiornabot', 'update'];
handler.tags = ['owner'];
handler.command = /^(aggiorna|update|aggiornabot)$/i;
handler.rowner = true;

export default handler;
