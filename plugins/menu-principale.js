import { performance } from 'perf_hooks';
import fetch from 'node-fetch';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import '../lib/language.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const handler = async (message, { conn, usedPrefix, command }) => {
  const userId = message.sender;
  const groupId = message.isGroup ? message.chat : null;

  const userCount = Object.keys(global.db.data.users).length;

  const menuText = generateMenuText(usedPrefix, userCount, userId, groupId);

  const imagePath = path.join(__dirname, '../media/menu.jpeg');

  const footerText = global.t('menuFooter', userId, groupId) || 'Scegli un menu:';
  const adminMenuText = global.t('menuAdmin', userId, groupId) || '🛡️ Menu Admin';
  const ownerMenuText = global.t('menuOwner', userId, groupId) || '👑 Menu Owner';
  const securityMenuText = global.t('menuSecurity', userId, groupId) || '🚨 Menu Sicurezza';
  const groupMenuText = global.t('menuGroup', userId, groupId) || '👥 Menu Gruppo';
  const aiMenuText = global.t('menuAI', userId, groupId) || '🤖 Menu IA';

  
  await conn.sendMessage(
    message.chat,
    {
      image: { url: imagePath },
      text: menuText,
      footer: footerText,
      buttons: [
        { buttonId: `${usedPrefix}menuadmin`, buttonText: { displayText: adminMenuText }, type: 1 },
        { buttonId: `${usedPrefix}menuowner`, buttonText: { displayText: ownerMenuText }, type: 1 },
        { buttonId: `${usedPrefix}menusicurezza`, buttonText: { displayText: securityMenuText }, type: 1 },
        { buttonId: `${usedPrefix}menugruppo`, buttonText: { displayText: groupMenuText }, type: 1 },
        { buttonId: `${usedPrefix}menuia`, buttonText: { displayText: aiMenuText }, type: 1 }
      ],
      viewOnce: true,
      headerType: 4,
    }
  );
};

handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(menu|comandi)$/i;

export default handler;

function generateMenuText(prefix, userCount, userId, groupId) {
  const menuTitle = global.t('mainMenuTitle', userId, groupId) || '𝑴𝑬𝑵𝑼 𝑫𝑬𝑳 𝑩𝑶𝑻';
  const staffText = global.t('staffCommand', userId, groupId) || 'staff';
  const systemText = global.t('systemCommand', userId, groupId) || 'sistema';
  const pingText = global.t('pingCommand', userId, groupId) || 'ping';
  const reportText = global.t('reportCommand', userId, groupId) || 'segnala';
  const suggestText = global.t('suggestCommand', userId, groupId) || 'consiglia';
  const versionText = global.t('versionLabel', userId, groupId) || '𝑽𝑬𝑹𝑺𝑰𝑶𝑵𝑬';
  const collabText = global.t('collabLabel', userId, groupId) || '𝐂𝐎𝐋𝐋𝐀𝐁';
  const pongText = global.t('pongCommand', userId, groupId) || 'pong';

  // Fallback per variabili non definite nel tuo snippet originale
  const installText = global.t('installCommand', userId, groupId) || 'installa';
  const channelsText = global.t('channelsCommand', userId, groupId) || 'canali';

  return `
⋆ ︵★ ${menuTitle} ★︵ ⋆
୧ 👑 ୭ *${prefix}${staffText}*
୧ 📥 ୭ *${prefix}${installText}*
୧ 📝 ୭ *${prefix}${channelsText}* 
୧ ⚙️ ୭ *${prefix}${systemText}*
୧ 🚀 ୭ *${prefix}${pingText}*
୧ 📝 ୭ *${prefix}${reportText}* 
୧ 💡 ୭ *${prefix}${suggestText}*
୧ ⚡ ୭ *${prefix}${pongText}* 
╰♡꒷ ๑ ⋆˚₊⋆──ʚ˚ɞ──⋆˚₊⋆ ๑ ⪩
  ୧・ *${versionText}:* ${vs}
  ୧・ *${collabText}* ${collab}
╰♡꒷ ๑ ⋆˚₊⋆──ʚ˚ɞ──⋆˚₊⋆ ๑ ⪩
`.trim();
         }
