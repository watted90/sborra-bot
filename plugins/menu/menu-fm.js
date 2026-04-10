import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let handler = async (m, { conn, usedPrefix, command }) => {
    const userId = m.sender;
    const groupId = m.isGroup ? m.chat : null;
    const imagePath = path.join(__dirname, '../../media/menu/menu.jpeg');

    const menuText = generateMenuText(usedPrefix, userId, groupId);
    const footerText = global.t('chooseMenu', userId, groupId) || '𝐒𝐜𝐞𝐠𝐥𝐢 𝐮𝐧 𝐦𝐞𝐧𝐮̀:';
    const mainMenuText = global.t('mainMenuButton', userId, groupId) || '🏠 𝐌𝐞𝐧𝐮̀ 𝐩𝐫𝐢𝐧𝐜𝐢𝐩𝐚𝐥𝐞';
    const adminMenuText = global.t('menuAdmin', userId, groupId) || '🛡️ 𝐌𝐞𝐧𝐮̀ 𝐀𝐝𝐦𝐢𝐧';
    const ownerMenuText = global.t('menuOwner', userId, groupId) || '👑 𝐌𝐞𝐧𝐮̀ 𝐎𝐰𝐧𝐞𝐫 ';
    const securityMenuText = global.t('menuSecurity', userId, groupId) || '🚨 𝐌𝐞𝐧𝐮̀ 𝐒𝐢𝐜𝐮𝐫𝐞𝐳𝐳𝐚';
    const groupMenuText = global.t('menuGroup', userId, groupId) || '👥 𝐌𝐞𝐧𝐮̀ 𝐒𝐯𝐚𝐠𝐨';

    await conn.sendMessage(m.chat, {
        image: fs.readFileSync(imagePath),
        caption: menuText,
        footer: '𝐒𝐜𝐞𝐠𝐥𝐢 𝐮𝐧 𝐦𝐞𝐧𝐮̀',
        buttons: [
            { buttonId: `${usedPrefix}menu`, buttonText: { displayText: '🏠 𝐌𝐞𝐧𝐮̀ 𝐩𝐫𝐢𝐧𝐜𝐢𝐩𝐚𝐥𝐞' }, type: 1 },
            { buttonId: `${usedPrefix}menuadmin`, buttonText: { displayText: '🛡️ 𝐌𝐞𝐧𝐮̀ 𝐀𝐝𝐦𝐢𝐧' }, type: 1 },
            { buttonId: `${usedPrefix}menuowner`, buttonText: { displayText: '👑 𝐌𝐞𝐧𝐮̀ 𝐎𝐰𝐧𝐞𝐫 ' }, type: 1 },
            { buttonId: `${usedPrefix}menusicurezza`, buttonText: { displayText: '🚨 𝐌𝐞𝐧𝐮̀ 𝐒𝐢𝐜𝐮𝐫𝐞𝐳𝐳𝐚' }, type: 1 },
            { buttonId: `${usedPrefix}menugruppo`, buttonText: { displayText: '👥 𝐌𝐞𝐧𝐮̀ 𝐒𝐯𝐚𝐠𝐨' }, type: 1 },
        ],
        viewOnce: true,
        headerType: 4,
    }, { quoted: m });
};

handler.help = ['menufm', 'menu-fm', 'fm'];
handler.tags = ['menu'];
handler.command = /^(menufm|menu-fm|fm)$/i;

export default handler;

function generateMenuText(prefix, userId, groupId) {
    return `
⋆ ︵ ★ 𝐌𝐄𝐍𝐔̀ 𝐋𝐀𝐒𝐓-𝐅𝐌 ★ ︵ ⋆

୧ *${prefix}setuser* <username>
୧ *${prefix}cur*
୧ *${prefix}topartists* [period] [limit]
୧ *${prefix}topalbums* [period] [limit]
୧ *${prefix}toptracks* [period] [limit]
୧ *${prefix}cronologia* [limit]

*ℹ️ Esempio:* ${prefix}setuser myusername
*ℹ️ Periodi validi:* 7day | 1month | 3month | 6month | 12month | overall

╰♡꒷ ๑ ⋆˚₊⋆───ʚ˚ɞ───⋆˚₊⋆ ๑ ⪩
  ୧・ *𝐕𝐄𝐑𝐒𝐈𝐎𝐍𝐄:* ${vs}
  ୧・ *𝐂𝐎𝐋𝐋𝐀𝐁:* ${collab}
`.trim();
}
t