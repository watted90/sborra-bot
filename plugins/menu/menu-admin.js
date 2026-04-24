import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const handler = async (message, { conn, usedPrefix, command }) => {
    const userId = message.sender;
    const groupId = message.isGroup ? message.chat : null;

    const menuText = generateMenuText(usedPrefix, userId, groupId);
    const imagePath = path.join(__dirname, '../../media/menu/menu.jpeg');
    const footerText = global.t('chooseMenu', userId, groupId);
    const mainMenuText = global.t('mainMenuButton', userId, groupId);
    const ownerMenuText = global.t('ownerMenuButton', userId, groupId);
    const securityMenuText = global.t('securityMenuButton', userId, groupId);
    const groupMenuText = global.t('groupMenuButton', userId, groupId);
    const fmMenuText = global.t('fmMenuButton', userId, groupId) || 'Menu FM';

    await conn.sendMessage(message.chat, {
        image: fs.readFileSync(imagePath),
        caption: menuText,
        footer: footerText,
        buttons: [
            { buttonId: `${usedPrefix}menu`, buttonText: { displayText: '🏠 𝐌𝐞𝐧𝐮̀ 𝐩𝐫𝐢𝐧𝐜𝐢𝐩𝐚𝐥𝐞' }, type: 1 },
            { buttonId: `${usedPrefix}menuowner`, buttonText: { displayText: '👑 𝐌𝐞𝐧𝐮̀ 𝐎𝐰𝐧𝐞' }, type: 1 },
            { buttonId: `${usedPrefix}menusicurezza`, buttonText: { displayText: '🚨 𝐌𝐞𝐧𝐮̀ 𝐒𝐢𝐜𝐮𝐫𝐞𝐳𝐳𝐚' }, type : 1},
            { buttonId: `${usedPrefix}menugruppo`, buttonText: { displayText: '👥 𝐌𝐞𝐧𝐮̀ 𝐒𝐯𝐚𝐠𝐨' }, type: 1 },
            { buttonId: `${usedPrefix}menufm`, buttonText: { displayText: '🎙️ 𝐌𝐞𝐧𝐮̀ 𝐋𝐀𝐒𝐓-𝐅𝐌' }, type: 1 },
            { buttonId: `${usedPrefix}menumod`, buttonText: { displayText: '⭐ 𝐌𝐞𝐧𝐮̀ 𝐌𝐨𝐝' }, type: 1 },
        ],
        viewOnce: true,
        headerType: 4,
    }, { quoted: message });
};

handler.help = [
  'menuadmin',
  'adminmenu',
  'menúadmin',
  'menúadministrador',
  'menuadministrador',
  'menuowner',
  'menúpropietario',
  'menupainel',
  'adminmenü',
  '管理菜单',
  '菜单管理员',
  'менюадмин',
  'менюадминистратора',
  'قائمةالمدير',
  'قائمةالمسؤول',
  'प्रशासनमेनू',
  'एडमिनमेनू',
  'menuadmin_fr',
  'menuadministrateur',
  'menuadmin_id',
  'menuadmin_tr'
];
handler.tags = ['menuadmin'];
handler.command = /^(menuadmin|adminmenu|menúadmin|menúadministrador|menuadministrador|menupainel|adminmenü|管理菜单|菜单管理员|менюадмин|менюадминистратора|قائمةالمدير|قائمةالمسؤول|प्रशासनमेनू|एडमिनमेनू|menuadmin_fr|menuadministrateur|menuadmin_id|menuadmin_tr)$/i;


export default handler;

function generateMenuText(prefix, userId, groupId) {
    const menuTitle = global.t('adminMenuTitle', userId, groupId);

    const commandList = `
• 👑 *${global.t('promoteCommand', userId, groupId)}*
• 👑 *${global.t('demoteCommand', userId, groupId)}*
• 👑 *${global.t('warnCommands', userId, groupId)}*
• 👑 *${global.t('muteCommands', userId, groupId)}*
• 👑 *${global.t('setNameCommand', userId, groupId)}*
• 👑 *${global.t('hidetagCommand', userId, groupId)}*
• 👑 *${global.t('tagallCommand', userId, groupId)}*
• 👑 *${global.t('kickCommand', userId, groupId)}*
• 👑 *${global.t('adminsCommand', userId, groupId)}*
• 👑 *${global.t('openCloseCommand', userId, groupId)}*
• 👑 *${global.t('setWelcomeCommand', userId, groupId)}*
• 👑 *${global.t('setByeCommand', userId, groupId)}*
• 👑 *${global.t('inactiveCommand', userId, groupId)}*
• 👑 *${global.t('listNumCommand', userId, groupId)}*
• 👑 *${global.t('cleanupCommand', userId, groupId)}*
• 👑 *${global.t('rulesCommand', userId, groupId)}*
• 👑 *${global.t('listWarnCommand', userId, groupId)}*
• 👑 *${global.t('linkCommand', userId, groupId)}*
• 👑 *${global.t('linkQrCommand', userId, groupId)}*
• 👑 *${global.t('requestsCommand', userId, groupId)}*
    `.trim();

    return `
⋆ ︵ ★ 𝐌𝐄𝐍𝐔̀ 𝐀𝐃𝐌𝐈𝐍 ★ ︵ ⋆

${commandList.split('\n').map(line => `୧ ${line.trim()}`).join('\n')}
꒷꒦ ✦ ୧・︶ : ︶ ꒷꒦ ‧₊ ୧
> © ${global.t('poweredBy', userId, groupId)} 𝐒𝐛𝐨𝐫𝐫𝐚 𝐁𝐨𝐭
`.trim();
}
