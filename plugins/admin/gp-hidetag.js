let handler = async (m, { conn, text }) => {

  if (!m.isGroup) return

  let groupMetadata = await conn.groupMetadata(m.chat)
  let participants = groupMetadata.participants || []

  let users = participants.map(u => u.id)

  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q)?.mimetype || ''
  let isMedia = /image|video|sticker|audio/.test(mime)

  let captionText = text ? text.trim() : ''

  try {

    if (isMedia) {
      let media = await q.download()
      if (!media) throw 'Errore download media'

      if (q.mtype === 'imageMessage') {
        await conn.sendMessage(m.chat, {
          image: media,
          caption: captionText,
          mentions: users
        }, { quoted: m })

      } else if (q.mtype === 'videoMessage') {
        await conn.sendMessage(m.chat, {
          video: media,
          caption: captionText,
          mentions: users
        }, { quoted: m })

      } else if (q.mtype === 'audioMessage') {
        await conn.sendMessage(m.chat, {
          audio: media,
          mimetype: 'audio/mp4',
          mentions: users
        }, { quoted: m })

      } else if (q.mtype === 'stickerMessage') {
        await conn.sendMessage(m.chat, {
          sticker: media,
          mentions: users
        }, { quoted: m })
      }

    } else {
      await conn.sendMessage(m.chat, {
        text: captionText || '‎',
        mentions: users
      }, { quoted: m })
    }

  } catch (e) {
    console.error(e)
    await conn.sendMessage(m.chat, {
      text: '❌ Errore nel tagging.'
    }, { quoted: m })
  }
}

handler.command = /^(hidetag|tag)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler