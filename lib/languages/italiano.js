export default {
  
  // Sistema generale
  smsAvisoMG: () => "⚠️ `Attenzione`",
  smsWait: () => "⏳ `Caricamento` in corso...",
  smsError: () => "❌ Si è verificato un `errore`.",
  smsSuccess: () => "✅ Operazione completata con `successo`.",
  smsProcessing: () => "🔄 `Elaborazione` in corso...",
  
  // Comandi generali
  smsOnlyGroup: () => "❌ Questo comando è disponibile solo nei `gruppi`.",
  smsOnlyAdmin: () => "❌ Questo comando può essere usato solo dagli `admin`.",
  smsOnlyOwner: () => "❌ Questo comando è riservato al `proprietario`.",
  smsOnlyPremium: () => "💎 Questo comando è disponibile solo per utenti `premium`.",
  smsInvalidCommand: () => "❌ `Comando` non valido.",
  smsNoText: () => "❌ Inserisci un `testo` valido.",
  smsNoMedia: () => "❌ Invia o rispondi a un `contenuto multimediale`.",
  
  // AI e ChatGPT
  aiNoQuery: () => "⚠️ Inserisci una richiesta `valida` per ChatGPT.\n\n📌 `Esempi`:\n{prefix}{command} Raccontami una barzelletta\n{prefix}{command} Suggeriscimi 5 libri fantasy\n{prefix}{command} Codice HTML per una pagina con login",
  aiError: () => "❌ Si è verificato un `errore` durante la generazione della risposta. Riprova più tardi.",
  aiProcessing: () => "🤖 Sto elaborando la tua `richiesta`...",
  
  // Sistema benvenuto/addio
  welcomeTitle: () => "✧ `BENVENUTO` ✧",
  goodbyeTitle: () => "✧ `ARRIVEDERCI` ✧",
  welcomeDefault: (user, group, members) => "꒷꒦ ✦ `Benvenuto` ✦ ꒷꒦\n\n" + `┊ 『 👤 』 Utente: @${user}\n┊ 『 👥 』 Gruppo: ${group}\n┊ 『 📊 』 Membri: ${members}\n\n╰★────★────★`,
  goodbyeDefault: (user, members) => "꒷꒦ ✦ `Arrivederci` ✦ ꒷꒦\n\n" + `┊ 『 👤 』 Utente: @${user}\n┊ 『 📉 』 Membri rimasti: ${members}\n\n╰★────★────★`,
  
  welcomeSetHelp: () => `꒷꒦ ✦ \`Messaggio di benvenuto\` ✦ ꒷꒦

┊ 『 📌 』 Uso: {command} <messaggio>

┊ 『 🧩 』 Variabili disponibili:
• @user - Tag dell'utente
• $nome - Nome dell'utente
• $gruppo - Nome del gruppo
• $membri - Numero membri
• $numero - Numero di telefono
• $tag - Alias di @user

┊ 『 💡 』 Esempio:
{command} Ciao @user, benvenuto in $gruppo. Ora siamo $membri membri.

┊ 『 ♻️ 』 Ripristino:
{command} reset`,
  
  goodbyeSetHelp: () => `꒷꒦ ✦ \`Messaggio di addio\` ✦ ꒷꒦

┊ 『 📌 』 Uso: {command} <messaggio>

┊ 『 🧩 』 Variabili disponibili:
• @user - Tag dell'utente
• $nome - Nome dell'utente
• $gruppo - Nome del gruppo
• $membri - Numero membri
• $numero - Numero di telefono
• $tag - Alias di @user

┊ 『 💡 』 Esempio:
{command} Arrivederci @user, ci vediamo presto. Nel gruppo restano $membri membri.

┊ 『 ♻️ 』 Ripristino:
{command} reset`,
  
  // Sistema warn
  warnMentionUser: () => "❌ Menziona un `utente` o rispondi a un suo messaggio.",
  warnBotImmune: () => "🚫 Non puoi assegnare avvertimenti al `bot`.",
  warnUserNotFound: () => "❌ `Utente` non trovato nel database.",
  warnMessage: (params) => `⚠️ \`AVVERTIMENTO\` ${params?.warns || '{warns}'}/3\n┊ Al raggiungimento di \`3 avvertimenti\` l'utente verrà rimosso.`,
  warnBanMessage: () => "⛔ `Utente rimosso` dopo 3 avvertimenti.",
  muteAdminOnly: () => "❌ Solo un amministratore può usare questo comando.",
  muteNoTarget: () => "⚠️ Tagga la persona da mutare o rispondi a un suo messaggio.",
  unmuteNoTarget: () => "⚠️ Tagga la persona da smutare o rispondi a un suo messaggio.",
  muteBotImmune: () => "🤖 Non puoi mutare il bot.",
  muteGroupOwnerImmune: () => "👑 Il creatore del gruppo non può essere mutato.",
  muteSelfDenied: () => "⚠️ Non puoi mutare te stesso.",
  unmuteSelfDenied: () => "⚠️ Chiedi a un altro amministratore di smutarti.",
  muteAlreadyMuted: () => "ℹ️ Questo utente è già mutato.",
  unmuteNotMuted: () => "ℹ️ Questo utente non è mutato.",
  muteSuccess: ({ target }) => `🔇 \`Utente mutato\`\n\n@${target} non potrà più parlare nel gruppo: i suoi messaggi verranno eliminati.`,
  unmuteSuccess: ({ target }) => `🔊 \`Utente smutato\`\n\n@${target} può tornare a scrivere nel gruppo.`,
  
  menuownerChooseMenu: () => "Scegli un menu:",
menuownerMainMenuButton: () => "🏠 Menu Principale",
menuownerAdminMenuButton: () => "🛡️ Menu Admin",
menuownerSecurityMenuButton: () => "🚨 Menu Sicurezza",
menuownerGroupMenuButton: () => "👥 Menu Gruppo",
menuownerAiMenuButton: () => "🤖 Menu IA",
menuownerTitle: () => "𝑴𝑬𝑵𝑼 𝑶𝑾𝑵𝑬𝑹",
menuownerVersionLabel: () => "𝑽𝑬𝑹𝑺𝑰𝑶𝑵𝑬",
menuownerCollabLabel: () => "𝐂𝐎𝐋𝐋𝐀𝐁",
menuownerSupportLabel: () => "𝐒𝐔𝐏𝐏𝐎𝐑𝐓𝐎",
menuownerReservedCommands: () => "𝑪𝑶𝑴𝑨𝑵𝑫𝑰 𝑹𝑰𝑺𝑬𝑹𝑻𝑨𝑽𝑰 𝑨𝑳𝑳'𝑶𝑾𝑵𝑬𝑹",
menuownerManageCommand: () => "gestisci",
menuownerSetGroupsCommand: () => "setgruppi",
menuownerAddGroupsCommand: () => "aggiungigruppi",
menuownerResetGroupsCommand: () => "resetgruppi",
menuownerBanUserCommand: () => "banuser",
menuownerUnbanUserCommand: () => "unbanuser",
menuownerCleanupCommand: () => "pulizia",
menuownerGetFileCommand: () => "getfile",
menuownerSaveCommand: () => "saveplugin",
menuownerDpCommand: () => "delplugin",
menuownerGetPluginCommand: () => "getplugin",
menuownerJoinCommand: () => "join",
menuownerOutCommand: () => "out",
menuownerPrefixCommand: () => "prefisso",
menuownerResetPrefixCommand: () => "resetprefisso",
menuownerGodModeCommand: () => "godmode",
menuownerResetCommand: () => "azzera",
menuownerAddCommand: () => "aggiungi",
menuownerRemoveCommand: () => "rimuovi",
menuownerEveryGroupCommand: () => "everygroup",
menuownerBanChatCommand: () => "banchat",
menuownerUnbanChatCommand: () => "unbanchat",
menuownerRestartCommand: () => "riavvia",
menuownerShutdownBotCommand: () => "spegnibot",
menuownerUpdateBotCommand: () => "aggiornabot",
menuownerPluginParam: () => "plugin",
menuownerLinkParam: () => "link",
menuownerAutoAdminParam: () => "autoadmin",
menuownerNumMessagesParam: () => "num. messaggi",
menuownerCommandParam: () => "comando",
menuownerGroupParam: () => "gruppo",

  // Menu system
  mainMenuTitle: () => '𝑴𝑬𝑵𝑼 𝑷𝑹𝑰𝑵𝑪𝑰𝑷𝑨𝑳𝑬',
  adminMenuTitle: () => '𝑴𝑬𝑵𝑼 𝑨𝑫𝑴𝑰𝑵',
  adminCommands: () => '𝑪𝑶𝑴𝑨𝑵𝑫𝑰 𝑨𝑫𝑴𝑰𝑵',
  chooseMenu: () => 'Scegli un menu:',
  mainMenuButton: () => '🏠 Menu Principale',
  ownerMenuButton: () => '👑 Menu Owner',
  securityMenuButton: () => '🚨 Menu Sicurezza',
  groupMenuButton: () => '👥 Menu Gruppo',
  aiMenuButton: () => '🤖 Menu IA',
  promoteCommand: () => 'promuovi /mettiadmin',
  demoteCommand: () => 'retrocedi /togliadmin',
  warnCommands: () => 'warn / unwarn',
  muteCommands: () => 'muta / smuta',
  setDescCommand: () => 'setdescrizione',
  setScheduleCommand: () => 'setorario',
  setNameCommand: () => 'setnome',
  hidetagCommand: () => 'hidetag',
  kickCommand: () => 'kick / cacca',
  adminsCommand: () => 'admins',
  tagallCommand: () => 'tagall',
  openCloseCommand: () => 'aperto / chiuso',
  setWelcomeCommand: () => 'setwelcome',
  setByeCommand: () => 'setbye',
  inactiveCommand: () => 'inattivi',
  listNumCommand: () => 'listanum + prefisso',
  cleanupCommand: () => 'pulizia + prefisso',
  clearPlayCommand: () => 'clearplay',
  rulesCommand: () => 'regole/setregole',
  quarantineCommand: () => 'quarantena',
  dsCommand: () => 'ds',
  listWarnCommand: () => 'listawarn',
  linkCommand: () => 'link',
  linkQrCommand: () => 'linkqr',
  poweredBy: () => 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ',
  
  // Menu gruppo
  groupMenuTitle: () => '𝑴𝑬𝑵𝑼 𝐆𝐑𝐔𝐏𝐏𝐎',
  memberCommands: () => '𝑪𝑶𝑴𝑨𝑵𝑫𝑰 𝑷𝑬𝑹 𝑰 𝑴𝑬𝑴𝑩𝑹𝑰',
  musicAudioSection: () => 'MUSICA & AUDIO',
  infoUtilitySection: () => 'INFORMAZIONI & UTILITÀ',
  imageEditSection: () => 'IMMAGINI & MODIFICA',
  pokemonSection: () => 'POKEMON',
  gangSystemSection: () => 'GANG SYSTEM',
  gamesCasinoSection: () => 'GIOCHI & CASINÒ',
  economyRankingSection: () => 'ECONOMIA & CLASSIFICHE',
  socialInteractionSection: () => 'INTERAZIONI SOCIALI',
  howMuchSection: () => 'QUANTO È?',
  personalityTestSection: () => 'TEST PERSONALITÀ',
  songCommand: () => 'canzone',
  audioCommand: () => 'audio',
  videoCommand: () => 'video',
  artistTitleCommand: () => 'artista-titolo',
  cityCommand: () => 'città',
  textCommand: () => 'testo',
  groupCommand: () => 'gruppo',
  repoCommand: () => 'repo',
  userCommand: () => 'utente',
  topicCommand: () => 'argomento',
  checkSiteCommand: () => 'check sito',
  photoToStickerCommand: () => 'foto a sticker',
  stickerToPhotoCommand: () => 'sticker a foto',
  improveQualityCommand: () => 'migliora qualità foto',
  photoCommand: () => 'foto',
  hiddenPhotoCommand: () => 'foto nascosta',
  memeCommand: () => 'meme',
  fromStickerCommand: () => 'da sticker',
  blurImageCommand: () => 'sfoca immagine',
  comingSoonCommand: () => 'in arrivo',
  quantityCommand: () => 'quantità',
  headsOrTailsCommand: () => 'testa o croce',
  mathProblemCommand: () => 'problema mate',
  rockPaperScissorsCommand: () => 'sasso carta forbici',
  pokemonInfoCommand: () => 'info Pokémon',
  balanceCommand: () => 'saldo',
  topUsersCommand: () => 'top utenti',
  buyUCCommand: () => 'acquista UC',
  withdrawUCCommand: () => 'UC dalla banca',
  earnXPCommand: () => 'guadagna XP',
  proposalCommand: () => 'proposta',
  endRelationshipCommand: () => 'fine relazione',
  affinityCommand: () => 'affinità',
  charmCommand: () => 'fascino',
  createFightCommand: () => 'crea litigi',
  truthOrDareCommand: () => 'obb o v',
  versionLabel: () => '𝑵𝑬𝑹𝑺𝑰𝑶𝑵𝑬',
  supportLabel: () => '𝐒𝐔𝐏𝐏𝐎𝐑𝐓𝐎',
  
  // Menu owner
  ownerMenuTitle: () => '𝑴𝑬𝑵𝑼 𝑶𝑾𝑵𝑬𝑹',
  ownerReservedCommands: () => '𝑪𝑶𝑴𝑨𝑵𝑫𝑰 𝑹𝑰𝑺𝑬𝑹𝑽𝑨𝑻𝑰 𝑨𝑳𝑳\'𝑶𝑾𝑵𝑬𝑹',
  setNameCommand: () => 'impostanome',
  resetNameCommand: () => 'resetnome',
  manageCommand: () => 'gestisci',
  setGroupsCommand: () => 'setgruppi',
  addGroupsCommand: () => 'aggiungigruppi',
  resetGroupsCommand: () => 'resetgruppi',
  setPpCommand: () => 'setpp',
  banUserCommand: () => 'banuser',
  unbanUserCommand: () => 'unbanuser',
  blockUserCommand: () => 'blockuser',
  unblockUserCommand: () => 'unblockuser',
  getFileCommand: () => 'getfile',
  saveCommand: () => 'salva',
  dpCommand: () => 'dp',
  getPluginCommand: () => 'getplugin',
  joinCommand: () => 'join',
  outCommand: () => 'out',
  prefixCommand: () => 'prefisso',
  resetPrefixCommand: () => 'resetprefisso',
  godModeCommand: () => 'godmode',
  resetCommand: () => 'azzera',
  addCommand: () => 'aggiungi',
  removeCommand: () => 'rimuovi',
  everyGroupCommand: () => 'everygroup',
  banChatCommand: () => 'banchat',
  unbanChatCommand: () => 'unbanchat',
  restartCommand: () => 'riavvia',
  shutdownBotCommand: () => 'spegnibot',
  updateBotCommand: () => 'aggiornabot',
  imageParam: () => 'immagine',
  pluginParam: () => 'plugin',
  linkParam: () => 'link',
  autoAdminParam: () => 'autoadmin',
  numMessagesParam: () => 'num. messaggi',
  commandParam: () => 'comando',
  groupParam: () => 'gruppo',
  
  // Menu AI
  aiMenuTitle: () => '𝑴𝑬𝑵𝑼 𝑫𝑬𝑳 𝑩𝑶𝑻',
  generalCommands: () => '𝑪𝑶𝑴𝑨𝑵𝑫𝑰 𝑮𝑬𝑵𝑬𝑹𝑨𝑳𝑰',
  iaCommand: () => 'ia',
  alyaCommand: () => 'Alya',
  geminiCommand: () => 'gemini',
  chatgptCommand: () => 'chatgpt',
  deepseekCommand: () => 'deepseek',
  voiceCommand: () => 'vocale',
  imageCommand: () => 'immagine',
  image2Command: () => 'immagine2',
  image3Command: () => 'immagine3',
  animalInfoCommand: () => 'infoanimale',
  kcalCommand: () => 'kcal',
  summaryCommand: () => 'riassunto',
  recipeCommand: () => 'ricetta',
  
  // Menu Sicurezza
  securityMenuTitle: () => '𝑴𝑬𝑵𝑼 𝐅𝐔𝐍𝐙𝐈𝐎𝐍𝐈',
  activateDisable: () => '𝐀𝐓𝐓𝐈𝐕𝐀/𝐃𝐈𝐒𝐀𝐁𝐈𝐋𝐈𝐓𝐀',
  howToUse: () => '𝐂𝐎𝐌𝐄 𝐒𝐈 𝐔𝐒𝐀',
  activateFunction: () => 'attiva [funzione]',
  disableFunction: () => 'disabilita [funzione]',

// Ping/Status plugin
systemStatusTitle: () => "⋆ ★ 🚀 `STATO SISTEMA` 🚀 ★ ⋆",
uptime: () => "⌛ `Uptime:`",
ping: () => "⚡ `Ping:`",
cpuLabel: () => "💻 `CPU:`",
cpuUsage: () => "🔋 `Utilizzo:`",
ramLabel: () => "💾 `RAM:`",
freeRam: () => "🟢 `Libera:`",
version: () => "`Versione:`",

systemStatus: (params) => `${params?.title || '⋆ ★ 🚀 \`STATO SISTEMA\` 🚀 ★ ⋆'}
╭♡꒷ ๑ ⋆˚₊⋆───ʚ˚ɞ───⋆˚₊⋆ ๑ ⪩
୧ ⌛ \`Uptime:\` ${params?.uptime || 'N/A'}
୧ ⚡ \`Ping:\` ${params?.ping || 'N/A'} ms
  💻 \`CPU:\` ${params?.cpuModel || 'Sconosciuta'}
  🔋 \`Utilizzo:\` ${params?.cpuSpeed || 'N/A'} MHz
  💾 \`RAM:\` ${params?.ramUsed || 'N/A'} / ${params?.ramTotal || 'N/A'}
  🟢 \`Libera:\` ${params?.ramFree || 'N/A'}
╰♡꒷ ๑ ⋆˚₊⋆───ʚ˚ɞ───⋆˚₊⋆ ๑ ⪩`,

menuFooter: () => "Scegli un menu:",
menuAdmin: () => "🛡️ Menu Admin",
menuOwner: () => "👑 Menu Owner",
menuSecurity: () => "🚨 Menu Sicurezza",
menuGroup: () => "👥 Menu Gruppo",
menuAI: () => "🤖 Menu IA",
mainMenuTitle: () => "𝑴𝑬𝑵𝑼 𝑫𝑬𝑳 𝑩𝑶𝑻",
staffCommand: () => "staff",
candidatesCommand: () => "candidati",
installCommand: () => "installa",
guideCommand: () => "guida",
channelsCommand: () => "canali",
systemCommand: () => "sistema",
faqCommand: () => "FAQ",
pingCommand: () => "ping",
reportCommand: () => "segnala",
suggestCommand: () => "consiglia",
newsCommand: () => "novità",
versionLabel: () => "𝑽𝑬𝑹𝑺𝑰𝑶𝑵𝑬",
usersLabel: () => "𝐔𝐓𝐄𝐍𝐓𝐈",
chooseMenu: () => "Scegli un menu:",
mainMenuButton: () => "🏠 Menu Principale",
ownerMenuButton: () => "👑 Menu Owner",
securityMenuButton: () => "🚨 Menu Sicurezza",
groupMenuButton: () => "👥 Menu Gruppo",
aiMenuButton: () => "🤖 Menu IA",
adminMenuTitle: () => "𝑴𝑬𝑵𝑼 𝑨𝑫𝑴𝑰𝑵",
promoteCommand: () => "p /mettiadmin",
demoteCommand: () => "r /togliadmin",
warnCommands: () => "warn / unwarn",
setScheduleCommand: () => "setorario",
setNameCommand: () => "setnome",
hidetagCommand: () => "hidetag",
tagallCommand: () => "tagall",
kickCommand: () => "kick / cacca",
adminsCommand: () => "admins",
openCloseCommand: () => "aperto / chiuso",
setWelcomeCommand: () => "setwelcome",
setByeCommand: () => "setbye",
inactiveCommand: () => "inattivi",
listNumCommand: () => "listanum + prefisso",
cleanupCommand: () => "pulizia + prefisso",
rulesCommand: () => "regole /setregole",
listWarnCommand: () => "listawarn",
linkCommand: () => "link",
linkQrCommand: () => "linkqr",
requestsCommand: () => "richieste",
adminCommands: () => "𝑪𝑶𝑴𝑨𝑵𝑫𝑰 𝑨𝑫𝑴𝑰𝑵",
poweredBy: () => "ᴘᴏᴡᴇʀᴇᴅ ʙʏ",


installTitle: () => "⋆ ︵ ★ 💬 𝐂𝐇𝐀𝐓𝐔𝐍𝐈𝐓𝐘-𝐁𝐎𝐓 💬 ★ ︵ ⋆",
installIntro: () => "Vuoi installare ChatUnity Bot sul tuo dispositivo?",
installDescription: () => "Segui la guida completa di installazione disponibile su GitHub con tutti i passaggi dettagliati per Termux, Windows e altri sistemi operativi.",
installGuideLabel: () => "📖 𝐆𝐮𝐢𝐝𝐚 𝐂𝐨𝐦𝐩𝐥𝐞𝐭𝐚",
installRepoLabel: () => "📂 𝐑𝐞𝐩𝐨𝐬𝐢𝐭𝐨𝐫𝐲 𝐆𝐢𝐭𝐇𝐮𝐛",
installVideoLabel: () => "🎥 𝐕𝐢𝐝𝐞𝐨 𝐓𝐮𝐭𝐨𝐫𝐢𝐚𝐥",
installFeatures: () => "✨ 𝐂𝐨𝐬𝐚 𝐭𝐫𝐨𝐯𝐞𝐫𝐚𝐢:",
installFeature1: () => "📱 Installazione completa per Termux",
installFeature2: () => "💻 Installazione per Windows e altri OS",
installFeature3: () => "🔧 Risoluzione problemi comuni",
installFeature4: () => "📝 Comandi di setup automatici",
installCTA: () => "Visita il repository GitHub per iniziare l'installazione e scoprire tutte le funzionalità del bot!",
installNeedHelp: () => "Hai bisogno di aiuto? Unisciti al nostro canale di supporto!",

systemTitle: () => "⋆ ︵★ 🖥️ 𝐒𝐓𝐀𝐓𝐎 𝐃𝐄𝐋 𝐒𝐈𝐒𝐓𝐄𝐌𝐀 ★︵ ⋆",
systemHost: () => "🚩 *Host*",
systemOS: () => "🏆 *Sistema Operativo*",
systemArch: () => "💫 *Architettura*",
systemTotalRAM: () => "🥷 *RAM Totale*",
systemFreeRAM: () => "🚀 *RAM Libera*",
systemUsedRAM: () => "⌛ *RAM Usata*",
systemUptime: () => "🕒 *Uptime*",
systemNodeMemory: () => "🪴 *Memoria Node.js:*",
systemRSS: () => "RSS",
systemHeapTotal: () => "Heap Totale",
systemHeapUsed: () => "Heap Usata",
systemExternal: () => "Esterna",
systemArrayBuffer: () => "ArrayBuffer",
systemDiskSpace: () => "☁️ *Spazio su Disco:*",
systemDiskTotal: () => "Totale",
systemDiskUsed: () => "Usato",
systemDiskAvailable: () => "Disponibile",
systemDiskPercent: () => "Percentuale di Uso",
systemDiskError: () => "❌ Errore nel recupero dello spazio su disco.",

reportNoText: () => "⚠️ Inserisci una descrizione `dettagliata` del problema da segnalare.",
reportTooShort: () => "⚠️ La descrizione è troppo `breve`. Inserisci almeno 10 caratteri.",
reportTooLong: () => "⚠️ La descrizione supera il limite di `1000 caratteri`. Riduci il testo.",
reportTitle: () => "❌️ `SEGNALAZIONE` ❌️",
reportNumber: () => "📱 Numero",
reportUser: () => "👤 Utente",
reportMessage: () => "📝 Messaggio",
reportQuote: () => "📎 Citazione",
reportSuccess: () => "✅ La tua segnalazione è stata inviata con `successo` al team di sviluppo.\n\n_⚠️ Le segnalazioni false o inappropriate possono comportare restrizioni nell'uso del bot._",
reportChannelTitle: () => "⚠️ `SEGNALAZIONE BUG` ⚠️",
reportChannelBody: () => "Nuova segnalazione `ricevuta`.",
reportAnonymous: () => "Anonimo",
suggestNoText: () => "⚠️ Inserisci una proposta di `comando`.\n\n`Esempio:` .consiglia nomecomando descrizione della funzionalità",
suggestTooShort: () => "⚠️ La descrizione è troppo `breve`. Inserisci almeno 10 caratteri.",
suggestTooLong: () => "⚠️ La descrizione supera il limite di `1000 caratteri`. Riduci il testo.",
suggestTitle: () => "💡 `PROPOSTA` 💡",
suggestNumber: () => "📱 Numero",
suggestUser: () => "👤 Utente",
suggestMessage: () => "📝 Proposta",
suggestQuote: () => "📎 Citazione",
suggestSuccess: () => "✅ La tua proposta è stata inviata con `successo` al team di sviluppo.\n\n_⚠️ Le proposte inappropriate o illecite possono comportare restrizioni nell'uso del bot._",
suggestChannelTitle: () => "💡 `PROPOSTA COMANDO` 💡",
suggestChannelBody: () => "Nuova proposta `ricevuta`.",
suggestAnonymous: () => "Anonimo",
unwarnNoUser: () => "❌ Menziona un `utente` o rispondi al suo messaggio per rimuovere un avvertimento.",
unwarnUserNotFound: () => "❌ `Utente` non trovato nel database.",
unwarnNoWarnings: () => "ℹ️ Questo utente non ha `avvertimenti` attivi da rimuovere.",
unwarnSuccess: (params) => `✅ \`Avvertimento rimosso\`\n\n┊ Avvertimenti rimanenti: ${params?.remaining || 0}/3`,
setnameNoText: () => "⚠️ Inserisci il nuovo `nome` da assegnare al gruppo.",
setnameSuccess: () => "✅ `Nome del gruppo` aggiornato con successo.",
setnameError: () => "❌ Si è verificato un `errore` durante la modifica del nome del gruppo. Riprova.",
hidetagDefaultMessage: () => "📢 Messaggio per tutti",
hidetagStickerError: () => "❌ Impossibile scaricare lo sticker. Riprova.",
tagallTitle: () => "⋆ ︵ ★ 📢 𝐌𝐄𝐌𝐁𝐑𝐈 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐏𝐎 ★ ︵ ⋆",
tagallBot: () => "🤖 BOT",
tagallMessage: () => "📝 Messaggio",
tagallEmptyMessage: () => "📢 Attenzione membri del gruppo!",
tagallMemberCount: (params) => `👥 Membri totali: ${params?.count || 0}`,
adminsCooldown: (params) => `⏳ Attendi ancora ${params?.time || 'qualche istante'} prima di richiamare gli admin.\n\n_Questo comando ha un limite di utilizzo per evitare abusi._`,
adminsTitle: () => "⋆︵★ 🔔 𝐀𝐌𝐌𝐈𝐍𝐈𝐒𝐓𝐑𝐀𝐓𝐎𝐑𝐈 ★︵⋆",
adminsMessage: () => "📝 Motivo della chiamata",
adminsWarning: () => "⚠️ Usa questo comando solo per `urgenze` o situazioni realmente importanti. L'uso improprio può comportare la rimozione dal gruppo.",
adminsNoMessage: () => "Richiesta assistenza",
adminsNotification: () => "🔔 Gli amministratori sono stati notificati",
adminsExternalTitle: (params) => `${params?.groupName || 'Gruppo'}`,
adminsExternalBody: () => "Chiamata agli amministratori...",
groupOpen: () => "✅ `Chat aperta a tutti`\n\n୧ Tutti i membri possono inviare messaggi nel gruppo.",
groupClose: () => "🔒 `Chat riservata agli admin`\n\n୧ Solo gli amministratori possono inviare messaggi nel gruppo.",
setwelcomeNoText: () => "⚠️ Inserisci il messaggio di `benvenuto` che desideri configurare.\n\n`Variabili disponibili:`\n୧ @user - Menziona l'utente\n୧ @group - Nome del gruppo\n୧ @desc - Descrizione del gruppo",
setwelcomeSuccess: () => "✅ `Messaggio di benvenuto` configurato con successo per questo gruppo.",
setbyeNoText: () => "⚠️ Inserisci il messaggio di `addio` che desideri configurare.\n\n`Variabili disponibili:`\n୧ @user - Menziona l'utente\n୧ @group - Nome del gruppo",
setbyeSuccess: () => "✅ `Messaggio di addio` configurato con successo per questo gruppo.",
inactiveMenuTitle: () => "🌙 Gestione Membri Inattivi",
inactiveMenuFound: (params) => `💤 Membri inattivi trovati: *${params?.inactive || 0}/${params?.total || 0}*\n\n⏰ Inattivi da oltre 7 giorni\n\nSeleziona un’opzione qui sotto:`,
inactiveListTitle: () => "📋 Lista Membri Inattivi",
inactiveListNone: () => "✅ Nessun membro inattivo trovato!\n\n🎉 Tutti i membri sono attivi nel gruppo.",
inactiveListItem: (params) => `${params?.index}. @${params?.user}`,
inactiveRemoveStart: (params) => `⚠️ Rimozione inattivi: stai per eliminare *${params?.count}* membri.\n\n❗ Questa azione non può essere annullata!\n\nConfermi di voler continuare?`,
inactiveRemoveSuccess: (params) => `✅ Rimozione completata!\n\n🗑️ Membri rimossi: *${params?.removed}*${params?.errors ? `\n⚠️ Errori: *${params.errors}* membri non rimossi` : ''}`,
inactiveRemoveNone: () => "✅ Nessun membro da rimuovere! Tutti i membri del gruppo sono attivi.",
inactiveConfirmTitle: () => "⚠️ Conferma Rimozione",
inactiveBackButton: () => "🔄 Torna al Menu",
inactiveListButton: () => "📋 Visualizza Lista",
inactiveRemoveButton: () => "🗑️ Rimuovi Inattivi",
inactiveConfirmButton: () => "✅ Conferma Rimozione",
inactiveCancelButton: () => "❌ Annulla",
inactiveNotAdmin: () => "❌ Solo gli *admin* possono usare questa funzione.",
inactiveUnknown: () => "❌ Opzione non valida. Usa i bottoni.",
inactiveResultTitle: () => "📊 Risultato rimozione inattivi",
inactiveGroupLabel: () => "👥 Gruppo",
inactiveFooter: () => "Gestione gruppo inattivi",
noBotAdmin: () => "⚠️ Devo essere `admin` per rimuovere utenti.",
  noMention: () => "⚠️ Menziona un `utente` o rispondi al suo messaggio per rimuoverlo.",
  cannotRemoveOwner: () => "⚠️ Non puoi rimuovere il `creatore del bot`.",
  cannotRemoveBot: () => "⚠️ Non puoi rimuovere il `bot`.",
  cannotRemoveSelf: () => "⚠️ Non puoi rimuovere `te stesso`.",
  targetIsGroupOwner: () => "⚠️ Non puoi rimuovere il `creatore del gruppo`.",
  targetIsAdmin: () => "⚠️ Non puoi rimuovere un `admin` del gruppo.",
  kickSuccess: (params) => `꒷꒦ ✦ \`Utente rimosso\` ✦ ꒷꒦\n\n┊ 『 👤 』 Utente: @${params?.target}\n┊ 『 ⚖️ 』 Rimosso da: @${params?.executor}${params?.reason ? `\n┊ 『 📝 』 Motivo: ${params.reason}` : ''}\n\n╰★────★────★`,
  title: () => "⚠️ Utenti Avvertiti",
totalUsers: (params) => `Totale: ${params?.count || 0} utenti`,
userEntry: (params) => `${params?.index}. ${params?.name || 'Sconosciuto'} (${params?.warns}/3)`,
noWarns: () => "✓ Nessun utente ha ricevuto avvertimenti",
unknownUser: () => "Sconosciuto",
noBotAdmin: () => "⚠️ Devo essere admin per recuperare il link del gruppo",
qrCaption: (params) => `╭─────────────────\n│ 🔗 QR Code del gruppo\n│ *${params?.groupName}*\n│\n│ Scansiona per unirti\n╰─────────────────`,
qrError: () => "❌ Errore durante la generazione del QR Code",
noBotAdmin: () => "⚠️ Devo essere admin per gestire le richieste",
noAdmin: () => "⚠️ Solo gli admin del gruppo possono usare questo comando",
noPending: () => "✓ Non ci sono richieste in sospeso",
pendingCount: (params) => `╭─────────────────\n│ 📨 Richieste in sospeso: ${params?.count}\n│\n│ Seleziona un'opzione\n╰─────────────────`,
menuFooter: () => "Gestione richieste gruppo",
buttonAcceptAll: () => "✅ Accetta tutte",
buttonRejectAll: () => "❌ Rifiuta tutte",
buttonAccept39: () => "🇮🇹 Accetta +39",
buttonManage: () => "📥 Gestisci richieste",
acceptedSuccess: (params) => `✅ Accettate ${params?.count} richieste`,
rejectedSuccess: (params) => `❌ Rifiutate ${params?.count} richieste`,
no39Found: () => "⚠️ Nessuna richiesta con prefisso +39 trovata",
accepted39Success: (params) => `✅ Accettate ${params?.count} richieste con prefisso +39`,
errorAccepting: () => "❌ Errore durante l'accettazione delle richieste",
errorRejecting: () => "❌ Errore durante il rifiuto delle richieste",
invalidNumber: () => "⚠️ Numero non valido. Usa un numero maggiore di 0",
invalidInput: () => "⚠️ Input non valido. Invia un numero o '39'",
manageCustom: (params) => `╭─────────────────\n│ 📥 Gestione personalizzata\n│\n│ Quante richieste vuoi accettare?\n│\n│ ✦ Usa: .${params?.command} accetta <numero>\n│ ✦ Esempio: .${params?.command} accetta 7\n╰─────────────────`,
manageFooter: () => "Gestione personalizzata richieste",
richieste: {
  noBotAdmin: () => "⚠️ Devo essere admin per gestire le richieste",
  noAdmin: () => "⚠️ Solo gli admin del gruppo possono usare questo comando",
  noPending: () => "✓ Non ci sono richieste in sospeso",
  pendingCount: (params) => `╭─────────────────\n│ 📨 Richieste in sospeso: ${params?.count}\n│\n│ Seleziona un'opzione\n╰─────────────────`,
  menuFooter: () => "Gestione richieste gruppo",
  buttonAcceptAll: () => "✅ Accetta tutte",
  buttonRejectAll: () => "❌ Rifiuta tutte",
  buttonAccept39: () => "🇮🇹 Accetta +39",
  buttonManage: () => "📥 Gestisci richieste",
  acceptedSuccess: (params) => `✅ Accettate ${params?.count} richieste`,
  rejectedSuccess: (params) => `❌ Rifiutate ${params?.count} richieste`,
  no39Found: () => "⚠️ Nessuna richiesta con prefisso +39 trovata",
  accepted39Success: (params) => `✅ Accettate ${params?.count} richieste con prefisso +39`,
  errorAccepting: () => "❌ Errore durante l'accettazione delle richieste",
  errorRejecting: () => "❌ Errore durante il rifiuto delle richieste",
  invalidNumber: () => "⚠️ Numero non valido. Usa un numero maggiore di 0",
  invalidInput: () => "⚠️ Input non valido. Invia un numero o '39'",
  manageCustom: (params) => `╭─────────────────\n│ 📥 Gestione personalizzata\n│\n│ Quante richieste vuoi accettare?\n│\n│ ✦ Usa: .${params?.command} accetta <numero>\n│ ✦ Esempio: .${params?.command} accetta 7\n╰─────────────────`,
  manageFooter: () => "Gestione personalizzata richieste"
},
linkqr: {
  noBotAdmin: () => "⚠️ Devo essere admin per recuperare il link del gruppo",
  qrCaption: (params) => `╭─────────────────\n│ 🔗 QR Code del gruppo\n│ *${params?.groupName}*\n│\n│ Scansiona per unirti\n╰─────────────────`,
  qrError: () => "❌ Errore durante la generazione del QR Code"
},
notAvailable: () => "⚠️ Questo comando è disponibile solo con la base di ChatUnity",
imageNotFound: () => "⚠️ Errore durante il caricamento delle immagini",
mainTitle: () => "🌐 I nostri Social Network",
mainSubtitle: () => "Seguici ovunque per restare aggiornato",
mainFooter: () => "Powered by ChatUnity",
instagramTitle: () => "📸 Instagram",
instagramBody: () => "Seguici su Instagram per foto e stories quotidiane!",
instagramButton: () => "Apri Instagram",
tiktokTitle: () => "🎵 TikTok",
tiktokBody: () => "Contenuti creativi e divertenti su TikTok!",
tiktokButton: () => "Apri TikTok",
youtubeTitle: () => "🎬 YouTube",
youtubeBody: () => "Video, tutorial e live sul nostro canale YouTube!",
youtubeButton: () => "Apri YouTube",
discordTitle: () => "💬 Discord",
discordBody: () => "Unisciti alla nostra community su Discord!",
discordButton: () => "Apri Discord",
telegramTitle: () => "✈️ Telegram",
telegramBody: () => "News e aggiornamenti sul canale Telegram!",
telegramButton: () => "Apri Telegram",
whatsappTitle: () => "💚 Canale WhatsApp",
whatsappBody: () => "Resta aggiornato sul nostro canale ufficiale WhatsApp!",
whatsappButton: () => "Apri Canale",
cardFooter: () => "ChatUnity Social",
followUpMessage: () => "👆 Scorri le card per vedere tutti i nostri canali social!\n\n✦ Seguici per rimanere aggiornato",
followUpFooter: () => "ChatUnity Team",
menuButton: () => "📋 Torna al Menu",
errorLoading: () => "⚠️ Errore durante il caricamento dei social",


   linkTitle: () => "🔗 LINK DEL GRUPPO",
   linkFooter: () => "Copia il link e condividilo",
    copyButton: () => "📋 Copia Link",


  
  pingTitle: () => "⚡ PONG!",
  pingResponse: (params) => `⚡ *Ping:* ${params?.ping || 'N/A'} ms`,
  socialNotAvailable: () => "⚠️ Il comando non è disponibile al momento. Riprova più tardi.",
socialInstagramTitle: () => "📸 Instagram",
socialInstagramBody: () => "Seguici su Instagram per contenuti esclusivi, aggiornamenti e novità del bot!",
socialInstagramButton: () => "Segui su Instagram",
socialTiktokTitle: () => "🎵 TikTok",
socialTiktokBody: () => "Scopri i nostri video su TikTok e resta aggiornato con i contenuti più virali!",
socialTiktokButton: () => "Segui su TikTok",
socialYoutubeTitle: () => "📺 YouTube",
socialYoutubeBody: () => "Iscriviti al nostro canale YouTube per tutorial, guide e aggiornamenti video!",
socialYoutubeButton: () => "Iscriviti su YouTube",
socialDiscordTitle: () => "💬 Discord",
socialDiscordBody: () => "Unisciti alla nostra community Discord per supporto, chat e tanto altro!",
socialDiscordButton: () => "Entra su Discord",
socialTelegramTitle: () => "✈️ Telegram",
socialTelegramBody: () => "Seguici su Telegram per news istantanee e comunicazioni dirette!",
socialTelegramButton: () => "Segui su Telegram",
socialWhatsappTitle: () => "💚 WhatsApp",
socialWhatsappBody: () => "Iscriviti al nostro canale WhatsApp per ricevere aggiornamenti ufficiali!",
socialWhatsappButton: () => "Segui su WhatsApp",
socialCardFooter: () => "ChatUnity Social",
socialMainTitle: () => "⋆ ︵ ★ 🌐 𝐒𝐎𝐂𝐈𝐀𝐋 𝐌𝐄𝐃𝐈𝐀 ★ ︵ ⋆",
socialMainSubtitle: () => "Seguici sui nostri canali ufficiali",
socialMainFooter: () => "Resta connesso con ChatUnity",
socialFollowUpMessage: () => "✨ Grazie per il tuo interesse!\n\n୧ Seguici su tutti i nostri canali social per non perdere nessun aggiornamento.",
socialFollowUpFooter: () => "ChatUnity - Sempre connessi",
socialMenuButton: () => "🏠 Menu Principale",
socialErrorLoading: () => "❌ Si è verificato un errore durante il caricamento dei social. Riprova più tardi.",
listawarnTitle: () => "꒷꒦ ✦ Lista Utenti Avvertiti ✦ ꒷꒦",
listawarnMode: () => "Modalità",
listawarnGroup: () => "Gruppo",
listawarnTotal: ({ count }) => `Totale: ${count} ${count === 1 ? 'utente avvertito' : 'utenti avvertiti'}`,
listawarnNoWarns: () => "✨ Nessun utente avvertito",
listawarnUnknownUser: () => "Utente Sconosciuto",
listawarnUserNumber: ({ index }) => `${index}.`,
listawarnTag: () => "Tag:",
listawarnGroups: () => "Gruppo/i:",
listawarnNoActiveWarns: () => "Nessun avvertimento attivo",
listawarnErrorRetrieving: () => "Errore nel recupero",
listawarnTotalWarns: ({ count }) => `${count} totali`,
listawarnOwnerOnly: () => "❌ Questo comando può essere usato in privato solo dagli owner.",
listawarnAllUsers: () => "Tutti gli utenti",
kickNoBotAdmin: () => "❌ Il bot deve essere amministratore per rimuovere utenti.",
kickNoMention: () => "⚠️ Menziona o quota l'utente da rimuovere dal gruppo.",
kickCannotRemoveOwner: () => "🛡️ Non puoi rimuovere il creatore del bot.",
kickCannotRemoveBot: () => "🤖 Non puoi rimuovere il bot dal gruppo.",
kickCannotRemoveSelf: () => "😅 Non puoi rimuovere te stesso con questo comando.",
kickTargetIsGroupOwner: () => "👑 L'utente che hai provato a rimuovere è il creatore del gruppo.",
kickTargetIsAdmin: () => "🛡️ L'utente che hai provato a rimuovere è amministratore.",
kickSuccess: ({ target, executor, reason }) => `꒷꒦ ✦ Utente Rimosso ✦ ꒷꒦\n\n┊ 『 👤 』 Utente: @${target}\n┊ 『 ⚖️ 』 Rimosso da: @${executor}${reason ? `\n┊ 『 📝 』 Motivo: ${reason}` : ''}\n\n╰★────★────★`,
linkgroupNoBotAdmin: () => "❌ Il bot deve essere amministratore per ottenere il link del gruppo.",
linkgroupLinkTitle: ({ groupName }) => `꒷꒦ ✦ Link del Gruppo ✦ ꒷꒦\n\n┊ 『 📱 』 Gruppo: ${groupName}\n┊ 『 🔗 』 Clicca sul pulsante per copiare il link`,
linkgroupLinkFooter: () => "Powered by ChatUnity Bot",
linkgroupCopyButton: () => "📋 Copia Link",
joinNoLink: ({ prefix, command }) => `⚠️ Inserisci il link del gruppo.\n\n┊ 『 💡 』 Esempio: ${prefix}${command} <link> <giorni | inf>`,
joinInvalidLink: () => "❌ Link del gruppo non valido.",
joinSuccessInfinite: () => "꒷꒦ ✦ Ingresso Gruppo ✦ ꒷꒦\n\n┊ 『 ✅ 』 Mi sono unito correttamente al gruppo\n┊ 『 ⏰ 』 Permanenza: Illimitata\n\n╰★────★────★",
joinSuccessExpired: ({ days }) => `꒷꒦ ✦ Ingresso Gruppo ✦ ꒷꒦\n\n┊ 『 ✅ 』 Mi sono unito correttamente al gruppo\n┊ 『 ⏰ 』 Permanenza: ${days} giorni\n\n╰★────★────★`,
banuserNoTarget: () => "⚠️ Per favore tagga un utente, rispondi a un messaggio o scrivi il numero di telefono.\n\n┊ 『 💡 』 Esempio: @3934xxxxxxx",
banuserInvalidNumber: () => "❌ Numero di telefono non valido.",
banuserSuccess: ({ target }) => `꒷꒦ ✦ Utente Bloccato ✦ ꒷꒦\n\n┊ 『 🚫 』 Utente: @${target}\n┊ 『 ⚠️ 』 Questo utente è stato bloccato dal bot\n┊ 『 📵 』 Non potrà più utilizzare i comandi\n\n╰★────★────★`,
unbanuserNoTarget: () => "⚠️ Tagga un utente, rispondi a un messaggio o scrivi il numero di telefono.\n\n┊ 『 💡 』 Esempio: @3934xxxxxxx",
unbanuserInvalidNumber: () => "❌ Numero di telefono non valido.",
unbanuserSuccess: ({ target }) => `꒷꒦ ✦ Utente Sbloccato ✦ ꒷꒦\n\n┊ 『 ✅ 』 Utente: @${target}\n┊ 『 🎉 』 Questo utente è stato sbloccato\n┊ 『 📱 』 Può ora utilizzare i comandi del bot\n\n╰★────★────★`,
listanumNoPrefix: () => "⚠️ Inserisci il prefisso telefonico da cercare.\n\n┊ 『 💡 』 Esempio: .listanum 39",
listanumInvalidPrefix: () => "❌ Il prefisso deve essere un numero valido.",
listanumTitle: ({ prefix }) => `꒷꒦ ✦ Lista Numeri +${prefix} ✦ ꒷꒦`,
listanumNoUsers: ({ prefix }) => `꒷꒦ ✦ Nessun Utente ✦ ꒷꒦\n\n┊ 『 ℹ️ 』 Nessun utente trovato con prefisso +${prefix}\n\n╰★────★────★`,
puliziaStart: ({ prefix }) => `꒷꒦ ✦ Pulizia Avviata ✦ ꒷꒦\n\n┊ 『 🔄 』 Rimozione utenti con prefisso +${prefix}\n┊ 『 ⏳ 』 Attendere il completamento...\n\n╰★────★────★`,
puliziaNoBotAdmin: () => "❌ Il bot deve essere amministratore per rimuovere utenti.",
puliziaNoRestrict: () => "❌ La modalità restrittiva non è abilitata.",
puliziaUserLeft: ({ user }) => `@${user} è stato rimosso`,
getNoInput: () => "⚠️ Utilizzo non corretto del comando.\n\n╰★─ Esempi Singoli ─★╮\n┊ getplugin menu-gruppo script\n┊ getfile config.js file\n\n╰★─ Esempi Multipli ─★╮\n┊ getplugin admin & menu & config\n┊ getplugin admin & menu & config script\n┊ getplugin admin script & menu file\n┊ (massimo 3 plugin contemporaneamente)\n\n╰♡꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷",
getNoPluginFound: () => "❌ Nessun plugin valido trovato nella richiesta multipla.",
getMultiSelect: ({ pluginList }) => `꒷꒦ ✦ Plugin Selezionati ✦ ꒷꒦\n\n${pluginList}\n\n┊ 『 ❓ 』Come vuoi ricevere tutti i plugin?\n\n╰★────★────★`,
getMultiScriptBtn: () => "📄 Tutti Script",
getMultiFileBtn: () => "📎 Tutti File",
getMultiResult: ({ successCount, total, results }) => `꒷꒦ ✦ Richiesta Multipla ✦ ꒷꒦\n\n┊ 『 📦 』 ${successCount}/${total} plugin trovati\n\n${results}\n\n╰★────★────★`,
getFileSelect: ({ filename }) => `꒷꒦ ✦ File Selezionato ✦ ꒷꒦\n\n┊ 『 📁 』 ${filename}\n\n┊ 『 ❓ 』 Cosa vuoi fare?\n\n╰★────★────★`,
getScriptBtn: () => "📄 Script",
getFileBtn: () => "📎 File",
getNoSimilar: ({ type, name }) => `❌ Nessun ${type} simile a "${name}" trovato.`,
getFoundConfirm: ({ filename, score }) => `꒷꒦ ✦ Trovato ✦ ꒷꒦\n\n┊ 『 ✨ 』 "${filename}"\n┊ 『 📊 』 Precisione: ${score}%\n\n┊ 『 ❓ 』 Confermi?\n\n╰♡꒷ ๑ Rispondi: si/no`,
getMultiChoice: ({ name, options }) => `꒷꒦ ✦ Risultati per "${name}" ✦ ꒷꒦\n\n${options}\n\n┊ 『 📝 』 Scegli il numero o "no" per annullare\n\n╰★────★────★`,
getDirNotFound: ({ dir }) => `❌ Directory ${dir} non trovata.`,
getFileSuccess: ({ prefix, filename, type }) => `${prefix}꒷꒦ ✦ Successo ✦ ꒷꒦\n\n┊ 『 ✅ 』 Ecco il ${type}: ${filename}\n\n╰★────★────★`,
getScriptSuccess: ({ prefix, filename, content }) => `${prefix}꒷꒦ ✦ Codice di ${filename} ✦ ꒷꒦\n\n${content}\n\n╰★────★────★`,
getInvalidOption: () => "❌ Opzione non valida! Usa \"file\" o \"script\".",
getScriptOnlyJS: () => "❌ L'opzione script è disponibile solo per file JavaScript.",
getSyntaxError: ({ prefix, filename, error }) => `${prefix}꒷꒦ ✦ Errore Sintassi ✦ ꒷꒦\n\n┊ 『 ⛔️ 』 File: ${filename}\n\n${error}\n\n╰★────★────★`,
getFileError: ({ prefix, filename, error }) => `${prefix}❌ Errore: Il file ${filename} non esiste o non può essere letto.\n\n${error}`,
getProcessError: ({ filename, error }) => `❌ Errore nel processare ${filename}: ${error}`,
getOperationCancelled: () => "꒷꒦ ✦ Operazione Annullata ✦ ꒷꒦\n\n┊ 『 ❌ 』 Richiesta annullata con successo\n\n╰★────★────★",
getGenericError: ({ error }) => `❌ 𝐄𝐫𝐫𝐨𝐫𝐞: ${error}`,
leaveNotAdmin: () => "⚠️ Questo comando può essere usato solo da admin e owner del gruppo.",
leaveMessage: () => "꒷꒦ ✦ Arrivederci ✦ ꒷꒦\n\n┊ 『 👋 』 Il bot sta abbandonando il gruppo\n\n╰★────★────★",
leaveError: () => "❌ Si è verificato un errore durante l'uscita dal gruppo.",
saveNoName: () => "⚠️ Specificare il nome del plugin da salvare.",
saveNoQuoted: () => "⚠️ È necessario rispondere al messaggio contenente il codice del plugin.",
saveSaveSuccess: ({ path }) => `꒷꒦ ✦ Plugin Salvato ✦ ꒷꒦\n\n┊ 『 ✅ 』 File creato con successo\n┊ 『 📁 』 Percorso: ${path}\n\n╰★────★────★`,
saveErrorWrite: ({ error }) => `❌ Errore durante il salvataggio del plugin.\n\n${error}`,
deleteNoPlugins: () => "⚠️ Nessun plugin disponibile da eliminare.",
deleteHelp: ({ usedPrefix, pluginList, total }) => `꒷꒦ ✦ Delete Plugin Manager ✦ ꒷꒦\n\n┊ 『 📌 』 Uso del comando:\n┊ ${usedPrefix}deleteplugin <nome>\n\n┊ 『 ✨ 』 Esempio:\n┊ ${usedPrefix}deleteplugin menu-official\n\n┊ 『 📋 』 Plugin disponibili:\n${pluginList}${total > 15 ? `\n┊ ... e altri ${total - 15} plugin` : ''}\n\n╰★────★────★`,
deleteInvalidNumber: ({ max }) => `❌ Numero non valido! Range: 1-${max}`,
deleteNoSimilar: ({ input }) => `❌ Nessun plugin simile a "${input}" trovato.`,
deleteConfirm: ({ filename, score }) => `꒷꒦ ✦ Plugin Trovato ✦ ꒷꒦\n\n┊ 『 ✨ 』 "${filename}"\n┊ 『 📊 』 Corrispondenza: ${score}%\n\n┊ 『 🗑️ 』 Vuoi eliminarlo?\n\n╰♡꒷ ๑ Rispondi: si/no`,
deleteMultiChoice: ({ input, options }) => `꒷꒦ ✦ Risultati per "${input}" ✦ ꒷꒦\n\n${options}\n\n┊ 『 📝 』 Scegli il numero o "no" per annullare\n\n╰★────★────★`,
deleteNotFound: ({ path }) => `꒷꒦ ✦ Attenzione ✦ ꒷꒦\n\n┊ 『 📁 』 File non trovato nel filesystem\n\n┊ 『 🔍 』 Percorso cercato:\n┊ ${path}\n\n╰★────★────★`,
deleteSuccess: ({ pluginName, sender, time }) => `꒷꒦ ✦ Plugin Eliminato ✦ ꒷꒦\n\n┊ 『 🗑️ 』 Plugin eliminato con successo\n\n┊ 『 📝 』 Nome: ${pluginName}.js\n┊ 『 👤 』 Eliminato da: @${sender}\n┊ 『 🕐 』 Ora: ${time}\n\n┊ 『 ⚠️ 』 Nota: Il bot potrebbe richiedere\n┊ un riavvio per applicare le modifiche\n\n╰★────★────★\n\n🎯 Operazione completata!`,
deleteError: ({ error }) => `꒷꒦ ✦ Errore Sistema ✦ ꒷꒦\n\n┊ 『 ❌ 』 Impossibile eliminare il plugin\n\n┊ 『 🔍 』 Dettagli errore:\n┊ ${error}\n\n┊ 『 💡 』 Possibili soluzioni:\n┊ -  Controlla i permessi del file\n┊ -  Verifica che il plugin non sia in uso\n┊ -  Riprova tra qualche secondo\n\n╰★────★────★`,
deleteOperationCancelled: () => "꒷꒦ ✦ Operazione Annullata ✦ ꒷꒦\n\n┊ 『 ❌ 』 Eliminazione annullata\n\n╰★────★────★",
deleteGenericError: ({ error }) => `❌ Errore: ${error}`,
broadcastNoOwner: () => "❌ Solo l'owner può usare questo comando!",
broadcastNoGroups: () => "❌ Il bot non è in nessun gruppo!",
broadcastHeader: () => "꒷꒦ ✦ Messaggio da ChatUnity ✦ ꒷꒦",
broadcastIntro: () => "┊ 『 👑 』 Cari membri del gruppo, è arrivato un nuovo messaggio da parte dell'owner:",
broadcastLabel: () => "┊ 『 📝 』 Messaggio:",
broadcastNote: () => "┊ 『 ⚠️ 』 Questo messaggio è stato inviato a tutti i membri del gruppo",
broadcastFooter: () => "╰★────★────★\n\n> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ChatUnity",
broadcastSuccess: ({ count }) => `꒷꒦ ✦ Broadcast Completato ✦ ꒷꒦\n\n┊ 『 ✅ 』 Messaggio inviato con successo\n┊ 『 📊 』 Gruppi raggiunti: ${count}\n┊ 『 👥 』 Tutti i membri sono stati menzionati\n\n╰★────★────★`,
broadcastDefaultMessage: () => "Questo è un messaggio predefinito inviato a tutti i gruppi.",
broadcastError: ({ group, error }) => `❌ Errore nell'invio del messaggio al gruppo ${group}: ${error}`,
banChatSuccess: () => "꒷꒦ ✦ Chat Bloccata ✦ ꒷꒦\n\n┊ 『 🚫 』 Chat bloccata con successo\n┊ 『 ⚠️ 』 Il bot non risponderà più in questa chat\n\n╰★────★────★",
unbanChatSuccess: () => "꒷꒦ ✦ Chat Sbloccata ✦ ꒷꒦\n\n┊ 『 ✅ 』 Chat sbloccata con successo\n┊ 『 🎉 』 Il bot può nuovamente rispondere in questa chat\n\n╰★────★────★",
restartInitiating: () => "꒷꒦ ✦ Riavvio in corso ✦ ꒷꒦\n\n┊ 『 ⏳ 』 Attendere prego...\n\n╰★────★────★",
restartProgress: () => "🚀🚀🚀🚀🚀🚀",
restartSuccess: () => "꒷꒦ ✦ Riavvio Completato ✦ ꒷꒦\n\n┊ 『 ✅ 』 Bot riavviato con successo\n┊ 『 🎉 』 Sistema operativo\n\n╰★────★────★",
restartError: ({ error }) => `꒷꒦ ✦ Errore Riavvio ✦ ꒷꒦\n\n┊ 『 ❌ 』 Impossibile riavviare il bot\n┊ 『 🔍 』 Errore: ${error}\n\n╰★────★────★`,
shutdownInitiating: () => "꒷꒦ ✦ Spegnimento Bot ✦ ꒷꒦\n\n┊ 『 🔌 』 Sto spegnendo il bot...\n┊ 『 🚫 』 Tutte le chat sono state bloccate\n┊ 『 ⏳ 』 Attendere la chiusura\n\n╰★────★────★",
shutdownSuccess: () => "꒷꒦ ✦ Bot Spento ✦ ꒷꒦\n\n┊ 『 ✅ 』 Spegnimento completato\n┊ 『 💤 』 Bot offline\n\n╰★────★────★",
shutdownChatsBanned: ({ count }) => `┊ 『 📊 』 ${count} chat bloccate`,
shutdownError: ({ error }) => `꒷꒦ ✦ Errore Spegnimento ✦ ꒷꒦\n\n┊ 『 ❌ 』 Impossibile spegnere il bot\n┊ 『 🔍 』 Errore: ${error}\n\n╰★────★────★`,
updateInitiating: () => "꒷꒦ ✦ Aggiornamento Bot ✦ ꒷꒦\n\n┊ 『 🔄 』 Controllo aggiornamenti...\n┊ 『 ⏳ 』 Attendere prego\n\n╰★────★────★",
updateSuccess: ({ output }) => `꒷꒦ ✦ Aggiornamento Completato ✦ ꒷꒦\n\n┊ 『 ✅ 』 Bot aggiornato con successo\n\n┊ 『 📋 』 Dettagli:\n${output}\n\n╰★────★────★`,
updateError: ({ error }) => `꒷꒦ ✦ Errore Aggiornamento ✦ ꒷꒦\n\n┊ 『 ❌ 』 Impossibile aggiornare il bot\n┊ 『 🔍 』 Errore: ${error}\n\n┊ 『 💡 』 Possibili soluzioni:\n┊ -  Verifica la connessione internet\n┊ -  Controlla i permessi Git\n┊ -  Assicurati di essere su un branch valido\n\n╰★────★────★`,
updateNoChanges: () => "꒷꒦ ✦ Già Aggiornato ✦ ꒷꒦\n\n┊ 『 ℹ️ 』 Il bot è già all'ultima versione\n┊ 『 ✅ 』 Nessun aggiornamento disponibile\n\n╰★────★────★",
groupMenuTitle: () => "𝑴𝑬𝑵𝑼 𝑮𝑹𝑼𝑷𝑷𝑶",
chooseMenu: () => "Scegli una categoria dal menu:",
mainMenuButton: () => "🏠 Menu Principale",
adminMenuButton: () => "🛡️ Menu Admin",
ownerMenuButton: () => "👑 Menu Owner",
securityMenuButton: () => "🚨 Menu Sicurezza",
aiMenuButton: () => "🤖 Menu IA",
musicAudioSection: () => "MUSICA & AUDIO",
infoUtilitySection: () => "INFORMAZIONI & UTILITÀ",
imageEditSection: () => "IMMAGINI & MODIFICA",
pokemonSection: () => "POKEMON",
gamesCasinoSection: () => "GIOCHI & CASINÒ",
economyRankingSection: () => "ECONOMIA & CLASSIFICHE",
socialInteractionSection: () => "INTERAZIONI SOCIALI",
howMuchSection: () => "QUANTO È?",
personalityTestSection: () => "TEST PERSONALITÀ",
memberCommands: () => "𝑪𝑶𝑴𝑨𝑵𝑫𝑰 𝑷𝑬𝑹 𝑰 𝑴𝑬𝑴𝑩𝑹𝑰",
versionLabel: () => "𝑽𝑬𝑹𝑺𝑰𝑶𝑵𝑬",
collabLabel: () => "𝑪𝑶𝑳𝑳𝑨𝑩𝑶𝑹𝑨𝒁𝑰𝑶𝑵𝑬",
songCommand: () => "canzone",
audioCommand: () => "audio",
videoCommand: () => "video",
cityCommand: () => "città",
textCommand: () => "testo",
groupCommand: () => "gruppo",
userCommand: () => "utente",
checkSiteCommand: () => "check sito",
photoToStickerCommand: () => "foto a sticker",
stickerToPhotoCommand: () => "sticker a foto",
improveQualityCommand: () => "migliora qualità foto",
photoCommand: () => "foto",
hiddenPhotoCommand: () => "foto nascosta",
memeCommand: () => "meme",
fromStickerCommand: () => "da sticker",
blurImageCommand: () => "sfoca immagine",
comingSoonCommand: () => "in arrivo",
quantityCommand: () => "quantità",
headsOrTailsCommand: () => "testa o croce",
mathProblemCommand: () => "problema mate",
rockPaperScissorsCommand: () => "sasso carta forbici",
pokemonInfoCommand: () => "info Pokémon",
balanceCommand: () => "saldo",
topUsersCommand: () => "top utenti",
withdrawUCCommand: () => "UC dalla banca",
earnXPCommand: () => "guadagna XP",
endRelationshipCommand: () => "fine relazione",
affinityCommand: () => "affinità",
charmCommand: () => "fascino",
createFightCommand: () => "crea litigi",
truthOrDareCommand: () => "obb o v",
playNoText: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n ❗ Inserisci un titolo o link\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
playNoResults: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n ❗ Nessun risultato trovato\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
playAudioLoading: () => "┊ ┊ ┊ ┊‿ ˚➶ ｡˚\n┊ ┊ ┊ ┊. ➶ ˚\n┊ ┊ ┊ ˚✧ 🎵 Audio in arrivo\n┊ ˚➶ ｡˚ ☁︎ Attendi qualche istante...",
playVideoLoading: () => "┊ ┊ ┊ ┊‿ ˚➶ ｡˚\n┊ ┊ ┊ ┊. ➶ ˚\n┊ ┊ ┊ ˚✧ 🎬 Video in arrivo\n┊ ˚➶ ｡˚ ☁︎ Attendi qualche istante...",
playDownloadComplete: () => "✅ Download completato!",
playTooLong: ({ maxMinutes, duration }) => `╭★────★────★\n|ㅤㅤㅤㅤㅤㅤㅤ꒰¡VIDEO TROPPO LUNGO!꒱\n|˚₊꒷ ⏳ ꒱ ฅ﹕Massimo: ${maxMinutes} minuti ₊˚๑\n|˚₊꒷ ⌛ ꒱ ฅ﹕Durata: ${duration} ₊˚๑\n╰★────★────★`,
playVideoInfo: ({ title, timestamp, views, author, ago, url }) => `⋆ ︵ ★ 🎥 INFO VIDEO 🎥 ★ ︵ ⋆\n\n\n꒷꒦ ✦ ୧・︶ : ︶ ꒷꒦ ‧₊ ୧\n୧ ✍️ *Titolo:* ${title}\n୧ ⏳ *Durata:* ${timestamp}\n୧ 👀 *Visualizzazioni:* ${views}\n୧ 🔰 *Canale:* ${author}\n୧ 🔳 *Pubblicato:* ${ago}\n୧ 🔗 *Link:* ${url}\n꒷꒦ ✦ ୧・︶ : ︶ ꒷꒦ ‧₊ ୧\n\n\n╰♡꒷ ๑ ⋆˚₊⋆───ʚ˚ɞ───⋆˚₊⋆ ๑ ⪩\n  > Scegli un formato per scaricare\n╰♡꒷ ๑ ⋆˚₊⋆───ʚ˚ɞ───⋆˚₊⋆ ๑ ⪩`,
playChooseFormat: () => "Scegli un formato:",
playAudioButton: () => "🎵 Audio",
playVideoButton: () => "🎬 Video",
playSaveButton: () => "💾 Salva Playlist",
playError: ({ error }) => `꒰🩸꒱ ◦- ≫ ERRORE\n ★・・・・・・・★\n  ${error}\n ★・・・・・・・★`,
playNoValidLink: () => "꒰🩸꒱ ◦- ≫ ERRORE\n ★・・・・・・・★\n  Nessun link valido trovato\n ★・・・・・・・★",
playlistEmpty: ({ userName }) => `ℹ️ ${userName ? `${userName} non ha brani salvati` : 'La tua playlist è vuota!'}`,
playlistHeader: ({ userName }) => `📋 ${userName ? `Playlist di ${userName}` : 'La tua playlist'}`,
playlistMore: ({ count }) => `...e altri ${count} brani`,
playlistSelectToPlay: () => "Seleziona un brano da riprodurre",
saveNoText: () => "⚠️ Specifica un brano da cercare",
saveSearching: ({ query }) => `⌛ Cerco "${query}"...`,
saveNoResults: () => "⚠️ Nessun risultato trovato",
saveAlreadyExists: () => "⚠️ Canzone già in playlist! Usa .playlist per vedere i brani salvati.",
saveSaved: () => "✅ Canzone salvata!",
saveViewPlaylist: () => "📋 Vedi Playlist",
savePlay: () => "🎵 Riproduci",
saveDelete: () => "🗑️ Elimina",
saveSaveNew: () => "💾 Salva nuovo",
deleteSelect: () => "🗑️ Seleziona brano da eliminare",
deleteUse: () => "Usa: .elimina <numero>",
deleteInvalid: () => "⚠️ Numero non valido!",
deleteSuccess: () => "✅ Brano eliminato!",
deleteRestore: () => "💾 Ripristina",
backButton: () => "🔙 Indietro",
playlistError: ({ error }) => `⚠️ Errore: ${error}`,
playlistSignature: () => "꙰ 𝗖𝗿𝗲𝗮𝘇𝗶𝗼𝗻𝗲 𝗚𝗮𝗯𝟯𝟯𝟯 ꙰",
ytSearchMissingFiles: () => "❗ Per usare questo comando usa la base di ChatUnity",
ytSearchMissingQuery: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n 📌 Inserisci il nome del video\n Esempio: .ytsearch compilation\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
ytSearchNoResults: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n ❌ Nessun risultato trovato\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
ytSearchTitle: () => "🔎 YouTube Search",
ytSearchFooter: () => "ChatUnity ✦ Downloader",
ytSearchResultTitle: () => "🎬 Risultati YouTube",
ytSearchResultHeader: () => "╭┈ ─ ─ ✦ ─ ─ ┈╮\n ୧ 🎬 ୭ Risultati ricerca\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Ecco i risultati trovati ✦ ꒷꒦",
ytSearchSelectPrompt: () => "╭★────★────★╮\n│ 🔢 Seleziona un video\n│ dai risultati sopra\n╰★────★────★╯",
ytSearchDuration: () => "📺 Durata:",
ytSearchViews: () => "👁 Visualizzazioni:",
ytSearchChannel: () => "👤 Canale:",
toAudioNoMedia: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ⚠️ Rispondi a un video o audio\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
toAudioDownloadError: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ❌ Errore durante il download\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
toAudioConvertError: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ❌ Errore durante la conversione\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",


weatherNoCity: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ❗ Inserisci il nome di una città\n  Uso: .meteo [nome città]\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
weatherInfo: ({ name, country, temp, feels, min, max, humidity, main, desc, wind, pressure }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🌍 ୭ *Meteo ${name}, ${country}*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Informazioni meteo ✦ ꒷꒦\n\n🌡 Temperatura: ${temp}°C\n🌡 Percepita: ${feels}°C\n🌡 Minima: ${min}°C\n🌡 Massima: ${max}°C\n💧 Umidità: ${humidity}%\n☁ Meteo: ${main}\n🌫 Descrizione: ${desc}\n💨 Vento: ${wind} m/s\n🔽 Pressione: ${pressure} hPa\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 🌤️\n│ Powered by OpenWeather\n╰★────★────★╯`,
weatherCityNotFound: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  🚫 Città non trovata\n  Controlla la scrittura\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
weatherError: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ⚠️ Errore durante il recupero\n  Riprova più tardi\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
translateHelp: ({ prefix, command, languages }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🌍 ୭ *TRADUTTORE*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Esempi d'uso ✦ ꒷꒦\n\n│ ${prefix}${command} Ciao\n│ ${prefix}${command} en Ciao\n│ ${prefix}${command} ja Hello\n│ ${prefix}${command} [rispondi msg]\n│ ${prefix}parla ar testo\n\n꒷꒦ ✦ Lingue disponibili ✦ ꒷꒦\n\n${languages}\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 🌐\n│ ChatUnity Translator\n╰★────★────★╯`,
translateNoText: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ❌ Testo mancante per audio\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
translateNoLang: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ❌ Lingua non specificata\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
translateWhatToTranslate: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ❌ E che dovrei tradurre?\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
translateTooLong: ({ max, length }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ❌ Testo troppo lungo\n  Massimo: ${max} caratteri\n  Il tuo: ${length} caratteri\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
translateResult: ({ fromLang, toLang, translation }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🌍 ୭ *TRADUTTORE*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Da: ${fromLang} ✦ ꒷꒦\n꒷꒦ ✦ A: ${toLang} ✦ ꒷꒦\n\n${translation}\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 🎯\n│ Traduzione completata\n╰★────★────★╯`,
translateListenOriginal: () => "🔊 Ascolta Originale",
translateListenTranslation: () => "🎵 Ascolta Traduzione",
translateFooter: () => "ChatUnity Translator",
translateTTSError: ({ error }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ❌ Errore audio: ${error}\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
translateError: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ❌ Errore durante traduzione\n  Riprova più tardi\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
antiLinkNotAdmin: () => "╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ ⚠️ ୭ *Salvato per ora*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Non sono admin ✦ ꒷꒦\n\nNon posso fare niente",
antiLinkDetected: ({ user, qrDetected }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🚫 ୭ *ANTI-LINK ATTIVATO*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Violazione regole ✦ ꒷꒦\n\n${user} 🤨 Hai infranto le regole del gruppo${qrDetected ? ', ti pare che non vedo i QR? 😂' : '.'}\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 👮\n│ Espulso automaticamente\n╰★────★────★╯`,
antiLinkRestrictOff: () => "╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ ⚠️ ୭ *Restrict Disattivato*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Azione richiesta ✦ ꒷꒦\n\nContatta il proprietario del bot per attivare il RESTRICT\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 🔧\n│ Funzione non disponibile\n╰★────★────★╯",
antiMediaWarning: () => "╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ ⚠️ ୭ *ANTIMEDIA ATTIVO*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Violazione regole ✦ ꒷꒦\n\nSolo foto e video a 1 visual sono permessi\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 🚫\n│ Media eliminato\n╰★────★────★╯",
antiSpamDetected: () => "╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🚫 ୭ *ANTISPAM RILEVATO*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Spam rilevato ✦ ꒷꒦\n\nL'utente è stato rimosso per comportamento spam\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ ⚡\n│ ChatUnity x 333 Protection\n╰★────★────★╯",
antiTrabaAdminWarning: ({ user }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ ⚠️ ୭ *ATTENZIONE ADMIN*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Trava rilevato ✦ ꒷꒦\n\nHEY @${user} per caso ti diverti a mandare trava qui? Che fortuna per te che sei admin! -.-\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 🛡️\n│ Protetto dallo status\n╰★────★────★╯`,
antiTrabaDetected: ({ user }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🚫 ୭ *ANTI-TRAVA ATTIVO*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Messaggio lungo rilevato ✦ ꒷꒦\n\nL'utente @${user} ha inviato un messaggio troppo lungo e verrà rimosso\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 🚨\n│ ChatUnity Protection\n╰★────★────★╯`,
antiTrabaNoPermission: () => "╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ ⚠️ ୭ *Permessi Mancanti*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Azione bloccata ✦ ꒷꒦\n\nNon ho i permessi da amministratore per rimuovere chi invia trava\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 🔒\n│ Richiedi permessi admin\n╰★────★────★╯",
infoSetAge: () => "╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🗓️ ୭ *Imposta Età*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Come procedere ✦ ꒷꒦\n\nPer impostare la tua età usa:\n.setanni <età>\n\nPer rimuovere la tua età usa:\n.eliminaanni\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 📝\n│ Gestione profilo\n╰★────★────★╯",
infoSetIG: () => "╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🌐 ୭ *Imposta Instagram*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Come procedere ✦ ꒷꒦\n\nPer impostare Instagram usa:\n.setig <username>\n\nPer rimuoverlo usa:\n.delig\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 📱\n│ Gestione social\n╰★────★────★╯",
infoGroupOnly: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Comando solo per gruppi\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
infoUserData: ({ messages, warn, role, age, gender, blasphemy, instagram }) => `⋆ ︵ ★ 𝐈𝐍𝐅𝐎 𝐔𝐓𝐄𝐍𝐓𝐄 ★ ︵ ⋆\n\n\n꒷꒦ ✦ ୧・︶ : ︶ ꒷꒦ ‧₊ ୧\n୧ 📝 *Messaggi:* ${messages}\n୧ ⚠️ *Warn:* ${warn} / 4\n୧ 🟣 *Ruolo:* ${role}\n୧ 🗓️ *Età:* ${age}\n୧ 🚻 *Genere:* ${gender}\n୧ 🤬 *Bestemmie:* ${blasphemy}\n${instagram ? `୧ 🌐 instagram.com/${instagram}` : '୧ 🌐 *Instagram:* Non impostato'}\n꒷꒦ ✦ ୧・︶ : ︶ ꒷꒦ ‧₊ ୧`,
infoSetAgeButton: () => "🗓️ Imposta Età",
infoSetGenderMaleButton: () => "🚹 Genere Maschio",
infoSetGenderFemaleButton: () => "🚺 Genere Femmina",
infoSetIGButton: () => "🌐 Imposta IG",
infoFooter: () => "Imposta i tuoi dati personali:",
infoCreator: () => "𝒄𝒓𝒆𝒂𝒛𝒊𝒐𝒏𝒆 𝒅𝒊 𝑶𝒏𝒊𝒙🌟",
infoRoleFounder: () => "𝐅𝐨𝐮𝐧𝐝𝐞𝐫 ⚜️",
infoRoleAdmin: () => "𝐀𝐝𝐦𝐢𝐧 👑",
infoRoleMember: () => "𝐌𝐞𝐦𝐛𝐫𝐨 🤍",
infoGenderNotSet: () => "𝐍𝐨𝐧 𝐢𝐦𝐩𝐨𝐬𝐭𝐚𝐭𝐨",
infoAgeNotSet: () => "Non impostata",
infoAgeYears: ({ age }) => `${age} anni`,
setGenderUsage: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ Uso corretto del comando\n  ━━✫ .setgenere maschio\n  ━━✫ .setgenere femmina\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
setGenderSuccess: ({ gender, emoji }) => `✓ Genere impostato come: ${gender} ${emoji}`,
deleteGenderSuccess: () => "✓ Genere rimosso",
setAgeUsage: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ Inserisci un'età valida\n  ━━✫ Età da 10 a 80 anni\n  ━━✫ Usa: .setanni <età>\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
setAgeSuccess: ({ age }) => `✓ Età impostata come: ${age} anni`,
deleteAgeSuccess: () => "✓ Età rimossa",
rulesNotSet: ({ prefix }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⓘ Nessuna regola impostata\n  ━━✫ Gli admin non hanno ancora\n  ━━✫ impostato le regole\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n\n📌 Per impostare le regole usa:\n${prefix}setregole <testo regole>`,
rulesTitle: () => "📜 𝐑𝐞𝐠𝐨𝐥𝐞 𝐝𝐞𝐥 𝐆𝐫𝐮𝐩𝐩𝐨",
rulesDisplay: ({ rules }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 📜 ୭ *Regole del Gruppo*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n${rules}\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ ⚖️\n│ Rispetta le regole\n╰★────★────★╯`,
dashboardTitle: () => "⚡ 𝐓𝐎𝐏 10 𝐂𝐎𝐌𝐀𝐍𝐃𝐈 ⚡",
dashboardCommand: () => "📚 COMANDO",
dashboardUses: () => "🗂️ USI",
dashboardLastUse: () => "⏱️ ULTIMO USO",
dashboardNeverUsed: () => "Mai usato",
dashboardDaysAgo: ({ days }) => `${days} giorni fa`,
dashboardHoursAgo: ({ hours }) => `${hours} ore fa`,
dashboardMinutesAgo: ({ minutes }) => `${minutes} minuti fa`,
dashboardSecondsAgo: () => "pochi secondi fa",
dashboardStats: ({ stats }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ ⚡ ୭ *TOP 10 COMANDI*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n${stats}\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 📊\n│ Statistiche bot\n╰★────★────★╯`,
imageSearchBaseOnly: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ Questo comando è disponibile\n  ━━✫ solo con la base ChatUnity\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
imageSearchUsage: ({ prefix, command }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⓘ Uso del comando\n  ━━✫ ${prefix}${command} <parola chiave>\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
imageSearchForbidden: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⚠️ Contenuto non permesso\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
imageSearchNoResults: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 😢 Nessuna immagine trovata\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
imageSearchResults: ({ term }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🔍 ୭ *Risultati ricerca*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Query: ${term} ✦ ꒷꒦`,
imageSearchImageNum: ({ num }) => `Immagine #${num}`,
imageSearchResultFor: ({ term }) => `Risultato per: ${term}`,
imageSearchFooter: () => "Powered by ChatUnity",
imageSearchOpenImage: () => "Apri immagine",
imageSearchTitle: () => "Risultati immagini",
imageSearchSubtitle: () => "Ecco le immagini trovate su Google",
imageSearchAgainPrompt: () => "🔄 Vuoi cercare altre immagini con lo stesso termine?",
imageSearchAgainButton: () => "Cerca di nuovo",
obfuscateNoCode: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⚠️ Inserisci codice JavaScript\n  ━━✫ da offuscare o rispondi\n  ━━✫ a un messaggio con codice\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
obfuscateProcessing: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⏳ Offuscamento in corso...\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
obfuscateSuccess: () => "╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🔒 ୭ *Codice offuscato*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Offuscamento completato ✦ ꒷꒦",
obfuscateError: ({ error }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Errore offuscamento\n  ━━✫ ${error}\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
bonkNoPhoto: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⚠️ Nessuna foto profilo\n  ━━✫ L'utente non ha impostato\n  ━━✫ una foto profilo\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
bonkError: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Errore durante l'esecuzione\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
hornyCardCaption: () => "╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🔥 ୭ *Horny Card*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Quanto sei horny? 🥵🔥 ✦ ꒷꒦",
stupidCaption: ({ user }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🤡 ୭ *Quanto sei stupido?*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ @${user} ✦ ꒷꒦`,
stupidDefaultText: () => "im+stupid",
wantedNoProfilePic: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⚠️ Impossibile recuperare\n  ━━✫ la foto profilo\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
wantedNoProfilePicUser: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⚠️ L'utente non ha\n  ━━✫ foto profilo\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
wantedYourProfilePic: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⚠️ Non hai una foto profilo\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
wantedUnsupportedFormat: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⚠️ Formato non supportato\n  ━━✫ Usa JPEG o PNG\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
wantedUploadError: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Errore upload immagine\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
wantedAPIError: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Errore API\n  ━━✫ Riprova più tardi\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
wantedError: ({ error }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Errore: ${error}\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
wantedCaption: () => "╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🚔 ୭ *WANTED*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Ricercato ✦ ꒷꒦\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 👮\n│ Powered by ChatUnity\n╰★────★────★╯",
jokeNoProfilePic: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⚠️ Impossibile recuperare\n  ━━✫ la foto profilo\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
jokeYourProfilePic: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⚠️ Non hai una foto profilo\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
jokeUnsupportedFormat: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⚠️ Formato non supportato\n  ━━✫ Usa JPEG o PNG\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
jokeUploadError: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Errore upload immagine\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
jokeAPIError: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Errore API\n  ━━✫ Riprova più tardi\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
jokeError: ({ error }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Errore: ${error}\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
jokeCaption: () => "╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🤡 ୭ *SCHERZO*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Joke over head ✦ ꒷꒦\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 😂\n│ Powered by ChatUnity\n╰★────★────★╯",
jailNoProfilePic: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⚠️ Impossibile recuperare\n  ━━✫ la foto profilo\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
jailUploadError: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Errore upload immagine\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
jailAPIError: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Errore API\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
jailError: ({ error }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Errore: ${error}\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
jailCaption: () => "╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🚔 ୭ *IN CARCERE*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 👮\n│ Powered by ChatUnity\n╰★────★────★╯",
nokiaNoProfilePic: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⚠️ Impossibile recuperare\n  ━━✫ la foto profilo\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
nokiaYourProfilePic: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⚠️ Non hai una foto profilo\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
nokiaUnsupportedFormat: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⚠️ Formato non supportato\n  ━━✫ Usa JPEG o PNG\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
nokiaUploadError: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Errore upload\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
nokiaAPIError: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Errore API\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
nokiaError: ({ error }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Errore: ${error}\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
nokiaCaption: () => "╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 📱 ୭ *NOKIA*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 📞\n│ Powered by ChatUnity\n╰★────★────★╯",
adNoProfilePic: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⚠️ Impossibile recuperare\n  ━━✫ la foto profilo\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
adYourProfilePic: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⚠️ Non hai una foto profilo\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
adUnsupportedFormat: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⚠️ Formato non supportato\n  ━━✫ Usa JPEG o PNG\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
adUploadError: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Errore upload\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
adAPIError: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Errore API\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
adError: ({ error }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Errore: ${error}\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
adCaption: () => "╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 📢 ୭ *PUBBLICITÀ*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 📺\n│ Powered by ChatUnity\n╰★────★────★╯",
pokeOpenNoType: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Specifica il tipo\n  ━━✫ base, imperium, premium, darkness\n  ━━✫ Esempio: .apripokemon base\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
pokeOpenNoPacks: ({ type }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⛔ Non hai pacchetti ${type.toUpperCase()}\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
pokeOpenOpening: () => "🎁 Aprendo il pacchetto...",
pokeOpenRevealing: () => "✨ Rivelando le carte...",
pokeOpenNoCards: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 😢 Nessuna carta trovata\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
pokeOpenResult: ({ type, name, rarity, shiny, cardType, level, remaining }) => `🎉 Hai aperto un pacchetto *${type.toUpperCase()}*:\n\n✨ *${name}* (${rarity})${shiny ? ' ✨ Shiny' : ''}\n🔰 Tipo: ${cardType} | Lvl: ${level}\n\n📦 Pacchetti rimasti: *${remaining}* ${type}`,
pokeBuyUsage: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Uso corretto\n  ━━✫ .buypokemon <base|imperium|premium> <quantità>\n  ━━✫ Esempio: .buypokemon base 3\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
pokeBuyNoCoins: ({ cost, balance }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ UnityCoins insufficienti\n  ━━✫ Richiesti: ${cost}\n  ━━✫ Saldo: ${balance}\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
pokeBuySuccess: ({ quantity, type, total, balance }) => `✅ Hai comprato *${quantity}* pacchetti ${type.toUpperCase()}!\n📦 Totale ora: ${total}\n💸 UnityCoins rimanenti: ${balance}`,
pokeLeaderboardEmpty: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 😢 Nessun collezionista trovato\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
pokeLeaderboardTitle: () => "🏆 *Top 10 Collezionisti Pokémon*:",
pokeInventoryTitle: () => "📂 I TUOI PACCHETTI",
pokeInventoryBase: ({ count }) => `• 📦 Base: ${count}`,
pokeInventoryImperium: ({ count }) => `• 👑 Imperium: ${count}`,
pokeInventoryPremium: ({ count }) => `• 🌌 Premium: ${count}`,
pokeInventoryFooter: () => "🎁 Usa i bottoni per aprire un pacchetto subito!",
pokeInventoryOpenBase: () => "📦 Apri Base",
pokeInventoryOpenImperium: () => "👑 Apri Imperium",
pokeInventoryOpenPremium: () => "🌌 Apri Premium",
pokeInventoryBuy: () => "➕ Compra Pacchetti",
pokeBattleNoMention: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⚔️ Tagga un utente\n  ━━✫ Esempio: .combatti @utente\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
pokeBattleNoPokemon: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 😓 Non hai Pokémon\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
pokeBattleOpponentNoPokemon: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 😓 L'avversario non ha Pokémon\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
pokeBattleResult: ({ user1, user2, poke1, poke2, result }) => `⚔️ *Combattimento Pokémon!*\n\n👤 @${user1} ha scelto *${poke1.name}* (Lv. ${poke1.level})\n👤 @${user2} ha scelto *${poke2.name}* (Lv. ${poke2.level})\n\n${result}`,
pokeBattleWinner: ({ user }) => `🏆 @${user} vince il combattimento!`,
pokeBattleTie: () => "🤝 Pareggio! Entrambi i Pokémon sono esausti.",
pokeEvolveNoName: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 📛 Specifica il nome del Pokémon\n  ━━✫ Esempio: .evolvi Charmander\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
pokeEvolveNotOwned: ({ name }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Non possiedi *${name}*\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
pokeEvolveNoCoins: ({ balance, cost }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⛔ unitycoin insufficiente\n  ━━✫ Hai: ${balance}\n  ━━✫ Richiesti: ${cost}\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
pokeEvolveNoEvolution: ({ name }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⛔ ${name} non può evolversi\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
pokeEvolveEvolving: ({ name }) => `✨ *${name}* sta evolvendo...`,
pokeEvolveProgress: () => "🔄 Evoluzione in corso...",
pokeEvolveSuccess: ({ from, to }) => `🎉 *${from}* si è evoluto in *${to}*!`,
pokeEvolveComplete: ({ balance }) => `✅ Evoluzione completata!\n💰 unitycoin rimasti: *${balance}*`,
tradeUsage: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 📌 Uso corretto\n  ━━✫ .scambia @utente <tuo_num> <suo_num>\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
tradeYourNotExist: ({ num }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Il tuo Pokémon n. ${num}\n  ━━✫ non esiste\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
tradeTheirNotExist: ({ num, user }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Il Pokémon n. ${num}\n  ━━✫ di @${user} non esiste\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
tradeRequest: ({ from, myPoke, theirPoke, target }) => `🔁 *Richiesta di Scambio*\n\n@${from} vuole scambiare:\n📤 *${myPoke.name}* (Lv. ${myPoke.level})\ncon\n📥 *${theirPoke.name}* (Lv. ${theirPoke.level}) di @${target}\n\n✅ @${target}, rispondi con *.accetta* per confermare.`,
tradeNoRequest: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Nessuna richiesta di scambio\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
tradeUnavailable: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Uno dei Pokémon\n  ━━✫ non è più disponibile\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
tradeSuccess: ({ from, to, poke1, poke2 }) => `✅ Scambio completato tra @${from} e @${to}!\n\n🎁 ${poke1.name} ⇄ ${poke2.name}`,
pityTitle: () => "📊 *Sistema Pity Darkness*",
pityOpened: ({ count }) => `🔁 Pacchetti aperti senza Darkness: *${count}*`,
pityRemaining: ({ remaining }) => `🎯 Prossimo Darkness garantito tra: *${remaining}* pacchetti`,
pityGuaranteed: () => "✨ Il prossimo pacchetto ha un Darkness *garantito*!",
inventoryEmpty: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 📦 Inventario vuoto\n  ━━✫ Usa .apripokemon base\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
inventoryInvalidPage: ({ max }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Pagina non valida\n  ━━✫ Scegli tra 1 e ${max}\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
inventoryHeader: ({ user, total, page, totalPages, perPage }) => `╭━━━🗂️ *INVENTARIO POKÉMON* 🗂️━━━╮\n┃ 👤 *Allenatore:* @${user}\n┃ 📦 *Totale:* ${total}\n┃ 📄 *Pagina:* ${page}/${totalPages}\n┃ 📌 *Per pagina:* ${perPage}\n╰━━━━━━━━━━━━━━━━━━━━━━━╯`,
inventoryDarknessButton: () => "🌑 Pokémon Darkness",
inventoryPageButton: ({ num }) => `Pagina ${num}`,
inventoryFooter: () => "📂 Usa `.inventario [pagina]` oppure clicca i bottoni per navigare.",
darknessInfo: () => "🌑 *PACCHETTI DARKNESS* 🌑\n\nI pacchetti *Darkness* non si possono comprare, ma si trovano **apparentemente dal nulla** quando apri pacchetti *Premium*.\n\n➡️ Ogni 10 pacchetti *Premium* aperti, hai il 50% di possibilità di ottenere un pacchetto *Darkness* bonus.\n\n🎲 Aprendo un pacchetto *Darkness* puoi trovare Pokémon Darkness speciali con il 10% di possibilità.\n\nUsa *.apripokemon darkness* per aprire i pacchetti Darkness.\n\nBuona fortuna! 🍀",
trisAlreadyPlaying: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❗ Stai già giocando\n  ━━✫ con qualcuno\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
trisNoRoomName: ({ prefix, command }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❗ Devi dare un nome alla stanza\n  ━━✫ Esempio: ${prefix}${command} stanza1\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
trisGameStarting: () => "╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🕹️ ୭ *PARTITA INIZIA*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Un giocatore si è unito ✦ ꒷꒦",
trisTurnOf: ({ player }) => `Turno di @${player}`,
trisRoomCreated: () => "𝐒𝐓𝐀𝐍𝐙𝐀 𝐂𝐑𝐄𝐀𝐓𝐀 ✓",
trisWaiting: ({ room }) => `══════ •⊰✧⊱• ══════\n*𝐀𝐭𝐭𝐞𝐧𝐝𝐞𝐧𝐝𝐨 𝐠𝐢𝐨𝐜𝐚𝐭𝐨𝐫𝐢 ...*\n══════════════\n🕹️ 𝐏𝐞𝐫 𝐩𝐚𝐫𝐭𝐞𝐜𝐢𝐩𝐚𝐫𝐞 𝐝𝐢𝐠𝐢𝐭𝐚\n.gioca ${room}\n══════════════\n⛔ 𝐏𝐞𝐫 𝐮𝐬𝐜𝐢𝐫𝐞 𝐝𝐚𝐥𝐥𝐚 𝐩𝐚𝐫𝐭𝐢𝐭𝐚\n𝐢𝐧 𝐜𝐨𝐫𝐬𝐨 𝐝𝐢𝐠𝐢𝐭𝐚 .esci\n══════ •⊰✧⊱• ══════`,
slotInvalidBet: ({ prefix, command }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Puntata non valida\n  ━━✫ Esempio: ${prefix}${command} 100\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
slotInsufficientUC: ({ bet }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 🚫 UC insufficienti\n  ━━✫ Ti servono ${bet} UC\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
slotCooldown: ({ min, sec }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⏳ Aspetta ${min}m ${sec}s\n  ━━✫ prima di giocare di nuovo\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
slotWin: ({ uc, xp }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🎉 ୭ *HAI VINTO!*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Vincite ✦ ꒷꒦\n\n┌──────────────\n│ ➕ *${uc} UC*\n│ ➕ *${xp} XP*\n└──────────────`,
slotLose: ({ uc, xp }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🤡 ୭ *HAI PERSO!*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Perdite ✦ ꒷꒦\n\n┌──────────────\n│ ➖ *${uc} UC*\n│ ➖ *${xp} XP*\n└──────────────`,
slotBalance: ({ uc, xp, current, max, prefix }) => `\n💎 *SALDO ATTUALE*\n\n┌──────────────\n│ 👛 *UC: ${uc}*\n│ ⭐ *XP: ${xp}*\n│ 📊 *Progresso: ${current}/${max} XP*\n└──────────────\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ ℹ️\n│ Usa ${prefix}menuxp per più XP!\n╰★────★────★╯`,
betUsage: ({ prefix, command }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🎰 ୭ *CASINO*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Come giocare ✦ ꒷꒦\n\nInserisci la quantità di 💶 UnityCoins da scommettere contro *ChatUnity-Bot*\n\n📌 Esempio:\n${prefix}${command} 100\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 🎲\n│ Scegli un taglio qui sotto!\n╰★────★────★╯`,
betCooldown: ({ time }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 🚩 Hai già scommesso\n  ━━✫ Aspetta ⏱ ${time}\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
betLose: ({ bot, user, amount, botName, userName }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🎲 ୭ *RISULTATO*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Numeri estratti ✦ ꒷꒦\n\n🤖 *${botName}*: ${bot}\n👤 *${userName}*: ${user}\n\n╭★────★────★╮\n│ 😢 HAI PERSO!\n│ ➖ ${amount} 💶 UC\n╰★────★────★╯`,
betWin: ({ bot, user, amount, botName, userName }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🎲 ୭ *RISULTATO*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Numeri estratti ✦ ꒷꒦\n\n🤖 *${botName}*: ${bot}\n👤 *${userName}*: ${user}\n\n╭★────★────★╮\n│ 🎉 HAI VINTO!\n│ ➕ ${amount} 💶 UC\n╰★────★────★╯`,
betDraw: ({ bot, user, amount, botName, userName }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🎲 ୭ *RISULTATO*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Numeri estratti ✦ ꒷꒦\n\n🤖 *${botName}*: ${bot}\n👤 *${userName}*: ${user}\n\n╭★────★────★╮\n│ 🤝 PAREGGIO!\n│ ↩️ ${amount} 💶 UC restituiti\n╰★────★────★╯`,
betInsufficientUC: ({ amount }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 💸 Non hai ${amount} 💶 UC\n  ━━✫ da scommettere!\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
rpsAlreadyPlaying: ({ time }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⏱ Hai già giocato\n  ━━✫ Aspetta ${time}\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
rpsChooseOption: () => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ ✊ ୭ *SASSO CARTA FORBICE*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Scegli la tua mossa ✦ ꒷꒦\n\n🪨 Sasso batte Forbice\n📄 Carta batte Sasso\n✂️ Forbice batte Carta\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 🎲\n│ Fai la tua scelta!\n╰★────★────★╯`,
rpsInvalidOption: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Scelta non valida\n  ━━✫ Scegli: sasso/carta/forbice\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
rpsDraw: ({ player, bot, reward }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🤝 ୭ *PAREGGIO!*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Risultato ✦ ꒷꒦\n\n👤 Tu: ${player}\n🤖 Bot: ${bot}\n\n╭★────★────★╮\n│ 🎁 Premio di consolazione\n│ ➕ ${reward} 💶 UC\n╰★────★────★╯`,
rpsWin: ({ player, bot, reward }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🎉 ୭ *HAI VINTO!*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Risultato ✦ ꒷꒦\n\n👤 Tu: ${player}\n🤖 Bot: ${bot}\n\n╭★────★────★╮\n│ 🏆 Vittoria epica!\n│ ➕ ${reward} 💶 UC\n╰★────★────★╯`,
rpsLose: ({ player, bot, loss }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 😢 ୭ *HAI PERSO!*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Risultato ✦ ꒷꒦\n\n👤 Tu: ${player}\n🤖 Bot: ${bot}\n\n╭★────★────★╮\n│ 💸 Meglio fortuna prossima volta\n│ ➖ ${loss} 💶 UC\n╰★────★────★╯`,
rpsRock: () => "🪨 Sasso",
rpsPaper: () => "📄 Carta",
rpsScissors: () => "✂️ Forbice",
rpsButtonRock: () => "🪨 Sasso",
rpsButtonPaper: () => "📄 Carta",
rpsButtonScissors: () => "✂️ Forbice",
rpsButtonRetry: () => "🔄 Riprova",
bjInsufficientFunds: () => "💰 Fondi insufficienti!",
bjNotYourTurn: () => "❌ Non è il tuo turno!",
bjBusted: () => "💥 Sballato! Hai superato 21!",
bjDealerBusted: () => "🎉 Dealer sballato! Hai vinto!",
bjYouWin: () => "🎉 Hai vinto!",
bjDealerWins: () => "😔 Dealer vince!",
bjPush: () => "🤝 Pareggio!",
bjMakeBet: () => "💵 Fai la tua puntata!",
bjYourTurn: () => "📋 Il tuo turno! Chiedi o Stai?",
bjYourScore: ({ score }) => `📋 Il tuo punteggio: ${score}`,
bjTimeoutTitle: () => "⏰ TEMPO SCADUTO",
bjTimeoutMsg: ({ balance }) => `⏰ Tempo scaduto! Partita annullata.\n💶 Portafoglio: ${balance} UC`,
bjGameInProgress: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 🎰 Partita già in corso\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
bjInvalidBet: ({ max }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Puntata non valida\n  ━━✫ Importo: 10-${max} UC\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
bjStartCaption: ({ name, bet, balance }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🎰 ୭ *BLACKJACK*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ ${name} ✦ ꒷꒦\n\n💶 Puntata: ${bet} UC\n📋 Saldo: ${balance} UC\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ ⚡\n│ .hit .stand .double\n╰★────★────★╯`,
bjNoGame: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Nessuna partita in corso\n  ━━✫ Usa: .blackjack [puntata]\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
bjNotYourGame: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Non è il tuo turno!\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
bjDoubleOnlyTwo: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Raddoppia solo con 2 carte\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
bjDoubleInsufficientFunds: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Fondi insufficienti\n  ━━✫ per raddoppiare\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
bjFooter: () => "♠️ Blackjack Bot ♣️",
bjPlayer: () => "GIOCATORE",
bjDealer: () => "DEALER",
bjScore: () => "PUNTEGGIO",
bjWallet: () => "💶 PORTAFOGLIO",
bjBet: () => "🎯 PUNTATA",
rouletteCooldown: ({ time }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 🚩 Hai già scommesso\n  ━━✫ Aspetta ⏱ ${time}\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
rouletteUsage: ({ prefix, command }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🎰 ୭ *ROULETTE*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Come giocare ✦ ꒷꒦\n\nInserisci quantità e colore:\n${prefix}${command} 20 black\n${prefix}${command} 50 red\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 🎲\n│ Scegli il tuo colore!\n╰★────★────★╯`,
rouletteInvalidFormat: ({ prefix, command }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 🚩 Formato errato\n  ━━✫ Esempio: ${prefix}${command} 20 black\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
rouletteInvalidAmount: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 🚩 Quantità non valida\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
rouletteMaxBet: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 🚩 Massimo 50 💶 UC\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
rouletteInvalidColor: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 🚩 Colore non valido\n  ━━✫ Scegli: black o red\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
rouletteInsufficientFunds: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 🚩 💶 UC insufficienti\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
rouletteBetPlaced: ({ amount, color }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🎰 ୭ *SCOMMESSA PIAZZATA*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Dettagli ✦ ꒷꒦\n\n💰 Importo: ${amount} 💶 UC\n🎨 Colore: ${color === 'black' ? '⚫ NERO' : '🔴 ROSSO'}\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ ⏱\n│ Aspetta 10 secondi...\n╰★────★────★╯`,
rouletteWin: ({ amount, total, winColor }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🎉 ୭ *HAI VINTO!*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Risultato ✦ ꒷꒦\n\n🎯 Colore uscito: ${winColor === 'black' ? '⚫ NERO' : '🔴 ROSSO'}\n\n╭★────★────★╮\n│ 💰 Vincita: +${amount} 💶 UC\n│ 💎 Totale: ${total} 💶 UC\n╰★────★────★╯`,
rouletteLose: ({ amount, total, winColor }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 😢 ୭ *HAI PERSO!*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Risultato ✦ ꒷꒦\n\n🎯 Colore uscito: ${winColor === 'black' ? '⚫ NERO' : '🔴 ROSSO'}\n\n╭★────★────★╮\n│ 💸 Perdita: -${amount} 💶 UC\n│ 💎 Totale: ${total} 💶 UC\n╰★────★────★╯`,
rouletteBlack: () => "⚫ Nero",
rouletteRed: () => "🔴 Rosso",
rouletteButtonBlack10: () => "⚫ 10 UC",
rouletteButtonBlack25: () => "⚫ 25 UC",
rouletteButtonBlack50: () => "⚫ 50 UC",
rouletteButtonRed10: () => "🔴 10 UC",
rouletteButtonRed25: () => "🔴 25 UC",
rouletteButtonRed50: () => "🔴 50 UC",
// Coin Flip
cfCooldown: ({ time }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⏳ Hai già giocato\n  ━━✫ Aspetta ${time}\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
cfWaiting: ({ player }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🪙 ୭ *TESTA O CROCE*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Partita iniziata ✦ ꒷꒦\n\n🧑 Giocatore 1: @${player}\n🕹️ In attesa del secondo giocatore...\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 🎲\n│ Scrivi testa o croce!\n╰★────★────★╯`,
cfPlayer1Ready: ({ player, choice }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🪙 ୭ *TESTA O CROCE*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Giocatore 1 pronto ✦ ꒷꒦\n\n🧑 @${player} ha scelto *${choice}*\n🎯 In attesa del Giocatore 2...\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 🎮\n│ Tocca a te!\n╰★────★────★╯`,
cfInvalidChoice: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⚠️ Scelta non valida\n  ━━✫ Scrivi: testa o croce\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
cfResult: ({ result, p1, p2, msg, prefix, command }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🪙 ୭ *RISULTATO: ${result.toUpperCase()}*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n${msg}\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 🔄\n│ ${prefix}${command} per rigiocare\n╰★────★────★╯`,
cfAlreadyChosen: ({ choice }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ Hai già scelto ${choice}\n  ━━✫ Aspetta un altro giocatore\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
cfNotAvailable: ({ prefix, command }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Partita non disponibile\n  ━━✫ ${prefix}${command} per iniziare\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
cfButtonHeads: () => "🪙 Testa",
cfButtonTails: () => "🪙 Croce",

// RPS v2
rps2Cooldown: ({ time }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⏳ Aspetta ${time}\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
rps2Usage: ({ prefix, command }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ ✊ ୭ *SASSO CARTA FORBICI*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Come giocare ✦ ꒷꒦\n\n${prefix}${command} pietra\n${prefix}${command} carta\n${prefix}${command} forbici\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 🎮\n│ Scegli la tua mossa!\n╰★────★────★╯`,
rps2InvalidChoice: ({ prefix, command }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Scelta non valida\n  ━━✫ ${prefix}${command} pietra/carta/forbici\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
rps2Draw: ({ bot, reward }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🤝 ୭ *PAREGGIO!*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Bot: ${bot} ✦ ꒷꒦\n\n╭★────★────★╮\n│ 🎁 +${reward} 💶 UC\n╰★────★────★╯`,
rps2Win: ({ bot, reward }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🎉 ୭ *HAI VINTO!*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Bot: ${bot} ✦ ꒷꒦\n\n╭★────★────★╮\n│ 💰 +${reward} 💶 UC\n╰★────★────★╯`,
rps2Lose: ({ bot, loss }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 😢 ୭ *HAI PERSO!*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Bot: ${bot} ✦ ꒷꒦\n\n╭★────★────★╮\n│ 💸 -${loss} 💶 UC\n╰★────★────★╯`,
rps2ButtonRock: () => "🪨 Pietra",
rps2ButtonPaper: () => "📄 Carta",
rps2ButtonScissors: () => "✂️ Forbici",

// Pokedex
pokedexNoName: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 🚩 Inserisci nome Pokémon\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
pokedexSearching: ({ name }) => `🔍 Cerco ${name}...`,
pokedexError: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⚠️ Errore ricerca Pokémon\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
pokedexInfo: ({ name, id, type, abilities, height, weight, desc, url }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🎌 ୭ *POKÉDEX - ${name}*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Informazioni ✦ ꒷꒦\n\n🔹 *Nome:* ${name}\n🔹 *ID:* ${id}\n🔹 *Tipo:* ${type}\n🔹 *Abilità:* ${abilities}\n🔹 *Altezza:* ${height}\n🔹 *Peso:* ${weight}\n\n📝 *Descrizione:*\n${desc}\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 🌐\n│ ${url}\n╰★────★────★╯`,
flagGameActive: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⚠️ Partita già attiva\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
flagGroupOnly: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⚠️ Solo per gruppi\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
flagNoGame: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⚠️ Nessuna partita attiva\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
flagAdminOnly: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Solo per admin\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
flagCooldown: ({ time }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⏳ Aspetta ${time}s\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
flagSkipped: ({ answer }) => `ㅤ⋆｡˚『 ╭ \`GIOCO INTERROTTO\` ╯ 』˚｡⋆\n╭\n│ 『 🏳️ 』 \`La risposta era:\`\n│ 『 ‼️ 』 *\`${answer}\`*\n│ 『 👑 』 _*Interrotto da un admin*_\n*╰⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*`,
flagStart: ({ phrase }) => `ㅤ⋆｡˚『 ╭ \`${phrase}\` ╯ 』˚｡⋆\n╭\n│ 『 🏳️ 』 \`Rispondi con il nome\` *della nazione*\n│ 『 ⏱️ 』 \`Tempo disponibile:\` *30 secondi*\n*╰⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*`,
flagTimeout: ({ answer }) => `ㅤ⋆｡˚『 ╭ \`TEMPO SCADUTO!\` ╯ 』˚｡⋆\n╭\n│ 『 🏳️ 』 \`La risposta era:\`\n│ 『 ‼️ 』 *\`${answer}\`*\n│ 『 💡 』 _*Sii più veloce la prossima volta!*_\n*╰⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*`,
flagCorrect: ({ answer, time, reward, exp, bonus }) => `ㅤ⋆｡˚『 ╭ \`RISPOSTA CORRETTA!\` ╯ 』˚｡⋆\n╭\n│ 『 🏳️ 』 \`Nazione:\` *${answer}*\n│ 『 ⏱️ 』 \`Tempo impiegato:\` *${time}s*\n│ 『 🎁 』 \`Ricompense:\`\n│ 『 💰 』 *${reward}€* ${bonus > 0 ? `(+${bonus} bonus velocità)` : ''}\n│ 『 🆙 』 *${exp} EXP*\n*╰⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*`,
flagAlmostThere: () => "👀 *Ci sei quasi!*",
flagAttemptsExhausted: () => `ㅤ⋆｡˚『 ╭ \`TENTATIVI ESAURITI!\` ╯ 』˚｡⋆\n╭\n│ 『 ❌ 』 \`Hai esaurito i tuoi 3 tentativi!\`\n│ 『 ⏳ 』 _*Aspetta che altri provino...*_\n*╰⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*`,
flagWrongHint: ({ letter, length }) => `❌ *Risposta errata!*\n\n💡 *Suggerimento:*\n  • Inizia con la lettera *"${letter}"*\n  • È composta da *${length} lettere*`,
flagWrong2: ({ remaining }) => `❌ *Risposta errata!*\n\n📝 *Tentativi rimasti:* ${remaining}\n🤔 *Pensa bene alla tua prossima risposta!*`,
flagWrongLast: () => `❌ *Risposta errata!*\n\n📝 *Ultimo tentativo rimasto..*`,
flagPlayAgain: () => "🏳️ Gioca Ancora!",
flagError: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Errore avvio gioco\n  ━━✫ Riprova tra qualche secondo\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
flagPhrase1: () => "🇺🇳 *INDOVINA LA BANDIERA!* 🇺🇳",
flagPhrase2: () => "🌍 *Che nazione rappresenta questa bandiera?*",
flagPhrase3: () => "🏳️ *Sfida geografica: riconosci questa bandiera?*",
flagPhrase4: () => "🧭 *Indovina la nazione dalla sua bandiera!*",
flagPhrase5: () => "🎯 *Quiz bandiere: quale paese è questo?*",
flagPhrase6: () => "🌟 *Metti alla prova la tua conoscenza geografica!*",
flagPhrase7: () => "🔍 *Osserva attentamente e indovina la nazione!*",
songGameActive: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⚠️ Partita già in corso\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
songError: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Errore nel gioco\n  ━━✫ Riprova più tardi\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
songStart: ({ artist, time }) => `  ⋆｡˚『 ╭ \`INDOVINA CANZONE\` ╯ 』˚｡⋆\n╭\n┃ 『 ⏱️ 』 \`Tempo:\` *${time} secondi*\n┃ 『 👤 』 \`Artista:\` *${artist}*\n┃\n┃ ➤  \`Scrivi il titolo!\`\n╰⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒`,
songTimeout: ({ title, artist }) => `ㅤ⋆｡˚『 ╭ \`TEMPO SCADUTO\` ╯ 』˚｡⋆\n╭\n│\n│ ➤ \`Nessuno ha indovinato!\`\n┃ 『  』🎵 \`Titolo:\` *${title}*\n┃ 『  』👤 \`Artista:\` *${artist}*\n┃\n╰⭒─ׄ─ׅ─ׄ─⭒`,
songCorrect: ({ title, artist, reward, exp }) => `ㅤㅤ⋆｡˚『 ╭ \`CORRETTA\` ╯ 』˚｡⋆\n╭\n│\n│ ➤ \`Risposta Corretta!\`\n┃ 『  』🎵 \`Titolo:\` *${title}*\n┃ 『  』👤 \`Artista:\` *${artist}*\n┃\n┃ 『 🎁 』 \`Vincite:\`\n│ ➤  \`${reward}\` *UC*\n│ ➤  \`${exp}\` *EXP*\n┃\n╰⭒─ׄ─ׅ─ׄ─⭒`,
songAlmostThere: () => "👀 *Ci sei quasi!* Riprova...",
songPlayAgain: () => "『 🎵 』 Rigioca",
songExternalTitle: () => "indovina la canzone",
songExternalArtist: ({ artist }) => `Artista: ${artist}`,
songExternalSource: () => "ChatUnity Bot",
logoGroupOnly: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⚠️ Solo per gruppi\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
logoNoGame: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⚠️ Nessuna partita attiva\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
logoAdminOnly: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Solo admin\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
logoSkipped: ({ answer }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🛑 ୭ *GIOCO INTERROTTO*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ La risposta era ✦ ꒷꒦\n\n🚗 *${answer}*`,
logoGameActive: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⚠️ Partita già in corso\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
logoCooldown: ({ time }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⏳ Attendi ${time}s\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
logoStart: ({ phrase, time }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🚗 ୭ *${phrase}*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Indovina il marchio ✦ ꒷꒦\n\n⌛ Tempo: ${time} secondi\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 🔍\n│ Scrivi il nome del marchio!\n╰★────★────★╯`,
logoTimeout: ({ answer }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ ⏰ ୭ *TEMPO SCADUTO!*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ La risposta era ✦ ꒷꒦\n\n🚗 *${answer}*\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 🔄\n│ Riprova con .auto\n╰★────★────★╯`,
logoCorrect: ({ brand, time, reward, exp, bonus }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🎉 ୭ *RISPOSTA CORRETTA!*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Dettagli ✦ ꒷꒦\n\n🚗 Marchio: *${brand}*\n⏱ Tempo: *${time}s*\n\n╭★────★────★╮\n│ 🎁 Ricompense:\n│ • ${reward} 💰 UC${bonus > 0 ? ` (+${bonus} bonus)` : ''}\n│ • ${exp} 🆙 EXP\n╰★────★────★╯\n\n> \\by ChatUnity\\`,
logoPhrase1: () => "🚘 INDOVINA IL LOGO!",
logoPhrase2: () => "🏁 Che marca è questa?",
logoPhrase3: () => "🔍 Riconosci questa auto?",
logoPhrase4: () => "🚗 Quiz Auto!",
logoPhrase5: () => "🏎️ Indovina il marchio!",
logoButtonPlayAgain: () => "🚗 Gioca Ancora",
missionMainTitle: ({ bot }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🎯 ୭ *SISTEMA MISSIONI*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ ${bot} ✦ ꒷꒦`,
missionMainStats: ({ user, money, bank, dailyDone, dailyTotal, weeklyDone, weeklyTotal }) => `👤 Utente: @${user}\n💰 Saldo: ${money} UC\n🏦 Banca: ${bank} UC\n📅 Daily: ${dailyDone}/${dailyTotal} completate\n📆 Weekly: ${weeklyDone}/${weeklyTotal} completate\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 🎯\n│ Seleziona il tipo di missioni:\n╰★────★────★╯`,
missionButtonDaily: () => "📅 GIORNALIERE",
missionButtonWeekly: () => "📆 SETTIMANALI",
missionButtonClaim: () => "💰 RISCUOTI",
missionButtonBack: () => "🔙 INDIETRO",
missionButtonWallet: () => "💰 PORTAFOGLIO",
missionDailyTitle: ({ user }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 📅 ୭ *MISSIONI GIORNALIERE*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n👤 @${user}`,
missionDailyReset: ({ time }) => `⏳ Reset tra: ${time}`,
missionWeeklyTitle: ({ user }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 📆 ୭ *MISSIONI SETTIMANALI*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n👤 @${user}`,
missionWeeklyReset: ({ time }) => `⏳ Reset tra: ${time}`,
missionEntry: ({ num, title, progress, target, reward, status }) => `▢ *${num}. ${title}*\n➠ Progresso: ${progress}/${target}\n➠ Ricompensa: ${reward} UC\n➠ Stato: ${status}`,
missionStatusCompleted: () => "✅ RISCOSSA",
missionStatusReady: () => "💰 PRONTA",
missionStatusInProgress: () => "❌ IN CORSO",
missionFooterDaily: ({ prefix }) => `Usa "${prefix}missioni claim" per riscuotere!`,
missionFooterWeekly: () => "Missioni settimanali - Ricompense maggiori!",
missionFooterMain: () => "Completa le missioni per guadagnare UnityCoins!",
missionNoRewards: ({ user }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ @${user} non hai missioni\n  ━━✫ completate da riscuotere!\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
missionClaimSuccess: ({ user, total, details, money, bank }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🎉 ୭ *RICOMPENSE RISCOSSSE*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n👤 @${user}\n💰 Totale riscosso: *${total} UC*\n\n${details}\n\n╭★────★────★╮\n│ 💰 Saldo: ${money} UC\n│ 🏦 Banca: ${bank} UC\n╰★────★────★╯`,
missionClaimFooter: () => "Usa .portafoglio per vedere il saldo completo",
missionSendMessages: ({ count }) => `Invia ${count} messaggi`,
missionExecuteCommands: ({ count }) => `Esegui ${count} comandi`,
missionNoWarn: () => "Rimani senza warn",
missionNoWarnWeek: () => "Rimani 7 giorni senza warn",
missionTotalMessages: ({ count }) => `Raggiungi ${count} messaggi totali`,
walletNotFound: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 🚩 Utente non trovato\n  ━━✫ nel database\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
walletTitle: () => "💰 WALLET",
walletInfo: ({ name, uc, bank }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 💰 ୭ *PORTAFOGLIO*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ ${name} ✦ ꒷꒦\n\n👤 Utente: ${name}\n💰 UnityCoins: ${uc} 💶\n🏛️ Banca: ${bank} 💳\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 💎\n│ Usa .deposit per depositare\n│ Usa .withdraw per prelevare\n╰★────★────★╯`,
walletExternalTitle: ({ name }) => `Portafoglio di ${name}`,
walletExternalBody: ({ uc }) => `Saldo: ${uc} UC`,
walletButtonDeposit: () => "🏛️ Deposita",
walletButtonWithdraw: () => "💰 Preleva",
walletButtonGames: () => "🎮 Giochi",
bankNotFound: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 🚩 Utente non trovato\n  ━━✫ nel database\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
bankYourBalance: ({ balance }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🏛️ ୭ *IL TUO CONTO*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Saldo Bancario ✦ ꒷꒦\n\n💰 Hai *${balance} 💶 UnityCoins*\nnella tua banca 🏛️\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 💎\n│ Usa .deposit per depositare\n│ Usa .withdraw per prelevare\n╰★────★────★╯`,
bankUserBalance: ({ user, balance }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🏛️ ୭ *CONTO BANCARIO*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ @${user} ✦ ꒷꒦\n\n💰 Ha *${balance} 💶 UnityCoins*\nnella banca 🏛️`,
bankButtonDeposit: () => "🏛️ Deposita",
bankButtonWithdraw: () => "💰 Preleva",
bankButtonTransfer: () => "💸 Trasferisci",
transferNoMention: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 🚩 Menziona il destinatario\n  ━━✫ Esempio: @user 100\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
transferNoAmount: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 🚩 Inserisci la quantità\n  ━━✫ di 💶 UnityCoins da trasferire\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
transferInvalidAmount: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Importo non valido\n  ━━✫ Usa solo numeri\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
transferMinAmount: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 🚩 Minimo trasferibile: 1 UC\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
transferInsufficient: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 💸 Saldo insufficiente\n  ━━✫ per questo trasferimento\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
transferSuccess: ({ amount, fee, total }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 💸 ୭ *TRASFERIMENTO EFFETTUATO*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Dettagli Transazione ✦ ꒷꒦\n\n💰 Importo inviato: *${amount}* 💶 UC\n📊 Tassa 2%: *${fee}* 💶 UC\n💳 Totale addebitato: *${total}* 💶 UC\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ ✅\n│ Trasferimento completato!\n╰★────★────★╯`,
transferReceived: ({ amount }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 💰 ୭ *RICEVUTI UC*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Hai ricevuto ✦ ꒷꒦\n\n💶 *+${amount} UnityCoins*\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 🎁\n│ Controlla il tuo saldo!\n╰★────★────★╯`,
transferSelf: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Non puoi trasferire\n  ━━✫ a te stesso\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
robNoTarget: ({ prefix, command }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 🧠 Tagga qualcuno o\n  ━━✫ rispondi a un messaggio\n  ━━✫ Esempio: ${prefix}${command} @utente\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
robSelf: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 🤡 Non puoi rubare\n  ━━✫ a te stesso\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
robCooldown: ({ time }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 🚨 Hai già rubato\n  ━━✫ Riprova tra ⏱ ${time}\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
robSuccess: ({ amount, target }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 💰 ୭ *COLPO RIUSCITO!*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Furto perfetto ✦ ꒷꒦\n\nHai rubato *${amount} 💶 UC*\nda @${target}\n\n╭★────★────★╮\n│ 💸 +${amount} 💶 UC\n│ ୭ ˚. ᵎᵎ ✅ Al tuo saldo\n╰★────★────★╯`,
robCaught: ({ fine, name }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🚓 ୭ *ARRESTATO!*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Catturato dalla polizia ✦ ꒷꒦\n\n${name} è stato fermato!\n\n╭★────★────★╮\n│ 💸 Multa: -${fine} 💶 UC\n│ ୭ ˚. ᵎᵎ ❌ Meglio fortuna prossima volta\n╰★────★────★╯`,
robPartial: ({ amount, target }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 💸 ୭ *FURTO PARZIALE*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Quasi riuscito ✦ ꒷꒦\n\nHai rubato solo *${amount} 💶 UC*\nda @${target}\n\n╭★────★────★╮\n│ 💰 +${amount} 💶 UC\n│ ୭ ˚. ᵎᵎ ⚠️ Al tuo saldo\n╰★────★────★╯`,
robButtonRetry: () => "🔄 Riprova",
robButtonWallet: () => "💰 Portafoglio",
withdrawNoAmount: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 🚩 Inserisci la quantità\n  ━━✫ di 💶 UnityCoins da prelevare\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
withdrawNoFunds: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 🚩 Non hai 💶 UnityCoins\n  ━━✫ nel conto bancario\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
withdrawInvalidAmount: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 🚩 Quantità non valida\n  ━━✫ Usa un numero valido\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
withdrawMinAmount: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 🚩 Inserisci almeno 1 UC\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
withdrawInsufficientFunds: ({ bank }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 🚩 Hai solo *${bank}* 💶 nel conto\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
withdrawSuccess: ({ count, bank }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ ✅ ୭ *PRELIEVO EFFETTUATO*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Hai prelevato ✦ ꒷꒦\n\n💶 *${count} UnityCoins*\ndal conto bancario\n\n💳 Nuovo saldo banca: *${bank} UC*\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 💼\n│ Usa .wallet per verificare\n╰★────★────★╯`,
  xpLevelDisplay: ({ level }) => `꒷꒦ ✦ ୧・︶ : ︶ ꒷꒦ ‧₊ ୧  Livello: ${level}`,
  xpProgressDisplay: ({ current, needed }) => `Progresso XP: ${current} / ${needed}`,
  xpFooterText: () => "╰♡꒷ ๑ ⋆˚₊⋆───ʚ˚ɞ───⋆˚₊⋆ ๑ ⪩﹐ Continua a scrivere per salire di livello!",
  xpCaption: ({ user, level, exp, next }) => `꒷꒦ ✦ ୧・︶ : ︶ ꒷꒦ ‧₊ ୧\n\n┊ 『 📊 』 Profilo XP di ${user}\n\n┃ Livello attuale: ${level}\n┃ Esperienza totale: ${exp}\n┃ XP mancanti al prossimo livello: ${next}\n\n╰♡꒷ ๑ ⋆˚₊⋆───ʚ˚ɞ───⋆˚₊⋆ ๑ ⪩﹐`,
rubaxpWait: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⏳ Devi aspettare ancora prima di poter rubare di nuovo\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
rubaxpWaitTime: ({ time }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⏳ Devi aspettare ancora ${time} prima di poter rubare di nuovo\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
rubaxpNoTarget: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 📍 Devi taggare un utente valido\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
rubaxpUserNotFound: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⚠️ Utente non trovato nel database\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
rubaxpTooPoor: ({ target, limit }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 😢 @${target} ha meno di *${limit} XP*\n  ━━✫ Non rubare ai poveri, sii gentile\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
rubaxpSuccess: ({ amount, target }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ ✅ ୭ *FURTO EFFETTUATO*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Hai rubato ✦ ꒷꒦\n\n💰 *${amount} XP*\nda @${target}\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 🎮\n│ Continua così!\n╰★────★────★╯`,
rubaxpTimeFormat: ({ hours, minutes, seconds }) => `${hours} Ora(e) ${minutes} Minuto(i) ${seconds} Secondo(i)`,darxpNoMention: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 🚩 Devi menzionare un utente con @user\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
darxpNoAmount: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 🚩 Inserisci la quantità di 💫 XP da trasferire\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
darxpInvalidAmount: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 🚩 Inserisci solo numeri validi\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
darxpMinAmount: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 🚩 Il minimo trasferibile è 1 💫 XP\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
darxpInsufficientXP: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 🚩 Non hai abbastanza 💫 XP per trasferire\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
darxpSuccess: ({ xp, tassa }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n  ୧ ✅ ୭ *TRASFERIMENTO EFFETTUATO*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Hai trasferito ✦ ꒷꒦\n\n💫 *${xp} XP*\n(tassa: ${tassa} XP)\n╭★────★────★╮\n│ Continua a giocare!\n╰★────★────★╯`,
marry_no_target: ({ prefix, command }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ 🚩 Devi menzionare un utente da sposare
  ━━✫ Usa: ${prefix + command} @utente
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
marry_self: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ 🚩 Non puoi sposare te stesso
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
marry_user_not_found: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ 🚩 Utente non trovato nel database
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
marry_already_married_sender: ({ spouse }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮
  ୧ 💍 ୭ *SEI GIÀ SPOSATO*
╰┈ ─ ─ ✦ ─ ─ ┈╯

꒷꒦ ✦ Risulti sposato con ✦ ꒷꒦

❤ ${spouse}

╰♡꒷ ๑ ⋆˚₊⋆───ʚ˚ɞ───⋆˚₊⋆ ๑ ⪩﹐`,
marry_already_married_target: ({ target }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ 🚩 ${target} è già sposato
  ━━✫ Cerca qualcun altro single
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
marry_pending_proposal: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ 🚩 Hai già una proposta di matrimonio in sospeso
  ━━✫ Attendi che venga accettata o rifiutata
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
marry_proposal_text: ({ sender, target }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮
  ୧ 💍 ୭ *PROPOSTA DI MATRIMONIO*
╰┈ ─ ─ ✦ ─ ─ ┈╯

꒷꒦ ✦ ${sender} ha chiesto la mano di ✦ ꒷꒦

❤ ${target}

Rispondi con "Si" per accettare
o "No" per rifiutare.

╰♡꒷ ๑ ⋆˚₊⋆───ʚ˚ɞ───⋆˚₊⋆ ๑ ⪩﹐`,
marry_proposal_expired: ({ sender, target }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ ⏳ La proposta tra ${sender} e ${target}
  ━━✫ è scaduta per inattività
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
marry_proposal_rejected: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ 💔 La proposta è stata rifiutata
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
marry_user_not_found_db: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ 🚩 Errore: utenti non trovati nel database
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
marry_success: ({ sender, target }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮
  ୧ 💍 ୭ *MATRIMONIO REGISTRATO*
╰┈ ─ ─ ✦ ─ ─ ┈╯

꒷꒦ ✦ Nuova coppia ufficiale ✦ ꒷꒦

❤ ${sender}  ×  ${target}

꒷꒦ ✦ ୧・︶ : ︶ ꒷꒦ ‧₊ ୧
Che l'amore abbia inizio!

╰♡꒷ ๑ ⋆˚₊⋆───ʚ˚ɞ───⋆˚₊⋆ ๑ ⪩﹐`,
divorce_not_married: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ 🚩 Non sei sposato con nessuno
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
divorce_spouse_not_found: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ 🚩 Il tuo coniuge non è stato trovato nel database
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
divorce_success: ({ ex }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮
  ୧ 💔 ୭ *DIVORZIO COMPLETATO*
╰┈ ─ ─ ✦ ─ ─ ┈╯

꒷꒦ ✦ Ti sei separato da ✦ ꒷꒦

${ex}

· ୨୧ · · ୨୧ ·  ♡
Nuovo capitolo della tua vita iniziato.

╰♡꒷ ๑ ⋆˚₊⋆───ʚ˚ɞ───⋆˚₊⋆ ๑ ⪩﹐`,
shipNoUser: ({ prefix, command }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ ❗ Usa il comando così:
  ━━✫ ${prefix + command} @utente
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
shipNoUsersPair: ({ prefix, command }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ ❗ Usa il comando così:
  ━━✫ ${prefix + command} @utente1 [@utente2]
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
shipInvalidUsers: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ ❌ Utenti non validi
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
shipCaption: ({ user1, user2, percent }) => `꒷꒦ ✦ ୧・︶ : ︶ ꒷꒦ ‧₊ ୧

💘 *@${user1}* ❤️ *@${user2}*
🔮 Compatibilità: *${percent}%*

· ୨୧ · · ୨୧ ·  ♡`,
shipErrorImage: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ ❌ Errore durante la generazione dell’immagine
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
kissNoTargetMention: ({ prefix, command }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ 💋 Devi menzionare qualcuno o rispondere a un messaggio
  ━━✫ Esempio: ${prefix + command} @utente
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
kissNoTarget: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ 💋 Devi menzionare qualcuno per baciarlo
  ━━✫ Esempio: .bacia @utente
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
kissSuccess: ({ senderName, targetName }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮
  ୧ 💋 ୭ *Bacio consegnato*
╰┈ ─ ─ ✦ ─ ─ ┈╯

꒷꒦ ✦ ${senderName} ha dato un bacio a ✦ ꒷꒦

😘 ${targetName}

· ୨୧ · · ୨୧ ·  ♡`,
odioNoText: ({ prefix, command }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ 😡 Devi specificare qualcuno
  ━━✫ Esempio: ${prefix + command} @utente
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
odioResult: ({ target, percent }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮
  ୧ 😡 ୭ *CALCOLATORE DI ODIO*
╰┈ ─ ─ ✦ ─ ─ ┈╯

꒷꒦ ✦ Livello di odio tra ✦ ꒷꒦

${target}  ✕  te

🔥 Odio: *${percent}%*

꒷꒦ ✦ ୧・︶ : ︶ ꒷꒦ ‧₊ ୧`,
rizzNoTarget: ({ prefix, command }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ 🎯 Devi taggare qualcuno o rispondere a un messaggio
  ━━✫ Esempio: ${prefix + command} @utente
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
rizzSuccess: ({ target, line }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮
  ୧ ✨ ୭ *Mossa di Rizz*
╰┈ ─ ─ ✦ ─ ─ ┈╯

꒷꒦ ✦ @${target} guarda qua ✦ ꒷꒦

“${line}”

· ୨୧ · · ୨୧ ·  ♡`,
minacciaNoGroup: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ 🚩 Questo comando può essere usato solo nei gruppi
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
minacciaDisabled: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ 🚩 Le minacce sono disattivate in questo gruppo
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
minacciaNoTarget: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ 🎯 Devi specificare qualcuno da minacciare
  ━━✫ Tagga un utente o rispondi a un messaggio
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
minacciaText: ({ target, line }) => `꒷꒦ ✦ ୧・︶ : ︶ ꒷꒦ ‧₊ ୧

@${target} ${line}

· ୨୧ · · ୨୧ ·  ♡`,
zizzaniaNoGroup: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ 🚩 Questo comando può essere usato solo nei gruppi
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
zizzaniaDisabled: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ 🚩 La zizzania è disattivata in questo gruppo
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
zizzaniaText: ({ a, line, b }) => `꒷꒦ ✦ ୧・︶ : ︶ ꒷꒦ ‧₊ ୧

@${a} ${line} @${b}

· ୨୧ · · ୨୧ ·  ♡`,
ditalinoNoTarget: ({ prefix, command }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ 🎯 Devi taggare qualcuno o rispondere a un messaggio
  ━━✫ Esempio: ${prefix + command} @utente
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
ditalinoStart: ({ target }) => `🤟🏻 Inizio una serie di coccole speciali per *${target}*...`,
ditalinoMiddle: () => "🤟🏻 Ci siamo quasi...",
ditalinoEnd: () => "👋🏻 Riparatevi dalla cascata!!",
ditalinoResult: ({ target, time }) => `✨ *${target}* è esplosə di piacere dopo *${time}ms* 🥵`,
segaNoTarget: ({ prefix, command }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ 🎯 Devi taggare qualcuno o rispondere a un messaggio
  ━━✫ Esempio: ${prefix + command} @utente
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
segaStart: ({ target }) => `Ora ci occupiamo di ${target}... 😏`,
segaFrame: ({ frame }) => `${frame}`,
segaEnd: ({ target }) => `Oh ${target} è arrivatə al massimo piacere! 😋💦`,
insultNoGroup: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ 🚩 Questo comando può essere usato solo nei gruppi
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
insultDisabled: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ 🚩 Gli insulti sono disattivati in questo gruppo
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
insultNoTarget: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ 🎯 Chi vuoi insultare?
  ━━✫ Tagga qualcuno o rispondi a un messaggio
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
insultBotLines: () => [
  `Oh no! Hai scoperto il mio punto debole: gli insulti! Come farò mai a riprendermi?`,
  `Ah, l'arte di insultare un bot. Un vero maestro dell'ironia sei!`,
  `Incredibile! Un essere umano che insulta un bot. Svolta epica!`,
  `Mi hai davvero ferito con la tua abilità di insultare un bot. Bravissimo!`,
  `La tua bravura nell'insultare un bot è la mia fonte di intrattenimento preferita.`,
  `Insulti un bot: grande intelligenza o grande noia?`,
  `La tua maestria negli insulti ai bot potrebbe fare scuola.`,
  `Sembri il Picasso degli insulti ai bot, un vero capolavoro.`,
  `Gli insulti ai bot sono il tuo talento nascosto. Carriera nel cabaret digitale in arrivo?`,
  `L'audacia di insultare un'entità senza emozioni. Premio per l'originalità!`
],
insultUserText: ({ target, line }) => `꒷꒦ ✦ ୧・︶ : ︶ ꒷꒦ ‧₊ ୧

@${target} ${line}

· ୨୧ · · ୨୧ ·  ♡`,
friendNoTarget: ({ prefix, command }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ ⚠️ Tagga la persona a cui vuoi inviare la richiesta di amicizia
  ━━✫ Esempio: ${prefix}${command} @tag
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
friendSelf: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ ❌ Non puoi aggiungere te stessə agli amici
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
friendUserNotFound: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ 🚫 Persona non presente nel sistema
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
friendAlready: ({ target }) => `✅ @${target} è già tra i tuoi amici.`,
friendPending: () => `⚠️ Una richiesta di amicizia è già in corso.\nAttendi una risposta o l'annullamento.`,
friendRequestText: ({ target, from }) => `👥 Richiesta di amicizia in corso...

@${target}, vuoi accettare l'amicizia di @${from}?

> ⏳ Hai 60 secondi per scegliere.`,
friendTimeout: ({ from, target }) => `⏳ Richiesta di amicizia annullata
> @${from} e @${target} non hanno risposto entro il tempo limite.`,
friendRejected: () => `❌ Richiesta di amicizia rifiutata.`,
friendAccepted: ({ from }) => `👥 Ora tu e @${from} siete amici!`,
removeFriendNoTarget: () => `⚠️ Tagga la persona che vuoi rimuovere dagli amici.`,
removeFriendNotInList: ({ target }) => `🚫 @${target} non è tra i tuoi amici.`,
removeFriendSuccess: ({ target }) => `🚫 Tu e @${target} non siete più amici.`,
friendsNoData: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ ⚠️ Nessun dato utente trovato
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
friendsTitle: ({ name }) => `📜 Lista Amici di ${name}`,
friendsLastNone: () => `👤 Ultimo amico: Nessuno`,
friendsLastSome: ({ last }) => `👤 Ultimo amico: @${last}`,
friendsListHeader: () => `👥 Lista completa:`,
friendsListEmpty: () => `│   Nessuno, complimenti lupo solitario`,
friendsError: () => `❌ Si è verificato un errore durante l'esecuzione del comando.`,
lesbicaCalcNoTarget: ({ prefix, command }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ ⚠️ Devi menzionare qualcuno o rispondere a un messaggio
  ━━✫ Esempio: ${prefix + command} @utente
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
lesbicaCalcLine1: ({ tag, percentage }) => `@${tag} è ${percentage}% lesbica, il resto è solo confusione ormonale.`,
lesbicaCalcLine2: ({ tag, percentage }) => `Test completato: @${tag} ha il cervello cablato per le donne al ${percentage}%.`,
lesbicaCalcLine3: ({ tag, percentage }) => `💕 @${tag} guarda le donne con l’intensità di ${percentage}% porno in 4K.`,
pajeroCalcLine1: ({ tag, percentage }) => `@${tag} è ${percentage}% pajero, il restante ${100 - percentage}% lo passa a cercare altri porno.`,
pajeroCalcLine2: ({ tag, percentage }) => `Referto medico: @${tag} è ${percentage}% schiavo del proprio pisello.`,
pajeroCalcLine3: ({ tag, percentage }) => `🍆 @${tag} pensa a segarsi il ${percentage}% del tempo, il resto lo passa a pulirsi.`,
puttanaCalcLine1: ({ tag, percentage }) => `@${tag} è ${percentage}% puttana, il tassametro non si spegne mai.`,
puttanaCalcLine2: ({ tag, percentage }) => `Analisi dettagliata: @${tag} ha il listino prezzi aperto al ${percentage}% 24/7.`,
puttanaCalcLine3: ({ tag, percentage }) => `💰 @${tag} ha lo sconto troia del ${percentage}%, affrettatevi prima che aumenti.`,
genericCalcLine: ({ tag, percentage, cmd }) => `@${tag} è ${percentage}% ${cmd}, il resto è solo vergogna accumulata.`,
downCalcNoTarget: ({ prefix, command }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ 🚨 TAGGA QUALCUNO, GENIO
  ━━✫ Esempio: ${prefix}${command} @nome
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
downCalcLine: ({ name, cmd, percent, frase, verdict }) => `*⚡️ VERDETTO FINALE ⚡️*

*Soggetto:* ${name}
*Livello di "${cmd}":* ${percent}%

*Diagnosi:* ${frase}

*Prognosi:* ${verdict}`,
downCalcPhrases: () => [
  "È talmente inutile che persino il cestino del riciclo lo rifiuta.",
  "Se l'evoluzione funzionasse bene, tu saresti ancora una cellula singola nel fango.",
  "Hai la profondità emotiva di una pozzanghera e l’intelligenza di un sasso bagnato.",
  "Se il cervello bruciasse calorie, tu ingrasseresti anche mentre dormi.",
  "Quando parli, ogni neurone del pianeta fa un minuto di silenzio per rispetto.",
  "Se l'idiozia fosse energia rinnovabile, solo tu basteresti a illuminare l'Europa.",
  "Hai la stessa utilità di un ombrello bucato in un uragano.",
  "Se fossi un bug, neanche gli sviluppatori perderebbero tempo a fixarti.",
  "Il tuo contributo al mondo è paragonabile a quello di un mozzicone spento in una pozzanghera.",
  "Hai la coordinazione mentale di un piccione ubriaco in autostrada."
],
downCalcVerdicts: ({ percent }) => {
  if (percent > 90) return "🔴 CASO CLINICO IRRECUPERABILE. L'umanità chiede ufficialmente il rimborso.";
  if (percent > 70) return "🟠 PERICOLO BIOLOGICO. Vietato farlo riprodurre senza permesso scritto dell'OMS.";
  if (percent > 40) return "🟡 DIFETTO DI FABBRICA. Usare solo come esempio nei corsi di cosa NON diventare.";
  return "🟢 ANOMALIA STATISTICA. Forse un cervello c'è... da qualche parte, sotto tutto quel vuoto.";
},
alcolNoText: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ 🍷 Nessun nome specificato, userò il tuo
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
alcolHigh: () => "🍾 Sei talmente pieno che anche il fegato ha chiesto il prepensionamento.",
alcolMid: () => "🥂 Bevi come se domani non esistesse, ma domani ti presenta il conto.",
alcolLow: () => "🚰 Totalmente sobrio, l’unica cosa che gira è la tua tristezza.",
alcolResult: ({ target, percent, phrase }) => `『💬』 ══ •⊰✰⊱• ══ 『💬』

MOMENTO DEL TEST DELL'ALCOL! 🍷
━━━━━━━━━━━━━━
${target} ha un tasso alcolemico del ${percent}%! 🍷
『💬』 ══ •⊰✰⊱• ══ 『💬』

${phrase}`,
drugNoText: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ 🌿 Nessun nome specificato, userò il tuo
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
drugHigh: () => "🌿 Talmente fatto che se respira forte intossica il quartiere.",
drugMid: () => "🌿 Non sa pippare, ma ci mette così impegno che finirà nei manuali medici.",
drugLow: () => "🌿 Un esempio da seguire… in questo gruppo è quasi una creatura mitologica.",
drugResult: ({ target, percent, phrase }) => `『💬』 ══ •⊰✰⊱• ══ 『💬』

MOMENTO DEL DRUG TEST! 🌿
━━━━━━━━━━━━━━
${target} ha un tasso di sostanze nel sangue del ${percent}%! 🌿
『💬』 ══ •⊰✰⊱• ══ 『💬』

${phrase}`,
raceCalcNoTarget: ({ prefix, command }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ ⚠️ Devi taggare qualcuno o rispondere a un messaggio
  ━━✫ Esempio: ${prefix + command} @utente
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
raceCalcLine: ({ tag, percent, label }) => `꒷꒦ ✦ ୧・︶ : ︶ ꒷꒦ ‧₊ ୧

@${tag} è ⚫ ${percent}% ${label}

· ୨୧ · · ୨୧ ·  ♡`,
cornutoNoTarget: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ 🤔 Manca il nome della cornuta/o
  ━━✫ Usa: .cornuto @nome o rispondi a un messaggio
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
cornutoSpecialText: () => `🤣 *BHE, ECCO IL RE DELLE CORNA!* 🤣
Si dice che se si leva le corna ci fa l’antenna 5G📡💀`,
cornutoLow: () => "🛡 Tutto tranquillo... per ora. Ma tieni comunque d’occhio il telefono del partner.",
cornutoMid: () => "😬 Qualche chat archiviata di troppo… il sospetto è nell’aria.",
cornutoHigh: () => "👀 Cornometro in allerta massima! Le corna stanno caricando al 78%.",
cornutoMax: () => "🫣 LIVELLO MONDIALE: se apri Google Maps appare un triangolo di corna sulla tua testa.",
cornutoAdviceHigh: () => "🔔 Consiglio: non voltarti… potrebbero usarle come appiglio. 🤣",
cornutoAdviceLow: () => "😌 Respira, per ora sei nel limbo tra beato e futuro membro del club.",
cornutoResult: ({ target, percent, message, advice }) => `🔍 CALCOLATORE DI CORNUTEZZA 🔍

👤 ${target}
📈 Cornutezza: ${percent}%
${message}

${advice}`,
}