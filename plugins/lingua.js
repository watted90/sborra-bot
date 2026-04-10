import '../lib/language.js'

const VALID_LANGUAGES = ['it', 'en', 'zh', 'ar', 'fr', 'hi', 'id', 'pt', 'ru', 'es', 'de', 'tr']

const LANG_NAMES = {
  it: 'Italiano 🇮🇹',
  en: 'English 🇬🇧',
  zh: '中文 🇨🇳',
  ar: 'العربية 🇸🇦',
  fr: 'Français 🇫🇷',
  hi: 'हिन्दी 🇮🇳',
  id: 'Bahasa Indonesia 🇮🇩',
  pt: 'Português 🇵🇹',
  ru: 'Русский 🇷🇺',
  es: 'Español 🇪🇸',
  de: 'Deutsch 🇩🇪',
  tr: 'Türkçe 🇹🇷'
}

const handler = async (m, { conn, text, usedPrefix, command, isOwner, isAdmin }) => {
  const userId  = m.sender
  const groupId = m.isGroup ? m.chat : null
  const lm      = global.languageManager

  if (m.isGroup && text?.toLowerCase().startsWith('group')) {
    if (!isAdmin && !isOwner) {
      return m.reply(global.t('smsOnlyAdmin', userId, groupId))
    }

    const langCode = text.toLowerCase().replace('group', '').trim()

    if (!VALID_LANGUAGES.includes(langCode)) {
      return conn.reply(m.chat,
        `❌ *Invalid language code.*\nUsage: ${usedPrefix}${command} group <code>\nAvailable: ${VALID_LANGUAGES.join(' | ')}`, m)
    }

    const success = lm.setGroupLanguage(groupId, langCode)
    if (success) lm.saveToDatabase()

    return conn.reply(m.chat,
      `🌍 *Group language changed to:* ${LANG_NAMES[langCode]}`, m)
  }

  if (text) {
    const langCode = text.toLowerCase().trim()

    if (!VALID_LANGUAGES.includes(langCode)) {
      return conn.reply(m.chat,
        `❌ *Invalid language code.*\nUsage: ${usedPrefix}${command} <code>\nAvailable: ${VALID_LANGUAGES.join(' | ')}`, m)
    }

    lm.setUserLanguage(userId, langCode)
    lm.saveToDatabase()

    return conn.reply(m.chat,
      `🌍 *Your personal language has been set to:* ${LANG_NAMES[langCode]}`, m)
  }

  const currentUserLang  = lm.getUserLanguage(userId) || 'en'
  const currentGroupLang = groupId ? lm.getUserLanguage(userId, groupId) || 'en' : null

  const helpText = `🌍 *Language Settings*

*Available Languages:*
${Object.entries(LANG_NAMES).map(([code, name]) => `• \`${code}\` — ${name}`).join('\n')}

*Personal Language:*
• \`${usedPrefix}${command} <code>\` — Set your personal language
• Current: *${LANG_NAMES[currentUserLang] || currentUserLang}*

*Group Language (Admins only):*
• \`${usedPrefix}${command} group <code>\` — Set the group language${
  currentGroupLang
    ? `\n• Current: *${LANG_NAMES[currentGroupLang] || currentGroupLang}*`
    : ''
}`

  return conn.reply(m.chat, helpText, m)
}

handler.help = ['language <code>', 'language group <code>']
handler.tags = ['config']
handler.command = /^(language|lang|lingua|idioma|sprache|langue|idioma|язык|语言|भाषा|bahasa|لغة)$/i

export default handler
