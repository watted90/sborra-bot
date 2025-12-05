const features = [
  { key: 'antiLink',           label: 'AntiLink' },
  { key: 'antiLinkHard',       label: 'Antilinkhard' },
  { key: 'antimedia',          label: 'Antimedia' },
  { key: 'antispamcomandi',    label: 'AntispamComandi' },
  { key: 'welcome',            label: 'Benvenuto' },
  { key: 'autosticker',        label: 'Autosticker' },
  { key: 'antibot',            label: 'Antibot' },
  { key: 'detect',             label: 'Detect' },
  { key: 'risposte',           label: 'Risposte' },
  { key: 'gpt',                label: 'GPT' },
  { key: 'antispam',           label: 'Antispam' },
  { key: 'antiviewonce',       label: 'Antiviewonce' },
  { key: 'sologruppo',         label: 'SoloGruppo' },
  { key: 'soloprivato',        label: 'SoloPrivato' },
  { key: 'soloadmin',          label: 'soloadmin' },
  { key: 'isBanned',           label: 'BanGruppo' },
  { key: 'antinuke',           label: 'AntiNuke' },
  { key: 'conclave',           label: 'Conclave' },
  { key: 'antiCall',           label: 'AntiCall' },
  { key: 'antiinsta',          label: 'Antiinsta' },
  { key: 'bestemmiometro',     label: 'Bestemmiometro' },
  { key: 'antitrava',          label: 'Antitrava' },
  { key: 'antivirus',          label: 'Antivirus' },
  { key: 'antivoip',           label: 'Antivoip' },
  { key: 'antiArab',           label: 'Antiarab' },
  { key: 'antisondaggi',       label: 'Antisondaggi' },
  { key: 'antitiktok',         label: 'AntiTikTok' },
  { key: 'cinema',             label: 'AbsoluteCinema' },
  { key: 'chatbotPrivato',     label: 'ChatbotPrivato', ownerOnly: true },
];

const STATUS_HEADER = `
╭★────★────★
|ㅤㅤㅤ꒰¡𝐒𝐓𝐀𝐓𝐎 𝐅𝐔𝐍𝐙𝐈𝐎𝐍𝐄!꒱
`;

const STATUS_FOOTER = `
╰★────★────★
`;

const ONLY_OWNER_MSG = '❌ Solo il proprietario può attivare/disattivare questa funzione.';
const ONLY_PRIVATE_CHATBOT_MSG = '❌ ChatbotPrivato può essere attivata solo in chat privata.';

let handler = async (m, { conn, command, args, isOwner, isROwner }) => {
  const featureArg = (args[0] || '').toLowerCase();
  const selected = features.find(f => f.label.toLowerCase() === featureArg);

  if (!selected) return; // Se non c'è feature, non fare nulla

  if (selected.ownerOnly && !(isOwner || isROwner)) {
    await conn.reply(m.chat, ONLY_OWNER_MSG, m);
    return;
  }

  const chats = global.db?.data?.chats || {};
  const chatData = chats[m.chat] || {};

  const isEnable = /attiva|enable|on|1|true/i.test(command.toLowerCase());
  const isDisable = /disabilita|disattiva|disable|off|0|false/i.test(command.toLowerCase());
  const setTo = isEnable && !isDisable;

  if (selected.key === 'antivoip') {
    chatData.antivoip = setTo;
  } else if (selected.key === 'chatbotPrivato') {
    if (m.isGroup) {
      await conn.reply(m.chat, ONLY_PRIVATE_CHATBOT_MSG, m);
      return;
    }
    if (!global.privateChatbot) global.privateChatbot = {};
    global.privateChatbot[m.sender] = setTo;
  } else {
    chatData[selected.key] = setTo;
  }

  if (global.db?.data?.chats) global.db.data.chats[m.chat] = chatData;

  const stateIcon = (selected.key === 'chatbotPrivato'
    ? (global.privateChatbot?.[m.sender] ? '🟢' : '🔴')
    : (chatData[selected.key] ? '🟢' : '🔴'));

  const stateVerb = setTo ? '𝐚𝐭𝐭𝐢𝐯𝐚𝐭𝐚' : '𝐝𝐢𝐬𝐚𝐭𝐭𝐢𝐯𝐚𝐭𝐚';
  const statusMsg = `
${STATUS_HEADER}
|˚₊꒷ ${stateIcon} ꒱ ฅ﹕ *${selected.label}* ${stateVerb} ₊˚๑
${STATUS_FOOTER}
`.trim();

  await conn.reply(m.chat, statusMsg, m);
};

handler.help = ['attiva <feature>', 'disabilita <feature>', 'disattiva <feature>'];
handler.tags = ['Impostazioni Bot', 'owner'];
handler.command = /^(attiva|disabilita|disattiva|enable|disable)/i;
handler.group = true;
handler.ownerOnly = false;

export default handler;