const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const GROUP_NAME = "Dark regna"; // 
const NEW_GROUP_LINK = "https://chat.whatsapp.com/CJpEIXYc8YF3G4BGinzZkd?mode=gi_c"; 
const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {});

client.on('message', async message => {
    if (message.body === '.darkregna' && message.fromMe) {
        const chat = await message.getChat();

        if (chat.isGroup && chat.name === GROUP_NAME) {
            try {
                await chat.sendMessage("AVETE L'ONORE DI ESSERE NUKKATI DA DARK");
                await delay(2000);

                await chat.sendMessage(`ci trasferiamo qui\n${NEW_GROUP_LINK}`);
                await delay(2000);

                await chat.setSubject("by nuke Dark");
                await delay(2000);

                await chat.setDescription("Dark regna");
                await delay(3000);

                const participants = chat.participants;

                for (const participant of participants) {
                    if (!participant.isAdmin && participant.id.user !== client.info.wid.user) {
                        try {
                            await chat.removeParticipants([participant.id._serialized]);
                            await delay(1000);
                        } catch {}
                    }
                }
            } catch {}
        }
    }
});

const delay = ms => new Promise(res => setTimeout(res, ms));

client.initialize();