const bestemmiaGradi = [
  { min: 1, max: 24, nome: "Peccatore Occasionale", emoji: "😐" },
  { min: 25, max: 49, nome: "Empio Recidivo", emoji: "😶‍🌫️" },
  { min: 50, max: 74, nome: "Blasfemo Iniziato", emoji: "🩸" },
  { min: 75, max: 99, nome: "Eretico Consacrato", emoji: "🔥" },
  { min: 100, max: 149, nome: "Scomunicato Ufficiale", emoji: "🕯️" },
  { min: 150, max: 299, nome: "Profanatore Supremo", emoji: "⚰️" },
  { min: 300, max: Infinity, nome: "Avatar della Bestemmia", emoji: "⛧" }
];

const bestemmieRegex = /porco dio|porcodio|dio bastardo|dio cane|porcamadonna|madonnaporca|dio cristo|diocristo|dio maiale|diomaiale|cristo madonna|madonna impanata|dio frocio|dio gay|dio infuocato|dio crocifissato|madonna puttana|madonna vacca|madonna inculata|maremma maiala|jesu porco|diocane|padre pio|madonna troia|zoccola madonna|dio pentito|porcoddio|dio stupratore di feti abortiti|dio stupratore di femboy|dio giocatore accanito di call of duty/i;

export async function before(m, { conn }) {
  const chat = global.db.data.chats[m.chat];
  if (chat && chat.bestemmiometro === false) return;

  const user = global.db.data.users[m.sender];
  user.blasphemy = user.blasphemy || 0;

  if (!bestemmieRegex.test(m.text)) return;

  user.blasphemy += 1;
  const grado = bestemmiaGradi.find(
    g => user.blasphemy >= g.min && user.blasphemy <= g.max
  ) || { nome: "Eresiarca Anonimo", emoji: "❓" };

  const testo = `ঐ͚͢ᬃ͜𖤍━═━┉┉•𖤐•┉┉━═━𖤍ᬃ͜ঐ͚͢
📛 𝐔𝑻𝚺𝚴𝑻𝚺: @${m.sender.split('@')[0]}
📊 𝐂𝚯𝚴𝑻𝚺𝐆𝐆𝕀𝚯: *${user.blasphemy}*

> 🎖️ 𝐆𝑹𝛬𝐃𝚯: *${grado.nome}* ${grado.emoji}
ঐ͚͢ᬃ͜𖤍━═━┉┉•𖤐•┉┉━═━𖤍ᬃ͜ঐ͚͢`;

  await conn.sendMessage(m.chat, {
    text: testo,
    footer: "𝐁𝚺𝐒𝑻𝚺𝐌𝐌𝕀𝚶𝐌𝚺𝑻𝑹𝚯🛐",
    buttons: [
      {
        buttonId: ".topbestemmie",
        buttonText: { displayText: "🏆𝐓𝚯𝐏 𝐁𝚺𝐒𝑻𝚺𝐌𝐌𝕀𝚺" },
        type: 1
      }
    ],
    mentions: [m.sender]
  });
}