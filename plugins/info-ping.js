//plugin fatto da axtral e dieh 

import os from 'os';
import { performance } from 'perf_hooks';

let handler = async (m, { conn, usedPrefix }) => {
  try {
    const uptimeMs = process.uptime() * 1000;
    const uptimeStr = clockString(uptimeMs);

    // Calcolo ping
    const startTime = performance.now();
    const endTime = performance.now();
    const speed = (endTime - startTime).toFixed(4);

    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const usedMem = totalMem - freeMem;
    const percentUsed = ((usedMem / totalMem) * 100).toFixed(2);

    const totalMemGB = (totalMem / 1024 / 1024 / 1024).toFixed(2);
    const usedMemGB = (usedMem / 1024 / 1024 / 1024).toFixed(2);

    const botName = global.db?.data?.nomedelbot || "𝐒𝐛𝐨𝐫𝐫𝐚 𝐁𝐨𝐭";

    const botStartTime = new Date(Date.now() - uptimeMs);
    const activationTime = botStartTime.toLocaleString('it-IT', {
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });

    const textMsg = `╭𖧹───ঐ͚͢ᬃ͜𝐏𝕀͢𝚴𝐆 𝐁𝚯͢𝑻ᬃ͜ঐ͚͢───𖧹
┃◈┃•𝑻𝚺𝐌𝑷𝚯: ${uptimeStr}
┃◈┃•𝐏𝕀𝚴𝐆 : ${speed} ms
┃◈┃•𝐑𝜜𝐌: ${usedMemGB} / ${totalMemGB} GB 
┃◈┃(${percentUsed}%)
┃◈┃•𝛬𝐕𝐕𝕀𝚯: 
┃◈┃•${activationTime}
╰𖧹───ঐ͚͢ᬃ͜𝐏𝕀͢𝚴𝐆 𝐁𝚯͢𝑻ᬃ͜ঐ͚͢───𖧹`;

    await conn.sendMessage(m.chat, {
      text: textMsg,
      footer: "𝐁𝒀 𝛬𝑿𝑻𝑹𝜜𝑳 & 𝑾𝛬𝐓𝐓𝑬𝐃",
      buttons: [
        { buttonId: usedPrefix + "pong", buttonText: { displayText: "⚡ 𝐏𝐨𝐧𝐠" }, type: 1 },
        { buttonId: usedPrefix + "ping", buttonText: { displayText: "📡 𝐑𝐢𝐟𝐚𝐢 𝐩𝐢𝐧𝐠" }, type: 1 }
      ],
      headerType: 1
    }, { quoted: m });

  } catch (err) {
    console.error("Errore nell'handler:", err);
  }
};

function clockString(ms) {
  const d = Math.floor(ms / 86400000);
  const h = Math.floor(ms / 3600000) % 24;
    const m = Math.floor(ms / 60000) % 60;
    const s = Math.floor(ms / 1000) % 60;
    return [d, h, m, s].map(v => v.toString().padStart(2, '0')).join(':');
}

handler.help = ['ping'];
handler.tags = ['info'];
handler.command = /^(ping)$/i;

export default handler;