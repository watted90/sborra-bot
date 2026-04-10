 
let handler = async (m, { conn, command, text, usedPrefix }) => {
  const userId = m.sender;
  const groupId = m.chat;

  if (!text) {
    if (m.quoted && m.quoted.sender) {
      text = '@' + m.quoted.sender.split('@')[0];
    } else {
      return conn.reply(
        groupId,
        global.t('genericCalcNoTarget', userId, groupId, { prefix: usedPrefix, command }),
        m
      );
    }
  }

  const tag = text.replace(/[@\s]/g, '');
  const target = `${tag}@s.whatsapp.net`;

  const percentage = Math.floor(Math.random() * 100) + 1;
  const cmd = command.toLowerCase();

  let textKeyPool = [];

  if (cmd === 'joke' || cmd === 'scherzo' || cmd === 'broma' || cmd === 'piada' || cmd === 'witz' || cmd === '玩笑' || cmd === 'шутка' || cmd === 'مزحة' || cmd === 'मज़ाक' || cmd === 'blague' || cmd === 'lelucon' || cmd === 'şaka') {
    textKeyPool = ['jokeCalcLine1', 'jokeCalcLine2', 'jokeCalcLine3'];
  } else if (cmd === 'meme' || cmd === 'mème' || cmd === '梗图' || cmd === 'мем' || cmd === 'ميم') {
    textKeyPool = ['memeCalcLine1', 'memeCalcLine2', 'memeCalcLine3'];
  } else {
    const line = global.t('genericCalcLine', userId, groupId, {
      tag,
      percentage,
      cmd
    });
    return conn.sendMessage(
      groupId,
      {
        text: line,
        mentions: [target]
      },
      { quoted: m }
    );
  }

  const key = textKeyPool[Math.floor(Math.random() * textKeyPool.length)];

  const line = global.t(key, userId, groupId, {
    tag,
    percentage
  });

  await conn.sendMessage(
    groupId,
    {
      text: line,
      mentions: [target]
    },
    { quoted: m }
  );
};

handler.help = [
  'joke @tag | name',
  'meme @tag | name',
  'scherzo @tag | nome',
  'broma @usuario | nombre',
  'piada @usuário | nome',
  'witz @benutzer | name',
  '玩笑 @用户 | 名字',
  'шутка @пользователь | имя',
  'مزحة @مستخدم | اسم',
  'मज़ाक @उपयोगकर्ता | नाम',
  'blague @utilisateur | nom',
  'lelucon @pengguna | nama',
  'şaka @kullanıcı | isim',
  'mème @utilisateur | nom',
  '梗图 @用户 | 名字',
  'мем @пользователь | имя',
  'ميم @مستخدم | اسم'
];
handler.tags = ['fun'];
handler.command = /^(joke|meme|scherzo|broma|piada|witz|玩笑|шутка|مزحة|मज़ाक|blague|lelucon|şaka|mème|梗图|мем|ميم)$/i;

export default handler;
