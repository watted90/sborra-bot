import { dirname } from 'path'
import { fileURLToPath } from 'url'
import * as fs from 'fs'
import * as path from 'path'
import * as crypto from 'crypto'
import { ffmpeg } from './converter.js'
import fluent_ffmpeg from 'fluent-ffmpeg'
import { spawn } from 'child_process'
import { fileTypeFromBuffer } from 'file-type'
import webp from 'node-webpmux'
import fetch from 'node-fetch'

const __dirname = dirname(fileURLToPath(import.meta.url))
const tmp = path.join(__dirname, '../tmp')

function sticker2(img, url) {
  return new Promise(async (resolve, reject) => {
    try {
      if (url) {
        const res = await fetch(url)
        if (res.status !== 200) throw await res.text()
        img = await res.buffer()
      }
      const inp = path.join(tmp, +new Date + '.jpeg')
      await fs.promises.writeFile(inp, img)

      const ff = spawn('ffmpeg', [
        '-y',
        '-i', inp,
        '-vf', 'scale=512:512:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=512:512:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1',
        '-f', 'png',
        '-'
      ])

      ff.on('error', reject)
      ff.on('close', async () => {
        await fs.promises.unlink(inp)
      })

      const bufs = []
      const [_proc, ..._args] = [
        ...(module.exports.support?.gm ? ['gm'] :
        module.exports.support?.magick ? ['magick'] : []),
        'convert', 'png:-', 'webp:-'
      ]

      const im = spawn(_proc, _args)
      im.on('error', reject)
      im.stdout.on('data', c => bufs.push(c))
      ff.stdout.pipe(im.stdin)

      im.on('exit', () => resolve(Buffer.concat(bufs)))

    } catch (e) {
      reject(e)
    }
  })
}

async function sticker4(img, url) {
  if (url) {
    const res = await fetch(url)
    if (res.status !== 200) throw await res.text()
    img = await res.buffer()
  }
  return await ffmpeg(img, [
    '-vf', 'scale=512:512:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=512:512:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1'
  ], 'jpeg', 'webp')
}

async function sticker5(img, url, packname, author, categories = [''], extra = {}) {
  const { Sticker } = await import('wa-sticker-formatter')
  const meta = { type: 'full', pack: packname, author, categories, quality: 50, ...extra }
  const s = new Sticker(img || url, meta)
  return await s.toBuffer()
}

function sticker6(img, url) {
  return new Promise(async (resolve, reject) => {
    try {
      if (url) {
        const res = await fetch(url)
        if (res.status !== 200) throw await res.text()
        img = await res.buffer()
      }

      const type = await fileTypeFromBuffer(img) || { mime: 'application/octet-stream', ext: 'bin' }
      if (type.ext === 'bin') reject(img)

      const tmpf = path.join(__dirname, `../tmp/${+new Date()}.${type.ext}`)
      const out = tmpf + '.webp'

      await fs.promises.writeFile(tmpf, img)

      const f = /video/i.test(type.mime) ? fluent_ffmpeg(tmpf).inputFormat(type.ext) : fluent_ffmpeg(tmpf).input(tmpf)

      f.on('error', async () => {
        await fs.promises.unlink(tmpf)
        reject(img)
      })
        .on('end', async () => {
          await fs.promises.unlink(tmpf)
          resolve(await fs.promises.readFile(out))
        })
        .addOutputOptions([
          '-vcodec', 'libwebp', '-vf',
          `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15,pad=320:320:-1:-1:color=white@0.0,
           split[a][b];[a]palettegen=reserve_transparent=on:transparency_color=ffffff[p];[b][p]paletteuse`
        ])
        .toFormat('webp')
        .save(out)

    } catch (e) {
      reject(e)
    }
  })
}

async function addExif(webpSticker, packname, author, categories = [''], extra = {}) {
  const img = new webp.Image()
  const id = crypto.randomBytes(32).toString('hex')
  const json = { 'sticker-pack-id': id, 'sticker-pack-name': packname, 'sticker-pack-publisher': author, 'emojis': categories, ...extra }

  const attr = Buffer.from([
    0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00,
    0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x16, 0x00, 0x00, 0x00
  ])

  const jsonBuffer = Buffer.from(JSON.stringify(json), 'utf8')
  const exif = Buffer.concat([attr, jsonBuffer])
  exif.writeUIntLE(jsonBuffer.length, 14, 4)

  await img.load(webpSticker)
  img.exif = exif
  return await img.save(null)
}

async function sticker(img, url, ...args) {
  let lastError, out

  const funcs = [
    sticker5,
    global.support?.ffmpeg && sticker6,
    global.support?.ffmpeg && global.support?.ffmpegWebp && sticker4,
    global.support?.ffmpeg && (global.support?.convert || global.support?.magick || global.support?.gm) && sticker2
  ].filter(Boolean)

  for (const fn of funcs) {
    try {
      out = await fn(img, url, ...args)

      if (Buffer.isBuffer(out)) {
        const header = out.slice(8, 12).toString('ascii')
        if (header === 'WEBP') {
          try {
            return await addExif(out, ...args)
          } catch {
            return out
          }
        }
      }

      throw new Error('Invalid output')

    } catch (err) {
      lastError = err
    }
  }

  return lastError
}

const support = {
  ffmpeg: true,
  ffprobe: true,
  ffmpegWebp: true,
  convert: true,
  magick: false,
  gm: false,
  find: false
}

export {
  sticker,
  sticker2,
  sticker4,
  sticker5,
  sticker6,
  addExif,
  support
}
