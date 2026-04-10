 
let handler = async (m, { conn, command, text, usedPrefix }) => {
  const userId = m.sender;
  const groupId = m.chat;
  const nomeDelBot = conn.user?.name || global.db?.data?.nomedelbot || 'ChatUnity';

  if (!text) {
    return conn.sendMessage(
      groupId,
      {
        text: global.t('odioNoText', userId, groupId, { prefix: usedPrefix, command }),
        mentions: [userId]
      },
      { quoted: m }
    );
  }

  const percent = Math.floor(Math.random() * 100);
  const msgText = global.t('odioResult', userId, groupId, {
    target: text,
    percent
  });

  await conn.sendMessage(
    groupId,
    {
      text: msgText,
      mentions: conn.parseMention(msgText),
      buttons: [
        {
          buttonId: `${usedPrefix}odio ${text}`,
          buttonText: { displayText: '🔁 Ricalcola odio' },
          type: 1
        }
      ],
      footer: '꒷꒦ ✦ ୧・︶ : ︶ ꒷꒦ ‧₊ ୧',
      contextInfo: {
        mentionedJid: conn.parseMention(msgText),
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363259442839354@newsletter',
          serverMessageId: '',
          newsletterName: nomeDelBot
        }
      }
    },
    { quoted: m }
  );
};

handler.command = /^(odio|hate|odio_es|odiar|ódio|hass|恨|ненавижу|كراهية|नफ़रत|haine|benci|nefret)$/i;
handler.tags = ['fun'];
handler.help = ['odio @tag','hate @tag','odiar @tag','ódio @tag','hass @tag','恨 @tag','ненавижу @tag','كراهية @tag','नफ़रत @tag','haine @tag','benci @tag','nefret @tag'];


export default handler;
