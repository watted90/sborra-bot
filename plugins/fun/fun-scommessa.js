 
let cooldowns = {};

let handler = async (m, { conn, text, usedPrefix, command }) => {
    const userId = m.sender;
    const groupId = m.chat;
    
    let punti = 300;
    let tempoAttesa = 5 * 1000;
    let user = global.db.data.users[m.sender];

    if (cooldowns[m.sender] && Date.now() - cooldowns[m.sender] < tempoAttesa) {
        let tempoRestante = secondiAHMS(Math.ceil((cooldowns[m.sender] + tempoAttesa - Date.now()) / 1000));
        return conn.reply(
            m.chat,
            global.t('rpsAlreadyPlaying', userId, groupId, { time: tempoRestante }),
            m
        );
    }

    cooldowns[m.sender] = Date.now();

    if (!text) {
        return conn.sendMessage(m.chat, {
            text: global.t('rpsChooseOption', userId, groupId),
            buttons: [
                { buttonId: `${usedPrefix + command} sasso`, buttonText: { displayText: global.t('rpsButtonRock', userId, groupId) }, type: 1 },
                { buttonId: `${usedPrefix + command} carta`, buttonText: { displayText: global.t('rpsButtonPaper', userId, groupId) }, type: 1 },
                { buttonId: `${usedPrefix + command} forbice`, buttonText: { displayText: global.t('rpsButtonScissors', userId, groupId) }, type: 1 }
            ]
        }, { quoted: m });
    }

    let opzioni = ['sasso', 'carta', 'forbice'];
    let opzioniEng = ['rock', 'paper', 'scissors'];
    let textLower = text.toLowerCase();
    
    // Converti input inglese in italiano
    if (opzioniEng.includes(textLower)) {
        const mapping = { rock: 'sasso', paper: 'carta', scissors: 'forbice' };
        textLower = mapping[textLower];
    }
    
    let astro = opzioni[Math.floor(Math.random() * opzioni.length)];

    if (!opzioni.includes(textLower)) {
        return conn.sendMessage(m.chat, {
            text: global.t('rpsInvalidOption', userId, groupId),
            buttons: [
                { buttonId: `${usedPrefix + command} sasso`, buttonText: { displayText: global.t('rpsButtonRock', userId, groupId) }, type: 1 },
                { buttonId: `${usedPrefix + command} carta`, buttonText: { displayText: global.t('rpsButtonPaper', userId, groupId) }, type: 1 },
                { buttonId: `${usedPrefix + command} forbice`, buttonText: { displayText: global.t('rpsButtonScissors', userId, groupId) }, type: 1 }
            ]
        }, { quoted: m });
    }

    const emojiMap = {
        sasso: global.t('rpsRock', userId, groupId),
        carta: global.t('rpsPaper', userId, groupId),
        forbice: global.t('rpsScissors', userId, groupId)
    };

    await conn.sendMessage(m.chat, { 
        react: { text: '🎲', key: m.key }
    });
    
    await new Promise(resolve => setTimeout(resolve, 2000));

    let risultato = '';
    let puntiOttenuti = 0;

    if (textLower === astro) {
        await conn.sendMessage(m.chat, { 
            react: { text: '🤝', key: m.key }
        });
        risultato = global.t('rpsDraw', userId, groupId, {
            player: emojiMap[textLower],
            bot: emojiMap[astro],
            reward: 100
        });
        puntiOttenuti = 100;
    } else if (
        (textLower === 'sasso' && astro === 'forbice') ||
        (textLower === 'forbice' && astro === 'carta') ||
        (textLower === 'carta' && astro === 'sasso')
    ) {
        await conn.sendMessage(m.chat, { 
            react: { text: '🎉', key: m.key }
        });
        risultato = global.t('rpsWin', userId, groupId, {
            player: emojiMap[textLower],
            bot: emojiMap[astro],
            reward: punti
        });
        puntiOttenuti = punti;
    } else {
        await conn.sendMessage(m.chat, { 
            react: { text: '😢', key: m.key }
        });
        risultato = global.t('rpsLose', userId, groupId, {
            player: emojiMap[textLower],
            bot: emojiMap[astro],
            loss: punti
        });
        puntiOttenuti = -punti;
    }

    user.limit += puntiOttenuti;
    conn.sendMessage(m.chat, {
        text: risultato,
        buttons: [
            { buttonId: `${usedPrefix + command}`, buttonText: { displayText: global.t('rpsButtonRetry', userId, groupId) }, type: 1 }
        ]
    }, { quoted: m });
};

handler.help = [
  'scommessa','rps','rockpaperscissors','rockpaper','rpsgame',
  'piedrapapelotijera','ppt','piedrapapel','piedrapapelotijeras',
  'pedrapapeltesoura','ppt_pt','pedrapapel','tesoura',
  'scherepapierstein','sps','scherepapier','schere',
  '石头剪刀布','剪刀石头布','猜拳',
  'каменьножницыбумага','каменьножницы','каменьбумага',
  'حجرورقةمقص','لعبةحجرورقةمقص','حجرمقصورقة',
  'पत्थरकागजकैंची','कागजपत्थरकैंची','कैंचीपत्थरकागज',
  'pierrefeuilleciseaux','pfc','pierrefeuille','ciseaux',
  'suitguntingkertas','sgk','suit','guntingkertas',
  'taşkağıtmakas','tkm','taşkağıt','makas'
];
handler.tags = ['game'];
handler.command = /^(scommessa|rps|rockpaperscissors|rockpaper|rpsgame|piedrapapelotijera|ppt|piedrapapel|piedrapapelotijeras|pedrapapeltesoura|ppt_pt|pedrapapel|tesoura|scherepapierstein|sps|scherepapier|schere|石头剪刀布|剪刀石头布|猜拳|каменьножницыбумага|каменьножницы|каменьбумага|حجرورقةمقص|لعبةحجرورقةمقص|حجرمقصورقة|पत्थरकागजकैंची|कागजपत्थरकैंची|कैंचीपत्थरकागज|pierrefeuilleciseaux|pfc|pierrefeuille|ciseaux|suitguntingkertas|sgk|suit|guntingkertas|taşkağıtmakas|tkm|taşkağıt|makas)$/i;

handler.register = true;

export default handler;

function secondiAHMS(secondi) {
    let minuti = Math.floor(secondi / 60);
    let secondiRimanenti = secondi % 60;
    return `${minuti}m ${secondiRimanenti}s`;
}
