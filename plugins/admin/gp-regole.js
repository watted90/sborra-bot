 
let handler = async function (m, { conn, text, usedPrefix }) {
    const userId = m.sender;
    const groupId = m.chat;
    
    let chat = global.db.data.chats[m.chat];
    
    if (!chat.rules || chat.rules === '') {
        throw global.t('rulesNotSet', userId, groupId, { prefix: usedPrefix });
    }

    await conn.sendMessage(m.chat, { 
        text: global.t('rulesDisplay', userId, groupId, { rules: chat.rules })
    }, { quoted: m });
};

handler.help = [
  'rules','regole',
  'norme','normativa',
  'guidelines','policy',
  'reglas','normas',
  'regras','normas_pt',
  'regeln','richtlinien',
  '规则','规范',
  'правила','инструкции',
  'القواعد','سياسة',
  'नियम','दिशानिर्देश',
  'règles','consignes',
  'aturan','pedoman',
  'kurallar','yönergeler'
];
handler.tags = ['group'];
handler.command = /^(rules|regole|norme|normativa|guidelines|policy|reglas|normas|regras|normas_pt|regeln|richtlinien|规则|规范|правила|инструкции|القواعد|سياسة|नियम|दिशानिर्देश|règles|consignes|aturan|pedoman|kurallar|yönergeler)$/i;

handler.group = true;

export default handler;
