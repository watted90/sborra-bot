import fetch from "node-fetch";
import yts from "yt-search";

const MAX_DURATION = 600; // max 10 minuti

// --------------------------
//  API FUNZIONANTI 2025
// --------------------------

async function getAud(url) {
  const endpoint = `https://api.tioo.eu.org/api/download/ytmp3?url=${encodeURIComponent(url)}`;

  const res = await fetch(endpoint);
  const json = await res.json();

  if (!json.status || !json.data?.url) {
    throw new Error(`
꒰🩸꒱ ◦•≫ 𝐄𝐑𝐑𝐎𝐑𝐄
 ★・・・・・・・★
  Nessun link valido trovato! (AUDIO)
 ★・・・・・・・★
`);
  }

  return { api: "Tioo", url: json.data.url };
}

async function getVid(url) {
  const endpoint = `https://api.tioo.eu.org/api/download/ytmp4?url=${encodeURIComponent(url)}`;

  const res = await fetch(endpoint);
  const json = await res.json();

  if (!json.status || !json.data?.url) {
    throw new Error(`
꒰🩸꒱ ◦•≫ 𝐄𝐑𝐑𝐎𝐑𝐄
 ★・・・・・・・★
  Nessun link valido trovato! (VIDEO)
 ★・・・・・・・★
`);
  }

  return { api: "Tioo", url: json.data.url };
}

// --------------------------
//      HANDLER
// --------------------------

const handler = async (m, { conn, text, usedPrefix, command }) => {
  try {
    if (!text.trim()) {
      await conn.sendMessage(m.chat, {
        text: `
╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ ❗ 𝐈𝐧𝐬𝐞𝐫𝐢𝐬𝐜𝐢 𝐢𝐥 𝐭𝐢𝐭𝐨𝐥𝐨 𝐨 𝐥𝐢𝐧𝐤!
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
`
      }, { quoted: m });
      return;
    }

    // 🔎 Cerca il video
    const search = await yts(text);
    if (!search.all.length) {
      await conn.sendMessage(m.chat, {
        text: `
╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ ❗ 𝐍𝐞𝐬𝐬𝐮𝐧 𝐫𝐢𝐬𝐮𝐥𝐭𝐚𝐭𝐨 𝐭𝐫𝐨𝐯𝐚𝐭𝐨!
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
`
      }, { quoted: m });
      return;
    }

    const video = search.all[0];
    const { url, title, thumbnail, timestamp, views, author, ago } = video;

    // ⏳ durata video
    if (video.seconds > MAX_DURATION) {
      return await conn.sendMessage(m.chat, {
        text: `
╭★────★────★────★
|ㅤ꒰¡𝐕𝐈𝐃𝐄𝐎 𝐓𝐑𝐎𝐏𝐏𝐎 𝐋𝐔𝐍𝐆𝐎!꒱
| ⏳ Massimo: 10 minuti
| ⌛ Durata: ${timestamp}
╰★────★────★────★
`
      }, { quoted: m });
    }

    // 🌟 pulsanti scelta formato
    const thumb = (await conn.getFile(thumbnail))?.data;

    await conn.sendMessage(m.chat, {
      text: `
⋆ ︵︵ ★ 🎥 𝐈𝐍𝐅𝐎 𝐕𝐈𝐃𝐄𝐎 🎥 ★ ︵︵ ⋆

✍️ *Titolo:* ${title}
⏳ *Durata:* ${timestamp}
👀 *Views:* ${new Intl.NumberFormat().format(views)}
🔰 *Canale:* ${author?.name}
📅 *Pubblicato:* ${ago}
🔗 *Link:* ${url}

Scegli un formato ↓
`,
      buttons: [
        { buttonId: `${usedPrefix}playaudio ${title}`, buttonText: { displayText: "🎵 Audio" }, type: 1 },
        { buttonId: `${usedPrefix}playvideo ${title}`, buttonText: { displayText: "🎬 Video" }, type: 1 }
      ],
      headerType: 4,
      viewOnce: true,
      contextInfo: {
        externalAdReply: {
          mediaUrl: url,
          sourceUrl: url,
          thumbnail: thumb,
          mediaType: 1,
        }
      }
    }, { quoted: m });

    // --------------------------
    //  PLAY AUDIO DIRETTO
    // --------------------------
    if (command === "playaudio") {
      await conn.sendMessage(m.chat, { text: "🎵 Sto scaricando l'audio..." }, { quoted: m });

      const { url: dl } = await getAud(url);

      await conn.sendMessage(m.chat, {
        audio: { url: dl },
        mimetype: "audio/mpeg"
      }, { quoted: m });
    }

    // --------------------------
    //  PLAY VIDEO DIRETTO
    // --------------------------
    if (command === "playvideo") {
      await conn.sendMessage(m.chat, { text: "🎬 Sto scaricando il video..." }, { quoted: m });

      const { url: dl } = await getVid(url);

      await conn.sendMessage(m.chat, {
        video: { url: dl },
        mimetype: "video/mp4",
        fileName: `${title}.mp4`,
        caption: "🎉 Video pronto!"
      }, { quoted: m });
    }

  } catch (error) {
    await conn.sendMessage(m.chat, {
      text: `
꒰🩸꒱ ◦•≫ 𝐄𝐑𝐑𝐎𝐑𝐄
 ★・・・・・・・★
  ${error.message}
 ★・・・・・・・★
`
    }, { quoted: m });
  }
};

handler.command = handler.help = ["play", "playaudio", "playvideo"];
handler.tags = ["downloader"];

export default handler;