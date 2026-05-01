import { performance } from 'perf_hooks';

const clockString = ms => {
  const days = Math.floor(ms / 86400000);
  const hours = Math.floor((ms % 86400000) / 3600000);
  const minutes = Math.floor((ms % 3600000) / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);

  return `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
};

const handler = async (m, { conn }) => {
  const _uptime = process.uptime() * 1000;
  const uptime = clockString(_uptime);

  const start = performance.now();
  const end = performance.now();
  const speed = (end - start).toFixed(4);

  const info = `⚡𝐕𝚺𝐋𝚯𝐂𝕀𝐓𝜜: ${speed} ms
`;

  
  const buttons = [
    { buttonId: ".ping", buttonText: { displayText: "📡 𝐏𝐢𝐧𝐠" }, type: 1 },
    { buttonId: ".pong", buttonText: { displayText: "⚡ 𝐑𝐢𝐟𝐚𝐢 𝐩𝐨𝐧𝐠" }, type: 1 }
  ];

  const buttonMessage = {
    text: info.trim(),
    footer: "Seleziona un'opzione ↓",
    buttons: buttons,
    headerType: 2,
  };

  await conn.sendMessage(m.chat, buttonMessage, { quoted: m });
};

handler.command = ["pong"];

export default handler;