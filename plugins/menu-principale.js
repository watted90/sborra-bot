import path from 'path';
import { fileURLToPath } from 'url';
import '../lib/language.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const handler = async (message, { conn, usedPrefix }) => {
    const userId = message.sender
    const groupId = message.isGroup ? message.chat : null
    
    const menuText = generateMenuText(usedPrefix, userId, groupId);


    const imagePath = path.join(__dirname, '../media/menu.jpeg'); 
    
    const footerText = global.t('menuFooter', userId, groupId) || '𝐒𝐜𝐞𝐠𝐥𝐢 𝐮𝐧 𝐦𝐞𝐧𝐮̀:'
    const adminMenuText = global.t('menuAdmin', userId, groupId) || '🛡️ 𝐌𝐞𝐧𝐮̀ 𝐀𝐝𝐦𝐢𝐧'
    const ownerMenuText = global.t('menuOwner', userId, groupId) || '👑 𝐌𝐞𝐧𝐮̀ 𝐎𝐰𝐧𝐞𝐫 '
    const securityMenuText = global.t('menuSecurity', userId, groupId) || '🚨 𝐌𝐞𝐧𝐮̀ 𝐒𝐢𝐜𝐮𝐫𝐞𝐳𝐳𝐚'
    const groupMenuText = global.t('menuGroup', userId, groupId) || '👥 𝐌𝐞𝐧𝐮̀ 𝐒𝐯𝐚𝐠𝐨'
    const aiMenuText = global.t('menuAI', userId, groupId) || '🤖 𝐌𝐞𝐧𝐮̀ 𝐈𝐀'
    
    await conn.sendMessage(
        message.chat,
        {
            image: { url: imagePath },
            caption: menuText,
            footer: footerText,
            buttons: [
                { buttonId: `${usedPrefix}menuadmin`, buttonText: { displayText: adminMenuText }, type: 1 },
                { buttonId: `${usedPrefix}menuowner`, buttonText: { displayText: ownerMenuText }, type: 1 },
                { buttonId: `${usedPrefix}menusicurezza`, buttonText: { displayText: securityMenuText }, type: 1 },
                { buttonId: `${usedPrefix}menugruppo`, buttonText: { displayText: groupMenuText }, type: 1 },
                { buttonId: `${usedPrefix}menuia`, buttonText: { displayText: aiMenuText }, type: 1 }
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
    const menuTitle = global.t('mainMenuTitle', userId, groupId) || '𝐌𝐄𝐍𝐔̀ 𝐃𝐄𝐋 𝐁𝐎𝐓'
    const staffText = global.t('staffCommand', userId, groupId) || 'staff'
    const installText = global.t('installCommand', userId, groupId) || 'installa'
    const channelsText = global.t('channelsCommand', userId, groupId) || 'canali'
    const systemText = global.t('systemCommand', userId, groupId) || 'sistema'
    const pingText = global.t('pingCommand', userId, groupId) || 'ping'
    const reportText = global.t('reportCommand', userId, groupId) || 'segnala'
    const suggestText = global.t('suggestCommand', userId, groupId) || 'consiglia'
    const versionText = global.t('versionLabel', userId, groupId) || '𝐕𝐄𝐑𝐒𝐈𝐎𝐍𝐄'
    const collabText = global.t('collabLabel', userId, groupId) || '𝐂𝐎𝐋𝐋𝐀𝐁'
    
    
    return `
⋆ ︵★ ${menuTitle} ★︵ ⋆
୧ 👑 ୭ *${prefix}${staffText}*
୧ 📥 ୭ *${prefix}${installText}*
୧ 📝 ୭ *${prefix}${channelsText}* 
୧ ⚙️ ୭ *${prefix}${systemText}*
୧ 🚀 ୭ *${prefix}${pingText}*
୧ 📝 ୭ *${prefix}${reportText}* 
୧ 💡 ୭ *${prefix}${suggestText}* 
୧ ⚡ ୭ *${prefix}pong*
╰♡꒷ ๑ ⋆˚₊⋆──ʚ˚ɞ──⋆˚₊⋆ ๑ ⪩
  ୧・ *${versionText}:* ${vs}
  ୧・ *𝐂𝐎𝐋𝐋𝐀𝐁:* ${collab}
╰♡꒷ ๑ ⋆˚₊⋆──ʚ˚ɞ──⋆˚₊⋆ ๑ ⪩
`.trim();
}
