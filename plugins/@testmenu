let handler = async (m, { conn, usedPrefix }) => {
  const senderName = await conn.getName(m.sender);
  const botName = global.botName || "🤖 BOT";
  const vs = "1.0.0";

  const interactiveMessage = {
    text: `╭───「 ${botName} 」───
│ Ciao, ${senderName}!
│ Versione: ${vs}
╰─────────────────
📋 Seleziona una categoria dal menu qui sotto:`,
    footer: "Digita il comando oppure seleziona dal menu",
    title: "MENU PRINCIPALE",
    interactiveButtons: [
      {
        name: 'single_select',
        buttonParamsJson: JSON.stringify({
          title: '🧾 MENU PRINCIPALE',
          sections: [
            {
              title: '🌟 SEZIONI PRINCIPALI',
              highlight_label: '🔥 IN EVIDENZA',
              rows: [
                {
                  header: '👥 GRUPPO',
                  title: 'Menu Gruppo',
                  description: 'Tutti i comandi per gestire il gruppo',
                  id: `${usedPrefix}menugruppo`
                },
                {
                  header: '⚙️ FUNZIONI',
                  title: 'Menu Funzioni',
                  description: 'Attiva o disattiva funzionalità',
                  id: `${usedPrefix}funzioni`
                },
                {
                  header: '🛡️ ADMIN',
                  title: 'Menu Admin',
                  description: 'Comandi per amministratori',
                  id: `${usedPrefix}menuadm`
                },
                {
                  header: '👑 OWNER',
                  title: 'Menu Owner',
                  description: 'Solo per il proprietario',
                  id: `${usedPrefix}owner`
                },
                {
                  header: '🎲 ROULETTE',
                  title: 'Menu Roulette',
                  description: 'Gioca alla roulette russa',
                  id: `${usedPrefix}menuroulette`
                }
              ]
            }
          ]
        })
      }
    ]
  };

  await conn.sendMessage(m.chat, interactiveMessage);
};

handler.help = ['listamenu'];
handler.tags = ['menu'];
handler.command = /^(listamenu)$/i;

export default handler;