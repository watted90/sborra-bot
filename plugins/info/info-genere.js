 
const setgenereHandler = async (m, { conn, usedPrefix, command, text }) => {
  const who = m.sender;
  const userId = m.sender;
  const groupId = m.chat;

  if (
    command === 'setgenere' ||
    command === 'setgender' ||
    command === 'establecergénero' ||
    command === 'definirgênero' ||
    command === 'geschlechtsetzen' ||
    command === '设置性别' ||
    command === 'установитьпол' ||
    command === 'تعيينالجنس' ||
    command === 'लिंगसेट' ||
    command === 'définirgenre' ||
    command === 'setjenis' ||
    command === 'cinsiyetayarla'
  ) {
    if (!text || !['maschio','femmina','male','female','hombre','mujer','masculino','feminino','mann','frau','男','女','мужчина','женщина','ذكر','أنثى','पुरुष','महिला','homme','femme','pria','wanita','erkek','kadın'].includes(text.toLowerCase())) {
      return conn.reply(m.chat, global.t('setGenderUsage', userId, groupId), m);
    }

    const maleWords = ['maschio','male','hombre','masculino','mann','男','мужчина','ذكر','पुरुष','homme','pria','erkek'];
    const emoji = maleWords.includes(text.toLowerCase()) ? '🚹' : '🚺';

    global.db.data.users[who].genere = text.trim().toLowerCase();

    conn.reply(m.chat, global.t('setGenderSuccess', userId, groupId, { gender: text.trim().toLowerCase(), emoji }), m);
  }

  if (
    command === 'eliminagenere' ||
    command === 'deletegender' ||
    command === 'eliminargénero' ||
    command === 'removergênero' ||
    command === 'geschlechtlöschen' ||
    command === '删除性别' ||
    command === 'удалитьпол' ||
    command === 'حذفالجنس' ||
    command === 'लिंगहटाएं' ||
    command === 'supprimergenre' ||
    command === 'hapusjenis' ||
    command === 'cinsiyetsil'
  ) {
    delete global.db.data.users[who].genere;
    conn.reply(m.chat, global.t('deleteGenderSuccess', userId, groupId), m);
  }
};

setgenereHandler.help = [
  'setgenere <maschio/femmina>',
  'eliminagenere',
  'setgender <male/female>',
  'deletegender',
  'establecergénero <hombre/mujer>',
  'eliminargénero',
  'definirgênero <masculino/feminino>',
  'removergênero',
  'geschlechtsetzen <mann/frau>',
  'geschlechtlöschen',
  '设置性别 <男/女>',
  '删除性别',
  'установитьпол <мужчина/женщина>',
  'удалитьпол',
  'تعيينالجنس <ذكر/أنثى>',
  'حذفالجنس',
  'लिंगसेट <पुरुष/महिला>',
  'लिंगहटाएं',
  'définirgenre <homme/femme>',
  'supprimergenre',
  'setjenis <pria/wanita>',
  'hapusjenis',
  'cinsiyetayarla <erkek/kadın>',
  'cinsiyetsil'
];
setgenereHandler.tags = ['user'];
setgenereHandler.command = /^(setgenere|eliminagenere|setgender|deletegender|establecergénero|eliminargénero|definirgênero|removergênero|geschlechtsetzen|geschlechtlöschen|设置性别|删除性别|установитьпол|удалитьпол|تعيينالجنس|حذفالجنس|लिंगसेट|लिंगहटाएं|définirgenre|supprimergenre|setjenis|hapusjenis|cinsiyetayarla|cinsiyetsil)$/i;

export default setgenereHandler;
