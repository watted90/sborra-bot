let handler = async (m, { conn, text }) => {
  if (!text) return m.reply('❌ Inserisci un numero.\nEsempio:\n.fp +39 389 201 6995')

  let number = text.replace(/[^0-9]/g, '')

  if (!number) return m.reply('❌ Numero non valido.')

  let jid = number + '@s.whatsapp.net'

  try {
    let pp = await conn.profilePictureUrl(jid, 'image')
      .catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')

    await conn.sendFile(m.chat, pp, 'fp.jpg', `📸 Foto profilo di:\n+${>

  } catch (e) {
    m.reply('❌ Impossibile ottenere la foto profilo.')
  }
}

handler.help = ['fp <numero>']
handler.tags = ['owner']
handler.command = ['fp']
handler.owner = true

export default handler






