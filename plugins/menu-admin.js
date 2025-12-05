import path from 'path';
import { fileURLToPath } from 'url';
import '../lib/language.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const handler = async (message, { conn, usedPrefix }) => {
    const userId = message.sender;
    const groupId = message.isGroup ? message.chat : null;

    const menuText = generateMenuText(usedPrefix, userId, groupId);
    const imagePath = path.join(__dirname, '../media/menu.jpeg');

    await conn.sendMessage(message.chat, {
        image: { url: imagePath },
        caption: menuText,
        footer: global.t('chooseMenu', userId, groupId) || 'Scegli un menu:',
        buttons: [
            { buttonId: `${usedPrefix}menu`, buttonText: { displayText: global.t('mainMenuButton', userId, groupId) || "🏠 Menu Principale" }, type: 1 },
            { buttonId: `${usedPrefix}menuowner`, buttonText: { displayText: global.t('ownerMenuButton', userId, groupId) || "👑 Menu Owner" }, type: 1 },
            { buttonId: `${usedPrefix}menusicurezza`, buttonText: { displayText: global.t('securityMenuButton', userId, groupId) || "🚨 Menu Sicurezza" }, type: 1 },
            { buttonId: `${usedPrefix}menugruppo`, buttonText: { displayText: global.t('groupMenuButton', userId, groupId) || "👥 Menu Gruppo" }, type: 1 },
            { buttonId: `${usedPrefix}menuia`, buttonText: { displayText: global.t('aiMenuButton', userId, groupId) || "🤖 Menu IA" }, type: 1 }
        ],
        viewOnce: true,
        headerType: 4
    });
};

handler.help = ['menuadmin'];
handler.tags = ['menuadmin'];
handler.command = /^(menuadmin)$/i;

export default handler;

function generateMenuText(prefix, userId, groupId) {
    const menuTitle = global.t('adminMenuTitle', userId, groupId) || '𝑴𝑬𝑵𝑼 𝑨𝑫𝑴𝑰𝑵';

    const commandList = `
• 👑 *${global.t('promoteCommand', userId, groupId) || 'promuovi /mettiadmin'}*
• 👑 *${global.t('demoteCommand', userId, groupId) || 'retrocedi /togliadmin'}*
• 👑 *${global.t('warnCommands', userId, groupId) || 'warn / unwarn'}*
• 👑 *${global.t('muteCommands', userId, groupId) || 'muta / smuta'}*
• 👑 *${global.t('setScheduleCommand', userId, groupId) || 'setorario'}*
• 👑 *${global.t('setNameCommand', userId, groupId) || 'setnome'}*
• 👑 *${global.t('hidetagCommand', userId, groupId) || 'hidetag'}*
• 👑 *${global.t('kickCommand', userId, groupId) || 'kick / cacca'}*
• 👑 *${global.t('adminsCommand', userId, groupId) || 'admins'}*
• 👑 *${global.t('tagallCommand', userId, groupId) || 'tagall'}*
• 👑 *${global.t('openCloseCommand', userId, groupId) || 'aperto / chiuso'}*
• 👑 *${global.t('setWelcomeCommand', userId, groupId) || 'setwelcome'}*
• 👑 *${global.t('setByeCommand', userId, groupId) || 'setbye'}*
• 👑 *${global.t('inactiveCommand', userId, groupId) || 'inattivi'}*
• 👑 *${global.t('listNumCommand', userId, groupId) || 'listanum + prefisso'}*
• 👑 *${global.t('cleanupCommand', userId, groupId) || 'pulizia + prefisso'}*
• 👑 *${global.t('clearPlayCommand', userId, groupId) || 'clearplay'}*
• 👑 *${global.t('rulesCommand', userId, groupId) || 'regole/setregole'}*
• 👑 *${global.t('dsCommand', userId, groupId) || 'ds'}*
• 👑 *${global.t('listWarnCommand', userId, groupId) || 'listawarn'}*
• 👑 *${global.t('linkCommand', userId, groupId) || 'link'}*
• 👑 *${global.t('linkQrCommand', userId, groupId) || 'linkqr'}*
• 👑 *${global.t('linkQrCommand', userId, groupId) || 'richieste'}*
    `.trim();

    return `
⋆ ︵︵ ★ ${menuTitle} ★ ︵︵ ⋆

*${global.t('adminCommands', userId, groupId) || '𝑪𝑶𝑴𝑨𝑵𝑫𝑰 𝑨𝑫𝑴𝑰𝑵'} 👑*

꒷꒦ ✦ ୧・︶ : ︶ ꒷꒦ ‧₊ ୧
${commandList.split('\n').map(line => `୧ ${line.trim()}`).join('\n')}
꒷꒦ ✦ ୧・︶ : ︶ ꒷꒦ ‧₊ ୧

> © ${global.t('poweredBy', userId, groupId) || 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ'} ${nomebot}
`.trim();
}
