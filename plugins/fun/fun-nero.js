 
let handler = async (m, { conn, command, text, usedPrefix }) => {
  const userId = m.sender;
  const groupId = m.chat;

  let target =
    (text && text.replace(/[@\s]/g, '') + '@s.whatsapp.net') ||
    (m.quoted ? m.quoted.sender : (m.mentionedJid && m.mentionedJid[0]));

  if (!target) {
    return m.reply(
      global.t('raceCalcNoTarget', userId, groupId, { prefix: usedPrefix, command }),
      null
    );
  }

  const tag = target.split('@')[0];
  const percent = Math.floor(Math.random() * 100) + 1;
  const label = command.toLowerCase();

  const msg = global.t('raceCalcLine', userId, groupId, {
    tag,
    percent,
    label
  });

  await conn.reply(
    groupId,
    msg.trim(),
    null,
    {
      mentions: [target]
    }
  );
};

handler.help = [
  'nero',          // Italiano
  'black',         // Inglese
  'negro',         // Spagnolo
  'preto',         // Portoghese
  'schwarz',       // Tedesco
  '黑色',           // Cinese
  'чёрный',        // Russo
  'أسود',          // Arabo
  'काला',          // Hindi
  'noir',          // Francese
  'hitam',         // Indonesiano
  'siyah'          // Turco
];
handler.tags = ['calculator'];
handler.command = /^(nero|black|negro|preto|schwarz|黑色|чёрный|أسود|काला|noir|hitam|siyah)$/i;


export default handler;
