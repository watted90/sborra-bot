let handler = async (m, { conn, usedPrefix }) => {
    let grandezze = [
        "🟢 Piccolo come una formica 🐜",
        "🔵 Normale, niente di speciale 😌",
        "🟠 Medio, ci passa un dito 🖕",
        "🔴 Enorme! Ci passa una bottiglia 🍾",
        "⚫ Distrutto, sembra un tunnel ferroviario 🚇",
        "💥 Non hai più un buco, è esploso 💣"
    ];

    let grandezzaCasuale = grandezze[Math.floor(Math.random() * grandezze.length)];
    let messaggio = "*Analizzando il tuo buco...*\n\n📏 *Risultato:* " + grandezzaCasuale;

    let opzioniInoltro = inoltra("𝐒𝐛𝐨𝐫𝐫𝐚 𝐁𝐨𝐭");
    await conn.sendMessage(m.chat, { text: messaggio, ...opzioniInoltro }, { quoted: m });
};

const inoltra = (nomebot) => {
    let messageOptions = {
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363420674060561@newsletter',
                serverMessageId: '',
                newsletterName: `${nomebot}`
            }
        }
    };
    return messageOptions;
};

handler.command = ["ano", "culometro"];
export default handler;