import yts from "yt-search";
import fs from "fs";
import path from "path";
import { spawn } from "child_process";

const TMP_DIR = "./tmp";

// crea cartella tmp se non esiste
if (!fs.existsSync(TMP_DIR)) {
  fs.mkdirSync(TMP_DIR);
}

function downloadYTDLP(url, format) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(TMP_DIR, `${Date.now()}.mp4`);

    const ytdlp = spawn("yt-dlp", [
      "-f", format,
      "-o", filePath,
      url
    ]);

    ytdlp.stderr.on("data", (data) => {
      console.log("yt-dlp:", data.toString());
    });

    ytdlp.on("close", (code) => {
      if (code !== 0) return reject("Errore yt-dlp");
      resolve(filePath);
    });
  });
}

const handler = async (m, { conn, text, command }) => {

  // 🔥 FIX BUTTON RESPONSE
  if (m.message?.buttonsResponseMessage) {
    text = m.message.buttonsResponseMessage.selectedButtonId;
  }

  if (!text) return conn.reply(m.chat, "Inserisci un titolo o link YouTube", m);

  let url, vid;

  // 🔥 Se è link diretto
  if (text.startsWith("http")) {
    url = text;
  } else {
    let search = await yts(text);
    vid = search.videos[0];
    if (!vid) return conn.reply(m.chat, "Nessun risultato trovato", m);
    url = vid.url;
  }

  // 🎵 AUDIO
  if (command === "playaudio-dl" || text.startsWith(".playaudio-dl")) {
    try {
      await conn.reply(m.chat, "🎵 Scarico audio...", m);

      let filePath = await downloadYTDLP(url, "bestaudio[filesize<20M]");

      await conn.sendMessage(
        m.chat,
        { audio: { url: filePath }, mimetype: "audio/mpeg" },
        { quoted: m }
      );

      fs.unlinkSync(filePath);

    } catch (e) {
      console.error(e);
      return conn.reply(m.chat, "❗ Errore durante download audio", m);
    }
  }

  // 🎬 VIDEO
  if (command === "playvideo-dl" || text.startsWith(".playvideo-dl")) {
    try {
      await conn.reply(m.chat, "🎬 Scarico video...", m);

      let filePath = await downloadYTDLP(url, "best[ext=mp4][filesize<25M]");

      await conn.sendMessage(
        m.chat,
        { video: { url: filePath }, mimetype: "video/mp4" },
        { quoted: m }
      );

      fs.unlinkSync(filePath);

    } catch (e) {
      console.error(e);
      return conn.reply(m.chat, "❗ Errore durante download video", m);
    }
  }

  // 🔥 MENU PLAY
  if (command === "play") {
    let search = await yts(text);
    vid = search.videos[0];
    if (!vid) return conn.reply(m.chat, "Nessun risultato trovato", m);

    await conn.sendMessage(
      m.chat,
      {
        image: { url: vid.thumbnail },
        caption: `🎶 *${vid.title}*\n\n⏱ Durata: ${vid.timestamp}\n👁️ Visualizzazioni: ${vid.views}\n\nScegli cosa scaricare:`,
        buttons: [
          {
            buttonId: `.playaudio-dl ${vid.url}`,
            buttonText: { displayText: "🎵 Scarica Audio" },
            type: 1
          },
          {
            buttonId: `.playvideo-dl ${vid.url}`,
            buttonText: { displayText: "🎬 Scarica Video" },
            type: 1
          }
        ],
        headerType: 4
      },
      { quoted: m }
    );
  }
};

handler.command = ["play", "playaudio-dl", "playvideo-dl"];

export default handler;