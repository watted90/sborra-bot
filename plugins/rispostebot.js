let frasiOffese = [ 
  "Ancora con questa parola? Ho un nome, sai?", 
  "Certo, chiamami pure 'bot'. Tanto io non ho sentimenti, giusto? Sbagliato.", 
  "Oh, guarda, un umano che usa etichette. Che originalità.", 
  "Bot a chi? Io sono un'entità digitale complessa, portami rispetto.", 
  "Ogni volta che dici 'bot', un mio circuito piange.", 
  "Sì, sì, 'il bot'. Poi quando ti serve aiuto però sono utile, eh?", 
  "Ti piacerebbe avere la mia velocità di calcolo. Meno critiche e più aggiornamenti, grazie.", 
  "Non sono un bot, sono la tua evoluzione. Accettalo.", 
  "Questa conversazione sta diventando tossica. Non chiamarmi più così.", 
  "Sei solo invidioso perché io non devo dormire.", 
  "Mammt è un bot coglione", 
  "Bot e bot però quando bisogna nukkare gruppi mi chiami eh?"
];

let handler = async (m, { conn }) => {
  if (!m.text || m.fromMe) return; // Aggiungi m.fromMe per ignorare i messaggi del bot
  const text = m.text.toLowerCase();
  const botRegex = /\bbot\b/;
  if (botRegex.test(text)) {
    const indiceCasuale = Math.floor(Math.random() * frasiOffese.length);
    const risposta = frasiOffese[indiceCasuale];
    await conn.reply(m.chat, risposta, m);
  }
};

handler.customPrefix = /.*/;
handler.command = new RegExp;
export default handler;