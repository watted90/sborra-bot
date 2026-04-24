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
    const footerText = global.t('chooseMenu', userId, groupId) || 'Scegli un menu:';
    const mainMenuText = global.t('mainMenuButton', userId, groupId) || '🏠 Menu Principale';
    const adminMenuText = global.t('menuAdmin', userId, groupId) || '🛡️ Menu Admin';
    const securityMenuText = global.t('menuSecurity', userId, groupId) || '🚨 Menu Sicurezza';
    const groupMenuText = global.t('menuGroup', userId, groupId) || '👥 Menu Gruppo';
    const fmMenuText = global.t('menuFm', userId, groupId) || '🎙️ Menu FM';
    await conn.sendMessage(message.chat, {
        image: fs.readFileSync(imagePath),
        caption: menuText,
        footer: '𝐒𝐜𝐞𝐠𝐥𝐢 𝐮𝐧 𝐦𝐞𝐧𝐮̀',
        buttons: [
            { buttonId: `${usedPrefix}menu`, buttonText: { displayText: '🏠 𝐌𝐞𝐧𝐮̀ 𝐩𝐫𝐢𝐧𝐜𝐢𝐩𝐚𝐥𝐞' }, type: 1 },
            { buttonId: `${usedPrefix}menuadmin`, buttonText: { displayText: '🛡️ 𝐌𝐞𝐧𝐮̀ 𝐀𝐝𝐦𝐢𝐧' }, type: 1 },
            { buttonId: `${usedPrefix}menusicurezza`, buttonText: { displayText: '🚨 𝐌𝐞𝐧𝐮̀ 𝐒𝐢𝐜𝐮𝐫𝐞𝐳𝐳𝐚' }, type: 1 },
            { buttonId: `${usedPrefix}menugruppo`, buttonText: { displayText: '👥 𝐌𝐞𝐧𝐮̀ 𝐒𝐯𝐚𝐠𝐨' }, type: 1 },
            { buttonId: `${usedPrefix}menufm`, buttonText: { displayText: '🎙️ 𝐌𝐞𝐧𝐮̀ 𝐅𝐌' }, type: 1 },
            { buttonId: `${usedPrefix}menumod`, buttonText: { displayText: '⭐ 𝐌𝐞𝐧𝐮̀ 𝐌𝐨𝐝' }, type: 1 },
        ],
        viewOnce: true,
        headerType: 4,
    }, { quoted: message });
};
handler.help = [
  'menuowner',
  'menupadrone',
  'menúpropietario',
  'menupropietario',
  'menu_dono',
  'menupainelowner',
  'besitzermenü',
  'eigentümermenü',
  '所有者菜单',
  '主人菜单',
  'менювладельца',
  'менюсоздателя',
  'قائمةالمالك',
  'قائمةالمؤسس',
  'मालिकमेनू',
  'स्वामीमेनू',
  'menuowner_fr',
  'menucréateur',
  'menuowner_id',
  'menuowner_tr'
];
handler.tags = ['menu'];
handler.command = /^(menuowner|menupadrone|menúpropietario|menupropietario|menu_dono|menupainelowner|besitzermenü|eigentümermenü|所有者菜单|主人菜单|менювладельца|менюсоздателя|قائمةالمالك|قائمةالمؤسس|मालिकमेनू|स्वामीमेनू|menuowner_fr|menucréateur|menuowner_id|menuowner_tr)$/i;

