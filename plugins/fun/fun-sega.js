// PLUGIN SEGA
 
let handler = async (m, { conn, text, usedPrefix, command }) => {
  const userId = m.sender;
  const groupId = m.chat;
  const nomeDelBot = conn.user?.name || global.db?.data?.nomedelbot || 'ChatUnity';

  let destinatario;
  if (m.quoted && m.quoted.sender) {
    destinatario = m.quoted.sender;
  } else if (m.mentionedJid && m.mentionedJid.length > 0) {
    destinatario = m.mentionedJid[0];
  } else {
    return m.reply(
      global.t('segaNoTarget', userId, groupId, { prefix: usedPrefix, command }),
      null
    );
  }

  const nomeDestinatario = `@${destinatario.split('@')[0]}`;

  const sent = await conn.sendMessage(
    groupId,
    {
      text: global.t('segaStart', userId, groupId, { target: nomeDestinatario }),
      mentions: [destinatario]
    },
    { quoted: m }
  );

  const frames = ['8===👊=D', '8=👊===D', '8==👊==D', '8===👊=D', '8===👊=D💦'];
  const { key } = sent;

  for (const frame of frames) {
    const frameText = global.t('segaFrame', userId, groupId, { frame });
    await conn.sendMessage(
      groupId,
      {
        text: frameText,
        edit: key,
        mentions: [destinatario]
      },
      { quoted: m }
    );
    await new Promise(resolve => setTimeout(resolve, 20));
  }

  const endText = global.t('segaEnd', userId, groupId, { target: nomeDestinatario });

  await conn.sendMessage(
    groupId,
    {
      text: endText,
      edit: key,
      mentions: [destinatario]
    },
    { quoted: m }
  );
};

handler.help = [
  'sega','jerk','masturbate','jerking','wank',
  'masturbar','paja','hacerseunamano',
  'masturbarse','punheta','batepapo',
  'wichsen','selbstbefriedigung',
  '手淫','打飞机',
  'онанизм','дрочить',
  'استمناء','جلق',
  'हस्तमैथुन','हस्त',
  'masturbation','branlette',
  'onani','colmek','ngocok',
  'mastürbasyon','otuz'
];
handler.tags = ['fun'];
handler.command = /^(sega|jerk|masturbate|jerking|wank|masturbar|paja|hacerseunamano|masturbarse|punheta|batepapo|wichsen|selbstbefriedigung|手淫|打飞机|онанизм|дрочить|استمناء|جلق|हस्तमैथुन|हस्त|masturbation|branlette|onani|colmek|ngocok|mastürbasyon|otuz)$/i;

export default handler;
