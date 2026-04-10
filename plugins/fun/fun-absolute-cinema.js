import fs from 'fs'

let handler = message => message;

handler.all = async function (message) {
    if (!message.isGroup) return;

    if (!global.db?.data?.chats) return;

    
    if (!global.db.data.chats[message.chat]) {
        global.db.data.chats[message.chat] = { stickers: false };
    }

    let chatData = global.db.data.chats[message.chat];

    if (!chatData.stickers) return;
    if (!message.text) return;

    if (/absolute cinema/i.test(message.text)) {
        try {
            const stickerPath = './media/stickers/absolute-cinema.webp';
            const stickerData = fs.readFileSync(stickerPath);

            await this.sendMessage(
                message.chat,
                { sticker: stickerData },
                { quoted: message }
            );
        } catch (e) {
            console.log(e);
        }
    }
};

export default handler;