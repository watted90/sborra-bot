//Plugin fatto da Axtral_WiZaRd
  let handler = async (m, { conn }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q || q.msg).mimetype || q.mediaType || ''
  
  if (!/video|audio/.test(mime)) throw `Rispondi a un video o un audio`
  
  let media = await q.download()
  if (!media) throw 'Errore durante il download'


  conn.sendMessage(
    m.chat,
    { audio: media, mimetype: 'audio/mpeg' },
    { quoted: m }
  )
}

handler.alias = ['tomp3', 'toaudio']
handler.command = /^to(mp3|audio)$/i

export default handler
