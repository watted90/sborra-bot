// Definizione delle stringhe in italiano
const lenguajeIT = {
    smsNam2: () => "⚠️ Per favore inserisci il nuovo nome per il gruppo",
    smsNam1: () => "✅ Nome del gruppo modificato con successo!",
    smsNam3: () => "✅ Nome del gruppo modificato con successo!",
    smsConMenu: () => "🔙 Torna al Menu"
  }
  
  let handler = async (m, { conn, args, text }) => {
if (!text) return conn.reply(m.chat, lenguajeIT.smsNam2(), m)
    
    try {
      if(args && args[0]) {
        await conn.groupUpdateSubject(m.chat, text)
      }
      
      await conn.reply(m.chat, lenguajeIT.smsNam1(), m)

    } catch (e) {
      console.error('Errore nel comando setname:', e)
      throw lenguajeIT.smsNam1()
    }
  }
  
handler.help = [
  'setname <text>',        // Inglese
  'setnome <testo>',       // Italiano
  'setnombre <texto>',     // Spagnolo
  'setnome <texto>',       // Portoghese
  'setname_de <text>',     // Tedesco
  'setnom <texte>',        // Francese
  '设置名称 <文本>',          // Cinese
  'установитьимя <текст>',  // Russo
  'تعييناسم <نص>',         // Arabo
  'नामसेट करें <पाठ>',      // Hindi
  'setnama <teks>',        // Indonesiano
  'setisim <metin>'        // Turco
];
handler.tags = ['group'];
handler.command = /^(setname|setnome|setnombre|setnom|设置名称|установитьимя|تعييناسم|नामसेट|setnama|setisim)$/i;


  handler.group = true
  handler.admin = true
  handler.botAdmin = true
  export default handler