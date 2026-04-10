export default {
  
  // Genel sistem
  smsAvisoMG: () => "⚠️ Dikkat!",
  smsWait: () => "⏳ Yükleniyor...",
  smsError: () => "❌ Bir hata oluştu",
  smsSuccess: () => "✅ İşlem başarıyla tamamlandı",
  smsProcessing: () => "🔄 İşleniyor...",
  
  // Genel komutlar
  smsOnlyGroup: () => "❌ Bu komut sadece gruplarda çalışır!",
  smsOnlyAdmin: () => "❌ Sadece yöneticiler bu komutu kullanabilir!",
  smsOnlyOwner: () => "❌ Sadece sahip bu komutu kullanabilir!",
  smsOnlyPremium: () => "💎 Bu komut sadece premium kullanıcılar için mevcut!",
  smsInvalidCommand: () => "❌ Geçersiz komut",
  smsNoText: () => "❌ Metin girin",
  smsNoMedia: () => "❌ Bir medya gönderin veya yanıtlayın",
  
  // AI ve ChatGPT
  aiNoQuery: () => "⚠️ *ChatGPT için geçerli bir istek girin!*\n\n📌 Örnekler:\n{prefix}{command} Bana bir fıkra anlat\n{prefix}{command} 5 fantastik kitap öner\n{prefix}{command} Giriş sayfası için HTML kodu",
  aiError: () => "❌ Yanıt oluşturulurken bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
  aiProcessing: () => "🤖 İsteğiniz işleniyor...",
  
  // Hoşgeldin/güle güle sistemi
  welcomeTitle: () => "✧ HOŞGELDİN! ✧",
  goodbyeTitle: () => "✧ GÜLE GÜLE! ✧",
  welcomeDefault: (user, group, members) => `*Hoşgeldin* @${user} 🎉\n┊ *Grup:* ${group}\n╰► *Üyeler:* ${members}`,
  goodbyeDefault: (user, members) => `*Güle güle* @${user} 👋\n┊ Gruptan ayrıldı\n╰► *Kalan üyeler:* ${members}`,
  
  welcomeSetHelp: () => `🎉 *Hoşgeldin mesajını ayarla*

*Kullanım:* {command} <mesaj>

*Kullanılabilir değişkenler:*
• @user - Kullanıcı etiketi
• $nome - Kullanıcı adı  
• $gruppo - Grup adı
• $membri - Üye sayısı
• $numero - Telefon numarası
• $tag - Kullanıcı etiketi (@user takma adı)

*Örnek:*
{command} Merhaba @user! 👋 $gruppo grubuna hoşgeldin! Şimdi $membri üyeyiz! 🎉

*Varsayılan mesajı geri yüklemek için:*
{command} reset`,
  
  goodbyeSetHelp: () => `👋 *Güle güle mesajını ayarla*

*Kullanım:* {command} <mesaj>

*Kullanılabilir değişkenler:*
• @user - Kullanıcı etiketi
• $nome - Kullanıcı adı  
• $gruppo - Grup adı
• $membri - Üye sayısı
• $numero - Telefon numarası
• $tag - Kullanıcı etiketi (@user takma adı)

*Örnek:*
{command} Güle güle @user! 😢 $gruppo grubunda seni özleyeceğiz. $membri üye kaldık.

*Varsayılan mesajı geri yüklemek için:*
{command} reset`,
  
  // Uyarı sistemi
  warnMentionUser: () => "❌ Bir kullanıcıyı etiketlemeli veya mesajına yanıt vermelisiniz.",
  warnBotImmune: () => "🚫 Bot'u uyaramazsınız.",
  warnUserNotFound: () => "❌ Veritabanında kullanıcı bulunamadı.",
  warnMessage: (params) => `⚠️ 𝐔𝐘𝐀𝐑𝐈 {warns}/𝟑 (𝟑 𝐮𝐲𝐚𝐫ı=𝐲𝐚𝐬𝐚𝐤)`,
  warnBanMessage: () => "⛔ 𝐊𝐔𝐋𝐋𝐀𝐍𝐈𝐂𝐈 3 𝐔𝐘𝐀𝐑𝐈𝐃𝐀𝐍 𝐒𝐎𝐍𝐑𝐀 𝐘𝐀𝐒𝐀𝐊𝐋𝐀𝐍𝐃𝐈",
  muteAdminOnly: () => '❌ Bu komutu yalnızca bir yönetici kullanabilir.',
  muteNoTarget: () => '⚠️ Susturmak istediğin kişiyi etiketle veya mesajlarından birine yanıt ver.',
  unmuteNoTarget: () => '⚠️ Susturmasını kaldırmak istediğin kişiyi etiketle veya mesajlarından birine yanıt ver.',
  muteBotImmune: () => '🤖 Botu susturamazsın.',
  muteGroupOwnerImmune: () => '👑 Grup sahibi susturulamaz.',
  muteSelfDenied: () => '⚠️ Kendini susturamazsın.',
  unmuteSelfDenied: () => '⚠️ Susturmanı kaldırması için başka bir yöneticiden yardım iste.',
  muteAlreadyMuted: () => 'ℹ️ Bu kullanıcı zaten susturulmuş.',
  unmuteNotMuted: () => 'ℹ️ Bu kullanıcı susturulmamış.',
  muteSuccess: ({ target }) => `🔇 Kullanıcı susturuldu\n\n@${target} artık grupta konuşamayacak: mesajları silinecek.`,
  unmuteSuccess: ({ target }) => `🔊 Susturma kaldırıldı\n\n@${target} grupta tekrar yazabilir.`,
  
  menuownerChooseMenu: () => "Bir menü seçin:",
menuownerMainMenuButton: () => "🏠 Ana Menü",
menuownerAdminMenuButton: () => "🛡️ Yönetici Menüsü",
menuownerSecurityMenuButton: () => "🚨 Güvenlik Menüsü",
menuownerGroupMenuButton: () => "👥 Grup Menüsü",
menuownerAiMenuButton: () => "🤖 AI Menüsü",
menuownerTitle: () => "𝑺𝑨𝑯𝑰𝑩 𝑴𝑬𝑵𝑼𝑺𝑼",
menuownerVersionLabel: () => "𝑺𝑼𝑹𝑼𝑴",
menuownerCollabLabel: () => "𝐈̇𝐒̇𝐁𝐈̇𝐑𝐋𝐈̇𝐆̇𝐈̇",
menuownerSupportLabel: () => "𝐃𝐄𝐒𝐓𝐄𝐊",
menuownerReservedCommands: () => "𝑺𝑨𝑯𝑰̇𝑩𝑬 𝑨𝑰𝑻 𝑲𝑶𝑴𝑼𝑻𝑳𝑨𝑹",
menuownerManageCommand: () => "yönet",
menuownerSetGroupsCommand: () => "gruplarıayarla",
menuownerAddGroupsCommand: () => "grupekle",
menuownerResetGroupsCommand: () => "gruplarısıfırla",
menuownerBanUserCommand: () => "kullanıcıyasakla",
menuownerUnbanUserCommand: () => "kullanıcıyasagıkaldır",
menuownerCleanupCommand: () => "temizlik",
menuownerGetFileCommand: () => "dosyaal",
menuownerSaveCommand: () => "pluginkaydet",
menuownerDpCommand: () => "pluginsil",
menuownerGetPluginCommand: () => "pluginal",
menuownerJoinCommand: () => "katıl",
menuownerOutCommand: () => "çık",
menuownerPrefixCommand: () => "önek",
menuownerResetPrefixCommand: () => "öneksıfırla",
menuownerGodModeCommand: () => "tanrımodu",
menuownerResetCommand: () => "sıfırla",
menuownerAddCommand: () => "ekle",
menuownerRemoveCommand: () => "kaldır",
menuownerEveryGroupCommand: () => "hergrup",
menuownerBanChatCommand: () => "sohbetiyasakla",
menuownerUnbanChatCommand: () => "sohbetiyasagıkaldır",
menuownerRestartCommand: () => "yenidenbaşlat",
menuownerShutdownBotCommand: () => "botukapat",
menuownerUpdateBotCommand: () => "botugüncelle",
menuownerPluginParam: () => "plugin",
menuownerLinkParam: () => "bağlantı",
menuownerAutoAdminParam: () => "otoadmin",
menuownerNumMessagesParam: () => "mesaj sayısı",
menuownerCommandParam: () => "komut",
menuownerGroupParam: () => "grup",

  // Menü sistemi
  mainMenuTitle: () => '𝑨𝑵𝑨 𝑴𝑬𝑵𝑼̈',
  adminMenuTitle: () => '𝑨𝑫𝑴𝑰̇𝑵 𝑴𝑬𝑵𝑼𝑺𝑼̈',
  adminCommands: () => '𝑨𝑫𝑴𝑰̇𝑵 𝑲𝑶𝑴𝑼𝑻𝑳𝑨𝑹𝑰',
  chooseMenu: () => 'Bir menü seçin:',
  mainMenuButton: () => '🏠 Ana Menü',
  ownerMenuButton: () => '👑 Sahip Menüsü',
  securityMenuButton: () => '🚨 Güvenlik Menüsü',
  groupMenuButton: () => '👥 Grup Menüsü',
  aiMenuButton: () => '🤖 AI Menüsü',
  promoteCommand: () => 'terfi /adminyap',
  demoteCommand: () => 'indir /adminal',
  warnCommands: () => 'uyar / uyarıkaldır',
  muteCommands: () => 'sustur / susturmayıkaldır',
  setDescCommand: () => 'açıklamaayarla',
  setScheduleCommand: () => 'saatayarla',
  setNameCommand: () => 'isimayarla',
  hidetagCommand: () => 'gizlietiket',
  kickCommand: () => 'at / kov',
  adminsCommand: () => 'yöneticiler',
  tagallCommand: () => 'herkesietiketle',
  openCloseCommand: () => 'açık / kapalı',
  setWelcomeCommand: () => 'hoşgeldinayarla',
  setByeCommand: () => 'gülegüleayarla',
  inactiveCommand: () => 'etkinolmayan',
  listNumCommand: () => 'numara listele + önek',
  cleanupCommand: () => 'temizlik + önek',
  clearPlayCommand: () => 'çalma listesinitemizle',
  rulesCommand: () => 'kurallar/kurallarıayarla',
  quarantineCommand: () => 'karantina',
  dsCommand: () => 'ds',
  listWarnCommand: () => 'uyarı listesi',
  linkCommand: () => 'bağlantı',
  linkQrCommand: () => 'bağlantıqr',
  poweredBy: () => 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ',
  
  // Grup menüsü
  groupMenuTitle: () => '𝑮𝑹𝑼𝑩 𝑴𝑬𝑵𝑼𝑺𝑼̈',
  memberCommands: () => '𝑼̈𝑌𝑬𝑳𝑬𝑹 𝑰̇𝑪̇𝑰̇𝑵 𝑲𝑶𝑴𝑼𝑻𝑳𝑨𝑹',
  musicAudioSection: () => 'MÜZİK & SES',
  infoUtilitySection: () => 'BİLGİ & YARDIMCI ARAÇLAR',
  imageEditSection: () => 'GÖRSELLER & DÜZENLEME',
  pokemonSection: () => 'POKEMON',
  gangSystemSection: () => 'ÇETE SİSTEMİ',
  gamesCasinoSection: () => 'OYUNLAR & KUMAR',
  economyRankingSection: () => 'EKONOMİ & SIRALAMA',
  socialInteractionSection: () => 'SOSYAL ETKİLEŞİMLER',
  howMuchSection: () => 'NE KADAR?',
  personalityTestSection: () => 'KİŞİLİK TESTİ',
  songCommand: () => 'şarkı',
  audioCommand: () => 'ses',
  videoCommand: () => 'video',
  artistTitleCommand: () => 'sanatçı-başlık',
  cityCommand: () => 'şehir',
  textCommand: () => 'metin',
  groupCommand: () => 'grup',
  repoCommand: () => 'depo',
  userCommand: () => 'kullanıcı',
  topicCommand: () => 'konu',
  checkSiteCommand: () => 'site kontrol',
  photoToStickerCommand: () => 'fotodan çıkartma',
  stickerToPhotoCommand: () => 'çıkartmadan foto',
  improveQualityCommand: () => 'foto kalitesini iyileştir',
  photoCommand: () => 'foto',
  hiddenPhotoCommand: () => 'gizli foto',
  memeCommand: () => 'meme',
  fromStickerCommand: () => 'çıkartmadan',
  blurImageCommand: () => 'görseli bulanıklaştır',
  comingSoonCommand: () => 'yakında',
  quantityCommand: () => 'miktar',
  headsOrTailsCommand: () => 'yazı tura',
  mathProblemCommand: () => 'matematik problemi',
  rockPaperScissorsCommand: () => 'taş kağıt makas',
  pokemonInfoCommand: () => 'Pokémon bilgisi',
  balanceCommand: () => 'bakiye',
  topUsersCommand: () => 'top kullanıcılar',
  buyUCCommand: () => 'UC satın al',
  withdrawUCCommand: () => 'bankadan UC',
  earnXPCommand: () => 'XP kazan',
  proposalCommand: () => 'teklif',
  endRelationshipCommand: () => 'ilişkiyi bitir',
  affinityCommand: () => 'yakınlık',
  charmCommand: () => 'çekicilik',
  createFightCommand: () => 'kavga oluştur',
  truthOrDareCommand: () => 'doğruluk mu cesaret mi',
  versionLabel: () => '𝑺𝑼𝑹𝑼𝑴',
  supportLabel: () => '𝐃𝐄𝐒𝐓𝐄𝐊',
  
  // Sahip menüsü
  ownerMenuTitle: () => '𝑺𝑨𝑯𝑰𝑩 𝑴𝑬𝑵𝑼𝑺𝑼',
  ownerReservedCommands: () => '𝑺𝑨𝑯𝑰̇𝑩𝑬 𝑨𝑰𝑻 𝑲𝑶𝑴𝑼𝑻𝑳𝑨𝑹',
  setNameCommand: () => 'isimayarla',
  resetNameCommand: () => 'isimsıfırla',
  manageCommand: () => 'yönet',
  setGroupsCommand: () => 'gruplarıayarla',
  addGroupsCommand: () => 'grupekle',
  resetGroupsCommand: () => 'gruplarısıfırla',
  setPpCommand: () => 'ppayarla',
  banUserCommand: () => 'kullanıcıyasakla',
  unbanUserCommand: () => 'kullanıcıyasagıkaldır',
  blockUserCommand: () => 'kullanıcıyıengelle',
  unblockUserCommand: () => 'kullanıcıengelinikaldır',
  getFileCommand: () => 'dosyaal',
  saveCommand: () => 'kaydet',
  dpCommand: () => 'dp',
  getPluginCommand: () => 'pluginal',
  joinCommand: () => 'katıl',
  outCommand: () => 'çık',
  prefixCommand: () => 'önek',
  resetPrefixCommand: () => 'öneksıfırla',
  godModeCommand: () => 'tanrımodu',
  resetCommand: () => 'sıfırla',
  addCommand: () => 'ekle',
  removeCommand: () => 'kaldır',
  everyGroupCommand: () => 'hergrup',
  banChatCommand: () => 'sohbetiyasakla',
  unbanChatCommand: () => 'sohbetiyasagıkaldır',
  restartCommand: () => 'yenidenbaşlat',
  shutdownBotCommand: () => 'botukapat',
  updateBotCommand: () => 'botugüncelle',
  imageParam: () => 'görsel',
  pluginParam: () => 'plugin',
  linkParam: () => 'bağlantı',
  autoAdminParam: () => 'otoadmin',
  numMessagesParam: () => 'mesaj sayısı',
  commandParam: () => 'komut',
  groupParam: () => 'grup',
  
  // AI menüsü
  aiMenuTitle: () => '𝑩𝑶𝑻 𝑴𝑬𝑵𝑼𝑺𝑼̈',
  generalCommands: () => '𝑮𝑬𝑵𝑬𝑳 𝑲𝑶𝑴𝑼𝑻𝑳𝑨𝑹',
  iaCommand: () => 'ia',
  alyaCommand: () => 'Alya',
  geminiCommand: () => 'gemini',
  chatgptCommand: () => 'chatgpt',
  deepseekCommand: () => 'deepseek',
  voiceCommand: () => 'sesli',
  imageCommand: () => 'görsel',
  image2Command: () => 'görsel2',
  image3Command: () => 'görsel3',
  animalInfoCommand: () => 'hayvanbilgisi',
  kcalCommand: () => 'kcal',
  summaryCommand: () => 'özet',
  recipeCommand: () => 'tarif',
  
  // Güvenlik menüsü
  securityMenuTitle: () => '𝑭𝑶𝑵𝑲𝑺𝑰̇𝒀𝑶𝑵 𝑴𝑬𝑵𝑼𝑺𝑼̈',
  activateDisable: () => '𝑨𝑲𝑻𝑰̇𝑭/𝑫𝑬𝑽𝑹𝑬 𝑫𝑰̇𝑺𝑰̇',
  howToUse: () => '𝑵𝑨𝑺𝑰𝑳 𝑲𝑼𝑳𝑳𝑨𝑵𝑰𝑳𝑰𝑹',
  activateFunction: () => 'aktif [fonksiyon]',
  disableFunction: () => 'devredışı [fonksiyon]',

// Ping/Status eklentisi
systemStatusTitle: () => "⋆ ★ 🚀 𝑺𝑰̇𝑺𝑻𝑬𝑴 𝑫𝑼𝑹𝑼𝑴𝑼 🚀 ★ ⋆",
uptime: () => "⌛ *Çalışma Süresi:*",
ping: () => "⚡ *Ping:*",
cpuLabel: () => "💻 *CPU:*",
cpuUsage: () => "🔋 *Kullanım:*",
ramLabel: () => "💾 *RAM:*",
freeRam: () => "🟢 *Boş:*",
version: () => "Sürüm:",

systemStatus: (params) => `${params?.title || '⋆ ★ 🚀 𝑺𝑰̇𝑺𝑻𝑬𝑴 𝑫𝑼𝑹𝑼𝑴𝑼 🚀 ★ ⋆'}
╭♡꒷ ๑ ⋆˚₊⋆───ʚ˚ɞ───⋆˚₊⋆ ๑ ⪩
୧ ⌛ *Çalışma Süresi:* ${params?.uptime || 'N/A'}
୧ ⚡ *Ping:* ${params?.ping || 'N/A'} ms
  💻 *CPU:* ${params?.cpuModel || 'Bilinmiyor'}
  🔋 *Kullanım:* ${params?.cpuSpeed || 'N/A'} MHz
  💾 *RAM:* ${params?.ramUsed || 'N/A'} / ${params?.ramTotal || 'N/A'}
  🟢 *Boş:* ${params?.ramFree || 'N/A'}
╰♡꒷ ๑ ⋆˚₊⋆───ʚ˚ɞ───⋆˚₊⋆ ๑ ⪩`,

menuFooter: () => "Bir menü seçin:",
menuAdmin: () => "🛡️ Yönetici Menüsü",
menuOwner: () => "👑 Sahip Menüsü",
menuSecurity: () => "🚨 Güvenlik Menüsü",
menuGroup: () => "👥 Grup Menüsü",
menuAI: () => "🤖 AI Menüsü",
mainMenuTitle: () => "𝑩𝑶𝑻 𝑴𝑬𝑵𝑼𝑺𝑼̈",
staffCommand: () => "personel",
candidatesCommand: () => "adaylar",
installCommand: () => "yükle",
guideCommand: () => "rehber",
channelsCommand: () => "kanallar",
systemCommand: () => "sistem",
faqCommand: () => "SSS",
pingCommand: () => "ping",
reportCommand: () => "bildir",
suggestCommand: () => "öner",
newsCommand: () => "haberler",
versionLabel: () => "𝑺𝑼𝑹𝑼𝑴",
usersLabel: () => "𝐊𝐔𝐋𝐋𝐀𝐍𝐈𝐂𝐈𝐋𝐀𝐑",
chooseMenu: () => "Bir menü seçin:",
mainMenuButton: () => "🏠 Ana Menü",
ownerMenuButton: () => "👑 Sahip Menüsü",
securityMenuButton: () => "🚨 Güvenlik Menüsü",
groupMenuButton: () => "👥 Grup Menüsü",
aiMenuButton: () => "🤖 AI Menüsü",
adminMenuTitle: () => "𝑨𝑫𝑴𝑰̇𝑵 𝑴𝑬𝑵𝑼𝑺𝑼̈",
promoteCommand: () => "p /adminyap",
demoteCommand: () => "r /adminal",
warnCommands: () => "uyar / uyarıkaldır",
setScheduleCommand: () => "saatayarla",
setNameCommand: () => "isimayarla",
hidetagCommand: () => "gizlietiket",
tagallCommand: () => "herkesietiketle",
kickCommand: () => "at / kov",
adminsCommand: () => "yöneticiler",
openCloseCommand: () => "açık / kapalı",
setWelcomeCommand: () => "hoşgeldinayarla",
setByeCommand: () => "gülegüleayarla",
inactiveCommand: () => "etkinolmayan",
listNumCommand: () => "numara listele + önek",
cleanupCommand: () => "temizlik + önek",
rulesCommand: () => "kurallar /kurallarıayarla",
listWarnCommand: () => "uyarı listesi",
linkCommand: () => "bağlantı",
linkQrCommand: () => "bağlantıqr",
requestsCommand: () => "istekler",
adminCommands: () => "𝑨𝑫𝑴𝑰̇𝑵 𝑲𝑶𝑴𝑼𝑻𝑳𝑨𝑹𝑰",
poweredBy: () => "ᴘᴏᴡᴇʀᴇᴅ ʙʏ",


installTitle: () => "⋆ ︵ ★ 💬 �𝐛𝐨𝐫𝐫𝐚 𝐁𝐨𝐭 💬 ★ ︵ ⋆",
installIntro: () => "𝐒𝐛𝐨𝐫𝐫𝐚 𝐁𝐨𝐭'u cihazınıza yüklemek ister misiniz?",
installDescription: () => "Termux, Windows ve diğer işletim sistemleri için tüm ayrıntılı adımları içeren GitHub'daki kapsamlı kurulum kılavuzunu takip edin.",
installGuideLabel: () => "📖 𝐊𝐚𝐩𝐬𝐚𝐦𝐥ı 𝐊𝐢𝐥𝐚𝐯𝐮𝐳",
installRepoLabel: () => "📂 𝐆𝐢𝐭𝐇𝐮𝐛 𝐃𝐞𝐩𝐨𝐬𝐮",
installVideoLabel: () => "🎥 𝐕𝐢𝐝𝐞𝐨 𝐄ğ𝐢𝐭𝐢𝐜𝐢",
installFeatures: () => "✨ 𝐍𝐞 𝐛𝐮𝐥𝐚𝐜𝐚𝐤𝐬ı𝐧ı𝐳:",
installFeature1: () => "📱 Termux için eksiksiz kurulum",
installFeature2: () => "💻 Windows ve diğer OS'ler için kurulum",
installFeature3: () => "🔧 Yaygın sorunların çözümü",
installFeature4: () => "📝 Otomatik kurulum komutları",
installCTA: () => "Kuruluma başlamak ve botun tüm özelliklerini keşfetmek için GitHub deposunu ziyaret edin!",
installNeedHelp: () => "Yardıma mı ihtiyacınız var? Destek kanalımıza katılın!",

systemTitle: () => "⋆ ︵★ 🖥️ 𝐒𝐈̇𝐒𝐓𝐄𝐌 𝐃𝐔𝐑𝐔𝐌𝐔 ★︵ ⋆",
systemHost: () => "🚩 *Host*",
systemOS: () => "🏆 *İşletim Sistemi*",
systemArch: () => "💫 *Mimari*",
systemTotalRAM: () => "🥷 *Toplam RAM*",
systemFreeRAM: () => "🚀 *Boş RAM*",
systemUsedRAM: () => "⌛ *Kullanılan RAM*",
systemUptime: () => "🕒 *Çalışma Süresi*",
systemNodeMemory: () => "🪴 *Node.js Belleği:*",
systemRSS: () => "RSS",
systemHeapTotal: () => "Toplam Heap",
systemHeapUsed: () => "Kullanılan Heap",
systemExternal: () => "Harici",
systemArrayBuffer: () => "ArrayBuffer",
systemDiskSpace: () => "☁️ *Disk Alanı:*",
systemDiskTotal: () => "Toplam",
systemDiskUsed: () => "Kullanılan",
systemDiskAvailable: () => "Kullanılabilir",
systemDiskPercent: () => "Kullanım Yüzdesi",
systemDiskError: () => "❌ Disk alanı alınırken hata oluştu.",

reportNoText: () => "⚠️ Bildirmek istediğiniz sorunun ayrıntılı açıklamasını girin.",
reportTooShort: () => "⚠️ Açıklama çok kısa. Eksiksiz bir bildirim için en az 10 karakter sağlayın.",
reportTooLong: () => "⚠️ Açıklama maksimum 1000 karakter sınırını aşıyor. Metni kısaltın.",
reportTitle: () => "❌️ `B̲I̲L̲D̲I̲R̲I̲M̲` ❌️",
reportNumber: () => "📱 Numara",
reportUser: () => "👤 Kullanıcı",
reportMessage: () => "📝 Mesaj",
reportQuote: () => "📎 Alıntı",
reportSuccess: () => "✅ Bildiriminiz başarıyla geliştirme ekibine gönderildi.\n\n_⚠️ Dikkat: Yanlış veya uygunsuz bildirimler bot kullanımında kısıtlamalara yol açabilir._",
reportChannelTitle: () => "⚠️ HATA BİLDİRİMİ ⚠️",
reportChannelBody: () => "Yeni bildirim alındı",
reportAnonymous: () => "Anonim",
suggestNoText: () => "⚠️ Komut önerinizi girin.\n\n*Örnek:* .öner (komut adı) (işlevsellik açıklaması)",
suggestTooShort: () => "⚠️ Açıklama çok kısa. Eksiksiz bir öneri için en az 10 karakter sağlayın.",
suggestTooLong: () => "⚠️ Açıklama maksimum 1000 karakter sınırını aşıyor. Metni kısaltın.",
suggestTitle: () => "💡 `Ö̲N̲E̲R̲I̲` 💡",
suggestNumber: () => "📱 Numara",
suggestUser: () => "👤 Kullanıcı",
suggestMessage: () => "📝 Öneri",
suggestQuote: () => "📎 Alıntı",
suggestSuccess: () => "✅ Öneriniz başarıyla geliştirme ekibine gönderildi.\n\n_⚠️ Dikkat: Yasadışı veya uygunsuz komut önerileri bot kullanımında kısıtlamalara yol açabilir._",
suggestChannelTitle: () => "💡 KOMUT ÖNERİSİ 💡",
suggestChannelBody: () => "Yeni öneri alındı",
suggestAnonymous: () => "Anonim",
unwarnNoUser: () => "❌ Bir uyarıyı kaldırmak için bir kullanıcıyı etiketlemeli veya mesajına yanıt vermelisiniz.",
unwarnUserNotFound: () => "❌ Veritabanında kullanıcı bulunamadı.",
unwarnNoWarnings: () => "ℹ️ Bu kullanıcının kaldırılacak aktif uyarısı yok.",
unwarnSuccess: (params) => `✅ 𝐔𝐲𝐚𝐫ı 𝐤𝐚𝐥𝐝ı𝐫ı𝐥𝐝ı\n\n𝐊𝐚𝐥𝐚𝐧 𝐮𝐲𝐚𝐫ı𝐥𝐚𝐫: ${params?.remaining || 0}/3`,
setnameNoText: () => "⚠️ Gruba atamak istediğiniz yeni adı girin.",
setnameSuccess: () => "✅ 𝐆𝐫𝐮𝐩 𝐚𝐝ı 𝐛𝐚ş𝐚𝐫ı𝐲𝐥𝐚 𝐝𝐞ğ𝐢ş𝐭𝐢𝐫𝐢𝐥𝐝𝐢!",
setnameError: () => "❌ Grup adı değiştirilirken bir hata oluştu. Lütfen tekrar deneyin.",
hidetagDefaultMessage: () => "📢 Herkese mesaj",
hidetagStickerError: () => "❌ Çıkartma indirilemedi. Lütfen tekrar deneyin.",
tagallTitle: () => "⋆ ︵ ★ 📢 𝐆𝐑𝐔𝐁 𝐔̈𝐘𝐄𝐋𝐄𝐑𝐈̇ ★ ︵ ⋆",
tagallBot: () => "🤖 BOT",
tagallMessage: () => "📝 Mesaj",
tagallEmptyMessage: () => "📢 Dikkat grup üyeleri!",
tagallMemberCount: (params) => `👥 Toplam üyeler: ${params?.count || 0}`,
adminsCooldown: (params) => `⏳ Yöneticileri tekrar çağırmadan önce ${params?.time || 'biraz'} daha beklemeniz gerekiyor.\n\n_Bu komutun kötüye kullanımı önlemek için bir kullanım sınırı vardır._`,
adminsTitle: () => "⋆︵★ 🔔 𝐘𝐎̈𝐍𝐄𝐓𝐈̇𝐂𝐈̇𝐋𝐄𝐑 ★︵⋆",
adminsMessage: () => "📝 Çağrı nedeni",
adminsWarning: () => "⚠️ Bu komut sadece acil sorunlar veya önemli durumlar için kullanılmalıdır. Uygunsuz kullanım gruptan çıkarılmanıza neden olabilir.",
adminsNoMessage: () => "Yardım talebi",
adminsNotification: () => "🔔 Yöneticilere bildirildi",
adminsExternalTitle: (params) => `${params?.groupName || 'Grup'}`,
adminsExternalBody: () => "Yöneticilere çağrı...",
groupOpen: () => "✅ 𝐒𝐨𝐡𝐛𝐞𝐭 𝐡𝐞𝐫𝐤𝐞𝐬𝐞 𝐚𝐜̧ı𝐤\n\n୧ Tüm üyeler artık grupta mesaj gönderebilir.",
groupClose: () => "🔒 𝐒𝐨𝐡𝐛𝐞𝐭 𝐬𝐚𝐝𝐞𝐜𝐞 𝐲𝐨̈𝐧𝐞𝐭𝐢𝐜𝐢𝐥𝐞𝐫𝐞 𝐚𝐜̧ı𝐤\n\n୧ Sadece yöneticiler mesaj gönderebilir.",
setwelcomeNoText: () => "⚠️ Yapılandırmak istediğiniz özelleştirilmiş hoşgeldin mesajını girin.\n\n*Kullanılabilir değişkenler:*\n୧ @user - Kullanıcıyı etiketler\n୧ @group - Grup adı\n୧ @desc - Grup açıklaması",
setwelcomeSuccess: () => "✅ 𝐇𝐨ş𝐠𝐞𝐥𝐝𝐢𝐧 𝐦𝐞𝐬𝐚𝐣ı 𝐚𝐲𝐚𝐫𝐥𝐚𝐧𝐝ı\n\n୧ Hoşgeldin mesajı bu grup için başarıyla ayarlandı.",
setbyeNoText: () => "⚠️ Yapılandırmak istediğiniz özelleştirilmiş güle güle mesajını girin.\n\n*Kullanılabilir değişkenler:*\n୧ @user - Kullanıcıyı etiketler\n୧ @group - Grup adı",
setbyeSuccess: () => "✅ 𝐆𝐮̈𝐥𝐞 𝐠𝐮̈𝐥𝐞 𝐦𝐞𝐬𝐚𝐣ı 𝐚𝐲𝐚𝐫𝐥𝐚𝐧𝐝ı\n\n୧ Güle güle mesajı bu grup için başarıyla ayarlandı.",
inactiveMenuTitle: () => "🌙 Etkin Olmayan Üyeleri Yönetme",
inactiveMenuFound: (params) => `💤 Bulunan etkin olmayan üyeler: *${params?.inactive || 0}/${params?.total || 0}*\n\n⏰ 7 günden fazla süredir etkin değil\n\nAşağıdan bir seçenek seçin:`,
inactiveListTitle: () => "📋 Etkin Olmayan Üyeler Listesi",
inactiveListNone: () => "✅ Etkin olmayan üye bulunamadı!\n\n🎉 Gruptaki tüm üyeler aktif.",
inactiveListItem: (params) => `${params?.index}. @${params?.user}`,
inactiveRemoveStart: (params) => `⚠️ Etkin olmayanları kaldırma: *${params?.count}* üyeyi silmek üzeresiniz.\n\n❗ Bu işlem geri alınamaz!\n\nDevam etmek istediğinizden emin misiniz?`,
inactiveRemoveSuccess: (params) => `✅ Kaldırma tamamlandı!\n\n🗑️ Kaldırılan üyeler: *${params?.removed}*${params?.errors ? `\n⚠️ Hatalar: *${params.errors}* üye kaldırılamadı` : ''}`,
inactiveRemoveNone: () => "✅ Kaldırılacak üye yok! Grubun tüm üyeleri aktif.",
inactiveConfirmTitle: () => "⚠️ Kaldırmayı Onayla",
inactiveBackButton: () => "🔄 Menüye Dön",
inactiveListButton: () => "📋 Listeyi Görüntüle",
inactiveRemoveButton: () => "🗑️ Etkin Olmayanları Kaldır",
inactiveConfirmButton: () => "✅ Kaldırmayı Onayla",
inactiveCancelButton: () => "❌ İptal",
inactiveNotAdmin: () => "❌ Sadece *yöneticiler* bu işlevi kullanabilir.",
inactiveUnknown: () => "❌ Geçersiz seçenek. Düğmeleri kullanın.",
inactiveResultTitle: () => "📊 Etkin olmayan kaldırma sonucu",
inactiveGroupLabel: () => "👥 Grup",
inactiveFooter: () => "Etkin olmayan grup yönetimi",
noBotAdmin: () => "⚠️ Kullanıcıları kaldırmak için yönetici olmam gerekiyor",
  noMention: () => "⚠️ Kaldırılacak kişiyi etiketleyin veya mesajına yanıt verin",
  cannotRemoveOwner: () => "⚠️ Botun yaratıcısını kaldıramazsınız",
  cannotRemoveBot: () => "⚠️ Botun kendisini kaldıramazsınız",
  cannotRemoveSelf: () => "⚠️ Kendinizi kaldıramazsınız",
  targetIsGroupOwner: () => "⚠️ Grubun yaratıcısını kaldıramazsınız",
  targetIsAdmin: () => "⚠️ Grubun yöneticisini kaldıramazsınız",
  kickSuccess: (params) => `╭─────────────────\n│ ✦ @${params?.target} kaldırıldı\n│ ✦ @${params?.executor} tarafından${params?.reason ? `\n│\n│ 📝 Sebep: ${params.reason}` : ''}\n╰─────────────────`,
  title: () => "⚠️ Uyarılan Kullanıcılar",
totalUsers: (params) => `Toplam: ${params?.count || 0} kullanıcı`,
userEntry: (params) => `${params?.index}. ${params?.name || 'Bilinmiyor'} (${params?.warns}/3)`,
noWarns: () => "✓ Uyarı alan kullanıcı yok",
unknownUser: () => "Bilinmiyor",
noBotAdmin: () => "⚠️ Grup bağlantısını almak için yönetici olmam gerekiyor",
qrCaption: (params) => `╭─────────────────\n│ 🔗 Grup QR Kodu\n│ *${params?.groupName}*\n│\n│ Katılmak için tara\n╰─────────────────`,
qrError: () => "❌ QR Kodu oluşturulurken hata",
noBotAdmin: () => "⚠️ İstekleri yönetmek için yönetici olmam gerekiyor",
noAdmin: () => "⚠️ Sadece grup yöneticileri bu komutu kullanabilir",
noPending: () => "✓ Bekleyen istek yok",
pendingCount: (params) => `╭─────────────────\n│ 📨 Bekleyen istekler: ${params?.count}\n│\n│ Bir seçenek seçin\n╰─────────────────`,
menuFooter: () => "Grup istek yönetimi",
buttonAcceptAll: () => "✅ Tümünü Kabul Et",
buttonRejectAll: () => "❌ Tümünü Reddet",
buttonAccept39: () => "🇮🇹 +39'u Kabul Et",
buttonManage: () => "📥 İstekleri Yönet",
acceptedSuccess: (params) => `✅ ${params?.count} istek kabul edildi`,
rejectedSuccess: (params) => `❌ ${params?.count} istek reddedildi`,
no39Found: () => "⚠️ +39 önekli istek bulunamadı",
accepted39Success: (params) => `✅ ${params?.count} +39 önekli istek kabul edildi`,
errorAccepting: () => "❌ İstekler kabul edilirken hata",
errorRejecting: () => "❌ İstekler reddedilirken hata",
invalidNumber: () => "⚠️ Geçersiz numara. 0'dan büyük bir numara kullanın",
invalidInput: () => "⚠️ Geçersiz giriş. Bir numara veya '39' gönderin",
manageCustom: (params) => `╭─────────────────\n│ 📥 Özelleştirilmiş Yönetim\n│\n│ Kaç istek kabul etmek istiyorsunuz?\n│\n│ ✦ Kullanım: .${params?.command} kabul <numara>\n│ ✦ Örnek: .${params?.command} kabul 7\n╰─────────────────`,
manageFooter: () => "Özelleştirilmiş istek yönetimi",
richieste: {
  noBotAdmin: () => "⚠️ İstekleri yönetmek için yönetici olmam gerekiyor",
  noAdmin: () => "⚠️ Sadece grup yöneticileri bu komutu kullanabilir",
  noPending: () => "✓ Bekleyen istek yok",
  pendingCount: (params) => `╭─────────────────\n│ 📨 Bekleyen istekler: ${params?.count}\n│\n│ Bir seçenek seçin\n╰─────────────────`,
  menuFooter: () => "Grup istek yönetimi",
  buttonAcceptAll: () => "✅ Tümünü Kabul Et",
  buttonRejectAll: () => "❌ Tümünü Reddet",
  buttonAccept39: () => "🇮🇹 +39'u Kabul Et",
  buttonManage: () => "📥 İstekleri Yönet",
  acceptedSuccess: (params) => `✅ ${params?.count} istek kabul edildi`,
  rejectedSuccess: (params) => `❌ ${params?.count} istek reddedildi`,
  no39Found: () => "⚠️ +39 önekli istek bulunamadı",
  accepted39Success: (params) => `✅ ${params?.count} +39 önekli istek kabul edildi`,
  errorAccepting: () => "❌ İstekler kabul edilirken hata",
  errorRejecting: () => "❌ İstekler reddedilirken hata",
  invalidNumber: () => "⚠️ Geçersiz numara. 0'dan büyük bir numara kullanın",
  invalidInput: () => "⚠️ Geçersiz giriş. Bir numara veya '39' gönderin",
  manageCustom: (params) => `╭─────────────────\n│ 📥 Özelleştirilmiş Yönetim\n│\n│ Kaç istek kabul etmek istiyorsunuz?\n│\n│ ✦ Kullanım: .${params?.command} kabul <numara>\n│ ✦ Örnek: .${params?.command} kabul 7\n╰─────────────────`,
  manageFooter: () => "Özelleştirilmiş istek yönetimi"
},
linkqr: {
  noBotAdmin: () => "⚠️ Grup bağlantısını almak için yönetici olmam gerekiyor",
  qrCaption: (params) => `╭─────────────────\n│ 🔗 Grup QR Kodu\n│ *${params?.groupName}*\n│\n│ Katılmak için tara\n╰─────────────────`,
  qrError: () => "❌ QR Kodu oluşturulurken hata"
},
notAvailable: () => "⚠️ Bu komut sadece ChatUnity tabanı ile kullanılabilir",
imageNotFound: () => "⚠️ Görseller yüklenirken hata",
mainTitle: () => "🌐 Sosyal Ağlarımız",
mainSubtitle: () => "Güncel kalmak için bizi her yerde takip edin",
mainFooter: () => "Powered by ChatUnity",
instagramTitle: () => "📸 Instagram",
instagramBody: () => "Günlük fotoğraf ve hikayeler için bizi Instagram'da takip edin!",
instagramButton: () => "Instagram'ı Aç",
tiktokTitle: () => "🎵 TikTok",
tiktokBody: () => "TikTok'ta yaratıcı ve eğlenceli içerikler!",
tiktokButton: () => "TikTok'u Aç",
youtubeTitle: () => "🎬 YouTube",
youtubeBody: () => "YouTube kanalımızda video, eğitim ve canlı yayınlar!",
youtubeButton: () => "YouTube'u Aç",
discordTitle: () => "💬 Discord",
discordBody: () => "Discord topluluğumuza katılın!",
discordButton: () => "Discord'u Aç",
telegramTitle: () => "✈️ Telegram",
telegramBody: () => "Telegram kanalında haberler ve güncellemeler!",
telegramButton: () => "Telegram'ı Aç",
whatsappTitle: () => "💚 WhatsApp Kanalı",
whatsappBody: () => "Resmi WhatsApp kanalımızda güncel kalın!",
whatsappButton: () => "Kanalı Aç",
cardFooter: () => "ChatUnity Sosyal",
followUpMessage: () => "👆 Tüm sosyal kanallarımızı görmek için kartları kaydırın!\n\n✦ Güncel kalmak için bizi takip edin",
followUpFooter: () => "ChatUnity Ekibi",
menuButton: () => "📋 Menüye Dön",
errorLoading: () => "⚠️ Sosyal medya yüklenirken hata",


   linkTitle: () => "🔗 GRUP BAĞLANTISI",
   linkFooter: () => "Bağlantıyı kopyalayın ve paylaşın",
    copyButton: () => "📋 Bağlantıyı Kopyala",


  
  pingTitle: () => "⚡ PONG!",
  pingResponse: (params) => `⚡ *Ping:* ${params?.ping || 'N/A'} ms`,
  socialNotAvailable: () => "⚠️ Komut şu anda kullanılamıyor. Lütfen daha sonra tekrar deneyin.",
socialInstagramTitle: () => "📸 Instagram",
socialInstagramBody: () => "Özel içerikler, güncellemeler ve bot haberleri için bizi Instagram'da takip edin!",
socialInstagramButton: () => "Instagram'da Takip Et",
socialTiktokTitle: () => "🎵 TikTok",
socialTiktokBody: () => "TikTok'ta videolarımızı keşfedin ve en viral içeriklerle güncel kalın!",
socialTiktokButton: () => "TikTok'ta Takip Et",
socialYoutubeTitle: () => "📺 YouTube",
socialYoutubeBody: () => "Eğitimler, rehberler ve video güncellemeleri için YouTube kanalımıza abone olun!",
socialYoutubeButton: () => "YouTube'a Abone Ol",
socialDiscordTitle: () => "💬 Discord",
socialDiscordBody: () => "Destek, sohbet ve daha fazlası için Discord topluluğumuza katılın!",
socialDiscordButton: () => "Discord'a Katıl",
socialTelegramTitle: () => "✈️ Telegram",
socialTelegramBody: () => "Anlık haberler ve doğrudan iletişim için bizi Telegram'da takip edin!",
socialTelegramButton: () => "Telegram'da Takip Et",
socialWhatsappTitle: () => "💚 WhatsApp",
socialWhatsappBody: () => "Resmi güncellemeleri almak için WhatsApp kanalımıza abone olun!",
socialWhatsappButton: () => "WhatsApp'ta Takip Et",
socialCardFooter: () => "ChatUnity Sosyal",
socialMainTitle: () => "⋆ ︵ ★ 🌐 𝐒𝐎𝐒𝐘𝐀𝐋 𝐌𝐄𝐃𝐘𝐀 ★ ︵ ⋆",
socialMainSubtitle: () => "Resmi kanallarımızı takip edin",
socialMainFooter: () => "ChatUnity ile bağlı kalın",
socialFollowUpMessage: () => "✨ İlginiz için teşekkürler!\n\n୧ Hiçbir güncellemeyi kaçırmamak için tüm sosyal kanallarımızı takip edin.",
socialFollowUpFooter: () => "ChatUnity - Her zaman bağlı",
socialMenuButton: () => "🏠 Ana Menü",
socialErrorLoading: () => "❌ Sosyal medya yüklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
listawarnTitle: () => "꒷꒦ ✦ Uyarılan Kullanıcı Listesi ✦ ꒷꒦",
listawarnMode: () => "Mod",
listawarnGroup: () => "Grup",
listawarnTotal: ({ count }) => `Toplam: ${count} ${count === 1 ? 'uyarılan kullanıcı' : 'uyarılan kullanıcı'}`,
listawarnNoWarns: () => "✨ Uyarılan kullanıcı yok",
listawarnUnknownUser: () => "Bilinmeyen Kullanıcı",
listawarnUserNumber: ({ index }) => `${index}.`,
listawarnTag: () => "Etiket:",
listawarnGroups: () => "Grup/lar:",
listawarnNoActiveWarns: () => "Aktif uyarı yok",
listawarnErrorRetrieving: () => "Alım hatası",
listawarnTotalWarns: ({ count }) => `${count} toplam`,
listawarnOwnerOnly: () => "❌ Bu komut özelde sadece sahipler tarafından kullanılabilir.",
listawarnAllUsers: () => "Tüm kullanıcılar",
kickNoBotAdmin: () => "❌ Bot kullanıcıları kaldırmak için yönetici olmalıdır.",
kickNoMention: () => "⚠️ Gruptan kaldırılacak kullanıcıyı etiketleyin veya alıntılayın.",
kickCannotRemoveOwner: () => "🛡️ Botun yaratıcısını kaldıramazsınız.",
kickCannotRemoveBot: () => "🤖 Botu gruptan kaldıramazsınız.",
kickCannotRemoveSelf: () => "😅 Bu komutla kendinizi kaldıramazsınız.",
kickTargetIsGroupOwner: () => "👑 Kaldırmaya çalıştığınız kullanıcı grubun yaratıcısıdır.",
kickTargetIsAdmin: () => "🛡️ Kaldırmaya çalıştığınız kullanıcı yöneticidir.",
kickSuccess: ({ target, executor, reason }) => `꒷꒦ ✦ Kullanıcı Kaldırıldı ✦ ꒷꒦\n\n┊ 『 👤 』 Kullanıcı: @${target}\n┊ 『 ⚖️ 』 Kaldıran: @${executor}${reason ? `\n┊ 『 📝 』 Sebep: ${reason}` : ''}\n\n╰★────★────★`,
linkgroupNoBotAdmin: () => "❌ Bot grup bağlantısını almak için yönetici olmalıdır.",
linkgroupLinkTitle: ({ groupName }) => `꒷꒦ ✦ Grup Bağlantısı ✦ ꒷꒦\n\n┊ 『 📱 』 Grup: ${groupName}\n┊ 『 🔗 』 Bağlantıyı kopyalamak için düğmeye tıklayın`,
linkgroupLinkFooter: () => "Powered by ChatUnity Bot",
linkgroupCopyButton: () => "📋 Bağlantıyı Kopyala",
joinNoLink: ({ prefix, command }) => `⚠️ Grup bağlantısını girin.\n\n┊ 『 💡 』 Örnek: ${prefix}${command} <bağlantı> <günler | inf>`,
joinInvalidLink: () => "❌ Geçersiz grup bağlantısı.",
joinSuccessInfinite: () => "꒷꒦ ✦ Gruba Katılım ✦ ꒷꒦\n\n┊ 『 ✅ 』 Gruba başarıyla katıldım\n┊ 『 ⏰ 』 Kalış: Sınırsız\n\n╰★────★────★",
joinSuccessExpired: ({ days }) => `꒷꒦ ✦ Gruba Katılım ✦ ꒷꒦\n\n┊ 『 ✅ 』 Gruba başarıyla katıldım\n┊ 『 ⏰ 』 Kalış: ${days} gün\n\n╰★────★────★`,
banuserNoTarget: () => "⚠️ Lütfen bir kullanıcıyı etiketleyin, bir mesaja yanıt verin veya telefon numarasını yazın.\n\n┊ 『 💡 』 Örnek: @3934xxxxxxx",
banuserInvalidNumber: () => "❌ Geçersiz telefon numarası.",
banuserSuccess: ({ target }) => `꒷꒦ ✦ Kullanıcı Yasaklandı ✦ ꒷꒦\n\n┊ 『 🚫 』 Kullanıcı: @${target}\n┊ 『 ⚠️ 』 Bu kullanıcı bot tarafından yasaklandı\n┊ 『 📵 』 Artık komutları kullanamayacak\n\n╰★────★────★`,
unbanuserNoTarget: () => "⚠️ Bir kullanıcıyı etiketleyin, bir mesaja yanıt verin veya telefon numarasını yazın.\n\n┊ 『 💡 』 Örnek: @3934xxxxxxx",
unbanuserInvalidNumber: () => "❌ Geçersiz telefon numarası.",
unbanuserSuccess: ({ target }) => `꒷꒦ ✦ Kullanıcının Yasağı Kaldırıldı ✦ ꒷꒦\n\n┊ 『 ✅ 』 Kullanıcı: @${target}\n┊ 『 🎉 』 Bu kullanıcının yasağı kaldırıldı\n┊ 『 📱 』 Artık bot komutlarını kullanabilir\n\n╰★────★────★`,
listanumNoPrefix: () => "⚠️ Aranacak telefon önekini girin.\n\n┊ 『 💡 』 Örnek: .listanum 39",
listanumInvalidPrefix: () => "❌ Önek geçerli bir numara olmalıdır.",
listanumTitle: ({ prefix }) => `꒷꒦ ✦ +${prefix} Numaralar Listesi ✦ ꒷꒦`,
listanumNoUsers: ({ prefix }) => `꒷꒦ ✦ Kullanıcı Yok ✦ ꒷꒦\n\n┊ 『 ℹ️ 』 +${prefix} önekli kullanıcı bulunamadı\n\n╰★────★────★`,
puliziaStart: ({ prefix }) => `꒷꒦ ✦ Temizlik Başlatıldı ✦ ꒷꒦\n\n┊ 『 🔄 』 +${prefix} önekli kullanıcılar kaldırılıyor\n┊ 『 ⏳ 』 Tamamlanmasını bekleyin...\n\n╰★────★────★`,
puliziaNoBotAdmin: () => "❌ Bot kullanıcıları kaldırmak için yönetici olmalıdır.",
puliziaNoRestrict: () => "❌ Kısıtlı mod etkin değil.",
puliziaUserLeft: ({ user }) => `@${user} kaldırıldı`,
getNoInput: () => "⚠️ Komut yanlış kullanıldı.\n\n╰★─ Tekli Örnekler ─★╮\n┊ getplugin menu-gruppo script\n┊ getfile config.js file\n\n╰★─ Çoklu Örnekler ─★╮\n┊ getplugin admin & menu & config\n┊ getplugin admin & menu & config script\n┊ getplugin admin script & menu file\n┊ (maksimum 3 plugin aynı anda)\n\n╰♡꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷",
getNoPluginFound: () => "❌ Çoklu istekte geçerli plugin bulunamadı.",
getMultiSelect: ({ pluginList }) => `꒷꒦ ✦ Seçilen Pluginler ✦ ꒷꒦\n\n${pluginList}\n\n┊ 『 ❓ 』Tüm pluginleri nasıl almak istiyorsunuz?\n\n╰★────★────★`,
getMultiScriptBtn: () => "📄 Tümü Script",
getMultiFileBtn: () => "📎 Tümü Dosya",
getMultiResult: ({ successCount, total, results }) => `꒷꒦ ✦ Çoklu İstek ✦ ꒷꒦\n\n┊ 『 📦 』 ${successCount}/${total} plugin bulundu\n\n${results}\n\n╰★────★────★`,
getFileSelect: ({ filename }) => `꒷꒦ ✦ Seçilen Dosya ✦ ꒷꒦\n\n┊ 『 📁 』 ${filename}\n\n┊ 『 ❓ 』 Ne yapmak istiyorsunuz?\n\n╰★────★────★`,
getScriptBtn: () => "📄 Script",
getFileBtn: () => "📎 Dosya",
getNoSimilar: ({ type, name }) => `❌ "${name}" benzer ${type} bulunamadı.`,
getFoundConfirm: ({ filename, score }) => `꒷꒦ ✦ Bulundu ✦ ꒷꒦\n\n┊ 『 ✨ 』 "${filename}"\n┊ 『 📊 』 Doğruluk: ${score}%\n\n┊ 『 ❓ 』 Onaylıyor musunuz?\n\n╰♡꒷ ๑ Yanıt: evet/hayır`,
getMultiChoice: ({ name, options }) => `꒷꒦ ✦ "${name}" için Sonuçlar ✦ ꒷꒦\n\n${options}\n\n┊ 『 📝 』 Numara seçin veya iptal için "hayır" yazın\n\n╰★────★────★`,
getDirNotFound: ({ dir }) => `❌ ${dir} dizini bulunamadı.`,
getFileSuccess: ({ prefix, filename, type }) => `${prefix}꒷꒦ ✦ Başarı ✦ ꒷꒦\n\n┊ 『 ✅ 』 İşte ${type}: ${filename}\n\n╰★────★────★`,
getScriptSuccess: ({ prefix, filename, content }) => `${prefix}꒷꒦ ✦ ${filename} Kodu ✦ ꒷꒦\n\n${content}\n\n╰★────★────★`,
getInvalidOption: () => "❌ Geçersiz seçenek! \"dosya\" veya \"script\" kullanın.",
getScriptOnlyJS: () => "❌ Script seçeneği sadece JavaScript dosyaları için mevcut.",
getSyntaxError: ({ prefix, filename, error }) => `${prefix}꒷꒦ ✦ Sözdizimi Hatası ✦ ꒷꒦\n\n┊ 『 ⛔️ 』 Dosya: ${filename}\n\n${error}\n\n╰★────★────★`,
getFileError: ({ prefix, filename, error }) => `${prefix}❌ Hata: ${filename} dosyası mevcut değil veya okunamıyor.\n\n${error}`,
getProcessError: ({ filename, error }) => `❌ ${filename} işlenirken hata: ${error}`,
getOperationCancelled: () => "꒷꒦ ✦ İşlem İptal Edildi ✦ ꒷꒦\n\n┊ 『 ❌ 』 İstek başarıyla iptal edildi\n\n╰★────★────★",
getGenericError: ({ error }) => `❌ 𝐇𝐚𝐭𝐚: ${error}`,
leaveNotAdmin: () => "⚠️ Bu komut sadece grup yöneticileri ve sahipleri tarafından kullanılabilir.",
leaveMessage: () => "꒷꒦ ✦ Güle Güle ✦ ꒷꒦\n\n┊ 『 👋 』 Bot gruptan ayrılıyor\n\n╰★────★────★",
leaveError: () => "❌ Gruptan çıkılırken bir hata oluştu.",
saveNoName: () => "⚠️ Kaydedilecek plugin adını belirtin.",
saveNoQuoted: () => "⚠️ Plugin kodunu içeren mesaja yanıt vermeniz gerekiyor.",
saveSaveSuccess: ({ path }) => `꒷꒦ ✦ Plugin Kaydedildi ✦ ꒷꒦\n\n┊ 『 ✅ 』 Dosya başarıyla oluşturuldu\n┊ 『 📁 』 Yol: ${path}\n\n╰★────★────★`,
saveErrorWrite: ({ error }) => `❌ Plugin kaydedilirken hata.\n\n${error}`,
deleteNoPlugins: () => "⚠️ Silinecek plugin mevcut değil.",
deleteHelp: ({ usedPrefix, pluginList, total }) => `꒷꒦ ✦ Delete Plugin Manager ✦ ꒷꒦\n\n┊ 『 📌 』 Komut kullanımı:\n┊ ${usedPrefix}deleteplugin <ad>\n\n┊ 『 ✨ 』 Örnek:\n┊ ${usedPrefix}deleteplugin menu-official\n\n┊ 『 📋 』 Mevcut pluginler:\n${pluginList}${total > 15 ? `\n┊ ... ve diğer ${total - 15} plugin` : ''}\n\n╰★────★────★`,
deleteInvalidNumber: ({ max }) => `❌ Geçersiz numara! Aralık: 1-${max}`,
deleteNoSimilar: ({ input }) => `❌ "${input}" benzer plugin bulunamadı.`,
deleteConfirm: ({ filename, score }) => `꒷꒦ ✦ Plugin Bulundu ✦ ꒷꒦\n\n┊ 『 ✨ 』 "${filename}"\n┊ 『 📊 』 Eşleşme: ${score}%\n\n┊ 『 🗑️ 』 Silmek istiyor musunuz?\n\n╰♡꒷ ๑ Yanıt: evet/hayır`,
deleteMultiChoice: ({ input, options }) => `꒷꒦ ✦ "${input}" için Sonuçlar ✦ ꒷꒦\n\n${options}\n\n┊ 『 📝 』 Numara seçin veya iptal için "hayır" yazın\n\n╰★────★────★`,
deleteNotFound: ({ path }) => `꒷꒦ ✦ Dikkat ✦ ꒷꒦\n\n┊ 『 📁 』 Dosya sisteminde dosya bulunamadı\n\n┊ 『 🔍 』 Aranan yol:\n┊ ${path}\n\n╰★────★────★`,
deleteSuccess: ({ pluginName, sender, time }) => `꒷꒦ ✦ Plugin Silindi ✦ ꒷꒦\n\n┊ 『 🗑️ 』 Plugin başarıyla silindi\n\n┊ 『 📝 』 Ad: ${pluginName}.js\n┊ 『 👤 』 Silen: @${sender}\n┊ 『 🕐 』 Saat: ${time}\n\n┊ 『 ⚠️ 』 Not: Bot değişiklikleri uygulamak için\n┊ yeniden başlatma gerektirebilir\n\n╰★────★────★\n\n🎯 İşlem tamamlandı!`,
deleteError: ({ error }) => `꒷꒦ ✦ Sistem Hatası ✦ ꒷꒦\n\n┊ 『 ❌ 』 Plugin silinemiyor\n\n┊ 『 🔍 』 Hata detayları:\n┊ ${error}\n\n┊ 『 💡 』 Olası çözümler:\n┊ -  Dosya izinlerini kontrol edin\n┊ -  Plugin kullanımda değil mi kontrol edin\n┊ -  Birkaç saniye sonra tekrar deneyin\n\n╰★────★────★`,
deleteOperationCancelled: () => "꒷꒦ ✦ İşlem İptal Edildi ✦ ꒷꒦\n\n┊ 『 ❌ 』 Silme iptal edildi\n\n╰★────★────★",
deleteGenericError: ({ error }) => `❌ Hata: ${error}`,
broadcastNoOwner: () => "❌ Sadece sahip bu komutu kullanabilir!",
broadcastNoGroups: () => "❌ Bot hiçbir grupta değil!",
broadcastHeader: () => "꒷꒦ ✦ ChatUnity'den Mesaj ✦ ꒷꒦",
broadcastIntro: () => "┊ 『 👑 』 Sevgili grup üyeleri, sahipten yeni bir mesaj geldi:",
broadcastLabel: () => "┊ 『 📝 』 Mesaj:",
broadcastNote: () => "┊ 『 ⚠️ 』 Bu mesaj tüm grup üyelerine gönderildi",
broadcastFooter: () => "╰★────★────★\n\n> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ChatUnity",
broadcastSuccess: ({ count }) => `꒷꒦ ✦ Yayın Tamamlandı ✦ ꒷꒦\n\n┊ 『 ✅ 』 Mesaj başarıyla gönderildi\n┊ 『 📊 』 Ulaşılan gruplar: ${count}\n┊ 『 👥 』 Tüm üyeler etiketlendi\n\n╰★────★────★`,
broadcastDefaultMessage: () => "Bu tüm gruplara gönderilen varsayılan bir mesajdır.",
broadcastError: ({ group, error }) => `❌ ${group} grubuna mesaj gönderilirken hata: ${error}`,
banChatSuccess: () => "꒷꒦ ✦ Sohbet Yasaklandı ✦ ꒷꒦\n\n┊ 『 🚫 』 Sohbet başarıyla yasaklandı\n┊ 『 ⚠️ 』 Bot artık bu sohbette yanıt vermeyecek\n\n╰★────★────★",
unbanChatSuccess: () => "꒷꒦ ✦ Sohbet Yasağı Kaldırıldı ✦ ꒷꒦\n\n┊ 『 ✅ 』 Sohbet yasağı başarıyla kaldırıldı\n┊ 『 🎉 』 Bot artık bu sohbette yanıt verebilir\n\n╰★────★────★",
restartInitiating: () => "꒷꒦ ✦ Yeniden Başlatılıyor ✦ ꒷꒦\n\n┊ 『 ⏳ 』 Lütfen bekleyin...\n\n╰★────★────★",
restartProgress: () => "🚀🚀🚀🚀🚀🚀",
restartSuccess: () => "꒷꒦ ✦ Yeniden Başlatma Tamamlandı ✦ ꒷꒦\n\n┊ 『 ✅ 』 Bot başarıyla yeniden başlatıldı\n┊ 『 🎉 』 İşletim sistemi\n\n╰★────★────★",
restartError: ({ error }) => `꒷꒦ ✦ Yeniden Başlatma Hatası ✦ ꒷꒦\n\n┊ 『 ❌ 』 Bot yeniden başlatılamıyor\n┊ 『 🔍 』 Hata: ${error}\n\n╰★────★────★`,
shutdownInitiating: () => "꒷꒦ ✦ Bot Kapatılıyor ✦ ꒷꒦\n\n┊ 『 🔌 』 Bot'u kapatıyorum...\n┊ 『 🚫 』 Tüm sohbetler yasaklandı\n┊ 『 ⏳ 』 Kapanmayı bekleyin\n\n╰★────★────★",
shutdownSuccess: () => "꒷꒦ ✦ Bot Kapandı ✦ ꒷꒦\n\n┊ 『 ✅ 』 Kapatma tamamlandı\n┊ 『 💤 』 Bot çevrimdışı\n\n╰★────★────★",
shutdownChatsBanned: ({ count }) => `┊ 『 📊 』 ${count} sohbet yasaklandı`,
shutdownError: ({ error }) => `꒷꒦ ✦ Kapatma Hatası ✦ ꒷꒦\n\n┊ 『 ❌ 』 Bot kapatılamıyor\n┊ 『 🔍 』 Hata: ${error}\n\n╰★────★────★`,
updateInitiating: () => "꒷꒦ ✦ Bot Güncelleniyor ✦ ꒷꒦\n\n┊ 『 🔄 』 Güncellemeler kontrol ediliyor...\n┊ 『 ⏳ 』 Lütfen bekleyin\n\n╰★────★────★",
updateSuccess: ({ output }) => `꒷꒦ ✦ Güncelleme Tamamlandı ✦ ꒷꒦\n\n┊ 『 ✅ 』 Bot başarıyla güncellendi\n\n┊ 『 📋 』 Detaylar:\n${output}\n\n╰★────★────★`,
updateError: ({ error }) => `꒷꒦ ✦ Güncelleme Hatası ✦ ꒷꒦\n\n┊ 『 ❌ 』 Bot güncellenemiyor\n┊ 『 🔍 』 Hata: ${error}\n\n┊ 『 💡 』 Olası çözümler:\n┊ -  İnternet bağlantısını kontrol edin\n┊ -  Git izinlerini kontrol edin\n┊ -  Geçerli bir branch'te olduğunuzdan emin olun\n\n╰★────★────★`,
updateNoChanges: () => "꒷꒦ ✦ Zaten Güncel ✦ ꒷꒦\n\n┊ 『 ℹ️ 』 Bot zaten en son sürümde\n┊ 『 ✅ 』 Mevcut güncelleme yok\n\n╰★────★────★",
groupMenuTitle: () => "𝑮𝑹𝑼𝑩 𝑴𝑬𝑵𝑼𝑺𝑼̈",
chooseMenu: () => "Menüden bir kategori seçin:",
mainMenuButton: () => "🏠 Ana Menü",
adminMenuButton: () => "🛡️ Yönetici Menüsü",
ownerMenuButton: () => "👑 Sahip Menüsü",
securityMenuButton: () => "🚨 Güvenlik Menüsü",
aiMenuButton: () => "🤖 AI Menüsü",
musicAudioSection: () => "MÜZİK & SES",
infoUtilitySection: () => "BİLGİ & YARDIMCI ARAÇLAR",
imageEditSection: () => "GÖRSELLER & DÜZENLEME",
pokemonSection: () => "POKEMON",
gamesCasinoSection: () => "OYUNLAR & KUMAR",
economyRankingSection: () => "EKONOMİ & SIRALAMA",
socialInteractionSection: () => "SOSYAL ETKİLEŞİMLER",
howMuchSection: () => "NE KADAR?",
personalityTestSection: () => "KİŞİLİK TESTİ",
memberCommands: () => "𝑼̈𝑌𝑬𝑳𝑬𝑹 𝑰̇𝑪̇𝑰̇𝑵 𝑲𝑶𝑴𝑼𝑻𝑳𝑨𝑹",
versionLabel: () => "𝑺𝑼𝑹𝑼𝑴",
collabLabel: () => "𝑰̇𝑺̇𝑩𝑰̇𝑹𝑳𝑰̇𝑲̇",
songCommand: () => "şarkı",
audioCommand: () => "ses",
videoCommand: () => "video",
cityCommand: () => "şehir",
textCommand: () => "metin",
groupCommand: () => "grup",
userCommand: () => "kullanıcı",
checkSiteCommand: () => "site kontrol",
photoToStickerCommand: () => "fotodan çıkartma",
stickerToPhotoCommand: () => "çıkartmadan foto",
improveQualityCommand: () => "foto kalitesini iyileştir",
photoCommand: () => "foto",
hiddenPhotoCommand: () => "gizli foto",
memeCommand: () => "meme",
fromStickerCommand: () => "çıkartmadan",
blurImageCommand: () => "görseli bulanıklaştır",
comingSoonCommand: () => "yakında",
quantityCommand: () => "miktar",
headsOrTailsCommand: () => "yazı tura",
mathProblemCommand: () => "matematik problemi",
rockPaperScissorsCommand: () => "taş kağıt makas",
pokemonInfoCommand: () => "Pokémon bilgisi",
balanceCommand: () => "bakiye",
topUsersCommand: () => "top kullanıcılar",
withdrawUCCommand: () => "bankadan UC",
earnXPCommand: () => "XP kazan",
endRelationshipCommand: () => "ilişkiyi bitir",
affinityCommand: () => "yakınlık",
charmCommand: () => "çekicilik",
createFightCommand: () => "kavga oluştur",
truthOrDareCommand: () => "doğruluk mu cesaret mi",
playNoText: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n ❗ Bir başlık veya bağlantı girin\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
playNoResults: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n ❗ Sonuç bulunamadı\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
playAudioLoading: () => "┊ ┊ ┊ ┊‿ ˚➶ ｡˚\n┊ ┊ ┊ ┊. ➶ ˚\n┊ ┊ ┊ ˚✧ 🎵 Ses geliyor\n┊ ˚➶ ｡˚ ☁︎ Birkaç saniye bekleyin...",
playVideoLoading: () => "┊ ┊ ┊ ┊‿ ˚➶ ｡˚\n┊ ┊ ┊ ┊. ➶ ˚\n┊ ┊ ┊ ˚✧ 🎬 Video geliyor\n┊ ˚➶ ｡˚ ☁︎ Birkaç saniye bekleyin...",
playDownloadComplete: () => "✅ İndirme tamamlandı!",
playTooLong: ({ maxMinutes, duration }) => `╭★────★────★\n|ㅤㅤㅤㅤㅤㅤㅤ꒰¡VİDEO ÇOK UZUN!꒱\n|˚₊꒷ ⏳ ꒱ ฅ﹕Maksimum: ${maxMinutes} dakika ₊˚๑\n|˚₊꒷ ⌛ ꒱ ฅ﹕Süre: ${duration} ₊˚๑\n╰★────★────★`,
playVideoInfo: ({ title, timestamp, views, author, ago, url }) => `⋆ ︵ ★ 🎥 VİDEO BİLGİSİ 🎥 ★ ︵ ⋆\n\n\n꒷꒦ ✦ ୧・︶ : ︶ ꒷꒦ ‧₊ ୧\n୧ ✍️ *Başlık:* ${title}\n୧ ⏳ *Süre:* ${timestamp}\n୧ 👀 *Görüntülenme:* ${views}\n୧ 🔰 *Kanal:* ${author}\n୧ 🔳 *Yayınlanma:* ${ago}\n୧ 🔗 *Bağlantı:* ${url}\n꒷꒦ ✦ ୧・︶ : ︶ ꒷꒦ ‧₊ ୧\n\n\n╰♡꒷ ๑ ⋆˚₊⋆───ʚ˚ɞ───⋆˚₊⋆ ๑ ⪩\n  > İndirmek için bir format seçin\n╰♡꒷ ๑ ⋆˚₊⋆───ʚ˚ɞ───⋆˚₊⋆ ๑ ⪩`,
playChooseFormat: () => "Bir format seçin:",
playAudioButton: () => "🎵 Ses",
playVideoButton: () => "🎬 Video",
playSaveButton: () => "💾 Çalma Listesini Kaydet",
playError: ({ error }) => `꒰🩸꒱ ◦- ≫ HATA\n ★・・・・・・・★\n  ${error}\n ★・・・・・・・★`,
playNoValidLink: () => "꒰🩸꒱ ◦- ≫ HATA\n ★・・・・・・・★\n  Geçerli bağlantı bulunamadı\n ★・・・・・・・★",
playlistEmpty: ({ userName }) => `ℹ️ ${userName ? `${userName} kayıtlı şarkıya sahip değil` : 'Çalma listeniz boş!'}`,
playlistHeader: ({ userName }) => `📋 ${userName ? `${userName} Çalma Listesi` : 'Çalma Listeniz'}`,
playlistMore: ({ count }) => `...ve diğer ${count} şarkı`,
playlistSelectToPlay: () => "Çalmak için bir şarkı seçin",
saveNoText: () => "⚠️ Aranacak bir şarkı belirtin",
saveSearching: ({ query }) => `⌛ "${query}" aranıyor...`,
saveNoResults: () => "⚠️ Sonuç bulunamadı",
saveAlreadyExists: () => "⚠️ Şarkı zaten çalma listesinde! Kayıtlı şarkıları görmek için .playlist kullanın.",
saveSaved: () => "✅ Şarkı kaydedildi!",
saveViewPlaylist: () => "📋 Çalma Listesini Gör",
savePlay: () => "🎵 Çal",
saveDelete: () => "🗑️ Sil",
saveSaveNew: () => "💾 Yeni Kaydet",
deleteSelect: () => "🗑️ Silinecek şarkıyı seçin",
deleteUse: () => "Kullanım: .sil <numara>",
deleteInvalid: () => "⚠️ Geçersiz numara!",
deleteSuccess: () => "✅ Şarkı silindi!",
deleteRestore: () => "💾 Geri Yükle",
backButton: () => "🔙 Geri",
playlistError: ({ error }) => `⚠️ Hata: ${error}`,
playlistSignature: () => "꙰ 𝗚𝗮𝗯𝟯𝟯𝟯 𝗧𝗮𝗿𝗮𝗳ı𝗻𝗱𝗮𝗻 𝗢𝗹𝘂ş𝘁𝘂𝗿𝘂𝗹𝗱𝘂 ꙰",
ytSearchMissingFiles: () => "❗ Bu komutu kullanmak için ChatUnity tabanını kullanın",
ytSearchMissingQuery: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n 📌 Video adını girin\n Örnek: .ytsearch derleme\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
ytSearchNoResults: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n ❌ Sonuç bulunamadı\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
ytSearchTitle: () => "🔎 YouTube Arama",
ytSearchFooter: () => "ChatUnity ✦ İndirici",
ytSearchResultTitle: () => "🎬 YouTube Sonuçları",
ytSearchResultHeader: () => "╭┈ ─ ─ ✦ ─ ─ ┈╮\n ୧ 🎬 ୭ Arama sonuçları\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Bulunan sonuçlar ✦ ꒷꒦",
ytSearchSelectPrompt: () => "╭★────★────★╮\n│ 🔢 Yukarıdaki sonuçlardan\n│ bir video seçin\n╰★────★────★╯",
ytSearchDuration: () => "📺 Süre:",
ytSearchViews: () => "👁 Görüntülenme:",
ytSearchChannel: () => "👤 Kanal:",
toAudioNoMedia: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ⚠️ Bir video veya sese yanıt verin\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
toAudioDownloadError: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ❌ İndirme sırasında hata\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
toAudioConvertError: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ❌ Dönüştürme sırasında hata\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",


weatherNoCity: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ❗ Bir şehir adı girin\n  Kullanım: .meteo [şehir adı]\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
weatherInfo: ({ name, country, temp, feels, min, max, humidity, main, desc, wind, pressure }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🌍 ୭ *${name}, ${country} Hava Durumu*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Hava durumu bilgileri ✦ ꒷꒦\n\n🌡 Sıcaklık: ${temp}°C\n🌡 Hissedilen: ${feels}°C\n🌡 Minimum: ${min}°C\n🌡 Maksimum: ${max}°C\n💧 Nem: ${humidity}%\n☁ Hava: ${main}\n🌫 Açıklama: ${desc}\n💨 Rüzgar: ${wind} m/s\n🔽 Basınç: ${pressure} hPa\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 🌤️\n│ Powered by OpenWeather\n╰★────★────★╯`,
weatherCityNotFound: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  🚫 Şehir bulunamadı\n  Yazımı kontrol edin\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
weatherError: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ⚠️ Bilgi alınırken hata\n  Lütfen daha sonra tekrar deneyin\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
translateHelp: ({ prefix, command, languages }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🌍 ୭ *ÇEVİRİCİ*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Kullanım örnekleri ✦ ꒷꒦\n\n│ ${prefix}${command} Merhaba\n│ ${prefix}${command} en Merhaba\n│ ${prefix}${command} ja Hello\n│ ${prefix}${command} [mesaja yanıt ver]\n│ ${prefix}konuş ar metin\n\n꒷꒦ ✦ Mevcut diller ✦ ꒷꒦\n\n${languages}\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 🌐\n│ ChatUnity Çevirici\n╰★────★────★╯`,
translateNoText: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ❌ Ses için metin eksik\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
translateNoLang: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ❌ Dil belirtilmedi\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
translateWhatToTranslate: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ❌ Ne çevireyim?\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
translateTooLong: ({ max, length }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ❌ Metin çok uzun\n  Maksimum: ${max} karakter\n  Sizin: ${length} karakter\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
translateResult: ({ fromLang, toLang, translation }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🌍 ୭ *ÇEVİRİCİ*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Kaynak: ${fromLang} ✦ ꒷꒦\n꒷꒦ ✦ Hedef: ${toLang} ✦ ꒷꒦\n\n${translation}\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 🎯\n│ Çeviri tamamlandı\n╰★────★────★╯`,
translateListenOriginal: () => "🔊 Orijinali Dinle",
translateListenTranslation: () => "🎵 Çeviriyi Dinle",
translateFooter: () => "ChatUnity Çevirici",
translateTTSError: ({ error }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ❌ Ses hatası: ${error}\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
translateError: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ❌ Çeviri sırasında hata\n  Lütfen daha sonra tekrar deneyin\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
antiLinkNotAdmin: () => "╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ ⚠️ ୭ *Şimdilik kurtuldun*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Yönetici değilim ✦ ꒷꒦\n\nHiçbir şey yapamam",
antiLinkDetected: ({ user, qrDetected }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🚫 ୭ *ANTİ-LİNK AKTİF*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Kuralları ihlal ettin ✦ ꒷꒦\n\n${user} 🤨 Grup kurallarını ihlal ettin${qrDetected ? ', QR kodlarını görmüyorum sanıyorsun? 😂' : '.'}\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 👮\n│ Otomatik olarak atıldı\n╰★────★────★╯`,
antiLinkRestrictOff: () => "╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ ⚠️ ୭ *Kısıtlama Devre Dışı*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Gerekli eylem ✦ ꒷꒦\n\nRESTRICT'i etkinleştirmek için bot sahibiyle iletişime geçin\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 🔧\n│ İşlev mevcut değil\n╰★────★────★╯",
antiMediaWarning: () => "╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ ⚠️ ୭ *ANTİMEDYA AKTİF*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Kuralları ihlal ettin ✦ ꒷꒦\n\nSadece 1 görüntülemeli fotoğraf ve videolara izin verilir\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 🚫\n│ Medya silindi\n╰★────★────★╯",
antiSpamDetected: () => "╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🚫 ୭ *ANTİSPAM TESPİT EDİLDİ*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Spam tespit edildi ✦ ꒷꒦\n\nKullanıcı spam davranışı nedeniyle kaldırıldı\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ ⚡\n│ ChatUnity x 333 Koruması\n╰★────★────★╯",
antiTrabaAdminWarning: ({ user }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ ⚠️ ୭ *YÖNETİCİ DİKKAT*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Trava tespit edildi ✦ ꒷꒦\n\nHEY @${user} buraya trava göndermekten zevk mi alıyorsun? Ne şanslısın ki yöneticisin! -.-\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 🛡️\n│ Statü tarafından korundu\n╰★────★────★╯`,
antiTrabaDetected: ({ user }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🚫 ୭ *ANTİ-TRAVA AKTİF*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Uzun mesaj tespit edildi ✦ ꒷꒦\n\n@${user} kullanıcısı çok uzun bir mesaj gönderdi ve kaldırılacak\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 🚨\n│ ChatUnity Koruması\n╰★────★────★╯`,
antiTrabaNoPermission: () => "╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ ⚠️ ୭ *Eksik İzinler*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Eylem engellendi ✦ ꒷꒦\n\nTrava gönderenleri kaldırmak için yönetici izinlerim yok\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 🔒\n│ Yönetici izinleri isteyin\n╰★────★────★╯",
infoSetAge: () => "╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🗓️ ୭ *Yaş Ayarla*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Nasıl ilerlenir ✦ ꒷꒦\n\nYaşınızı ayarlamak için:\n.setyaş <yaş>\n\nYaşınızı kaldırmak için:\n.silyaş\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 📝\n│ Profil yönetimi\n╰★────★────★╯",
infoSetIG: () => "╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🌐 ୭ *Instagram Ayarla*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Nasıl ilerlenir ✦ ꒷꒦\n\nInstagram ayarlamak için:\n.setig <kullanıcıadı>\n\nKaldırmak için:\n.silig\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 📱\n│ Sosyal medya yönetimi\n╰★────★────★╯",
infoGroupOnly: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Sadece gruplar için komut\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
infoUserData: ({ messages, warn, role, age, gender, blasphemy, instagram }) => `⋆ ︵ ★ 𝐊𝐔𝐋𝐋𝐀𝐍𝐈𝐂𝐈 𝐁𝐈̇𝐋𝐆𝐈̇𝐒𝐈̇ ★ ︵ ⋆\n\n\n꒷꒦ ✦ ୧・︶ : ︶ ꒷꒦ ‧₊ ୧\n୧ 📝 *Mesajlar:* ${messages}\n୧ ⚠️ *Uyarı:* ${warn} / 4\n୧ 🟣 *Rol:* ${role}\n୧ 🗓️ *Yaş:* ${age}\n୧ 🚻 *Cinsiyet:* ${gender}\n୧ 🤬 *Küfür:* ${blasphemy}\n${instagram ? `୧ 🌐 instagram.com/${instagram}` : '୧ 🌐 *Instagram:* Ayarlanmadı'}\n꒷꒦ ✦ ୧・︶ : ︶ ꒷꒦ ‧₊ ୧`,
infoSetAgeButton: () => "🗓️ Yaş Ayarla",
infoSetGenderMaleButton: () => "🚹 Erkek Cinsiyet",
infoSetGenderFemaleButton: () => "🚺 Kadın Cinsiyet",
infoSetIGButton: () => "🌐 IG Ayarla",
infoFooter: () => "Kişisel verilerinizi ayarlayın:",
infoCreator: () => "𝒐𝒏𝒊𝒙🌟 𝒕𝒂𝒓𝒂𝒇ı𝒏𝒅𝒂𝒏 𝒐𝒍𝒖ş𝒕𝒖𝒓𝒖𝒍𝒅𝒖",
infoRoleFounder: () => "𝐊𝐮𝐫𝐮𝐜𝐮 ⚜️",
infoRoleAdmin: () => "𝐘𝐨̈𝐧𝐞𝐭𝐢𝐜𝐢 👑",
infoRoleMember: () => "𝐔̈𝐲𝐞 🤍",
infoGenderNotSet: () => "𝐀𝐲𝐚𝐫𝐥𝐚𝐧𝐦𝐚𝐝ı",
infoAgeNotSet: () => "Ayarlanmadı",
infoAgeYears: ({ age }) => `${age} yaş`,
setGenderUsage: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ Komutun doğru kullanımı\n  ━━✫ .setcinsiyet erkek\n  ━━✫ .setcinsiyet kadın\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
setGenderSuccess: ({ gender, emoji }) => `✓ Cinsiyet şu şekilde ayarlandı: ${gender} ${emoji}`,
deleteGenderSuccess: () => "✓ Cinsiyet kaldırıldı",
setAgeUsage: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ Geçerli bir yaş girin\n  ━━✫ 10 ila 80 yaş arası\n  ━━✫ Kullanım: .setyaş <yaş>\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
setAgeSuccess: ({ age }) => `✓ Yaş şu şekilde ayarlandı: ${age} yaş`,
deleteAgeSuccess: () => "✓ Yaş kaldırıldı",
rulesNotSet: ({ prefix }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⓘ Hiçbir kural ayarlanmadı\n  ━━✫ Yöneticiler henüz kuralları\n  ━━✫ ayarlamadı\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n\n📌 Kuralları ayarlamak için:\n${prefix}setkurallar <kural metni>`,
rulesTitle: () => "📜 𝐆𝐫𝐮𝐛 𝐊𝐮𝐫𝐚𝐥𝐥𝐚𝐫ı",
rulesDisplay: ({ rules }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 📜 ୭ *Grup Kuralları*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n${rules}\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ ⚖️\n│ Kurallara saygı gösterin\n╰★────★────★╯`,
dashboardTitle: () => "⚡ 𝐈̇𝐋𝐊 10 𝐊𝐎𝐌𝐔𝐓 ⚡",
dashboardCommand: () => "📚 KOMUT",
dashboardUses: () => "🗂️ KULLANIM",
dashboardLastUse: () => "⏱️ SON KULLANIM",
dashboardNeverUsed: () => "Hiç kullanılmadı",
dashboardDaysAgo: ({ days }) => `${days} gün önce`,
dashboardHoursAgo: ({ hours }) => `${hours} saat önce`,
dashboardMinutesAgo: ({ minutes }) => `${minutes} dakika önce`,
dashboardSecondsAgo: () => "birkaç saniye önce",
dashboardStats: ({ stats }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ ⚡ ୭ *İLK 10 KOMUT*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n${stats}\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 📊\n│ Bot istatistikleri\n╰★────★────★╯`,
imageSearchBaseOnly: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ Bu komut sadece\n  ━━✫ ChatUnity tabanı ile kullanılabilir\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
imageSearchUsage: ({ prefix, command }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⓘ Komut kullanımı\n  ━━✫ ${prefix}${command} <anahtar kelime>\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
imageSearchForbidden: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⚠️ İzin verilmeyen içerik\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
imageSearchNoResults: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 😢 Görsel bulunamadı\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
imageSearchResults: ({ term }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🔍 ୭ *Arama sonuçları*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Sorgu: ${term} ✦ ꒷꒦`,
imageSearchImageNum: ({ num }) => `Görsel #${num}`,
imageSearchResultFor: ({ term }) => `Sonuç: ${term}`,
imageSearchFooter: () => "Powered by ChatUnity",
imageSearchOpenImage: () => "Görseli aç",
imageSearchTitle: () => "Görsel sonuçları",
imageSearchSubtitle: () => "Google'da bulunan görseller",
imageSearchAgainPrompt: () => "🔄 Aynı terimle başka resimler aramak ister misiniz?",
imageSearchAgainButton: () => "Yeniden Ara",
obfuscateNoCode: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⚠️ JavaScript kodu girin\n  ━━✫ veya kod içeren bir mesaja\n  ━━✫ yanıt verin\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
obfuscateProcessing: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⏳ Karıştırma devam ediyor...\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
obfuscateSuccess: () => "╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🔒 ୭ *Kod Karıştırıldı*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Karıştırma tamamlandı ✦ ꒷꒦",
obfuscateError: ({ error }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Karıştırma hatası\n  ━━✫ ${error}\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
bonkNoPhoto: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⚠️ Profil fotoğrafı yok\n  ━━✫ Kullanıcı bir profil fotoğrafı\n  ━━✫ ayarlamamış\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
bonkError: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ İşlem sırasında hata\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
hornyCardCaption: () => "╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🔥 ୭ *Azgın Kartı*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Ne kadar azgınsın? 🥵🔥 ✦ ꒷꒦",
stupidCaption: ({ user }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🤡 ୭ *Ne kadar aptalsın?*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ @${user} ✦ ꒷꒦`,
stupidDefaultText: () => "ben+aptalım",
wantedNoProfilePic: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⚠️ Profil fotoğrafı\n  ━━✫ alınamadı\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
wantedNoProfilePicUser: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⚠️ Kullanıcının profil\n  ━━✫ fotoğrafı yok\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
wantedYourProfilePic: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⚠️ Bir profil fotoğrafın yok\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
wantedUnsupportedFormat: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⚠️ Desteklenmeyen format\n  ━━✫ JPEG veya PNG kullan\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
wantedUploadError: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Resim yükleme hatası\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
wantedAPIError: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ API hatası\n  ━━✫ Daha sonra tekrar dene\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
wantedError: ({ error }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Hata: ${error}\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
wantedCaption: () => "╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🚔 ୭ *ARANIYOR*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Aranan ✦ ꒷꒦\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 👮\n│ ChatUnity Tarafından Desteklenmektedir\n╰★────★────★╯",
jokeNoProfilePic: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⚠️ Profil fotoğrafı\n  ━━✫ alınamadı\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
jokeYourProfilePic: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⚠️ Bir profil fotoğrafın yok\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
jokeUnsupportedFormat: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⚠️ Desteklenmeyen format\n  ━━✫ JPEG veya PNG kullan\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
jokeUploadError: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Resim yükleme hatası\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
jokeAPIError: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ API hatası\n  ━━✫ Daha sonra tekrar dene\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
jokeError: ({ error }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Hata: ${error}\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
jokeCaption: () => "╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🤡 ୭ *ŞAKA*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Kafa üstü şaka ✦ ꒷꒦\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 😂\n│ ChatUnity Tarafından Desteklenmektedir\n╰★────★────★╯",
jailNoProfilePic: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⚠️ Profil fotoğrafı\n  ━━✫ alınamadı\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
jailUploadError: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Resim yükleme hatası\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
jailAPIError: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ API hatası\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
jailError: ({ error }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Hata: ${error}\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
jailCaption: () => "╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🚔 ୭ *HAPİSTE*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 👮\n│ ChatUnity Tarafından Desteklenmektedir\n╰★────★────★╯",
nokiaNoProfilePic: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⚠️ Profil fotoğrafı\n  ━━✫ alınamadı\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
nokiaYourProfilePic: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⚠️ Bir profil fotoğrafın yok\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
nokiaUnsupportedFormat: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⚠️ Desteklenmeyen format\n  ━━✫ JPEG veya PNG kullan\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
nokiaUploadError: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Yükleme hatası\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
nokiaAPIError: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ API hatası\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
nokiaError: ({ error }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Hata: ${error}\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
nokiaCaption: () => "╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 📱 ୭ *NOKIA*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 📞\n│ ChatUnity Tarafından Desteklenmektedir\n╰★────★────★╯",
adNoProfilePic: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⚠️ Profil fotoğrafı\n  ━━✫ alınamadı\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
adYourProfilePic: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⚠️ Bir profil fotoğrafın yok\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
adUnsupportedFormat: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⚠️ Desteklenmeyen format\n  ━━✫ JPEG veya PNG kullan\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
adUploadError: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Yükleme hatası\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
adAPIError: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ API hatası\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
adError: ({ error }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Hata: ${error}\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
adCaption: () => "╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 📢 ୭ *REKLAM*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 📺\n│ ChatUnity Tarafından Desteklenmektedir\n╰★────★────★╯",
pokeOpenNoType: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Türü belirtin\n  ━━✫ base, imperium, premium, darkness\n  ━━✫ Örnek: .apripokemon base\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
pokeOpenNoPacks: ({ type }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⛔ ${type.toUpperCase()} paketiniz yok\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
pokeOpenOpening: () => "🎁 Paket açılıyor...",
pokeOpenRevealing: () => "✨ Kartlar açılıyor...",
pokeOpenNoCards: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 😢 Hiç kart bulunamadı\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
pokeOpenResult: ({ type, name, rarity, shiny, cardType, level, remaining }) => `🎉 *${type.toUpperCase()}* paketi açtınız:\n\n✨ *${name}* (${rarity})${shiny ? ' ✨ Parlak' : ''}\n🔰 Tür: ${cardType} | Seviye: ${level}\n\n📦 Kalan paketler: *${remaining}* ${type}`,
pokeBuyUsage: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Doğru kullanım\n  ━━✫ .buypokemon <base|imperium|premium> <miktar>\n  ━━✫ Örnek: .buypokemon base 3\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
pokeBuyNoCoins: ({ cost, balance }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Yetersiz UnityCoins\n  ━━✫ Gerekli: ${cost}\n  ━━✫ Bakiye: ${balance}\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
pokeBuySuccess: ({ quantity, type, total, balance }) => `✅ *${quantity}* adet ${type.toUpperCase()} paketi satın aldınız!\n📦 Toplam: ${total}\n💸 Kalan UnityCoins: ${balance}`,
pokeLeaderboardEmpty: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 😢 Hiç koleksiyoncu bulunamadı\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
pokeLeaderboardTitle: () => "🏆 *İlk 10 Pokémon Koleksiyoncusu*:",
pokeInventoryTitle: () => "📂 PAKETLERİNİZ",
pokeInventoryBase: ({ count }) => `• 📦 Base: ${count}`,
pokeInventoryImperium: ({ count }) => `• 👑 Imperium: ${count}`,
pokeInventoryPremium: ({ count }) => `• 🌌 Premium: ${count}`,
pokeInventoryFooter: () => "🎁 Hemen bir paket açmak için butonları kullanın!",
pokeInventoryOpenBase: () => "📦 Base Aç",
pokeInventoryOpenImperium: () => "👑 Imperium Aç",
pokeInventoryOpenPremium: () => "🌌 Premium Aç",
pokeInventoryBuy: () => "➕ Paket Satın Al",
pokeBattleNoMention: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⚔️ Bir kullanıcıyı etiketleyin\n  ━━✫ Örnek: .combatti @kullanıcı\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
pokeBattleNoPokemon: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 😓 Pokémon'unuz yok\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
pokeBattleOpponentNoPokemon: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 😓 Rakibin Pokémon'u yok\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
pokeBattleResult: ({ user1, user2, poke1, poke2, result }) => `⚔️ *Pokémon Savaşı!*\n\n👤 @${user1} *${poke1.name}* seçti (Lv. ${poke1.level})\n👤 @${user2} *${poke2.name}* seçti (Lv. ${poke2.level})\n\n${result}`,
pokeBattleWinner: ({ user }) => `🏆 @${user} savaşı kazandı!`,
pokeBattleTie: () => "🤝 Berabere! Her iki Pokémon da bitkin.",
pokeEvolveNoName: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 📛 Pokémon adını belirtin\n  ━━✫ Örnek: .evolvi Charmander\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
pokeEvolveNotOwned: ({ name }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ *${name}*'a sahip değilsiniz\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
pokeEvolveNoCoins: ({ balance, cost }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⛔ Yetersiz unitycoin\n  ━━✫ Sizde: ${balance}\n  ━━✫ Gerekli: ${cost}\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
pokeEvolveNoEvolution: ({ name }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⛔ ${name} evrim geçiremez\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
pokeEvolveEvolving: ({ name }) => `✨ *${name}* evrim geçiriyor...`,
pokeEvolveProgress: () => "🔄 Evrim devam ediyor...",
pokeEvolveSuccess: ({ from, to }) => `🎉 *${from}*, *${to}*'a evrildi!`,
pokeEvolveComplete: ({ balance }) => `✅ Evrim tamamlandı!\n💰 Kalan unitycoin: *${balance}*`,
tradeUsage: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 📌 Doğru kullanım\n  ━━✫ .scambia @kullanıcı <senin_no> <onun_no>\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
tradeYourNotExist: ({ num }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ ${num} numaralı Pokémon'unuz\n  ━━✫ mevcut değil\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
tradeTheirNotExist: ({ num, user }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ @${user} kullanıcısının ${num} numaralı\n  ━━✫ Pokémon'u mevcut değil\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
tradeNoRequest: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Bekleyen takas talebi yok\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
tradeUnavailable: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Pokémon'lardan biri\n  ━━✫ artık mevcut değil\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
tradeSuccess: ({ from, to, poke1, poke2 }) => `✅ @${from} ve @${to} arasında takas tamamlandı!\n\n🎁 ${poke1.name} ⇄ ${poke2.name}`,
pityTitle: () => "📊 *Darkness Pity Sistemi*",
pityOpened: ({ count }) => `🔁 Darkness olmadan açılan paketler: *${count}*`,
pityRemaining: ({ remaining }) => `🎯 Garantili sonraki Darkness: *${remaining}* paket sonra`,
pityGuaranteed: () => "✨ Sonraki pakette *garantili* Darkness var!",
inventoryEmpty: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 📦 Envanter boş\n  ━━✫ .apripokemon base kullanın\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
inventoryInvalidPage: ({ max }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Geçersiz sayfa\n  ━━✫ 1 ile ${max} arasında seçim yapın\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
inventoryHeader: ({ user, total, page, totalPages, perPage }) => `╭━━━🗂️ *POKÉMON ENVANTERİ* 🗂️━━━╮\n┃ 👤 *Eğitmen:* @${user}\n┃ 📦 *Toplam:* ${total}\n┃ 📄 *Sayfa:* ${page}/${totalPages}\n┃ 📌 *Sayfa başına:* ${perPage}\n╰━━━━━━━━━━━━━━━━━━━━━━━╯`,
inventoryDarknessButton: () => "🌑 Darkness Pokémon",
inventoryPageButton: ({ num }) => `Sayfa ${num}`,
inventoryFooter: () => "📂 Gezinmek için `.inventario [sayfa]` kullanın veya butonlara tıklayın.",
darknessInfo: () => "🌑 *DARKNESS PAKETLERİ* 🌑\n\n*Darkness* paketleri satın alınamaz, ancak *Premium* paketleri açtığınızda **görünüşte hiçbir yerden** bulunabilirler.\n\n➡️ Her 10 açılan *Premium* paket için, bonus bir *Darkness* paketi elde etme şansınız %50'dir.\n\n🎲 Bir *Darkness* paketi açarak, %10 şansla özel Darkness Pokémon'ları bulabilirsiniz.\n\nDarkness paketlerini açmak için *.apripokemon darkness* kullanın.\n\nİyi şanslar! 🍀",
trisAlreadyPlaying: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❗ Zaten biriyle\n  ━━✫ oynuyorsunuz\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
trisNoRoomName: ({ prefix, command }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❗ Oda için bir isim vermelisiniz\n  ━━✫ Örnek: ${prefix}${command} oda1\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
trisGameStarting: () => "╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🕹️ ୭ *MAÇ BAŞLIYOR*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Bir oyuncu katıldı ✦ ꒷꒦",
trisTurnOf: ({ player }) => `@${player} sırası`,
trisRoomCreated: () => "𝐎𝐃𝐀 𝐎𝐋𝐔𝐒𝐓𝐔𝐑𝐔𝐋𝐃𝐔 ✓",
trisWaiting: ({ room }) => `══════ •⊰✧⊱• ══════\n*𝐎𝐲𝐮𝐧𝐜𝐮𝐥𝐚𝐫 𝐛𝐞𝐤𝐥𝐞𝐧𝐢𝐲𝐨𝐫 ...*\n══════════════\n🕹️ 𝐊𝐚𝐭𝐢𝐥𝐦𝐚𝐤 𝐢𝐜𝐢𝐧\n.gioca ${room}\n yazın\n══════════════\n⛔ 𝐌𝐚𝐜̧𝐭𝐚𝐧 𝐜̧𝐢𝐤𝐦𝐚𝐤 𝐢𝐜̧𝐢𝐧\n.esci yazın\n══════ •⊰✧⊱• ══════`,
slotInvalidBet: ({ prefix, command }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Geçersiz bahis\n  ━━✫ Örnek: ${prefix}${command} 100\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
slotInsufficientUC: ({ bet }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 🚫 Yetersiz UC\n  ━━✫ ${bet} UC gerekiyor\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
slotCooldown: ({ min, sec }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⏳ Tekrar oynamak için\n  ━━✫ ${min}d ${sec}s bekleyin\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
slotWin: ({ uc, xp }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🎉 ୭ *KAZANDINIZ!*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Kazançlar ✦ ꒷꒦\n\n┌──────────────\n│ ➕ *${uc} UC*\n│ ➕ *${xp} XP*\n└──────────────`,
slotLose: ({ uc, xp }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🤡 ୭ *KAYBETTİNİZ!*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Kayıplar ✦ ꒷꒦\n\n┌──────────────\n│ ➖ *${uc} UC*\n│ ➖ *${xp} XP*\n└──────────────`,
slotBalance: ({ uc, xp, current, max, prefix }) => `\n💎 *GÜNCEL BAKİYE*\n\n┌──────────────\n│ 👛 *UC: ${uc}*\n│ ⭐ *XP: ${xp}*\n│ 📊 *İlerleme: ${current}/${max} XP*\n└──────────────\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ ℹ️\n│ Daha fazla XP için ${prefix}menuxp kullanın!\n╰★────★────★╯`,
betUsage: ({ prefix, command }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🎰 ୭ *KUMAR*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Nasıl oynanır ✦ ꒷꒦\n\n*ChatUnity-Bot*'a karşı bahis yapmak için 💶 UnityCoins miktarını girin\n\n📌 Örnek:\n${prefix}${command} 100\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 🎲\n│ Aşağıdan bir miktar seçin!\n╰★────★────★╯`,
betCooldown: ({ time }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 🚩 Zaten bahis yaptınız\n  ━━✫ ⏱ ${time} bekleyin\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
betLose: ({ bot, user, amount, botName, userName }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🎲 ୭ *SONUÇ*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Çekilen numaralar ✦ ꒷꒦\n\n🤖 *${botName}*: ${bot}\n👤 *${userName}*: ${user}\n\n╭★────★────★╮\n│ 😢 KAYBETTİNİZ!\n│ ➖ ${amount} 💶 UC\n╰★────★────★╯`,
betWin: ({ bot, user, amount, botName, userName }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🎲 ୭ *SONUÇ*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Çekilen numaralar ✦ ꒷꒦\n\n🤖 *${botName}*: ${bot}\n👤 *${userName}*: ${user}\n\n╭★────★────★╮\n│ 🎉 KAZANDINIZ!\n│ ➕ ${amount} 💶 UC\n╰★────★────★╯`,
betDraw: ({ bot, user, amount, botName, userName }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🎲 ୭ *SONUÇ*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Çekilen numaralar ✦ ꒷꒦\n\n🤖 *${botName}*: ${bot}\n👤 *${userName}*: ${user}\n\n╭★────★────★╮\n│ 🤝 BERABERE!\n│ ↩️ ${amount} 💶 UC iade edildi\n╰★────★────★╯`,
betInsufficientUC: ({ amount }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 💸 Bahis yapmak için ${amount} 💶 UC'niz yok!\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
rpsAlreadyPlaying: ({ time }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⏱ Zaten oynadınız\n  ━━✫ ${time} bekleyin\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
rpsChooseOption: () => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ ✊ ୭ *TAŞ KAĞIT MAKAS*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Hamlenizi seçin ✦ ꒷꒦\n\n🪨 Taş, Makası yener\n📄 Kağıt, Taşı yener\n✂️ Makas, Kağıdı yener\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 🎲\n│ Seçiminizi yapın!\n╰★────★────★╯`,
rpsInvalidOption: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Geçersiz seçim\n  ━━✫ Seçin: taş/kağıt/makas\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
rpsDraw: ({ player, bot, reward }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🤝 ୭ *BERABERE!*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Sonuç ✦ ꒷꒦\n\n👤 Siz: ${player}\n🤖 Bot: ${bot}\n\n╭★────★────★╮\n│ 🎁 Teselli ödülü\n│ ➕ ${reward} 💶 UC\n╰★────★────★╯`,
rpsWin: ({ player, bot, reward }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🎉 ୭ *KAZANDINIZ!*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Sonuç ✦ ꒷꒦\n\n👤 Siz: ${player}\n🤖 Bot: ${bot}\n\n╭★────★────★╮\n│ 🏆 Epik zafer!\n│ ➕ ${reward} 💶 UC\n╰★────★────★╯`,
rpsLose: ({ player, bot, loss }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 😢 ୭ *KAYBETTİNİZ!*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Sonuç ✦ ꒷꒦\n\n👤 Siz: ${player}\n🤖 Bot: ${bot}\n\n╭★────★────★╮\n│ 💸 Gelecek sefere daha iyi şanslar\n│ ➖ ${loss} 💶 UC\n╰★────★────★╯`,
rpsRock: () => "🪨 Taş",
rpsPaper: () => "📄 Kağıt",
rpsScissors: () => "✂️ Makas",
rpsButtonRock: () => "🪨 Taş",
rpsButtonPaper: () => "📄 Kağıt",
rpsButtonScissors: () => "✂️ Makas",
rpsButtonRetry: () => "🔄 Tekrar Dene",
bjInsufficientFunds: () => "💰 Yetersiz bakiye!",
bjNotYourTurn: () => "❌ Sıranız değil!",
bjBusted: () => "💥 Battınız! 21'i aştınız!",
bjDealerBusted: () => "🎉 Krupiyer battı! Kazandınız!",
bjYouWin: () => "🎉 Kazandınız!",
bjDealerWins: () => "😔 Krupiyer kazandı!",
bjPush: () => "🤝 Berabere!",
bjMakeBet: () => "💵 Bahsinizi yapın!",
bjYourTurn: () => "📋 Sıranız! Kart iste veya Bekle?",
bjYourScore: ({ score }) => `📋 Puanınız: ${score}`,
bjTimeoutTitle: () => "⏰ SÜRE DOLDU",
bjTimeoutMsg: ({ balance }) => `⏰ Süre doldu! Maç iptal edildi.\n💶 Cüzdan: ${balance} UC`,
bjGameInProgress: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 🎰 Maç zaten devam ediyor\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
bjInvalidBet: ({ max }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Geçersiz bahis\n  ━━✫ Miktar: 10-${max} UC\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
bjStartCaption: ({ name, bet, balance }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🎰 ୭ *BLACKJACK*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ ${name} ✦ ꒷꒦\n\n💶 Bahis: ${bet} UC\n📋 Bakiye: ${balance} UC\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ ⚡\n│ .hit .stand .double\n╰★────★────★╯`,
bjNoGame: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Devam eden maç yok\n  ━━✫ Kullanın: .blackjack [bahis]\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
bjNotYourGame: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Sıranız değil!\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
bjDoubleOnlyTwo: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Sadece 2 kartınız varken double yapabilirsiniz\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
bjDoubleInsufficientFunds: () => "╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Double yapmak için\n  ━━✫ yetersiz bakiye\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱",
bjFooter: () => "♠️ Blackjack Bot ♣️",
bjPlayer: () => "OYUNCU",
bjDealer: () => "KRUPİYER",
bjScore: () => "SKOR",
bjWallet: () => "💶 CÜZDAN",
bjBet: () => "🎯 BAHİS",
rouletteCooldown: ({ time }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 🚩 Zaten bahis yaptınız\n  ━━✫ ⏱ ${time} bekleyin\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
rouletteUsage: ({ prefix, command }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🎰 ୭ *RULE*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Nasıl oynanır ✦ ꒷꒦\n\nMiktar ve rengi girin:\n${prefix}${command} 20 black\n${prefix}${command} 50 red\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 🎲\n│ Renginizi seçin!\n╰★────★────★╯`,
rouletteInvalidFormat: ({ prefix, command }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 🚩 Geçersiz format\n  ━━✫ Örnek: ${prefix}${command} 20 black\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
rouletteInvalidAmount: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 🚩 Geçersiz miktar\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
rouletteMaxBet: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 🚩 Maksimum 50 💶 UC\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
rouletteInvalidColor: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 🚩 Geçersiz renk\n  ━━✫ Seçin: black veya red\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
rouletteInsufficientFunds: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 🚩 Yetersiz 💶 UC\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
rouletteBetPlaced: ({ amount, color }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🎰 ୭ *BAHİS OYNANDI*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Detaylar ✦ ꒷꒦\n\n💰 Miktar: ${amount} 💶 UC\n🎨 Renk: ${color === 'black' ? '⚫ SİYAH' : '🔴 KIRMIZI'}\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ ⏱\n│ 10 saniye bekleyin...\n╰★────★────★╯`,
rouletteWin: ({ amount, total, winColor }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🎉 ୭ *KAZANDINIZ!*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Sonuç ✦ ꒷꒦\n\n🎯 Çıkan renk: ${winColor === 'black' ? '⚫ SİYAH' : '🔴 KIRMIZI'}\n\n╭★────★────★╮\n│ 💰 Kazanç: +${amount} 💶 UC\n│ 💎 Toplam: ${total} 💶 UC\n╰★────★────★╯`,
rouletteLose: ({ amount, total, winColor }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 😢 ୭ *KAYBETTİNİZ!*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Sonuç ✦ ꒷꒦\n\n🎯 Çıkan renk: ${winColor === 'black' ? '⚫ SİYAH' : '🔴 KIRMIZI'}\n\n╭★────★────★╮\n│ 💸 Kayıp: -${amount} 💶 UC\n│ 💎 Toplam: ${total} 💶 UC\n╰★────★────★╯`,
rouletteBlack: () => "⚫ Siyah",
rouletteRed: () => "🔴 Kırmızı",
rouletteButtonBlack10: () => "⚫ 10 UC",
rouletteButtonBlack25: () => "⚫ 25 UC",
rouletteButtonBlack50: () => "⚫ 50 UC",
rouletteButtonRed10: () => "🔴 10 UC",
rouletteButtonRed25: () => "🔴 25 UC",
rouletteButtonRed50: () => "🔴 50 UC",
// Yazı Tura
cfCooldown: ({ time }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⏳ Zaten oynadınız\n  ━━✫ ${time} bekleyin\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
cfWaiting: ({ player }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🪙 ୭ *YAZI TURA*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Maç başladı ✦ ꒷꒦\n\n🧑 Oyuncu 1: @${player}\n🕹️ İkinci oyuncu bekleniyor...\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 🎲\n│ Yazı veya tura yazın!\n╰★────★────★╯`,
cfPlayer1Ready: ({ player, choice }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🪙 ୭ *YAZI TURA*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Oyuncu 1 hazır ✦ ꒷꒦\n\n🧑 @${player} *${choice}* seçti\n🎯 Oyuncu 2 bekleniyor...\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 🎮\n│ Sıra sizde!\n╰★────★────★╯`,
cfInvalidChoice: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⚠️ Geçersiz seçim\n  ━━✫ Yazın: yazı veya tura\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
cfResult: ({ result, p1, p2, msg, prefix, command }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🪙 ୭ *SONUÇ: ${result.toUpperCase()}*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n${msg}\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 🔄\n│ Tekrar oynamak için ${prefix}${command}\n╰★────★────★╯`,
cfAlreadyChosen: ({ choice }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ Zaten ${choice} seçtiniz\n  ━━✫ Başka bir oyuncu bekleyin\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
cfNotAvailable: ({ prefix, command }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Maç mevcut değil\n  ━━✫ Başlatmak için ${prefix}${command}\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
cfButtonHeads: () => "🪙 Yazı",
cfButtonTails: () => "🪙 Tura",

// TKM v2
rps2Cooldown: ({ time }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⏳ ${time} bekleyin\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
rps2Usage: ({ prefix, command }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ ✊ ୭ *TAŞ KAĞIT MAKAS*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Nasıl oynanır ✦ ꒷꒦\n\n${prefix}${command} taş\n${prefix}${command} kağıt\n${prefix}${command} makas\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 🎮\n│ Hamlenizi seçin!\n╰★────★────★╯`,
rps2InvalidChoice: ({ prefix, command }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Geçersiz seçim\n  ━━✫ ${prefix}${command} taş/kağıt/makas\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
rps2Draw: ({ bot, reward }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🤝 ୭ *BERABERE!*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Bot: ${bot} ✦ ꒷꒦\n\n╭★────★────★╮\n│ 🎁 +${reward} 💶 UC\n╰★────★────★╯`,
rps2Win: ({ bot, reward }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🎉 ୭ *KAZANDINIZ!*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Bot: ${bot} ✦ ꒷꒦\n\n╭★────★────★╮\n│ 💰 +${reward} 💶 UC\n╰★────★────★╯`,
rps2Lose: ({ bot, loss }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 😢 ୭ *KAYBETTİNİZ!*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Bot: ${bot} ✦ ꒷꒦\n\n╭★────★────★╮\n│ 💸 -${loss} 💶 UC\n╰★────★────★╯`,
rps2ButtonRock: () => "🪨 Taş",
rps2ButtonPaper: () => "📄 Kağıt",
rps2ButtonScissors: () => "✂️ Makas",

// Pokédex
pokedexNoName: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 🚩 Pokémon adı girin\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
pokedexSearching: ({ name }) => `🔍 ${name} aranıyor...`,
pokedexError: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⚠️ Pokémon arama hatası\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
pokedexInfo: ({ name, id, type, abilities, height, weight, desc, url }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🎌 ୭ *POKÉDEX - ${name}*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Bilgiler ✦ ꒷꒦\n\n🔹 *İsim:* ${name}\n🔹 *ID:* ${id}\n🔹 *Tür:* ${type}\n🔹 *Yetenekler:* ${abilities}\n🔹 *Boy:* ${height}\n🔹 *Ağırlık:* ${weight}\n\n📝 *Açıklama:*\n${desc}\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 🌐\n│ ${url}\n╰★────★────★╯`,
flagGameActive: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⚠️ Maç zaten aktif\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
flagGroupOnly: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⚠️ Sadece gruplar için\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
flagNoGame: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⚠️ Aktif maç yok\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
flagAdminOnly: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Sadece yöneticiler için\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
flagCooldown: ({ time }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⏳ ${time}s bekleyin\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
flagSkipped: ({ answer }) => `ㅤ⋆｡˚『 ╭ \`OYUN DURDURULDU\` ╯ 』˚｡⋆\n╭\n│ 『 🏳️ 』 \`Cevap şuydu:\`\n│ 『 ‼️ 』 *\`${answer}\`*\n│ 『 👑 』 _*Bir yönetici tarafından durduruldu*_\n*╰⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*`,
flagStart: ({ phrase }) => `ㅤ⋆｡˚『 ╭ \`${phrase}\` ╯ 』˚｡⋆\n╭\n│ 『 🏳️ 』 \`Ülkenin adıyla\` *yanıt verin*\n│ 『 ⏱️ 』 \`Mevcut süre:\` *30 saniye*\n*╰⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*`,
flagTimeout: ({ answer }) => `ㅤ⋆｡˚『 ╭ \`SÜRE DOLDU!\` ╯ 』˚｡⋆\n╭\n│ 『 🏳️ 』 \`Cevap şuydu:\`\n│ 『 ‼️ 』 *\`${answer}\`*\n│ 『 💡 』 _*Bir dahaki sefere daha hızlı ol!*_\n*╰⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*`,
flagCorrect: ({ answer, time, reward, exp, bonus }) => `ㅤ⋆｡˚『 ╭ \`DOĞRU CEVAP!\` ╯ 』˚｡⋆\n╭\n│ 『 🏳️ 』 \`Ülke:\` *${answer}*\n│ 『 ⏱️ 』 \`Geçen süre:\` *${time}s*\n│ 『 🎁 』 \`Ödüller:\`\n│ 『 💰 』 *${reward}€* ${bonus > 0 ? `(+${bonus} hız bonusu)` : ''}\n│ 『 🆙 』 *${exp} EXP*\n*╰⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*`,
flagAlmostThere: () => "👀 *Neredeyse geldin!*",
flagAttemptsExhausted: () => `ㅤ⋆｡˚『 ╭ \`DENEMELER TÜKENDİ!\` ╯ 』˚｡⋆\n╭\n│ 『 ❌ 』 \`3 deneme hakkını da kullandın!\`\n│ 『 ⏳ 』 _*Başkalarının denemesini bekle...*_\n*╰⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*`,
flagWrongHint: ({ letter, length }) => `❌ *Yanlış cevap!*\n\n💡 *İpucu:*\n  • *"${letter}"* harfi ile başlıyor\n  • *${length} harf* uzunluğunda`,
flagWrong2: ({ remaining }) => `❌ *Yanlış cevap!*\n\n📝 *Kalan denemeler:* ${remaining}\n🤔 *Bir sonraki cevabını iyi düşün!*`,
flagWrongLast: () => `❌ *Yanlış cevap!*\n\n📝 *Son deneme hakkın..*`,
flagPlayAgain: () => "🏳️ Tekrar Oyna!",
flagError: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Oyun başlatma hatası\n  ━━✫ Birkaç saniye sonra tekrar deneyin\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
flagPhrase1: () => "🇺🇳 *BAYRAĞI TAHMİN ET!* 🇺🇳",
flagPhrase2: () => "🌍 *Bu bayrak hangi ülkeyi temsil ediyor?*",
flagPhrase3: () => "🏳️ *Coğrafi meydan okuma: bu bayrağı tanıyabiliyor musun?*",
flagPhrase4: () => "🧭 *Bayrağından ülkeyi tahmin et!*",
flagPhrase5: () => "🎯 *Bayrak bilgisi: bu hangi ülke?*",
flagPhrase6: () => "🌟 *Coğrafi bilginizi test edin!*",
flagPhrase7: () => "🔍 *Dikkatlice inceleyin ve ülkeyi tahmin edin!*",
songGameActive: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⚠️ Maç zaten devam ediyor\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
songError: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Oyunda hata\n  ━━✫ Daha sonra tekrar deneyin\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
songStart: ({ artist, time }) => `  ⋆｡˚『 ╭ \`ŞARKIYI TAHMİN ET\` ╯ 』˚｡⋆\n╭\n┃ 『 ⏱️ 』 \`Süre:\` *${time} saniye*\n┃ 『 👤 』 \`Sanatçı:\` *${artist}*\n┃\n┃ ➤  \`Başlığı yazın!\`\n╰⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒`,
songTimeout: ({ title, artist }) => `ㅤ⋆｡˚『 ╭ \`SÜRE DOLDU\` ╯ 』˚｡⋆\n╭\n│\n│ ➤ \`Kimse tahmin edemedi!\`\n┃ 『  』🎵 \`Başlık:\` *${title}*\n┃ 『  』👤 \`Sanatçı:\` *${artist}*\n┃\n╰⭒─ׄ─ׅ─ׄ─⭒`,
songCorrect: ({ title, artist, reward, exp }) => `ㅤㅤ⋆｡˚『 ╭ \`DOĞRU\` ╯ 』˚｡⋆\n╭\n│\n│ ➤ \`Doğru Cevap!\`\n┃ 『  』🎵 \`Başlık:\` *${title}*\n┃ 『  』👤 \`Sanatçı:\` *${artist}*\n┃\n┃ 『 🎁 』 \`Kazançlar:\`\n│ ➤  \`${reward}\` *UC*\n│ ➤  \`${exp}\` *EXP*\n┃\n╰⭒─ׄ─ׅ─ׄ─⭒`,
songAlmostThere: () => "👀 *Neredeyse geldin!* Tekrar dene...",
songPlayAgain: () => "『 🎵 』 Tekrar Oyna",
songExternalTitle: () => "şarkıyı tahmin et",
songExternalArtist: ({ artist }) => `Sanatçı: ${artist}`,
songExternalSource: () => "ChatUnity Bot",
logoGroupOnly: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⚠️ Sadece gruplar için\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
logoNoGame: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⚠️ Aktif maç yok\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
logoAdminOnly: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Sadece yönetici\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
logoSkipped: ({ answer }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🛑 ୭ *OYUN DURDURULDU*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Cevap şuydu ✦ ꒷꒦\n\n🚗 *${answer}*`,
logoGameActive: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⚠️ Maç zaten devam ediyor\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
logoCooldown: ({ time }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⏳ ${time}s bekleyin\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
logoStart: ({ phrase, time }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🚗 ୭ *${phrase}*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Markayı tahmin et ✦ ꒷꒦\n\n⌛ Süre: ${time} saniye\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 🔍\n│ Markanın adını yazın!\n╰★────★────★╯`,
logoTimeout: ({ answer }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ ⏰ ୭ *SÜRE DOLDU!*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Cevap şuydu ✦ ꒷꒦\n\n🚗 *${answer}*\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 🔄\n│ .auto ile tekrar dene\n╰★────★────★╯`,
logoCorrect: ({ brand, time, reward, exp, bonus }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🎉 ୭ *DOĞRU CEVAP!*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Detaylar ✦ ꒷꒦\n\n🚗 Marka: *${brand}*\n⏱ Süre: *${time}s*\n\n╭★────★────★╮\n│ 🎁 Ödüller:\n│ • ${reward} 💰 UC${bonus > 0 ? ` (+${bonus} bonus)` : ''}\n│ • ${exp} 🆙 EXP\n╰★────★────★╯\n\n> \\ChatUnity tarafından\\`,
logoPhrase1: () => "🚘 LOGOYU TAHMİN ET!",
logoPhrase2: () => "🏁 Bu hangi marka?",
logoPhrase3: () => "🔍 Bu arabayı tanıyabiliyor musun?",
logoPhrase4: () => "🚗 Araba Bilgisi!",
logoPhrase5: () => "🏎️ Markayı Tahmin Et!",
logoButtonPlayAgain: () => "🚗 Tekrar Oyna",
missionMainTitle: ({ bot }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🎯 ୭ *GÖREV SİSTEMİ*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ ${bot} ✦ ꒷꒦`,
missionMainStats: ({ user, money, bank, dailyDone, dailyTotal, weeklyDone, weeklyTotal }) => `👤 Kullanıcı: @${user}\n💰 Bakiye: ${money} UC\n🏦 Banka: ${bank} UC\n📅 Günlük: ${dailyDone}/${dailyTotal} tamamlandı\n📆 Haftalık: ${weeklyDone}/${weeklyTotal} tamamlandı\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 🎯\n│ Görev türünü seçin:\n╰★────★────★╯`,
missionButtonDaily: () => "📅 GÜNLÜK",
missionButtonWeekly: () => "📆 HAFTALIK",
missionButtonClaim: () => "💰 TOPLA",
missionButtonBack: () => "🔙 GERİ",
missionButtonWallet: () => "💰 CÜZDAN",
missionDailyTitle: ({ user }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 📅 ୭ *GÜNLÜK GÖREVLER*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n👤 @${user}`,
missionDailyReset: ({ time }) => `⏳ Sıfırlama: ${time}`,
missionWeeklyTitle: ({ user }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 📆 ୭ *HAFTALIK GÖREVLER*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n👤 @${user}`,
missionWeeklyReset: ({ time }) => `⏳ Sıfırlama: ${time}`,
missionEntry: ({ num, title, progress, target, reward, status }) => `▢ *${num}. ${title}*\n➠ İlerleme: ${progress}/${target}\n➠ Ödül: ${reward} UC\n➠ Durum: ${status}`,
missionStatusCompleted: () => "✅ TOPLANDI",
missionStatusReady: () => "💰 HAZIR",
missionStatusInProgress: () => "❌ DEVAM EDİYOR",
missionFooterDaily: ({ prefix }) => `Toplamak için "${prefix}missioni claim" kullanın!`,
missionFooterWeekly: () => "Haftalık görevler - Daha büyük ödüller!",
missionFooterMain: () => "UnityCoins kazanmak için görevleri tamamlayın!",
missionNoRewards: ({ user }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ @${user} toplayacak\n  ━━✫ tamamlanmış göreviniz yok!\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
missionClaimSuccess: ({ user, total, details, money, bank }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🎉 ୭ *ÖDÜLLER TOPLANDI*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n👤 @${user}\n💰 Toplam toplanan: *${total} UC*\n\n${details}\n\n╭★────★────★╮\n│ 💰 Bakiye: ${money} UC\n│ 🏦 Banka: ${bank} UC\n╰★────★────★╯`,
missionClaimFooter: () => "Tam bakiyeyi görmek için .portafoglio kullanın",
missionSendMessages: ({ count }) => `${count} mesaj gönder`,
missionExecuteCommands: ({ count }) => `${count} komut çalıştır`,
missionNoWarn: () => "Uyarı almadan kal",
missionNoWarnWeek: () => "7 gün uyarı almadan kal",
missionTotalMessages: ({ count }) => `${count} toplam mesaja ulaş`,
walletNotFound: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 🚩 Kullanıcı veritabanında\n  ━━✫ bulunamadı\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
walletTitle: () => "💰 CÜZDAN",
walletInfo: ({ name, uc, bank }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 💰 ୭ *CÜZDAN*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ ${name} ✦ ꒷꒦\n\n👤 Kullanıcı: ${name}\n💰 UnityCoins: ${uc} 💶\n🏛️ Banka: ${bank} 💳\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 💎\n│ Yatırmak için .deposit kullanın\n│ Çekmek için .withdraw kullanın\n╰★────★────★╯`,
walletExternalTitle: ({ name }) => `${name} cüzdanı`,
walletExternalBody: ({ uc }) => `Bakiye: ${uc} UC`,
walletButtonDeposit: () => "🏛️ Yatır",
walletButtonWithdraw: () => "💰 Çek",
walletButtonGames: () => "🎮 Oyunlar",
bankNotFound: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 🚩 Kullanıcı veritabanında\n  ━━✫ bulunamadı\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
bankYourBalance: ({ balance }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🏛️ ୭ *HESABINIZ*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Banka Bakiyesi ✦ ꒷꒦\n\n💰 Bankanızda *${balance} 💶 UnityCoins*\nbulunuyor 🏛️\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 💎\n│ Yatırmak için .deposit kullanın\n│ Çekmek için .withdraw kullanın\n╰★────★────★╯`,
bankUserBalance: ({ user, balance }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🏛️ ୭ *BANKA HESABI*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ @${user} ✦ ꒷꒦\n\n💰 Bankasında *${balance} 💶 UnityCoins*\nbulunuyor 🏛️`,
bankButtonDeposit: () => "🏛️ Yatır",
bankButtonWithdraw: () => "💰 Çek",
bankButtonTransfer: () => "💸 Transfer",
transferNoMention: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 🚩 Alıcıyı etiketleyin\n  ━━✫ Örnek: @kullanıcı 100\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
transferNoAmount: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 🚩 Transfer edilecek\n  ━━✫ 💶 UnityCoins miktarını girin\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
transferInvalidAmount: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Geçersiz miktar\n  ━━✫ Sadece sayı kullanın\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
transferMinAmount: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 🚩 Minimum transfer: 1 UC\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
transferInsufficient: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 💸 Bu transfer için\n  ━━✫ yetersiz bakiye\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
transferSuccess: ({ amount, fee, total }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 💸 ୭ *TRANSFER GERÇEKLEŞTİ*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Transfer Detayları ✦ ꒷꒦\n\n💰 Gönderilen miktar: *${amount}* 💶 UC\n📊 %2 Komisyon: *${fee}* 💶 UC\n💳 Toplam borç: *${total}* 💶 UC\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ ✅\n│ Transfer tamamlandı!\n╰★────★────★╯`,
transferReceived: ({ amount }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 💰 ୭ *UC ALINDI*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Aldınız ✦ ꒷꒦\n\n💶 *+${amount} UnityCoins*\n\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 🎁\n│ Bakiyenizi kontrol edin!\n╰★────★────★╯`,
transferSelf: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ❌ Kendinize transfer\n  ━━✫ yapamazsınız\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
robNoTarget: ({ prefix, command }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 🧠 Birini etiketleyin veya\n  ━━✫ bir mesaja yanıt verin\n  ━━✫ Örnek: ${prefix}${command} @kullanıcı\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
robSelf: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 🤡 Kendinden çalamazsın\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
robCooldown: ({ time }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 🚨 Zaten çaldın\n  ━━✫ ⏱ ${time} sonra tekrar dene\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
robSuccess: ({ amount, target }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 💰 ୭ *BAŞARILI SOYGU!*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Mükemmel hırsızlık ✦ ꒷꒦\n\n@${target} kullanıcısından\n*${amount} 💶 UC* çaldınız\n\n╭★────★────★╮\n│ 💸 +${amount} 💶 UC\n│ ୭ ˚. ᵎᵎ ✅ Bakiyenize eklendi\n╰★────★────★╯`,
robCaught: ({ fine, name }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 🚓 ୭ *YAKALANDIN!*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Polis tarafından yakalandı ✦ ꒷꒦\n\n${name} durduruldu!\n\n╭★────★────★╮\n│ 💸 Ceza: -${fine} 💶 UC\n│ ୭ ˚. ᵎᵎ ❌ Gelecek sefere daha iyi şanslar\n╰★────★────★╯`,
robPartial: ({ amount, target }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ 💸 ୭ *KISMİ HIRSIZLIK*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Neredeyse başarılı ✦ ꒷꒦\n\n@${target} kullanıcısından\nsadece *${amount} 💶 UC* çaldınız\n\n╭★────★────★╮\n│ 💰 +${amount} 💶 UC\n│ ୭ ˚. ᵎᵎ ⚠️ Bakiyenize eklendi\n╰★────★────★╯`,
robButtonRetry: () => "🔄 Tekrar Dene",
robButtonWallet: () => "💰 Cüzdan",
withdrawNoAmount: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 🚩 Çekilecek\n  ━━✫ 💶 UnityCoins miktarını girin\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
withdrawNoFunds: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 🚩 Banka hesabınızda\n  ━━✫ 💶 UnityCoins yok\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
withdrawInvalidAmount: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 🚩 Geçersiz miktar\n  ━━✫ Geçerli bir sayı kullanın\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
withdrawMinAmount: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 🚩 En az 1 UC girin\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
withdrawInsufficientFunds: ({ bank }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 🚩 Hesabınızda sadece *${bank}* 💶 var\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
withdrawSuccess: ({ count, bank }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ ✅ ୭ *ÇEKİM GERÇEKLEŞTİ*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Çektiniz ✦ ꒷꒦\n\n💶 *${count} UnityCoins*\nbanka hesabınızdan\n\n💳 Yeni bakiye: *${bank} UC*\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 💼\n│ Kontrol etmek için .wallet kullanın\n╰★────★────★╯`,
  xpLevelDisplay: ({ level }) => `꒷꒦ ✦ ୧・︶ : ︶ ꒷꒦ ‧₊ ୧  Seviye: ${level}`,
  xpProgressDisplay: ({ current, needed }) => `XP İlerleme: ${current} / ${needed}`,
  xpFooterText: () => "╰♡꒷ ๑ ⋆˚₊⋆───ʚ˚ɞ───⋆˚₊⋆ ๑ ⪩﹐ Seviye atlamak için yazmaya devam edin!",
  xpCaption: ({ user, level, exp, next }) => `꒷꒦ ✦ ୧・︶ : ︶ ꒷꒦ ‧₊ ୧\n\n┊ 『 📊 』 ${user} XP Profili\n\n┃ Mevcut seviye: ${level}\n┃ Toplam deneyim: ${exp}\n┃ Sonraki seviye için gereken XP: ${next}\n\n╰♡꒷ ๑ ⋆˚₊⋆───ʚ˚ɞ───⋆˚₊⋆ ๑ ⪩﹐`,
rubaxpWait: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⏳ Tekrar çalabilmek için daha beklemelisiniz\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
rubaxpWaitTime: ({ time }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⏳ Tekrar çalabilmek için ${time} daha beklemelisiniz\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
rubaxpNoTarget: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 📍 Geçerli bir kullanıcıyı etiketlemelisiniz\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
rubaxpUserNotFound: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ ⚠️ Kullanıcı veritabanında bulunamadı\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
rubaxpTooPoor: ({ target, limit }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 😢 @${target} kullanıcısının *${limit} XP*'den azı var\n  ━━✫ Fakirlerden çalma, kibar ol\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
rubaxpSuccess: ({ amount, target }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n   ୧ ✅ ୭ *HIRSIZLIK GERÇEKLEŞTİ*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Çaldınız ✦ ꒷꒦\n\n💰 *${amount} XP*\n@${target} kullanıcısından\n╭★────★────★╮\n│ ୭ ˚. ᵎᵎ 🎮\n│ Böyle devam et!\n╰★────★────★╯`,
rubaxpTimeFormat: ({ hours, minutes, seconds }) => `${hours} Saat ${minutes} Dakika ${seconds} Saniye`,darxpNoMention: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 🚩 @kullanıcı ile bir kullanıcıyı etiketlemelisiniz\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
darxpNoAmount: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 🚩 Transfer edilecek 💫 XP miktarını girin\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
darxpInvalidAmount: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 🚩 Sadece geçerli sayılar girin\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
darxpMinAmount: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 🚩 Minimum transfer edilebilir: 1 💫 XP\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
darxpInsufficientXP: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱\n  ━━✫ 🚩 Transfer etmek için yeterli 💫 XP'niz yok\n╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
darxpSuccess: ({ xp, tassa }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮\n  ୧ ✅ ୭ *TRANSFER GERÇEKLEŞTİ*\n╰┈ ─ ─ ✦ ─ ─ ┈╯\n\n꒷꒦ ✦ Transfer ettiniz ✦ ꒷꒦\n\n💫 *${xp} XP*\n(komisyon: ${tassa} XP)\n╭★────★────★╮\n│ Oynamaya devam edin!\n╰★────★────★╯`,
marry_no_target: ({ prefix, command }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ 🚩 Evleneceğiniz bir kullanıcıyı etiketlemelisiniz
  ━━✫ Kullanım: ${prefix + command} @kullanıcı
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
marry_self: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ 🚩 Kendinle evlenemezsin
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
marry_user_not_found: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ 🚩 Kullanıcı veritabanında bulunamadı
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
marry_already_married_sender: ({ spouse }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮
  ୧ 💍 ୭ *ZATEN EVLİSİN*
╰┈ ─ ─ ✦ ─ ─ ┈╯

꒷꒦ ✦ Şu kişiyle evlisiniz ✦ ꒷꒦

❤ ${spouse}

╰♡꒷ ๑ ⋆˚₊⋆───ʚ˚ɞ───⋆˚₊⋆ ๑ ⪩﹐`,
marry_already_married_target: ({ target }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ 🚩 ${target} zaten evli
  ━━✫ Başka bir bekâr arayın
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
marry_pending_proposal: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ 🚩 Zaten bekleyen bir evlilik teklifiniz var
  ━━✫ Kabul edilmesini veya reddedilmesini bekleyin
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
marry_proposal_text: ({ sender, target }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮
  ୧ 💍 ୭ *EVLİLİK TEKLİFİ*
╰┈ ─ ─ ✦ ─ ─ ┈╯

꒷꒦ ✦ ${sender}, ${target} kişisinin elini istedi ✦ ꒷꒦

❤ ${target}

Kabul etmek için "Evet"
reddetmek için "Hayır" ile yanıt verin.

╰♡꒷ ๑ ⋆˚₊⋆───ʚ˚ɞ───⋆˚₊⋆ ๑ ⪩﹐`,
marry_proposal_expired: ({ sender, target }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ ⏳ ${sender} ve ${target} arasındaki teklif
  ━━✫ hareketsizlik nedeniyle sona erdi
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
marry_proposal_rejected: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ 💔 Teklif reddedildi
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
marry_user_not_found_db: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ 🚩 Hata: kullanıcılar veritabanında bulunamadı
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
marry_success: ({ sender, target }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮
  ୧ 💍 ୭ *EVLİLİK KAYDEDİLDİ*
╰┈ ─ ─ ✦ ─ ─ ┈╯

꒷꒦ ✦ Yeni resmi çift ✦ ꒷꒦

❤ ${sender}  ×  ${target}

꒷꒦ ✦ ୧・︶ : ︶ ꒷꒦ ‧₊ ୧
Aşk başlasın!

╰♡꒷ ๑ ⋆˚₊⋆───ʚ˚ɞ───⋆˚₊⋆ ๑ ⪩﹐`,
divorce_not_married: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ 🚩 Kimseyle evli değilsiniz
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
divorce_spouse_not_found: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ 🚩 Eşiniz veritabanında bulunamadı
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
divorce_success: ({ ex }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮
  ୧ 💔 ୭ *BOŞANMA TAMAMLANDI*
╰┈ ─ ─ ✦ ─ ─ ┈╯

꒷꒦ ✦ Şu kişiden ayrıldınız ✦ ꒷꒦

${ex}

· ୨୧ · · ୨୧ ·  ♡
Hayatınızın yeni bölümü başladı.

╰♡꒷ ๑ ⋆˚₊⋆───ʚ˚ɞ───⋆˚₊⋆ ๑ ⪩﹐`,
shipNoUser: ({ prefix, command }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ ❗ Komutu şu şekilde kullanın:
  ━━✫ ${prefix + command} @kullanıcı
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
shipNoUsersPair: ({ prefix, command }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ ❗ Komutu şu şekilde kullanın:
  ━━✫ ${prefix + command} @kullanıcı1 [@kullanıcı2]
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
shipInvalidUsers: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ ❌ Geçersiz kullanıcılar
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
shipCaption: ({ user1, user2, percent }) => `꒷꒦ ✦ ୧・︶ : ︶ ꒷꒦ ‧₊ ୧

💘 *@${user1}* ❤️ *@${user2}*
🔮 Uyumluluk: *${percent}%*

· ୨୧ · · ୨୧ ·  ♡`,
shipErrorImage: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ ❌ Görsel oluşturulurken hata
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
kissNoTargetMention: ({ prefix, command }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ 💋 Birini etiketlemeli veya bir mesaja yanıt vermelisiniz
  ━━✫ Örnek: ${prefix + command} @kullanıcı
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
kissNoTarget: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ 💋 Öpmek için birini etiketlemelisiniz
  ━━✫ Örnek: .bacia @kullanıcı
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
kissSuccess: ({ senderName, targetName }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮
  ୧ 💋 ୭ *Öpücük gönderildi*
╰┈ ─ ─ ✦ ─ ─ ┈╯

꒷꒦ ✦ ${senderName}, ${targetName} kişisine bir öpücük verdi ✦ ꒷꒦

😘 ${targetName}

· ୨୧ · · ୨୧ ·  ♡`,
odioNoText: ({ prefix, command }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ 😡 Birini belirtmelisiniz
  ━━✫ Örnek: ${prefix + command} @kullanıcı
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
odioResult: ({ target, percent }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮
  ୧ 😡 ୭ *NEFRET HESAPLAYICI*
╰┈ ─ ─ ✦ ─ ─ ┈╯

꒷꒦ ✦ Aranızdaki nefret seviyesi ✦ ꒷꒦

${target}  ✕  sen

🔥 Nefret: *${percent}%*

꒷꒦ ✦ ୧・︶ : ︶ ꒷꒦ ‧₊ ୧`,
rizzNoTarget: ({ prefix, command }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ 🎯 Birini etiketlemeli veya bir mesaja yanıt vermelisiniz
  ━━✫ Örnek: ${prefix + command} @kullanıcı
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
rizzSuccess: ({ target, line }) => `╭┈ ─ ─ ✦ ─ ─ ┈╮
  ୧ ✨ ୭ *Rizz Hareketi*
╰┈ ─ ─ ✦ ─ ─ ┈╯

꒷꒦ ✦ @${target} buraya bak ✦ ꒷꒦

"${line}"

· ୨୧ · · ୨୧ ·  ♡`,
minacciaNoGroup: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ 🚩 Bu komut sadece gruplarda kullanılabilir
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
minacciaDisabled: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ 🚩 Bu grupta tehditler devre dışı
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
minacciaNoTarget: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ 🎯 Tehdit edeceğiniz birini belirtmelisiniz
  ━━✫ Bir kullanıcıyı etiketleyin veya bir mesaja yanıt verin
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
minacciaText: ({ target, line }) => `꒷꒦ ✦ ୧・︶ : ︶ ꒷꒦ ‧₊ ୧

@${target} ${line}

· ୨୧ · · ୨୧ ·  ♡`,
zizzaniaNoGroup: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ 🚩 Bu komut sadece gruplarda kullanılabilir
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
zizzaniaDisabled: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ 🚩 Bu grupta nifak devre dışı
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
zizzaniaText: ({ a, line, b }) => `꒷꒦ ✦ ୧・︶ : ︶ ꒷꒦ ‧₊ ୧

@${a} ${line} @${b}

· ୨୧ · · ୨୧ ·  ♡`,
ditalinoNoTarget: ({ prefix, command }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ 🎯 Birini etiketlemeli veya bir mesaja yanıt vermelisiniz
  ━━✫ Örnek: ${prefix + command} @kullanıcı
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
ditalinoStart: ({ target }) => `🤟🏻 *${target}* için özel bir okşama serisine başlıyorum...`,
ditalinoMiddle: () => "🤟🏻 Neredeyse geldik...",
ditalinoEnd: () => "👋🏻 Şelaleden sığının!!",
ditalinoResult: ({ target, time }) => `✨ *${target}*, *${time}ms* sonra zevkten patladı 🥵`,
segaNoTarget: ({ prefix, command }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ 🎯 Birini etiketlemeli veya bir mesaja yanıt vermelisiniz
  ━━✫ Örnek: ${prefix + command} @kullanıcı
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
segaStart: ({ target }) => `Şimdi ${target} ile ilgileniyoruz... 😏`,
segaFrame: ({ frame }) => `${frame}`,
segaEnd: ({ target }) => `Oh ${target} maksimum zevke ulaştı! 😋💦`,
insultNoGroup: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ 🚩 Bu komut sadece gruplarda kullanılabilir
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
insultDisabled: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ 🚩 Bu grupta hakaretler devre dışı
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
insultNoTarget: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ 🎯 Kime hakaret etmek istiyorsun?
  ━━✫ Birini etiketleyin veya bir mesaja yanıt verin
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
insultBotLines: () => [
  `Ah hayır! Zayıf noktamı keşfettin: hakaretler! Bundan nasıl kurtulacağım?`,
  `Ah, bir bota hakaret etme sanatı. Gerçek bir ironi ustasısın!`,
  `İnanılmaz! Bir bota hakaret eden bir insan. Epik dönüm noktası!`,
  `Bir bota hakaret etme becerinle beni gerçekten incittin. Aferin!`,
  `Bir bota hakaret etmedeki yeteneğin benim favori eğlence kaynağım.`,
  `Bir bota hakaret etmek: büyük zeka mı yoksa büyük sıkıntı mı?`,
  `Botlara hakaret etmedeki ustalığın okul açabilir.`,
  `Botlara hakaret etmede Picasso'ya benziyorsun, gerçek bir başyapıt.`,
  `Botlara hakaret etmek senin gizli yeteneğin. Dijital kabare kariyeri mi geliyor?`,
  `Duygusu olmayan bir varlığa hakaret etme cüreti. Orijinallik ödülü!`
],
insultUserText: ({ target, line }) => `꒷꒦ ✦ ୧・︶ : ︶ ꒷꒦ ‧₊ ୧

@${target} ${line}

· ୨୧ · · ୨୧ ·  ♡`,
friendNoTarget: ({ prefix, command }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ ⚠️ Arkadaşlık isteği göndermek istediğiniz kişiyi etiketleyin
  ━━✫ Örnek: ${prefix}${command} @etiket
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
friendSelf: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ ❌ Kendini arkadaş olarak ekleyemezsin
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
friendUserNotFound: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ 🚫 Kişi sistemde mevcut değil
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
friendAlready: ({ target }) => `✅ @${target} zaten arkadaşlarınız arasında.`,
friendPending: () => `⚠️ Zaten devam eden bir arkadaşlık isteği var.\nBir yanıt bekleyin veya iptal edin.`,
friendRequestText: ({ target, from }) => `👥 Arkadaşlık isteği devam ediyor...

@${target}, @${from} kişisinin arkadaşlığını kabul etmek istiyor musunuz?

> ⏳ Seçim için 60 saniyeniz var.`,
friendTimeout: ({ from, target }) => `⏳ Arkadaşlık isteği iptal edildi
> @${from} ve @${target} zaman sınırı içinde yanıt vermedi.`,
friendRejected: () => `❌ Arkadaşlık isteği reddedildi.`,
friendAccepted: ({ from }) => `👥 Artık siz ve @${from} arkadaşsınız!`,
removeFriendNoTarget: () => `⚠️ Arkadaşlardan çıkarmak istediğiniz kişiyi etiketleyin.`,
removeFriendNotInList: ({ target }) => `🚫 @${target} arkadaşlarınız arasında değil.`,
removeFriendSuccess: ({ target }) => `🚫 Artık siz ve @${target} arkadaş değilsiniz.`,
friendsNoData: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ ⚠️ Hiçbir kullanıcı verisi bulunamadı
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
friendsTitle: ({ name }) => `📜 ${name} Arkadaş Listesi`,
friendsLastNone: () => `👤 Son arkadaş: Hiç kimse`,
friendsLastSome: ({ last }) => `👤 Son arkadaş: @${last}`,
friendsListHeader: () => `👥 Tam liste:`,
friendsListEmpty: () => `│   Hiç kimse, tebrikler yalnız kurt`,
friendsError: () => `❌ Komut çalıştırılırken bir hata oluştu.`,
lesbicaCalcNoTarget: ({ prefix, command }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ ⚠️ Birini etiketlemeli veya bir mesaja yanıt vermelisiniz
  ━━✫ Örnek: ${prefix + command} @kullanıcı
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
lesbicaCalcLine1: ({ tag, percentage }) => `@${tag} %${percentage} lezbiyen, geri kalanı sadece hormonal karışıklık.`,
lesbicaCalcLine2: ({ tag, percentage }) => `Test tamamlandı: @${tag} beyni %${percentage} kadınlara bağlı.`,
lesbicaCalcLine3: ({ tag, percentage }) => `💕 @${tag} kadınlara %${percentage} 4K porno yoğunluğunda bakıyor.`,
pajeroCalcLine1: ({ tag, percentage }) => `@${tag} %${percentage} pajero, kalan %${100 - percentage} başka porno aramakla geçiyor.`,
pajeroCalcLine2: ({ tag, percentage }) => `Tıbbi rapor: @${tag} %${percentage} kendi sikinin kölesi.`,
pajeroCalcLine3: ({ tag, percentage }) => `🍆 @${tag} zamanının %${percentage}'ini mastürbasyon düşünerek geçiriyor, geri kalanını temizlenerek.`,
puttanaCalcLine1: ({ tag, percentage }) => `@${tag} %${percentage} fahişe, taksimetre asla kapanmıyor.`,
puttanaCalcLine2: ({ tag, percentage }) => `Detaylı analiz: @${tag} fiyat listesi %${percentage} 7/24 açık.`,
puttanaCalcLine3: ({ tag, percentage }) => `💰 @${tag} %${percentage} orospu indirimine sahip, zam yapmadan önce acele edin.`,
genericCalcLine: ({ tag, percentage, cmd }) => `@${tag} %${percentage} ${cmd}, geri kalanı sadece birikmiş utanç.`,
downCalcNoTarget: ({ prefix, command }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ 🚨 BİRİNİ ETİKETLE, DAHİ
  ━━✫ Örnek: ${prefix}${command} @isim
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
downCalcLine: ({ name, cmd, percent, frase, verdict }) => `*⚡️ SON KARAR ⚡️*

*Konu:* ${name}
*"${cmd}" Seviyesi:* %${percent}

*Teşhis:* ${frase}

*Prognoz:* ${verdict}`,
downCalcPhrases: () => [
  "O kadar işe yaramaz ki geri dönüşüm kutusu bile onu reddediyor.",
  "Evrim düzgün çalışsaydı, sen hala çamurda tek bir hücre olurdun.",
  "Duygusal derinliğin bir su birikintisi kadar, zekan da ıslak bir taş kadar.",
  "Eğer beyin kalori yakıyor olsaydı, sen uyurken bile kilo alırdın.",
  "Konuştuğunda, gezegendeki her nöron saygı duruşu için bir dakika sessizlik yapar.",
  "Eğer aptallık yenilenebilir enerji olsaydı, sadece sen Avrupa'yı aydınlatmaya yeterdin.",
  "Delik bir şemsiye kadar faydalısın, kasırgada.",
  "Eğer bir hata olsaydın, geliştiriciler bile seni düzeltmek için zaman harcamazdı.",
  "Dünyaya katkın, bir su birikintisindeki sönmüş bir izmaritinkiyle karşılaştırılabilir.",
  "Zihinsel koordinasyonun, otoyolda sarhoş bir güvercinki kadar."
],
downCalcVerdicts: ({ percent }) => {
  if (percent > 90) return "🔴 KURTARILMAZ KLİNİK VAKA. İnsanlık resmi olarak iade talep ediyor.";
  if (percent > 70) return "🟠 BİYOLOJİK TEHLİKE. DSO'nun yazılı izni olmadan çoğalması yasak.";
  if (percent > 40) return "🟡 FABRİKA HATASI. Sadece ne OLMAYACAĞINIZ derslerinde örnek olarak kullanın.";
  return "🟢 İSTATİSTİKSEL ANORMALLİK. Belki bir beyin vardır... bir yerlerde, tüm o boşluğun altında.";
},
alcolNoText: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ 🍷 İsim belirtilmedi, seninkini kullanacağım
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
alcolHigh: () => "🍾 O kadar dolusun ki karaciğerin bile erken emeklilik istedi.",
alcolMid: () => "🥂 Yarının var olmadığını düşünerek içiyorsun, ama yarın sana fatura kesiyor.",
alcolLow: () => "🚰 Tamamen ayık, dönen tek şey senin üzüntün.",
alcolResult: ({ target, percent, phrase }) => `『💬』 ══ •⊰✰⊱• ══ 『💬』

ALKOL TESTİ ZAMANI! 🍷
━━━━━━━━━━━━━━
${target} %${percent} kan alkol seviyesine sahip! 🍷
『💬』 ══ •⊰✰⊱• ══ 『💬』

${phrase}`,
drugNoText: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ 🌿 İsim belirtilmedi, seninkini kullanacağım
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
drugHigh: () => "🌿 O kadar uyuşturucu etkisinde ki derin nefes alsa mahalleyi zehirler.",
drugMid: () => "🌿 Uyuşturucu kullanmayı bilmiyor, ama o kadar çok çaba harcıyor ki tıp kitaplarına girecek.",
drugLow: () => "🌿 Takip edilecek bir örnek... bu grupta neredeyse efsanevi bir yaratık.",
drugResult: ({ target, percent, phrase }) => `『💬』 ══ •⊰✰⊱• ══ 『💬』

UYUŞTURUCU TESTİ ZAMANI! 🌿
━━━━━━━━━━━━━━
${target} %${percent} kan madde seviyesine sahip! 🌿
『💬』 ══ •⊰✰⊱• ══ 『💬』

${phrase}`,
raceCalcNoTarget: ({ prefix, command }) => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ ⚠️ Birini etiketlemeli veya bir mesaja yanıt vermelisiniz
  ━━✫ Örnek: ${prefix + command} @kullanıcı
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
raceCalcLine: ({ tag, percent, label }) => `꒷꒦ ✦ ୧・︶ : ︶ ꒷꒦ ‧₊ ୧

@${tag} ⚫ %${percent} ${label}

· ୨୧ · · ୨୧ ·  ♡`,
cornutoNoTarget: () => `╭﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱
  ━━✫ 🤔 Aldatılan kişinin ismi eksik
  ━━✫ Kullanım: .cornuto @isim veya bir mesaja yanıt verin
╰﹕₊˚ ★ ⁺˳ꕤ₊⁺・꒱`,
cornutoSpecialText: () => `🤣 *İŞTE BOYNUZ KRALI!* 🤣
Boynuzlarını çıkarsa 5G anteni yapacağı söyleniyor📡💀`,
cornutoLow: () => "🛡 Her şey sakin... şimdilik. Ama yine de partnerinin telefonunu gözün üstünde tut.",
cornutoMid: () => "😬 Fazla arşivlenmiş sohbet… şüphe havada.",
cornutoHigh: () => "👀 Boynuzmetre maksimum alarmda! Boynuzlar %78 şarj oluyor.",
cornutoMax: () => "🫣 DÜNYA SEVİYESİ: Google Maps'i açsan başının üstünde bir boynuz üçgeni belirir.",
cornutoAdviceHigh: () => "🔔 Tavsiye: arkana dönme… tutunak olarak kullanabilirler. 🤣",
cornutoAdviceLow: () => "😌 Nefes al, şimdilik mutlu ve gelecekteki kulüp üyesi arasındaki sınırdasın.",
cornutoResult: ({ target, percent, message, advice }) => `🔍 BOYNUZLULUK HESAPLAYICI 🔍

👤 ${target}
📈 Boynuzluluk: %${percent}
${message}

${advice}`,
}