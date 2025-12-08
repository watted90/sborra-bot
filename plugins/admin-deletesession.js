//Plugin fatto da Axtral_WiZaRd e modificato da dieh
import { existsSync, promises as fsPromises } from 'fs';
import path from 'path';

const handler = async (message, { conn }) => {

  if (global.conn.user.jid !== conn.user.jid) {
    return conn.sendMessage(message.chat, {
      text: "*🚨 Utilizza questo comando direttamente nel numero del bot.*"
    }, { quoted: message });
  }

  try {
    const sessionFolder = "./sessioni/";

    if (!existsSync(sessionFolder)) {
      return await conn.sendMessage(message.chat, {
        text: "*❌ La cartella delle sessioni è vuota o non esiste.*"
      }, { quoted: message });
    }

    const sessionFiles = await fsPromises.readdir(sessionFolder);
    let deletedCount = 0;

    for (const file of sessionFiles) {
      if (file !== "creds.json") {
        await fsPromises.unlink(path.join(sessionFolder, file));
        deletedCount++;
      }
    }

    const responseText = deletedCount === 0
      ? "❗ Le sessioni sono vuote!"
      : `🔥*Sono stati eliminati ${deletedCount} archivi delle sessioni!, Grazie per avermi svuotato*`;

  
    await conn.sendMessage(message.chat, { text: responseText }, { quoted: message });

  } catch (error) {
    console.error('Errore:', error);
    await conn.sendMessage(message.chat, { text: "❌ Errore di eliminazione!" }, { quoted: message });
  }
};

handler.help = ['del_reg_in_session_owner'];
handler.tags = ["owner"];
handler.command = ["ds", "deletesession", "svuotasessioni"]
handler.admin = true;

export default handler;