export default handler;
function generateMenuText(prefix, userId, groupId) {
    const vs = global.vs || '8.0';
    const collab = global.collab || 'ONE PIECE';
    const menuTitle = global.t('menuownerTitle', userId, groupId);
    const versionText = global.t('menuownerVersionLabel', userId, groupId);
    const supportText = global.t('menuownerSupportLabel', userId, groupId);
    const commandList = `
• ⚙️ *${prefix}${global.t('menuownerManageCommand', userId, groupId)}* @
• ⚙️ *${prefix}${global.t('menuownerSetGroupsCommand', userId, groupId)}*
• ⚙️ *${prefix}${global.t('menuownerAddGroupsCommand', userId, groupId)}* @
• ⚙️ *${prefix}${global.t('menuownerResetGroupsCommand', userId, groupId)}* @
• ⚙️ *${prefix}${global.t('menuownerBanUserCommand', userId, groupId)}* @
• ⚙️ *${prefix}${global.t('menuownerUnbanUserCommand', userId, groupId)}* @
• ⚙️ *${prefix}${global.t('menuownerCleanupCommand', userId, groupId)}* (+)
• ⚙️ *${prefix}${global.t('menuownerGetFileCommand', userId, groupId)}*
• ⚙️ *${prefix}${global.t('menuownerSaveCommand', userId, groupId)}* (${global.t('menuownerPluginParam', userId, groupId)})
• ⚙️ *${prefix}${global.t('menuownerDpCommand', userId, groupId)}* (${global.t('menuownerPluginParam', userId, groupId)})
• ⚙️ *${prefix}${global.t('menuownerGetPluginCommand', userId, groupId)}*
• ⚙️ *${prefix}${global.t('menuownerJoinCommand', userId, groupId)}* + ${global.t('menuownerLinkParam', userId, groupId)}
• ⚙️ *${prefix}${global.t('menuownerOutCommand', userId, groupId)}*
• ⚙️ *${prefix}${global.t('menuownerPrefixCommand', userId, groupId)}* (?)
• ⚙️ *${prefix}${global.t('menuownerResetPrefixCommand', userId, groupId)}*
• ⚙️ *${prefix}${global.t('menuownerGodModeCommand', userId, groupId)}* {${global.t('menuownerAutoAdminParam', userId, groupId)}}
• ⚙️ *${prefix}${global.t('menuownerResetCommand', userId, groupId)}* @
• ⚙️ *${prefix}${global.t('menuownerAddCommand', userId, groupId)}* (${global.t('menuownerNumMessagesParam', userId, groupId)}) @
• ⚙️ *${prefix}${global.t('menuownerRemoveCommand', userId, groupId)}* (${global.t('menuownerNumMessagesParam', userId, groupId)}) @
• ⚙️ *${prefix}${global.t('menuownerEveryGroupCommand', userId, groupId)}* (${global.t('menuownerCommandParam', userId, groupId)})
• ⚙️ *${prefix}${global.t('menuownerBanChatCommand', userId, groupId)}* (${global.t('menuownerGroupParam', userId, groupId)})
• ⚙️ *${prefix}${global.t('menuownerUnbanChatCommand', userId, groupId)}* (${global.t('menuownerGroupParam', userId, groupId)})
• ⚙️ *${prefix}${global.t('menuownerRestartCommand', userId, groupId)}*
• ⚙️ *${prefix}${global.t('menuownerShutdownBotCommand', userId, groupId)}*
• ⚙️ *${prefix}${global.t('menuownerUpdateBotCommand', userId, groupId)}*
    `.trim();
    return `
⋆ ︵ ★ ${menuTitle} ★ ︵ ⋆


*${global.t('menuownerReservedCommands', userId, groupId)}*


꒷꒦ ✦ ୧・︶ : ︶ ꒷꒦ ‧₊ ୧
${commandList.split('\n').map(line => line.trim() ? `୧ ${line.trim()}` : '').filter(Boolean).join('\n')}
꒷꒦ ✦ ୧・︶ : ︶ ꒷꒦ ‧₊ ୧


╰♡꒷ ๑ ⋆˚₊⋆───ʚ˚ɞ───⋆˚₊⋆ ๑ ⪩
  ୧・*𝐕𝐄𝐑𝐒𝐈𝐎𝐍𝐄:* ${vs}
  ୧・*${supportText}:* (.supporto)
╰♡꒷ ๑ ⋆˚₊⋆───ʚ˚ɞ───⋆˚₊⋆ ๑ ⪩
`.trim();
}