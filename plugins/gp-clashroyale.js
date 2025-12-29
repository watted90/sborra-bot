/* QUESTO PLUGIN È STATO FATRO DA NICO AKA GIUSE PER SBORRABOT
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
    if (!db.users) db.users = {}
    if (!db.votes) db.votes = {}

    const crKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImUwZTM5ZjAzLTI4YmItNDM0Yi04ZjljLWQ1NjZhNGM5ZDhjYiIsImlhdCI6MTc2NjU0Mjg4OSwic3ViIjoiZGV2ZWxvcGVyL2FiZWUxNzAxLTUzODYtMDJkOC0yMzY4LWZjYjE5ZjgyMzQ1NCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxNTguNDcuMjAyLjEwMyJdLCJ0eXBlIjoiY2xpZW50In1dfQ.DRAtfK0nRWHQrp_v74fxR93OtNNiEhfpbl6WnzXyIAMJNhpO2Kccm2a0fmNcPDGZ0bIfZWjuEkNGtz1Y-lqXOw'
    const browserlessKey = '2T1UJbySv4cbI5Dee0fbb250b89092d9d08069ecc8116da69'

    if (command === 'setclash') {
        let tag = text.trim().replace('#', '').toUpperCase()
        if (!tag) return m.reply(`❌ 𝐔𝐬𝐨: ${usedPrefix}setclash <TAG_GIOCATORE>`)
        db.users[m.sender] = tag
        saveDB(db)
        return m.reply(`✅ 𝐏𝐥𝐚𝐲𝐞𝐫 𝐓𝐚𝐠 *#${tag}* 𝐜𝐨𝐥𝐥𝐞𝐠𝐚𝐭𝐨 𝐜𝐨𝐫𝐫𝐞𝐭𝐭𝐚𝐦𝐞𝐧𝐭𝐞!`)
    }

    if (command === 'clike' || command === 'cdislike') {
        const targetTag = text.trim()
        if (!targetTag) return
        
        if (!db.votes[targetTag]) db.votes[targetTag] = { likes: [], dislikes: [] }
        const vote = db.votes[targetTag]
        const voter = m.sender

        if (command === 'clike') {
            if (vote.likes.includes(voter)) {
                vote.likes = vote.likes.filter(id => id !== voter)
                m.reply(`⚪ 𝐕𝐨𝐭𝐨 𝐫𝐢𝐦𝐨𝐬𝐬𝐨 𝐚 #${targetTag}`)
            } else {
                vote.likes.push(voter)
                vote.dislikes = vote.dislikes.filter(id => id !== voter)
                m.reply(`❤️ 𝐇𝐚𝐢 𝐦𝐞𝐬𝐬𝐨 𝐥𝐢𝐤𝐞 𝐚 #${targetTag}`)
            }
        } else if (command === 'cdislike') {
            if (vote.dislikes.includes(voter)) {
                vote.dislikes = vote.dislikes.filter(id => id !== voter)
                m.reply(`⚪ 𝐕𝐨𝐭𝐨 𝐫𝐢𝐦𝐨𝐬𝐬𝐨 𝐚 #${targetTag}`)
            } else {
                vote.dislikes.push(voter)
                vote.likes = vote.likes.filter(id => id !== voter)
                m.reply(`👎 𝐇𝐚𝐢 𝐦𝐞𝐬𝐬𝐨 𝐝𝐢𝐬𝐥𝐢𝐤𝐞 𝐚
 #${targetTag}`)
            }
        }
        saveDB(db)
        return
    }

    const playerTag = db.users[m.sender]
    if (!playerTag) return m.reply(`⚠️ 𝐑𝐞𝐠𝐢𝐬𝐭𝐫𝐚 𝐢𝐥 𝐭𝐮𝐨 𝐭𝐚𝐠 𝐝𝐢 𝐂𝐥𝐚𝐬𝐡 𝐑𝐨𝐲𝐚𝐥𝐞 𝐜𝐨𝐧:\n *${usedPrefix}setclash <tag>*`)

    if (command === 'cr') {
        try {
            await m.react('⏳')
            const responseCR = await axios.get(`https://api.clashroyale.com/v1/players/%23${playerTag}`, {
                headers: { 'Authorization': `Bearer ${crKey}` }
            })
            const p = responseCR.data
            const arenaImg = `https://royaleapi.com/static/img/arenas/arena${p.arena?.id || 15}.png`
            
            const v = db.votes[playerTag] || { likes: [], dislikes: [] }
            const lC = v.likes.length
            const dC = v.dislikes.length

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
                            <div class="stat-item"><div class="stat-label">Feedback</div><div class="stat-value" style="font-size:16px;">❤️ ${lC} | 👎 ${dC}</div></div>
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
                caption: `👑 *𝐏𝐫𝐨𝐟𝐢𝐥𝐨 𝐂𝐥𝐚𝐬𝐡 𝐑𝐨𝐲𝐚𝐥𝐞 𝐝𝐢:* ${p.name}`,
                footer: '𝐂𝐥𝐚𝐬𝐡 𝐑𝐨𝐲𝐚𝐥𝐞 ✧ 𝐒𝐛𝐨𝐫𝐫𝐚 𝐁𝐨𝐭',
                buttons: [
                    { buttonId: `${usedPrefix}clike ${playerTag}`, buttonText: { displayText: `❤️ (${lC})` }, type: 1 },
                    { buttonId: `${usedPrefix}cdislike ${playerTag}`, buttonText: { displayText: `👎 (${dC})` }, type: 1 }
                ],
                headerType: 4,
                viewOnce: true
            }, { quoted: m })

        } catch (e) {
            console.error(e)
            await m.react('❌')
            return m.reply(`❌ 𝐄𝐑𝐑𝐎𝐑𝐄 𝐍𝐄𝐋 𝐑𝐄𝐂𝐔𝐏𝐄𝐑𝐎 𝐃𝐀𝐓𝐈.`)
        }
    }
}

handler.command = ['setclash', 'cr', 'clike', 'cdislike']
handler.group = true
export default handler
