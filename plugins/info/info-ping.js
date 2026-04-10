import { cpus as _cpus, totalmem, freemem } from 'os'
import { performance } from 'perf_hooks'
import { sizeFormatter } from 'human-readable'
import fs from 'fs'
import path from 'path'

let format = sizeFormatter({
  std: 'JEDEC',
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})

let handler = async (m, { conn, usedPrefix, command }) => {
  const userId = m.sender
  const groupId = m.isGroup ? m.chat : null

  let nomeDelBot = global.db.data.nomedelbot || `𝐂𝐡𝐚𝐭𝐔𝐧𝐢𝐭𝐲`
  let versioneBot = `${vs}`
  let old = performance.now()
  let neww = performance.now()
  let speed = (neww - old).toFixed(2)
  let uptime = process.uptime() * 1000

  const cpus = _cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
  })

  const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
  }, {
    speed: 0,
    total: 0,
    times: { user: 0, nice: 0, sys: 0, idle: 0, irq: 0 }
  })

  let cpuModel = cpus[0]?.model || 'Unknown Model'
  let cpuSpeed = cpu.speed.toFixed(2)

  let caption = global.t('systemStatus', userId, groupId, {
    title: global.t('systemStatusTitle', userId, groupId),
    uptime: clockString(uptime),
    ping: speed,
    cpuModel,
    cpuSpeed,
    ramUsed: format(totalmem() - freemem()),
    ramTotal: format(totalmem()),
    ramFree: format(freemem())
  })

  const videoPath = path.join(process.cwd(), 'media', 'gif', 'pong.mp4')

  try {
    const videoBuffer = fs.readFileSync(videoPath)
    await conn.sendMessage(m.chat, {
      video: videoBuffer,
      gifPlayback: true,
      mimetype: 'video/mp4',
      caption
    }, { quoted: m })
  } catch (e) {
    console.error('GIF pong error:', e.message, '| path:', videoPath)
    await conn.sendMessage(m.chat, { text: caption }, { quoted: m })
  }
}

handler.help = [
  'ping', 'speed', 'velocità', 'latencia', 'velocidad', 'velocidade',
  'geschwindigkeit', 'latenz', '速度', '延迟', 'скорость', 'задержка',
  'سرعة', 'كمون', 'गति', 'विलंब', 'vitesse', 'latence',
  'kecepatan', 'latensi', 'hız', 'gecikme'
]
handler.tags = ['info', 'tools']
handler.command = /^(ping|speed|velocità|latencia|velocidad|velocidade|geschwindigkeit|latenz|速度|延迟|скорость|задержка|سرعة|كمون|गति|विलंब|vitesse|latence|kecepatan|latensi|hız|gecikme)$/i

export default handler

function clockString(ms) {
  let d = Math.floor(ms / 86400000)
  let h = Math.floor(ms / 3600000) % 24
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  return [d, h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
