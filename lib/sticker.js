import { dirname } from 'path'
import { fileURLToPath } from 'url'
import * as fs from 'fs'
import * as path from 'path'
import * as crypto from 'crypto'
import { ffmpeg } from './converter.js'
import fluent_ffmpeg from 'fluent-ffmpeg'
import { spawn } from 'child_process'
import uploadFile from './uploadFile.js'
import uploadImage from './uploadImage.js'
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
      const [_spawnprocess, ..._spawnargs] = [...(support.gm ? ['gm'] : support.magick ? ['magick'] : []), 'convert', 'png:-', 'webp:-']
      const im = spawn(_spawnprocess, _spawnargs)
      im.stdout.on('data', chunk => bufs.push(chunk))
      ff.stdout.pipe(im.stdin)
      im.on('exit', () => {
        resolve(Buffer.concat(bufs))
      })
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
  const stickerMetadata = {
    type: 'full',
    pack: packname,
    author,
    categories,
    quality: 50,
    ...extra
  }
  const sticker = new Sticker(img ? img : url, stickerMetadata)
  return await sticker.toBuffer()
}

function sticker6(img, url) {
  return new Promise(async (resolve, reject) => {
    if (url) {
      const res = await fetch(url)
      if (res.status !== 200) throw await res.text()
      img = await res.buffer()
    }
    const type = await fileTypeFromBuffer(img) || {
      mime: 'application/octet-stream',
      ext: 'bin'
    }
    if (type.ext == 'bin') reject(img)
    const tmpFile = path.join(__dirname, `../tmp/${+new Date()}.${type.ext}`)
    const out = path.join(tmpFile + '.webp')
    await fs.promises.writeFile(tmpFile, img)
    const Fffmpeg = /video/i.test(type.mime) ? fluent_ffmpeg(tmpFile).inputFormat(type.ext) : fluent_ffmpeg(tmpFile).input(tmpFile)
    Fffmpeg
      .on('error', async () => {
        await fs.promises.unlink(tmpFile)
        reject(img)
      })
      .on('end', async () => {
        await fs.promises.unlink(tmpFile)
        resolve(await fs.promises.readFile(out))
      })
      .addOutputOptions([
        `-vcodec`, `libwebp`, `-vf`,
        `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15,pad=320:320:-1:-1:color=white@0.0`
      ])
      .toFormat('webp')
      .save(out)
  })
}

async function addExif(webpSticker, packname, author, categories = [''], extra = {}) {
  const img = new webp.Image()
  const stickerPackId = crypto.randomBytes(32).toString('hex')
  const json = { 'sticker-pack-id': stickerPackId, 'sticker-pack-name': packname, 'sticker-pack-publisher': author, 'emojis': categories, ...extra }
  const exifAttr = Buffer.from([0x49,0x49,0x2A,0x00,0x08,0x00,0x00,0x00,0x01,0x00,0x41,0x57,0x07,0x00,0x00,0x00,0x00,0x00,0x16,0x00,0x00,0x00])
  const jsonBuffer = Buffer.from(JSON.stringify(json), 'utf8')
  const exif = Buffer.concat([exifAttr, jsonBuffer])
  exif.writeUIntLE(jsonBuffer.length, 14, 4)
  await img.load(webpSticker)
  img.exif = exif
  return await img.save(null)
}

async function sticker(img, url, ...args) {
  let lastError
  for (const func of [
    sticker5,
    support.ffmpeg && sticker6,
    support.ffmpeg && support.ffmpegWebp && sticker4,
    support.ffmpeg && (support.convert || support.magick || support.gm) && sticker2
  ].filter(Boolean)) {
    try {
      const stiker = await func(img, url, ...args)
      if (!Buffer.isBuffer(stiker)) continue
      if (stiker.toString('ascii', 0, 20).includes('html')) continue
      if (stiker.toString('ascii', 0, 20).includes('WEBP')) {
        try {
          return await addExif(stiker, ...args)
        } catch {
          return stiker
        }
      }
    } catch (e) {
      lastError = e
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