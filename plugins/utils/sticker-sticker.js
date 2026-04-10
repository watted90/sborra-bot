import { sticker } from '../../lib/sticker.js'
import uploadFile from '../../lib/uploadFile.js'
import uploadImage from '../../lib/uploadImage.js'
import { webp2png } from '../../lib/webp2mp4.js'

// ✦ IMPORTAZIONI SALVAVITA  ✦
import ffmpeg from 'fluent-ffmpeg'
import ffmpegStatic from 'ffmpeg-static'

// Diciamo al bot di usare l'ffmpeg locale scaricato da npm!
ffmpeg.setFfmpegPath(ffmpegStatic)

let handler = async (m, { conn, args, usedPrefix, command }) => {
  let stiker = false
  
  // Newsletter e stile di base
  const cuContext = {
    isForwarded: true,
    forwardingScore: 999,
    forwardedNewsletterMessageInfo: {
        newsletterJid: '120363420674060561@newsletter',
        serverMessageId: '',
        newsletterName: `${global.nomebot || 'Bot'}`
    }
  }

  try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ''
    
    if (/webp|image|video/g.test(mime)) {
      // Limite durata video
      if (/video/g.test(mime) && (q.msg || q).seconds > 10) {
        return conn.sendMessage(m.chat, { text: '୧・︶ ⏰ ︶・୨ `Il video deve durare meno di 10 secondi per creare uno sticker.` ꒷꒦', contextInfo: cuContext }, { quoted: m })
      }
      
      await conn.sendMessage(m.chat, { text: '୧・︶ ⏳ ︶・୨ `Creazione sticker in corso...` ꒷꒦', contextInfo: cuContext }, { quoted: m })
      
      let img = await q.download?.()
      if (!img) return conn.sendMessage(m.chat, { text: '୧・︶ 📸 ︶・୨ `Impossibile scaricare il file. Rispondi correttamente al media.` ꒷꒦', contextInfo: cuContext }, { quoted: m })

      if (!global.support) {
        global.support = {
          ffmpeg: true, ffprobe: true, ffmpegWebp: true,
          convert: true, magick: false, gm: false, find: false
        }
      }

      let pack = global.packname || '𝐂𝐡𝐚𝐭𝐔'
      let author = global.author || '𝐁𝐨𝐭'

      try {
        stiker = await sticker(img, false, pack, author)
      } catch (e) {
        console.error('Creazione diretta fallita, provo con upload:', e)
        let out
        try {
          if (/webp/g.test(mime)) out = await webp2png(img)
          else if (/image/g.test(mime)) out = await uploadImage(img)
          else if (/video/g.test(mime)) out = await uploadFile(img)
          
          if (typeof out !== 'string') out = await uploadImage(img)
          
          stiker = await sticker(false, out, pack, author)
        } catch (uploadError) {
          console.error('Caricamento fallito:', uploadError)
          stiker = false
        }
      }
    } else if (args[0]) {
      if (isUrl(args[0])) {
        if (!global.support) {
          global.support = { ffmpeg: true, ffprobe: true, ffmpegWebp: true, convert: true, magick: false, gm: false, find: false }
        }
        let pack = global.packname || '𝐂𝐡𝐚𝐭𝐔𝐧𝐢𝐭𝐲'
        let author = global.author || '𝐁𝐨𝐭'
        
        stiker = await sticker(false, args[0], pack, author)
      } else {
        return conn.sendMessage(m.chat, { text: '୧・︶ 🔗 ︶・୨ `L\'URL fornito non è valido. Assicurati che sia un link diretto.` ꒷꒦', contextInfo: cuContext }, { quoted: m })
      }
    } else {
      return conn.sendMessage(m.chat, { text: '୧・︶ 📸 ︶・୨ `Rispondi a un\'immagine, video o GIF, oppure invia l\'URL di un\'immagine.` ꒷꒦', contextInfo: cuContext }, { quoted: m })
    }
  } catch (e) {
    console.error(e)
    stiker = false
  }
  
  if (stiker) {
    await conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, false, { contextInfo: cuContext })
  } else {
    conn.sendMessage(m.chat, { text: '୧・︶ ❌ ︶・୨ `Si è verificato un errore durante la creazione dello sticker.` ꒷꒦', contextInfo: cuContext }, { quoted: m })
  }
}

handler.help = ['stiker (caption|reply media)', 'stiker <url>', 'stikergif (caption|reply media)', 'stikergif <url>']
handler.tags = ['sticker']
handler.command = /^s(tic?ker)?(gif)?(wm)?$/i
export default handler

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}