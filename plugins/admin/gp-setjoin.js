 
let handler = async (m, { conn, text, isROwner, isOwner, command }) => {
    const userId = m.sender;
    const groupId = m.isGroup ? m.chat : null;
    const nomeDelBot = global.db.data.nomedelbot || '𝐒𝐛𝐨𝐫𝐫𝐚 𝐁𝐨𝐭';
    
    const isWelcome = /^(setwelcome|setbenvenuto|setbienvenida|setboasvindas|setwillkommen|setbienvenue|设置欢迎|добро пожаловать|ترحيب|स्वागत|selamatdatang|hoşgeldin)$/i.test(command);
    
    if (text) {
        if (isWelcome) {
            global.db.data.chats[m.chat].sWelcome = text;
        } else {
            global.db.data.chats[m.chat].sBye = text;
        }
        
        await conn.sendMessage(m.chat, {
            text: isWelcome ? global.t('setwelcomeSuccess', userId, groupId) : global.t('setbyeSuccess', userId, groupId),
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
        throw isWelcome ? global.t('setwelcomeNoText', userId, groupId) : global.t('setbyeNoText', userId, groupId);
    }
};

handler.help = [
  // Italiano
  'setbenvenuto <testo>', 'setaddio <testo>',
  // Inglese
  'setwelcome <text>', 'setbye <text>',
  // Spagnolo
  'setbienvenida <texto>', 'setdespedida <texto>',
  // Portoghese
  'setboasvindas <texto>', 'setadeus <texto>',
  // Tedesco
  'setwillkommen <text>', 'settschüss <text>',
  // Francese
  'setbienvenue <texte>', 'setaurevoir <texte>',
  // Cinese
  '设置欢迎 <文本>', '设置再见 <文本>',
  // Russo
  'добро пожаловать <текст>', 'прощание <текст>',
  // Arabo
  'ترحيب <نص>', 'وداع <نص>',
  // Hindi
  'स्वागत <पाठ>', 'अलविदा <पाठ>',
  // Indonesiano
  'selamatdatang <teks>', 'selamattinggal <teks>',
  // Turco
  'hoşgeldin <metin>', 'elveda <metin>'
];
handler.tags = ['group'];
handler.command = /^(setwelcome|setbenvenuto|setbienvenida|setboasvindas|setwillkommen|setbienvenue|设置欢迎|добро пожаловать|ترحيب|स्वागत|selamatdatang|hoşgeldin|setbye|setaddio|setdespedida|setadeus|settschüss|setaurevoir|设置再见|прощание|وداع|अलविदा|selamattinggal|elveda)$/i;
handler.admin = true;
handler.group = true;

export default handler;

