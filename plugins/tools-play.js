import fetch from "node-fetch";
import yts from 'yt-search';
import axios from "axios";

const formatAudio = ['mp3', 'm4a', 'webm', 'acc', 'flac', 'opus', 'ogg', 'wav'];
const formatVideo = ['360', '480', '720', '1080'];
const MAX_DURATION = 600;

global.APIs = {
  xyro: { url: "https://xyro.site", key: null },
  yupra: { url: "https://api.yupra.my.id", key: null },
  vreden: { url: "https://api.vreden.web.id", key: null },
  delirius: { url: "https://api.delirius.store", key: null },
  zenzxz: { url: "https://api.zenzxz.my.id", key: null },
  siputzx: { url: "https://api.siputzx.my.id", key: null }
};

async function fetchFromApis(apis) {
  for (const { api, endpoint, extractor } of apis) {
    try {
      const res = await fetch(endpoint, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      const json = await res.json();
      const url = extractor(json);
      if (url) {
        return { api, url };
      }
    } catch (e) {}
  }
  throw new Error(`
꒰🩸꒱ ◦•≫ 𝐄𝐑𝐑𝐎𝐑𝐄
 ★・・・・・・・★
  𝐍𝐞𝐬𝐬𝐮𝐧 𝐥𝐢𝐧𝐤 𝐯𝐚𝐥𝐢𝐝𝐨 𝐭𝐫𝐨𝐯𝐚𝐭𝐨!
 ★・・・・・・・★
`);
}

async function getAud(url) {
  const apis = [
    { api: 'Xyro', endpoint: `${global.APIs.xyro.url}/download/youtubemp3?url=${encodeURIComponent(url)}`, extractor: res => res.result?.dl },
    { api: 'Yupra', endpoint: `${global.APIs.yupra.url}/api/downloader/ytmp3?url=${encodeURIComponent(url)}`, extractor: res => res.resultado?.enlace },
    { api: 'Vreden', endpoint: `${global.APIs.vreden.url}/api/ytmp3?url=${encodeURIComponent(url)}`, extractor: res => res.result?.download?.url },
    { api: 'Delirius', endpoint: `${global.APIs.delirius.url}/download/ymp3?url=${encodeURIComponent(url)}`, extractor: res => res.data?.download?.url },
    { api: 'ZenzzXD', endpoint: `${global.APIs.zenzxz.url}/downloader/ytmp3?url=${encodeURIComponent(url)}`, extractor: res => res.download_url },
    { api: 'ZenzzXD v2', endpoint: `${global.APIs.zenzxz.url}/downloader/ytmp3v2?url=${encodeURIComponent(url)}`, extractor: res => res.download_url }
  ];
  return await fetchFromApis(apis);
}

async function getVid(url) {
  const apis = [
    { api: 'Xyro', endpoint: `${global.APIs.xyro.url}/download/youtubemp4?url=${encodeURIComponent(url)}&quality=360`, extractor: res => res.result?.dl },
    { api: 'Yupra', endpoint: `${global.APIs.yupra.url}/api/downloader/ytmp4?url=${encodeURIComponent(url)}`, extractor: res => res.resultado?.formatos?.[0]?.url },
    { api: 'Vreden', endpoint: `${global.APIs.vreden.url}/api/ytmp4?url=${encodeURIComponent(url)}`, extractor: res => res.result?.download?.url },
    { api: 'Delirius', endpoint: `${global.APIs.delirius.url}/download/ytmp4?url=${encodeURIComponent(url)}`, extractor: res => res.data?.download?.url },
    { api: 'ZenzzXD', endpoint: `${global.APIs.zenzxz.url}/downloader/ytmp4?url=${encodeURIComponent(url)}`, extractor: res => res.download_url },
    { api: 'ZenzzXD v2', endpoint: `${global.APIs.zenzxz.url}/downloader/ytmp4v2?url=${encodeURIComponent(url)}`, extractor: res => res.download_url }
  ];
  return await fetchFromApis(apis);
}

const handler = async (m, { conn, text, usedPrefix, command }) => {
  try {
    if (!text.trim()) {
      await conn.sendMessage(m.chat, {
        text: `
╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ ❗ 𝐈𝐧𝐬𝐞𝐫𝐢𝐬𝐜𝐢 𝐢𝐥 𝐭𝐢𝐭𝐨𝐥𝐨 𝐨 𝐢𝐥 𝐥𝐢𝐧𝐤
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
`,
        contextInfo: {
          forwardingScore: 99,
          isForwarded: true
        }
      }, { quoted: m });
      return;
    }

    if (command === 'playaudio' || command === 'playvideo') {
      const search = await yts(text);
      if (!search.all.length) {
        await conn.sendMessage(m.chat, {
          text: `
╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ ❗ 𝐍𝐞𝐬𝐬𝐮𝐧 𝐫𝐢𝐬𝐮𝐥𝐭𝐚𝐭𝐨 𝐭𝐫𝐨𝐯𝐚𝐭𝐨
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
`
        }, { quoted: m });
        return;
      }

      const videoInfo = search.all[0];
      const { url, title, thumbnail } = videoInfo;
      const thumb = (await conn.getFile(thumbnail))?.data;

      if (command === 'playaudio') {
        await conn.sendMessage(m.chat, { text: "🎵 Audio in arrivo..." }, { quoted: m });
        const { url: downloadUrl } = await getAud(url);
        return await conn.sendMessage(m.chat, {
          audio: { url: downloadUrl },
          mimetype: "audio/mpeg"
        }, { quoted: m });
      }

      if (command === 'playvideo') {
        await conn.sendMessage(m.chat, { text: "🎬 Video in arrivo..." }, { quoted: m });

        const { url: downloadUrl } = await getVid(url);

        if (downloadUrl) {
          return await conn.sendMessage(m.chat, {
            video: { url: downloadUrl },
            fileName: `${title}.mp4`,
            mimetype: 'video/mp4',
            caption: '✅ 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐜𝐨𝐦𝐩𝐥𝐞𝐭𝐚𝐭𝐨!',
            thumbnail: thumb,

            buttons: [
              { 
                buttonId: `${usedPrefix}playaudio ${title}`, 
                buttonText: { displayText: "🎵 Converti in MP3" }, 
                type: 1 
              }
            ],

            headerType: 4
          }, { quoted: m });
        }
      }

      return;
    }

    if (command === 'play') {
      const search = await yts(text);
      if (!search.all.length) {
        await conn.sendMessage(m.chat, { text: "❗ Nessun risultato trovato" }, { quoted: m });
        return;
      }

      const videoInfo = search.all[0];

      if (videoInfo.seconds > MAX_DURATION) {
        return await conn.sendMessage(m.chat, { text: "⏳ Il video supera la durata massima." }, { quoted: m });
      }

      const { title, thumbnail, timestamp, views, ago, url, author } = videoInfo;
      const thumb = (await conn.getFile(thumbnail))?.data;

      const infoMessage = `
🎥 *INFO VIDEO*

📌 *Titolo:* ${title}
⏳ *Durata:* ${timestamp}
👀 *Views:* ${views}
🧾 *Canale:* ${author?.name}
📅 *Pubblicato:* ${ago}
🔗 *Link:* ${url}

Scegli il formato:
`;

      await conn.sendMessage(m.chat, {
        text: infoMessage,
        buttons: [
          { buttonId: `${usedPrefix}playaudio ${title}`, buttonText: { displayText: "🎵 AUDIO" }, type: 1 },
          { buttonId: `${usedPrefix}playvideo ${title}`, buttonText: { displayText: "🎬 VIDEO" }, type: 1 }
        ],
        headerType: 4,
        contextInfo: {
          externalAdReply: {
            mediaType: 1,
            previewType: 0,
            mediaUrl: url,
            sourceUrl: url,
            thumbnail: thumb
          }
        }
      }, { quoted: m });

      return;
    }

  } catch (error) {
    await conn.sendMessage(m.chat, {
      text: error.message
    }, { quoted: m });
  }
};

handler.command = handler.help = ['play', 'playaudio', 'playvideo', 'ytmp4', 'play2'];
handler.tags = ['downloader'];

export default handler;
