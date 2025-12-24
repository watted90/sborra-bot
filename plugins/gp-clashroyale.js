/* 
QUESTO PLUGIN È STATO FATRO DA NICO AKA GIUSE PER SBORRABOT
CREDITI A NICO DI VAREBOT
github.com/xviveree
*/

import axios from 'axios'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const databasePath = path.join(__dirname, '../media/database/clash_users.json')
if (!fs.existsSync(path.dirname(databasePath))) fs.mkdirSync(path.dirname(databasePath), { recursive: true })

const getDB = () => fs.existsSync(databasePath) ? JSON.parse(fs.readFileSync(databasePath, 'utf-8')) : {}
const saveDB = (data) => fs.writeFileSync(databasePath, JSON.stringify(data, null, 2))

const handler = async (m, { conn, text, usedPrefix, command }) => {
    let db = getDB()
    const crKey = global.APIKeys?.clashroyale
    const browserlessKey = global.APIKeys?.browserless

    
    if (command === 'setclash') {
        let tag = text.trim().replace('#', '').toUpperCase()
        if (!tag) return m.reply(`❌ Uso: ${usedPrefix}setclash <TAG_GIOCATORE>\nEsempio: ${usedPrefix}setclash P8PY999`)
        db[m.sender] = tag
        saveDB(db)
        return m.reply(`✅ Player Tag *#${tag}* collegato correttamente!`)
    }

        const playerTag = db[m.sender]
    if (!playerTag) return m.reply(`⚠️ Registra il tuo tag prima con: *${usedPrefix}setclash <tag>*`)
    if (!crKey || !browserlessKey) return m.reply('❌ API Key mancanti (Clash Royale o Browserless).')

    if (command === 'cr') {
        try {
            await m.react('⏳')

            
            const responseCR = await axios.get(`https://api.clashroyale.com/v1/players/%23${playerTag}`, {
                headers: { 'Authorization': `Bearer ${crKey}` }
            })
            const p = responseCR.data

                        const arenaImg = `https://royaleapi.com/static/img/arenas/arena${p.arena?.id || 15}.png`
            
           
            const html = `
            <html>
            <head>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;800&display=swap');
                    body { margin: 0; padding: 0; width: 1000px; height: 600px; display: flex; align-items: center; justify-content: center; font-family: 'Plus Jakarta Sans', sans-serif; background: #0b1119; overflow: hidden; }
                    .background { position: absolute; width: 100%; height: 100%; background: linear-gradient(45deg, #0b1119, #1a2a44); }
                    .arena-bg { position: absolute; right: -50px; top: 50%; transform: translateY(-50%); width: 600px; opacity: 0.2; filter: blur(20px); }
                    .glass-card { position: relative; width: 900px; height: 500px; background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(40px) saturate(150%); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 50px; display: flex; align-items: center; padding: 50px; box-sizing: border-box; box-shadow: 0 40px 100px rgba(0,0,0,0.5); }
                    .player-icon { width: 200px; height: 200px; position: relative; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.05); border-radius: 40px; border: 1px solid rgba(255,255,255,0.1); }
                    .player-icon img { width: 140px; }
                    .details { flex: 1; margin-left: 50px; color: white; }
                    .clan-tag { font-size: 14px; font-weight: 800; text-transform: uppercase; letter-spacing: 3px; color: #54afff; margin-bottom: 10px; }
                    .player-name { font-size: 52px; font-weight: 800; line-height: 1; margin-bottom: 5px; letter-spacing: -2px; }
                    .arena-name { font-size: 24px; color: #f3c300; font-weight: 700; margin-bottom: 30px; }
                    .stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; }
                    .stat-item { background: rgba(255, 255, 255, 0.04); padding: 15px; border-radius: 20px; border: 1px solid rgba(255, 255, 255, 0.05); text-align: center; }
                    .stat-label { font-size: 10px; color: rgba(255,255,255,0.4); text-transform: uppercase; font-weight: 800; margin-bottom: 5px; }
                    .stat-value { font-size: 22px; font-weight: 800; color: #fff; }
                </style>
            </head>
            <body>
                <div class="background"></div>
                <img src="${arenaImg}" class="arena-bg">
                <div class="glass-card">
                    <div class="player-icon">
                        <img src="https://cdn.royaleapi.com/static/img/ui/trophy.png">
                    </div>
                    <div class="details">
                        <div class="clan-tag">${p.clan ? p.clan.name : 'SENZA CLAN'}</div>
                        <div class="player-name">${p.name}</div>
                        <div class="arena-name">${p.arena.name}</div>
                        <div class="stats-grid">
                            <div class="stat-item"><div class="stat-label">Trofei</div><div class="stat-value">${p.trophies}</div></div>
                            <div class="stat-item"><div class="stat-label">Record</div><div class="stat-value">${p.bestTrophies}</div></div>
                            <div class="stat-item"><div class="stat-label">Vinte</div><div class="stat-value" style="color:#32d74b;">${p.wins}</div></div>
                            <div class="stat-item"><div class="stat-label">Livello</div><div class="stat-value" style="color:#0a84ff;">${p.expLevel}</div></div>
                            <div class="stat-item"><div class="stat-label">Win Rate</div><div class="stat-value">${((p.wins/(p.wins+p.losses))*100).toFixed(1)}%</div></div>
                            <div class="stat-item"><div class="stat-label">Tag</div><div class="stat-value" style="font-size:14px; opacity:0.5;">#${playerTag}</div></div>
                        </div>
                    </div>
                </div>
            </body>
            </html>`

                const responseImg = await axios.post(`https://chrome.browserless.io/screenshot?token=${browserlessKey}`, {
                html,
                options: { type: 'jpeg', quality: 90 },
                viewport: { width: 1000, height: 600 }
            }, { responseType: 'arraybuffer' })

            const buffer = Buffer.from(responseImg.data)
            await m.react('✅')

            return conn.sendMessage(m.chat, {
                image: buffer,
                caption: `👑 *Profilo Clash Royale:* ${p.name}`,
                footer: '𝗰𝗹𝗮𝘀𝗵 𝗿𝗼𝘆𝗮𝗹𝗲 ✧ 𝘀𝗯𝗼𝗿𝗿𝗮𝗯𝗼𝘁',
                buttons: [
                    { buttonId: `${usedPrefix}cr`, buttonText: { displayText: '❤️' }, type: 1 }
                ],
                headerType: 4,
                viewOnce: true
            }, { quoted: m })

        } catch (e) {
            console.error(e)
            await m.react('❌')
            return m.reply(`❌ Errore: Assicurati che il Tag sia corretto e che l'API Key sia valida.`)
        }
    }
}

handler.command = ['setclash', 'cr']
handler.group = true
export default handler
