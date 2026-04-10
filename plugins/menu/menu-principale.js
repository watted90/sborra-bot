import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import '../../lib/language.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const handler = async (message, { conn, usedPrefix }) => {
    const userId = message.sender
    const groupId = message.isGroup ? message.chat : null

    const menuText = generateMenuText(usedPrefix, userId, groupId);


    const imagePath = path.join(__dirname, '../../media/menu/menu.jpeg');
  


    await conn.sendMessage(
        message.chat,
        {
            image: fs.readFileSync(imagePath),
            caption: menuText,
            footer: '𝐒𝐜𝐞𝐠𝐥𝐢 𝐮𝐧 𝐦𝐞𝐧𝐮̀',
            buttons:[
                { buttonId: `${usedPrefix}menuadmin`, buttonText: { displayText: '🛡️ 𝐌𝐞𝐧𝐮̀ 𝐀𝐝𝐦𝐢𝐧'  }, type: 1 },
                { buttonId: `${usedPrefix}menuowner`, buttonText: { displayText: '👑 𝐌𝐞𝐧𝐮̀ 𝐎𝐰𝐧𝐞𝐫 ' }, type: 1 },
                { buttonId: `${usedPrefix}menusicurezza`, buttonText: { displayText: '🚨 𝐌𝐞𝐧𝐮̀ 𝐒𝐢𝐜𝐮𝐫𝐞𝐳𝐳𝐚' }, type : 1},
                { buttonId: `${usedPrefix}menugruppo`, buttonText: { displayText: '👥 𝐌𝐞𝐧𝐮̀ 𝐒𝐯𝐚𝐠𝐨' }, type: 1 },
                { buttonId: `${usedPrefix}menufm`, buttonText: { displayText: '🎙️ 𝐌𝐞𝐧𝐮̀ 𝐅𝐌' }, type: 1 }
            ],
            viewOnce: true,
            headerType: 4
        }
    );
};


handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(menu|comandi)$/i;


export default handler;


function generateMenuText(prefix, userCount, userId, groupId) {
    const staffText = global.t('staffCommand', userId, groupId) || 'staff'
    const installText = global.t('installCommand', userId, groupId) || 'installa'
    const channelsText = global.t('channelsCommand', userId, groupId) || 'canali'
    const systemText = global.t('systemCommand', userId, groupId) || 'sistema'
    const pingText = global.t('pingCommand', userId, groupId) || 'ping'
    const reportText = global.t('reportCommand', userId, groupId) || 'segnala'
    const suggestText = global.t('suggestCommand', userId, groupId) || 'consiglia'

    return `
⋆ ︵★ 𝐌𝐄𝐍𝐔̀ 𝐃𝐄𝐋 𝐁𝐎𝐓 ★︵ ⋆
୧ 👑 ୭ *${prefix}${staffText}*
୧ 📥 ୭ *${prefix}${installText}*
୧ 📝 ୭ *${prefix}${channelsText}*
୧ ⚙️ ୭ *${prefix}${systemText}*
୧ 🚀 ୭ *${prefix}${pingText}*
୧ 📝 ୭ *${prefix}${reportText}*
୧ 💡 ୭ *${prefix}${suggestText}*
୧ ⚡ ୭ *${prefix}pong*
╰♡꒷ ๑ ⋆˚₊⋆──ʚ˚ɞ──⋆˚₊⋆ ๑ ⪩
  ୧・ *𝐕𝐄𝐑𝐒𝐈𝐎𝐍𝐄:* ${vs}
  ୧・ *𝐂𝐎𝐋𝐋𝐀𝐁:* ${collab}
╰♡꒷ ๑ ⋆˚₊⋆──ʚ˚ɞ──⋆˚₊⋆ ๑ ⪩
`.trim();
}