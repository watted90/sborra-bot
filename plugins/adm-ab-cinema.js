//Plugin fatto da Axtral_WiZaRd

import fs from 'fs'

let handler = message => message;

handler.all = async function (message) {
    if (!message.isGroup) return null;

    let chatData = global.db.data.chats[message.chat];

    if (!chatData.cinema) return null;

    if (!message.text) return null;

    if (/absolute cinema/i.test(message.text)) {
        const stickerPath = './media/absolute-cinema.webp';
        const stickerData = fs.readFileSync(stickerPath);

        await conn.sendMessage(
            message.chat,
            { sticker: stickerData },
            { quoted: message }
        );
    }
};

export default handler;

function pickRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}