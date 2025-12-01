const handler = async (message, { conn, command, text, isAdmin, args }) => {
  if (!isAdmin) throw 'ⓘ Solo un amministratore può eseguire questo comando 👑';

  const chatId = message.chat;
  let mentionedUser = message.mentionedJid?.[0] || message.quoted?.sender;

  if (!mentionedUser && args.length > 0) {
    const possibleNumber = args[0].replace(/[^0-9]/g, '');
    if (possibleNumber.length >= 10) {
      mentionedUser = possibleNumber + '@s.whatsapp.net';
    }
  }

  if (!mentionedUser) {
    const prompt = command === 'muta' 
      ? 'ⓘ Tagga la persona o rispondi al suo messaggio per mutare 👤' 
      : 'ⓘ Tagga la persona o rispondi al suo messaggio per smutare 👤';
    return conn.reply(chatId, prompt, message);
  }

  const groupMetadata = await conn.groupMetadata(chatId);
  const groupAdmins = groupMetadata.participants.filter(p => p.admin).map(p => p.id);
  const groupOwner = groupMetadata.owner || groupAdmins[0] || chatId.split('-')[0] + '@s.whatsapp.net';

  if (mentionedUser === groupOwner) throw 'ⓘ Il proprietario del gruppo non può essere mutato 👑';
  if (mentionedUser === conn.user.jid) throw 'ⓘ Non puoi mutare il bot 🤖';
  if (groupAdmins.includes(mentionedUser) && mentionedUser !== message.sender) {
    throw 'ⓘ Non puoi mutare un altro amministratore ⚠️';
  }

  if (!global.db.data.users[mentionedUser]) {
    global.db.data.users[mentionedUser] = {};
  }
  
  const userData = global.db.data.users[mentionedUser];
  const alreadyMuted = userData.muto === true;

  if (command === 'muta' && alreadyMuted) throw 'ⓘ Questo utente è già mutato 🔇';
  if (command === 'smuta' && !alreadyMuted) throw 'ⓘ Questo utente non è mutato 🔊';

  userData.muto = command === 'muta';
  global.db.data.users[mentionedUser] = userData;

  // Messaggi super minimal come richiesto
  let responseText;
  if (command === 'muta') {
    responseText = `aahah troia mutata @${mentionedUser.split('@')[0]} mo sta zitta`;
  } else {
    responseText = `porcodio chi la ha smutata sentirsi tedua è meglio @${mentionedUser.split('@')[0]}`;
  }

  await conn.sendMessage(chatId, {
    text: responseText,
    mentions: [mentionedUser]
  });
};

handler.command = /^(muta|smuta)$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;

export default handler;
