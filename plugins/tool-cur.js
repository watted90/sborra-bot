//Codice di gp-cur.js

import fetch from 'node-fetch'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const USERS_FILE = path.join(__dirname, '..', 'lastfm_users.json')

if (!fs.existsSync(USERS_FILE)) {
  fs.writeFileSync(USERS_FILE, '{}', 'utf8')
}

const cache = new Map()
const CACHE_DURATION = 5 * 60 * 1000 // 5 minuti

function loadUsers() {
  return JSON.parse(fs.readFileSync(USERS_FILE, 'utf8'))
}

function saveUsers(users) {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2), 'utf8')
}

function getLastfmUsername(userId) {
  const users = loadUsers()
  return users[userId] || null
}

function setLastfmUsername(userId, username) {
  const users = loadUsers()
  users[userId] = username
  saveUsers(users)
}

const LASTFM_API_KEY = '36f859a1fc4121e7f0e931806507d5f9'

async function fetchWithCache(url) {
  const now = Date.now()
  const cached = cache.get(url)
  if (cached && now - cached.timestamp < CACHE_DURATION) return cached.data

  const res = await fetch(url)
  const json = await res.json()
  cache.set(url, { data: json, timestamp: now })
  return json
}

async function getUserInfo(username) {
  const url = `https://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=${username}&api_key=${LASTFM_API_KEY}&format=json`
  return (await fetchWithCache(url))?.user
}

async function getTrackInfo(username, artist, track) {
  const url = `https://ws.audioscrobbler.com/2.0/?method=track.getinfo&api_key=${LASTFM_API_KEY}&artist=${encodeURIComponent(artist)}&track=${encodeURIComponent(track)}&username=${username}&format=json`
  return (await fetchWithCache(url))?.track
}

async function getRecentTrack(username) {
  const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${LASTFM_API_KEY}&format=json&limit=1`
  return (await fetchWithCache(url))?.recenttracks?.track?.[0]
}

async function getRecentTracks(username, limit = 10) {
  const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${LASTFM_API_KEY}&format=json&limit=${limit}`
  return (await fetchWithCache(url))?.recenttracks?.track || []
}

async function getTopArtists(username, period = '7day', limit = 9) {
  const url = `https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=${username}&api_key=${LASTFM_API_KEY}&format=json&period=${period}&limit=${limit}`
  return (await fetchWithCache(url))?.topartists?.artist
}

async function getTopAlbums(username, period = '7day', limit = 9) {
  const url = `https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=${username}&api_key=${LASTFM_API_KEY}&format=json&period=${period}&limit=${limit}`
  return (await fetchWithCache(url))?.topalbums?.album
}

async function getTopTracks(username, period = '7day', limit = 9) {
  const url = `https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=${username}&api_key=${LASTFM_API_KEY}&format=json&period=${period}&limit=${limit}`
  return (await fetchWithCache(url))?.toptracks?.track
}

