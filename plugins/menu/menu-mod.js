import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const handler = async (message, { conn, usedPrefix, command, isModerator, isAdmin }) => {
    const userId = message.sender;
    const groupId = message.isGroup ? message.chat : null;
    
    const menuText = generateMenuText(usedPrefix, userId, groupId);
    const imagePath = path.join(__dirname, '../../media/menu/menu.jpeg');
    const footerText = global.t('chooseMenu', userId, groupId) || 'Scegli un menu:';
    const mainMenuText = global.t('mainMenuButton', userId, groupId) || '🏠 Menu Principale';
    const adminMenuText = global.t('menuAdmin', userId, groupId) || '🛡️ Menu Admin';
    const ownerMenuText = global.t('menuOwner', userId, groupId) || '👑 Menu Owner';
    const securityMenuText = global.t('menuSecurity', userId, groupId) || '🚨 Menu Sicurezza';
    const fmMenuText = global.t('menuFm', userId, groupId) || '🎙️ Menu FM';
    const groupMenuText = global.t('groupMenuButton', userId, groupId) || '👥 Menu Gruppo';
    
    await conn.sendMessage(message.chat, {
        image: fs.readFileSync(imagePath),
        caption: menuText,
        footer: footerText,
        buttons: [
            { buttonId: `${usedPrefix}menu`, buttonText: { displayText: '🏠 𝐌𝐞𝐧𝐮̀ 𝐩𝐫𝐢𝐧𝐜𝐢𝐩𝐚𝐥𝐞' }, type: 1 },
            { buttonId: `${usedPrefix}menuadmin`, buttonText: { displayText: '🛡️ 𝐌𝐞𝐧𝐮̀ 𝐀𝐝𝐦𝐢𝐧' }, type: 1 },
            { buttonId: `${usedPrefix}menuowner`, buttonText: { displayText: '👑 𝐌𝐞𝐧𝐮̀ 𝐎𝐰𝐧𝐞𝐫' }, type: 1 },
            { buttonId: `${usedPrefix}menusicurezza`, buttonText: { displayText: '🚨 𝐌𝐞𝐧𝐮̀ 𝐒𝐢𝐜𝐮𝐫𝐞𝐳𝐳𝐚' }, type: 1 },
            { buttonId: `${usedPrefix}menufm`, buttonText: { displayText: '🎙️ 𝐌𝐞𝐧𝐮̀ 𝐅𝐌' }, type: 1 },
            { buttonId: `${usedPrefix}menugruppo`, buttonText: { displayText: '👥 𝐌𝐞𝐧𝐮̀ 𝐆𝐫𝐮𝐩𝐩𝐨' }, type: 1 },
        ],
        viewOnce: true,
        headerType: 4,
    }, { quoted: message });
};

handler.help = [
  'menumod',
  'menumoderatore',
  'modmenu',
  'moderatormenu',
  'menúmod',
  'menúmoderador',
  'menumod',
  'mod',
  'modmenu',
  'modmenü'
];
handler.tags = ['menu'];
handler.command = /^(menumod|menumoderatore|modmenu|moderatormenu|menúmod|menúmoderador|menumod|mod|modmenu|modmenü)$/i;


export default handler;

function generateMenuText(prefix, userId, groupId) {
    const vs = global.vs || '8.0';
    const collab = global.collab || 'ChatUnity x 333';
    
    const createSection = (title, commands) => {
        const commandLines = commands.trim().split('\n').map(c => `│ ${c.trim()}`).join('\n');
        return `╭★ ${title} ★╮\n${commandLines}\n╰★────────────★╯`;
    };
    
    const sections = [
        createSection('👥 Gestione Membri', `
${prefix}kick @user 
${prefix}muta @user 
${prefix}warn @user 
${prefix}unwarn @user )
${prefix}listawarn )`),
        
        createSection('📋 Informazioni Gruppo', `
${prefix}link 
${prefix}linkqr 
${prefix}inattivi 
${prefix}regole 
${prefix}moderatori )`),
        
        createSection('🏷️ Tag e Comunicazione', `
${prefix}tagall 
${prefix}hidetag 
${prefix}traduci
${prefix}segnala 
${prefix}richieste)`),
        
       
        createSection('🎵 Media e Fun', `
${prefix}playlist
${prefix}consiglia 
${prefix}simula
${prefix}tomp3 `),
    ];
    
    return `
⋆ ︵ ★ 𝐌𝐄𝐍𝐔̀ 𝐌𝐎𝐃𝐄𝐑𝐀𝐓𝐎𝐑𝐄 ★ ︵ ⋆

${sections.join('\n\n')}

꒷꒦ ✦ ୧・︶ : ︶ ꒷꒦ ‧₊ ୧
> © ${global.t('poweredBy', userId, groupId)} 𝐒𝐛𝐨𝐫𝐫𝐚 𝐁𝐨𝐭
`.trim();
}