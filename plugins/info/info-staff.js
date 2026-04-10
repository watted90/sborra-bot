let handler = async (m, { conn }) => {

    const createVCard = (name, number, role) => {
        return `BEGIN:VCARD
VERSION:3.0
FN:${name}
ORG:𝐒𝐛𝐨𝐫𝐫𝐚 𝐁𝐨𝐭;
TEL;type=CELL;type=VOICE;waid=${number}:+${number}
X-ABLabel:${role}
END:VCARD`.replace(/\n/g, '\r\n');
    };

    await conn.sendMessage(m.chat, { 
        contacts: { 
            displayName: '👥 𝐒𝐛𝐨𝐫𝐫𝐚 𝐁𝐨𝐭 𝐒𝐭𝐚𝐟𝐟', 
            contacts: [
                { vcard: createVCard('𝐂𝐫𝐞𝐚𝐭𝐨𝐫𝐞', '393892016995', '𝐅𝐨𝐮𝐧𝐝𝐞𝐫') },
               
                
                
            ]
        }
    }, { quoted: m });
};

handler.help = ['staff'];
handler.tags = ['info'];
handler.command = ['staff', 'team'];
