import fs from 'fs'
import path from 'path'

const cooldowns = new Map()
const COOLDOWN_MS = 10000

const handler = async (m, { conn }) => {}
handler.all = async function (m) {
  if (!global.db?.data?.chats?.[m.chat]?.stickers) return;
  if (!m.text || m.text.trim() !== '67') return
  const now = Date.now()
  const last = cooldowns.get(m.chat) || 0
  if (now - last < COOLDOWN_MS) return
  cooldowns.set(m.chat, now)

  const stickerPath = path.join(process.cwd(), 'media', 'stickers', '67.webp')
  if (!fs.existsSync(stickerPath)) {
    console.error('[67] Sticker non trovato:', stickerPath)
    return
  }
  const buffer = fs.readFileSync(stickerPath)
  await this.sendMessage(m.chat, { sticker: buffer }, { quoted: m })
}

handler.enable = true
handler.key = 'stickers'

export default handler
