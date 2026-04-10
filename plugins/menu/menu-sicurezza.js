import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let handler = async (m, { conn, usedPrefix, command }) => {
    const userId = m.sender;
    const groupId = m.isGroup ? m.chat : null;
    const chat = global.db.data.chats[m.chat] || {};
    const imagePath = path.join(__dirname, '../../media/menu/menu.jpeg');

    const menuText = generateMenuText(chat, userId, groupId);
    await conn.sendMessage(m.chat, {
        image: fs.readFileSync(imagePath),
        caption: menuText,
        footer: '𝐒𝐜𝐞𝐠𝐥𝐢 𝐮𝐧 𝐦𝐞𝐧𝐮̀',
        buttons: [
            { buttonId: `${usedPrefix}menu`, buttonText: { displayText: '🏠 𝐌𝐞𝐧𝐮̀ 𝐩𝐫𝐢𝐧𝐜𝐢𝐩𝐚𝐥𝐞' }, type: 1 },
            { buttonId: `${usedPrefix}menuadmin`, buttonText: { displayText: '🛡️ 𝐌𝐞𝐧𝐮̀ 𝐀𝐝𝐦𝐢𝐧' }, type: 1 },
            { buttonId: `${usedPrefix}menuowner`, buttonText: { displayText: '👑 𝐌𝐞𝐧𝐮̀ 𝐎𝐰𝐧𝐞' }, type: 1 },
            { buttonId: `${usedPrefix}menugruppo`, buttonText: { displayText: '👥 𝐌𝐞𝐧𝐮̀ 𝐒𝐯𝐚𝐠𝐨' }, type: 1 },
            { buttonId: `${usedPrefix}menufm`, buttonText: { displayText: '🎙️ 𝐌𝐞𝐧𝐮̀ 𝐋𝐀𝐒𝐓-𝐅𝐌' }, type: 1 },
        ],
        viewOnce: true,
        headerType: 4,
    }, { quoted: m });
};

handler.help = [
  'menusicurezza',
  'securitymenu',
  'menúseguridad',
  'menuseguridad',
  'menuseguranca',
  'menuseguro',
  'sicherheitsmenü',
  'sicherheitsmenu',
  '安全菜单',
  '安全',
  'менюбезопасности',
  'менюохрана',
  'قائمةالأمان',
  'قائمةالحماية',
  'सुरक्षामेनू',
  'सुरक्षा',
  'menusecurité',
  'menu_securite',
  'menukeamanan',
  'menuproteksi',
  'güvenlikmenü',
  'korumamenü'
];
handler.tags = ['menu'];
handler.command = /^(menusicurezza|securitymenu|menúseguridad|menuseguridad|menuseguranca|menuseguro|sicherheitsmenü|sicherheitsmenu|安全菜单|安全|менюбезопасности|менюохрана|قائمةالأمان|قائمةالحماية|सुरक्षामेनू|सुरक्षा|menusecurité|menu_securite|menukeamanan|menuproteksi|güvenlikmenü|korumamenü)$/i;


export default handler;

function generateMenuText(chat, userId, groupId) {
    const vs = global.vs;
    const menuTitle = global.t('securityMenuTitle', userId, groupId) || '𝑴𝑬𝑵𝑼 𝐅𝐔𝐍𝐙𝐈𝐎𝐍𝐈';
    const versionText = global.t('versionLabel', userId, groupId) || '𝑽𝑬𝑹𝑺𝑰𝑶𝑵𝑬';

    const functions = {
        Antilink: !!chat?.antiLink,
        Antilinkhard: !!chat?.antiLinkHard,
        Antispam: !!chat?.antispam,
        AntispamComandi: !!chat?.antispamcomandi,
        Antitrava: !!chat?.antitrava,
        Benvenuto: !!chat?.welcome,
        Addio: !!chat?.bye,
        Antibestemmie: !!chat?.antibestemmie,
        SoloGruppo: !!chat?.sologruppo,
        SoloPrivato: !!chat?.soloprivato,
        soloadmin: !!chat?.soloadmin,
        BanGruppo: !!chat?.isBanned,
        Antiporno: !!chat?.antiporno,
        AntiCall: !!chat?.antiCall,
        Antivirus: !!chat?.antivirus,
        Antibot: !!chat?.antibot,
        Antivoip: !!chat?.antivoip,
        Antimedia: !!chat?.antimedia,
        Antisondaggi: !!chat?.antisondaggi,
        AntiTikTok: !!chat?.antitiktok,
        Stickers: !!chat?.stickers,
        Bestemmiometro: !!chat?.bestemmiometro
    };

    const howToUse = `
*ℹ ${global.t('howToUse', userId, groupId) || '𝐂𝐎𝐌𝐄 𝐒𝐈 𝐔𝐒𝐀'}*
*🟢 ${global.t('activateFunction', userId, groupId) || '.attiva [funzione]'}*
*🔴 ${global.t('disableFunction', userId, groupId) || '.disattiva [funzione]'}*
    `.trim();

    const statusList = Object.entries(functions)
        .map(([name, state]) => `${state ? '🟢' : '🔴'} - *${name}*`)
        .join('\n');

    return `
⋆ ︵ ★ 𝐌𝐄𝐍𝐔̀ 𝐒𝐈𝐂𝐔𝐑𝐄𝐙𝐙𝐀 ★ ︵ ⋆

𝐂𝐎𝐌𝐄 𝐒𝐈 𝐔𝐒𝐀

*.attiva [funzione]*

*.disattiva [funzione]*

🟢 = *ATTIVO*
🔴 = *SPENTO*
꒷꒦ ✦ ୧・︶ : ︶ ꒷꒦ ‧₊ ୧
${statusList.split('\n').map(line => `୧ ${line}`).join('\n')}
꒷꒦ ✦ ୧・︶ : ︶ ꒷꒦ ‧₊ ୧
  ୧・*𝐕𝐄𝐑𝐒𝐈𝐎𝐍𝐄:* ${vs}

╰♡꒷ ๑ ⋆˚₊⋆───ʚ˚ɞ───⋆˚₊⋆ ๑ ⪩
`.trim();
}
