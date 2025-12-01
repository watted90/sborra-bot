var handler = async (m, { conn, groupMetadata }) => {
    await conn.sendMessage(m.chat, { 
        text: `ⓘ 𝐋' 𝐢𝐝 𝐝𝐢 𝐪𝐮𝐞𝐬𝐭𝐨 𝐠𝐫𝐮𝐩𝐩𝐨 𝐞' ${await groupMetadata.id}`,
        contextInfo: {
            forwardingScore: 99,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363420674060561@newsletter',
                serverMessageId: '',
                newsletterName: '${nomebot}'
            }
        }
    }, { quoted: m });
};

handler.command = /^(id|gpid|gcid)$/i;
handler.group = true;
export default handler;