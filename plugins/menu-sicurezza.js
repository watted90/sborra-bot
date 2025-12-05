import path from 'path';
import { fileURLToPath } from 'url';
import '../lib/language.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let handler = async (m, { conn, usedPrefix }) => {
    const userId = m.sender;
    const groupId = m.isGroup ? m.chat : null;
    const chat = global.db.data.chats[m.chat] || {};

    const menuText = generateMenuText(chat, userId, groupId);
    const imagePath = path.join(__dirname, '../media/menu.jpeg');

    await conn.sendMessage(m.chat, {
        image: { url: imagePath },
        caption: menuText,
        footer: global.t('chooseMenu', userId, groupId) || 'Scegli un menu:',
        buttons: [
            { buttonId: `${usedPrefix}menu`, buttonText: { displayText: global.t('mainMenuButton', userId, groupId) || "🏠 Menu Principale" }, type: 1 },
        ],
        viewOnce: true,
        headerType: 4
    });
};

handler.help = ["menusicurezza"];
handler.tags = ["menu"];
handler.command = /^(menusicurezza)$/i;

export default handler;

function generateMenuText(chat, userId, groupId) {
    const menuTitle = global.t('securityMenuTitle', userId, groupId) || '𝑴𝑬𝑵𝑼 𝑭𝑼𝑵𝒁𝑰𝑶𝑵𝑰';
    const versionText = global.t('versionLabel', userId, groupId) || '𝑽𝑬𝑹𝑺𝑰𝑶𝑵𝑬';
    const collabText = global.t('collabLabel', userId, groupId) || '𝐂𝐎𝐋𝐋𝐀𝐁';
    const supportText = global.t('supportLabel', userId, groupId) || '𝐒𝐔𝐏𝐏𝐎𝐑𝐓𝐎';

    const functions = {
        Benvenuto: !!chat?.welcome,
        Detect: !!chat?.detect,
        Antilink: !!chat?.antiLink,
        Antilinkhard: !!chat?.antiLinkHard,
        AntiTikTok: !!chat?.antitiktok,
        Antiinsta: !!chat?.antiinsta,
        Antispam: !!chat?.antispam,
        Antitrava: !!chat?.antitrava,
        Sologruppo: !!chat?.sologruppo,
        Soloprivato: !!chat?.soloprivato,
        Soloadmin: !!chat?.soloadmin,
        Anticall: !!chat?.antiCall,
        Antivirus: !!chat?.antivirus,
        Antimedia: !!chat?.antimedia,
        Antisondaggi: !!chat?.antisondaggi,
        Cinema: !!chat?.cinema
        
    };

    const howToUse = `
*ℹ ${global.t('howToUse', userId, groupId) || '𝐂𝐎𝐌𝐄 𝐒𝐈 𝐔𝐒𝐀'}*
*🟢 ${global.t('activateFunction', userId, groupId) || 'attiva [funzione]'}*
*🔴 ${global.t('disableFunction', userId, groupId) ||'disabilita [funzione]'}*
    `.trim();

    const statusList = Object.entries(functions)
        .map(([name, state]) => `${state ? '🟢' : '🔴'} - *${name}*`)
        .join('\n');

    return `
⋆ ︵︵ ★ ${menuTitle} ★ ︵︵ ⋆

${howToUse}

꒷꒦ ✦ ୧・︶ : ︶ ꒷꒦ ‧₊ ୧
${statusList.split('\n').map(line => `୧ ${line}`).join('\n')}
꒷꒦ ✦ ୧・︶ : ︶ ꒷꒦ ‧₊ ୧

╰♡꒷ ๑ ⋆˚₊⋆───ʚ˚ɞ───⋆˚₊⋆ ๑ ⪩
  ୧・ *${versionText}:* ${vs}
  ୧・ *${collabText}:* ${collab}
  ୧・ *${supportText}:* (.supporto)
╰♡꒷ ๑ ⋆˚₊⋆───ʚ˚ɞ───⋆˚₊⋆ ๑ ⪩
`.trim();
}
