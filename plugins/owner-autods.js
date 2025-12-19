let activeDSGroups = {}

let handler = async (m, { conn }) => {
  let jid = m.chat
  if (!jid.endsWith('@g.us')) throw '❌ Questo comando funziona solo nei gruppi!'

  if (activeDSGroups[jid]) {
    return m.reply('✅ Il ds automatico è già attivo in questo gruppo!')
  }

  m.reply('✅ Ds automatico attivo in questo gruppo, ogni 30 minuti invierò un `.ds` per svuotare le sessioni (solo in questo gruppo obv)')

  
  await conn.sendMessage(jid, { text: `.ds` })

  
  activeDSGroups[jid] = setInterval(async () => {
    await conn.sendMessage(jid, { text: `.ds` })
  }, 30 * 60 * 1000) 
}

handler.command = ['autods']
handler.tags = ['bot']
handler.rowner = true
handler.help = ['autods']

export default handler