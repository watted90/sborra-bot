const ANTIPORNO_WINDOW = 5000
const ANTIPORNO_CONFIDENCE = 0.75
const ANTIPORNO_MAX_VIOLATIONS = 3

global.antipornoProcessed = global.antipornoProcessed || new Set()

function getMediaEmoji(mtype) {
  return mtype === 'imageMessage' ? '🖼️' : mtype === 'stickerMessage' ? '🎭' : '📎'
}

function getJidUser(jid) {
  return typeof jid === 'string' ? jid.split('@')[0].split(':')[0] : ''
}

function getComparableUser(value) {
  return typeof value === 'string' ? getJidUser(value) : ''
}

function getViolationState(chat, sender) {
  if (!chat.antipornoViolations || typeof chat.antipornoViolations !== 'object') chat.antipornoViolations = {}
  if (!chat.antipornoViolations[sender] || typeof chat.antipornoViolations[sender] !== 'object') {
    chat.antipornoViolations[sender] = { count: 0, lastAt: 0 }
  }

  return chat.antipornoViolations[sender]
}

async function getGroupParticipant(conn, chatId, sender) {
  const metadata = await conn.groupMetadata(chatId).catch(() => null)
  const participants = metadata?.participants || []
  const senderUser = getComparableUser(sender)

  const participant = participants.find((entry) => {
    const candidates = [entry?.id, entry?.jid, entry?.lid, entry?.phoneNumber, entry?.pn, entry?.participantPn]
    return candidates.some((candidate) => getComparableUser(candidate) === senderUser)
  }) || null

  return { metadata, participant }
}

async function analyzeWithNyckel(buffer) {
  const axios = await import('axios')
  const cheerio = await import('cheerio')
  const { Blob, FormData } = await import('formdata-node')
  const { FormDataEncoder } = await import('form-data-encoder')
  const { Readable } = await import('stream')

  if (buffer.length < 1000 || buffer.length > 10 * 1024 * 1024) {
    throw new Error(`Buffer invalido: ${buffer.length} bytes`)
  }

  const headers = {
    authority: 'www.nyckel.com',
    origin: 'https://www.nyckel.com',
    referer: 'https://www.nyckel.com/pretrained-classifiers/nsfw-identifier',
    'user-agent': 'Postify/1.0.0',
    'x-requested-with': 'XMLHttpRequest',
    'content-type': 'multipart/form-data'
  }

  const res = await axios.default.get('https://www.nyckel.com/pretrained-classifiers/nsfw-identifier', { headers })
  const $ = cheerio.load(res.data)
  const src = $('script[src*="embed-image.js"]').attr('src')
  const fid = src?.match(/[?&]id=([^&]+)/)?.[1]
  if (!fid) throw new Error('No Function ID')

  const blob = new Blob([buffer], { type: 'image/jpeg' })
  const form = new FormData()
  form.append('file', blob, 'image.jpg')

  const encoder = new FormDataEncoder(form)
  const bodyStream = Readable.from(encoder.encode())
  const resp = await axios.default.post(
    `https://www.nyckel.com/v1/functions/${fid}/invoke`,
    bodyStream,
    { headers: { ...headers, ...encoder.headers, 'content-length': encoder.headers['content-length'] }, timeout: 30000 }
  )

  return { isPorn: resp.data.labelName === 'Porn', confidence: resp.data.confidence || 0 }
}

async function prepareAnalysisBuffer(m, buffer) {
  if (m.mtype !== 'stickerMessage') return buffer

  try {
    const sharp = (await import('sharp')).default
    return await sharp(buffer).jpeg({ quality: 90 }).resize(512, 512, { fit: 'inside' }).toBuffer()
  } catch {
    return buffer
  }
}

let handler = function () {}

handler.all = async function (m) {
  if (!m?.isGroup || !m?.key?.id) return
  if (m.mtype !== 'imageMessage' && m.mtype !== 'stickerMessage') return

  const chat = global.db?.data?.chats?.[m.chat] || {}
  if (!chat.antiporno) return

  const marker = `ANTIPORNO_${m.key.id}`
  if (global.antipornoProcessed.has(marker)) return
  global.antipornoProcessed.add(marker)

  try {
    const buffer = await m.download()
    if (!buffer?.length) return

    const analysisBuffer = await prepareAnalysisBuffer(m, buffer)
    if (analysisBuffer.length < 1000) return

    const result = await analyzeWithNyckel(analysisBuffer)
    if (!result.isPorn || result.confidence <= ANTIPORNO_CONFIDENCE) return

    const violationState = getViolationState(chat, m.sender)
    violationState.count += 1
    violationState.lastAt = Date.now()
    const detectionCount = violationState.count

    const key = { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.sender }
    let deleteSuccess = false
    try {
      await this.sendMessage(m.chat, { delete: key })
      deleteSuccess = true
    } catch {}

    let removalText = `⚠️ Rilevamento *${detectionCount}/${ANTIPORNO_MAX_VIOLATIONS}*.`
    if (detectionCount >= ANTIPORNO_MAX_VIOLATIONS) {
      const { participant } = await getGroupParticipant(this, m.chat, m.sender)
      const isAdminTarget = participant?.admin === 'admin' || participant?.admin === 'superadmin'

      if (isAdminTarget) {
        removalText = '⚠️ Limite raggiunto, ma l\'utente è admin e non posso rimuoverlo automaticamente.'
      } else {
        try {
          await this.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
          delete chat.antipornoViolations[m.sender]
          removalText = '⛔ Utente rimosso dal gruppo dopo 3 rilevamenti.'
        } catch {
          removalText = '⚠️ Limite raggiunto, ma non sono riuscito a rimuovere l\'utente dal gruppo.'
        }
      }
    }

    await this.sendMessage(m.chat, {
      text: `🚫 *MATERIALE PORNOGRAFICO RILEVATO*\n\n📊 ${(result.confidence * 100).toFixed(1)}%\n👤 @${m.sender.split('@')[0]}\n📎 ${getMediaEmoji(m.mtype)}\n📌 ${removalText}\n\n${deleteSuccess ? '✅ ELIMINATO' : '❌ BOT NON ADMIN?\n\n> Developed by 𝐒𝐛𝐨𝐫𝐫𝐚 𝐁𝐨𝐭'}`,
      mentions: [m.sender]
    })
  } catch (error) {
    console.error('Antiporno:', error.message)
  } finally {
    setTimeout(() => global.antipornoProcessed.delete(marker), ANTIPORNO_WINDOW)
  }
}

export default handler