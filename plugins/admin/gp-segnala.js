 
let handler = async (m, { conn, text, usedPrefix, command }) => {
    const userId = m.sender;
    const groupId = m.isGroup ? m.chat : null;
    const nomeDelBot = global.db.data.nomedelbot || '𝐒𝐛𝐨𝐫𝐫𝐚 𝐁𝐨𝐭';

    const newsletterJid = global.channelid || global.IdCanale?.[0] || '120363420674060561@newsletter';
    const thumbnailUrl = 'https://i.ibb.co/rG9XPFmJ/iconica-di-whatsapp-3d-113255-84795.jpg';
    const sourceUrl = 'https://whatsapp.com/channel/0029VaZVlJZHwXb8naJBQN0J';
    if (!text) return conn.reply(m.chat, global.t('reportNoText', userId, groupId), m);
    if (text.length < 10) return conn.reply(m.chat, global.t('reportTooShort', userId, groupId), m);
    if (text.length > 1000) return conn.reply(m.chat, global.t('reportTooLong', userId, groupId), m);

    const title = global.t('reportTitle', userId, groupId);
    const numberLabel = global.t('reportNumber', userId, groupId);
    const userLabel = global.t('reportUser', userId, groupId);
    const messageLabel = global.t('reportMessage', userId, groupId);
    const quoteLabel = global.t('reportQuote', userId, groupId);
    const anonymous = global.t('reportAnonymous', userId, groupId);

    const reportText = `*${title}*

${numberLabel}:
• Wa.me/${m.sender.split`@`[0]}

${userLabel}: 
• ${m.pushName || anonymous}

${messageLabel}:
• ${text}`;

    try {
        await conn.reply(global.owner[0][0] + '@s.whatsapp.net', 
            m.quoted ? reportText + `\n\n${quoteLabel}:\n` + m.quoted.text : reportText, 
            m, 
            { mentions: conn.parseMention(reportText) }
        );

        await conn.sendMessage(newsletterJid, { 
            text: m.quoted ? reportText + `\n\n${quoteLabel}:\n` + m.quoted.text : reportText, 
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid,
                    serverMessageId: '',
                    newsletterName: `${nomeDelBot}`
                },
                externalAdReply: {
                    title: global.t('reportChannelTitle', userId, groupId),
                    body: global.t('reportChannelBody', userId, groupId),
                    thumbnailUrl,
                    sourceUrl,
                    mediaType: 1,
                    showAdAttribution: false,
                    renderLargerThumbnail: false
                }
            }
        }, { quoted: null });

        await m.reply(global.t('reportSuccess', userId, groupId));
        
    } catch (error) {
        console.error('Errore nella segnalazione:', error);
        await m.reply(global.t('reportSuccess', userId, groupId));
    }
};

handler.help = [
  'report','bug',
  'segnala','errore',
  'reporta','error',
  'reporte','informe','problema',
  'informe_pt','erro_pt',
  'bericht','fehler',
  '报告','错误',
  'отчет','ошибка',
  'تقرير','خطأ',
  'रिपोर्ट','त्रुटि',
  'rapport','bogue',
  'laporan','bug_id',
  'rapor','hata'
];
handler.tags = ['info'];
handler.command = /^(segnala|report|bug|errore|reporta|error|reporte|informe|problema|informe_pt|erro_pt|bericht|fehler|报告|错误|отчет|ошибка|تقرير|خطأ|रिपोर्ट|त्रुटि|rapport|bogue|laporan|bug_id|rapor|hata)$/i;


export default handler;
