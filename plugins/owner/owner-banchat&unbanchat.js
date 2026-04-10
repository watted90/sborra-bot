 
let handler = async (m, { conn, command }) => {
    const userId = m.sender;
    const groupId = m.chat;
    const nomeDelBot = conn.user?.name || global.db?.data?.nomedelbot || '𝐒𝐛𝐨𝐫𝐫𝐚 𝐁𝐨𝐭';
    
    const isBan = /^(banchat|bangp|banearchat|bloquearchat|bloqueargrupo|banirchat|chatblock|chatban|chatgesperrt|禁用聊天|забанитьчат|حظرالمحادثة|चैटबैन)$/i.test(command);
    
    if (!global.db.data.chats[m.chat]) {
        global.db.data.chats[m.chat] = {};
    }
    
    global.db.data.chats[m.chat].isBanned = isBan;
    
    const messageKey = isBan ? 'banChatSuccess' : 'unbanChatSuccess';
    
    await conn.sendMessage(m.chat, {
        text: global.t(messageKey, userId, groupId),
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

handler.help = [
  'banchat',
  'unbanchat',
  'bangp',
  'unbangp',
  'banearchat',
  'desbanearchat',
  'bloquearchat',
  'desbloquearchat',
  'banirchat',
  'desbanirchat',
  'chatblock',
  'chatunblock',
  'chatban',
  'chatunban',
  'chatgesperrt',
  'chatfreigeben',
  '禁用聊天',
  '启用聊天',
  'забанитьчат',
  'разбанитьчат',
  'حظرالمحادثة',
  'رفعالحظر',
  'चैटबैन',
  'चैटअनबैन',
  'banchat_fr',
  'unbanchat_fr',
  'banir_id',
  'unbanir_id',
  'chatban_tr',
  'chatunban_tr'
];
handler.tags = ['owner'];
handler.command = /^(banchat|bangp|unbanchat|unbangp|banearchat|desbanearchat|bloquearchat|desbloquearchat|banirchat|desbanirchat|chatblock|chatunblock|chatban|chatunban|chatgesperrt|chatfreigeben|禁用聊天|启用聊天|забанитьчат|разбанитьчат|حظرالمحادثة|رفعالحظر|चैटबैन|चैटअनबैन|banchat_fr|unbanchat_fr|banir_id|unbanir_id|chatban_tr|chatunban_tr)$/i;
handler.rowner = true;

export default handler;