const handler = async (m, { conn, args, usedPrefix, text, command }) => {
  if (command === 'setuser') {
    const username = text.trim()
    if (!username) {
      return conn.sendMessage(m.chat, { text: `❌ 𝐔𝐬𝐚 𝐢𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐜𝐨𝐬𝐢́: ${usedPrefix}setuser <username>` })
    }

    setLastfmUsername(m.sender, username)
    return conn.sendMessage(m.chat, { text: `✅ 𝐔𝐬𝐞𝐫𝐧𝐚𝐦𝐞 *${username}* 𝐬𝐚𝐥𝐯𝐚𝐭𝐨!` })
  }

  const user = getLastfmUsername(m.sender)
  if (!user) {
    return conn.sendMessage(m.chat, {
      text: `🎵 *𝐑𝐞𝐠𝐢𝐬𝐭𝐫𝐚𝐳𝐢𝐨𝐧𝐞 𝐋𝐚𝐬𝐭.𝐅𝐌 𝐫𝐢𝐜𝐡𝐢𝐞𝐬𝐭𝐚*\n\n@${m.sender.split('@')[0]}, 𝐩𝐞𝐫 𝐮𝐬𝐚𝐫𝐞 𝐢 𝐜𝐨𝐦𝐚𝐧𝐝𝐢 𝐦𝐮𝐬𝐢𝐜𝐚𝐥𝐢 𝐝𝐞𝐯𝐢 𝐫𝐞𝐠𝐢𝐬𝐭𝐫𝐚𝐫𝐭𝐢 𝐚 𝐋𝐚𝐬𝐭.𝐅𝐌.\n\n📱 *𝐔𝐬𝐚 𝐪𝐮𝐞𝐬𝐭𝐨 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐞 𝐡𝐚𝐢 𝐞𝐟𝐟𝐞𝐭𝐮𝐚𝐭𝐨 𝐥𝐚 𝐫𝐞𝐠𝐢𝐬𝐭𝐫𝐚𝐳𝐢𝐨𝐧𝐞:*\n${usedPrefix}setuser <tuo_username>\n\n𝐍𝐨𝐧 𝐡𝐚𝐢 𝐋𝐚𝐬𝐭.𝐅𝐌?\n𝐑𝐞𝐠𝐢𝐬𝐭𝐫𝐚𝐭𝐢 𝐚 last.fm, 𝐜𝐨𝐥𝐥𝐞𝐠𝐚 𝐢𝐥 𝐭𝐮𝐨 𝐚𝐜𝐜𝐨𝐮𝐧𝐭 𝐒𝐩𝐨𝐭𝐢𝐟𝐲 𝐨 𝐘𝐓 𝐦𝐮𝐬𝐢𝐜 𝐞 𝐟𝐚𝐢 ${usedPrefix}setuser`,
      mentions: [m.sender]
    })
  }

  if (command === 'cur') {
    const track = await getRecentTrack(user)
    if (!track) return conn.sendMessage(m.chat, { text: '❌ 𝐍𝐞𝐬𝐬𝐮𝐧𝐚 𝐭𝐫𝐚𝐜𝐜𝐢𝐚 𝐭𝐫𝐨𝐯𝐚𝐭𝐚.' })

    const nowPlaying = track['@attr']?.nowplaying === 'true'
    const artist = track.artist?.['#text'] || 'Artista sconosciuto'
    const title = track.name || 'Brano sconosciuto'
    const album = track.album?.['#text'] || 'Album sconosciuto'
    const image = track.image?.find(img => img.size === 'extralarge')?.['#text'] || null

    const info = await getTrackInfo(user, artist, title)
    const userInfo = await getUserInfo(user)

    const playcountTrack = info?.userplaycount || 0
    const globalPlaycount = info?.playcount || 0 // <-- AGGIUNTO
    const totalScrobbles = userInfo?.playcount || 0

    const caption = `
🎧 *${nowPlaying ? '𝐈𝐧 𝐫𝐢𝐩𝐫𝐨𝐝𝐮𝐳𝐢𝐨𝐧𝐞' : '𝐔𝐥𝐭𝐢𝐦𝐨 𝐛𝐫𝐚𝐧𝐨'}* 𝐝𝐢 @${m.sender.split('@')[0]}

🎵 *${title}*
🎤 ${artist}
💿 ${album}

▶️ 𝐀𝐬𝐜𝐨𝐥𝐭𝐢 𝐏𝐞𝐫𝐬𝐨𝐧𝐚𝐥𝐢: *${playcountTrack}*
🌍 𝐀𝐬𝐜𝐨𝐥𝐭𝐢 𝐆𝐥𝐨𝐛𝐚𝐥𝐢: *${globalPlaycount}*
📊 𝐀𝐬𝐜𝐨𝐥𝐭𝐢 𝐓𝐨𝐭𝐚𝐥𝐢: *${totalScrobbles}*
    `.trim()

    const ytQuery = encodeURIComponent(`${artist} ${title}`)
    const ytURL = `https://www.youtube.com/results?search_query=${ytQuery}`

    const msg = {
      image: image ? { url: image } : undefined,
      caption,
      mentions: conn.parseMention(caption),
      buttons: [
        { buttonId: `.playaudio ${artist} - ${title}`, buttonText: { displayText: '🎧 Scarica canzone' }, type: 1 },
        { buttonId: `.playvideo ${artist} - ${title}`, buttonText: { displayText: '🎥 Scarica video' }, type: 1 },
      ],
      headerType: 4,
      footer: `.`
    }

    await conn.sendMessage(m.chat, msg, { quoted: m })
    return
  }

  // --- Gli altri comandi restano invariati ---
}

handler.command = ['setuser', 'cur', 'topartists', 'topalbums', 'toptracks', 'cronologia']
handler.group = true

export default handler