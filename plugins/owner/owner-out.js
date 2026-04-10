 
let handler = async (m, { conn, text, command }) => {
  const userId = m.sender;
  const groupId = m.chat;
  const nomeDelBot = conn.user?.name || global.db?.data?.nomedelbot || '𝐒𝐛𝐨𝐫𝐫𝐚 𝐁𝐨𝐭';
  
  const ownerNumbers = Array.isArray(global.owner) ? global.owner.map(([number]) => number).filter(Boolean) : []
  const modsNumbers = Array.isArray(global.mods) ? global.mods.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') : []
  const isOwner = [...ownerNumbers, ...modsNumbers].includes(m.sender);
  
  if (!isOwner) {
    if (!m.isAdmin) {
      return conn.sendMessage(m.chat, {
        text: global.t('leaveNotAdmin', userId, groupId),
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
  }
  
  const id = text ? text : m.chat;
  
  try {
    await conn.sendMessage(id, {
      text: global.t('leaveMessage', userId, groupId),
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
    await conn.groupLeave(id);
  } catch (e) {
    console.error('Errore durante l\'uscita:', e);
    await conn.sendMessage(m.chat, {
      text: global.t('leaveError', userId, groupId),
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
};

handler.help = ['esci', 'out', 'leave'];
handler.tags = ['owner'];
handler.command = /^(esci|out|leave)$/i;
handler.group = true;
handler.owner = true;

export default handler;
