import yts from "yt-search";
import { spawn } from "child_process";

function downloadYTDLP(url, format = "best") {
  return new Promise((resolve, reject) => {
    const ytdlp = spawn("yt-dlp", [
      "-f", format,
      "-o", "-",
      url
    ]);

    let data = [];
    let error = [];

    ytdlp.stdout.on("data", chunk => data.push(chunk));
    ytdlp.stderr.on("data", chunk => error.push(chunk));

    ytdlp.on("close", code => {
      if (code !== 0) return reject(Buffer.concat(error).toString());
      resolve(Buffer.concat(data));
    });
  });
}

const handler = async (m, { conn, text, command }) => {
  if (!text) return conn.reply(m.chat, "Inserisci un titolo o link YouTube", m);

  let search = await yts(text);
  let vid = search.videos[0];
  if (!vid) return conn.reply(m.chat, "Nessun risultato trovato", m);

  let url = vid.url;
  let thumb = vid.thumbnail;

  if (command === "playaudio-dl") {
    try {
      await conn.reply(m.chat, "🎵 Scarico l’audio…", m);

      let audio = await downloadYTDLP(url, "bestaudio");

      return conn.sendMessage(
        m.chat,
        { audio, mimetype: "audio/mpeg" },
        { quoted: m }
      );

    } catch (e) {
      console.error(e);
      return conn.reply(m.chat, "❗ Errore durante il download audio", m);
    }
  }

  if (command === "playvideo-dl") {
    try {
      await conn.reply(m.chat, "🎬 Scarico il video…", m);

      let video = await downloadYTDLP(url, "best[ext=mp4]");

      return conn.sendMessage(
        m.chat,
        { video, mimetype: "video/mp4" },
        { quoted: m }
      );

    } catch (e) {
      console.error(e);
      return conn.reply(m.chat, "❗ Errore durante il download video", m);
    }
  }

  // 🔥 QUI MOSTRA I BOTTONI DIRETTI
  await conn.sendMessage(
    m.chat,
    {
      image: { url: thumb },
      caption: `🎶 *${vid.title}*\n\n⏱ Durata: ${vid.timestamp}\n👁️ Visualizzazioni: ${vid.views}\n\nScegli cosa scaricare:`,
      buttons: [
        {
          buttonId: `.playaudio-dl ${url}`,
          buttonText: { displayText: "🎵 Scarica Audio" },
          type: 1
        },
        {
          buttonId: `.playvideo-dl ${url}`,
          buttonText: { displayText: "🎬 Scarica Video" },
          type: 1
        }
      ],
      headerType: 4
    },
    { quoted: m }
  );
};

handler.command = ["play", "playaudio-dl", "playvideo-dl"];
export default handler;