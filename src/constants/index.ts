import type { Language, LanguagePack } from '@/types';

export const LANGUAGE_PACKS: Record<Language, LanguagePack> = {
  ml: {
  flag: '🌺', code: 'ML', name: 'Malayalam', nativeName: 'മലയാളം',
  btnYes: 'അതെ, തീർച്ചയായും ✨',
  btnNo: 'ഇല്ല 🙈',
  footer: '~ റോഹിത്തിന് മാത്രം ഒരു ROBLOX BESTFRIEND ~',
  loaderText: 'എന്തോ പ്രത്യേകമായത് വരുന്നു...',
  celebrate: 'ROBLOX BESTFRIEND SOULMATES 🎉🎊💙✨',
  scenes: {
    initial: {
      heading: 'നീ എന്റെ ROBLOX BESTFRIEND ആയി തുടരുമോ? 💖',
      sub: '~ yes na… ROHIT-ന്റെ ROBLOX BESTFRIEND ആയി ഞാൻ തുടരും 🥂',
    },
    yes: {heading: 'എനിക്ക് അറിയാം SHAIMA (SUKI) 🫶',sub: 'നീ എന്നും എന്റെ ROBLOX BESTFRIEND ആയി തുടരുമെന്ന് 🤝✨',},
    no: [
      {heading: 'അയ്യോ, ഇത്ര എളുപ്പത്തിൽ no എന്ന് പറയുമോ? 🤨',sub: 'ഒരിക്കൽ എങ്കിലും എനിക്കായി ഒന്ന് ആലോചിക്കൂ 🫠'},
      {heading: 'വെറുതെ random ആയി തീരുമാനിക്കണ്ട SHAIMA (SUKI) 😌',sub: 'നീ എന്റെ ROBLOX BESTFRIEND ആയി തന്നെ തുടരുമെന്ന് എനിക്ക് അറിയാം 👀'},
      {heading: 'SHAIMA (SUKI), ഇനി മതി..! 😤',sub: 'നീ എന്റെ ROBLOX BESTFRIEND ആണെന്ന് എനിക്ക് അറിയാം 💙'},
    ],
  },
  },
  
  en: {
    flag: '🌸', code: 'EN', name: 'English', nativeName: 'English',
    btnYes: 'Yes, always! ✨',
    btnNo: 'No way 🙈',
    footer: '~ Rohit is only YOUR ROBLOX BESTFRIEND ~',
    loaderText: 'Something special is coming...',
    celebrate: 'ROBLOX BESTFRIEND SOULMATES 🎉🎊💙✨',
    scenes: {
      initial: {
        heading: 'Will you be my ROBLOX BESTFRIEND? 💖',
        sub: '~ Say yes… be ROHIT\'s closest ROBLOX BESTFRIEND forever 🥂',
      },
      yes: {
        heading: 'I knew it, SHAIMA (SUKI) 🫶',
        sub: 'You\'ll always be my closest ROBLOX BESTFRIEND, forever & ever 🤝✨',
      },
      no: [
        { heading: 'Seriously? That easy to say no? 🤨', sub: 'Think about it once more for me 🫠' },
        { heading: 'Don\'t decide so fast, SHAIMA (SUKI) 😌', sub: 'I know you\'ll say yes eventually 👀' },
        { heading: 'SHAIMA (SUKI)… okay, that\'s enough! 😤', sub: 'You\'re MY ROBLOX BESTFRIEND and I already know it 💙' },
      ],
    },
  },
  te: {
    flag: '🌺', code: 'TE', name: 'Telugu', nativeName: 'తెలుగు',
    btnYes: 'అవును ఖచ్చితంగా ✨',
    btnNo: 'లేదు 🙈',
    footer: '~ రోహిత్ నీ ఒక్కదానికే ROBLOX BESTFRIEND ~',
    loaderText: 'ఏదో ప్రత్యేకమైనది వస్తోంది...',
    celebrate: 'ROBLOX BESTFRIEND SOULMATES 🎉🎊💙✨',
    scenes: {
      initial: {
        heading: 'నువ్వు నా ROBLOX BESTFRIEND గా ఉంటావా? 💖',
        sub: '~ yes na… ROHIT ki ROBLOX BESTFRIEND ga untanu 🥂',
      },
      yes: {
        heading: 'Nak telsu SHAIMA (SUKI) 🫶',
        sub: 'nuvvu na ROBLOX BESTFRIEND laga ellapaudu untav ani 🤝✨',
      },
      no: [
        { heading: 'Areyy antha easy ga noo antav enti? 🤨', sub: 'Okasari nakosam aalochinchu 🫠' },
        { heading: 'Edho random ga decide avvaku SHAIMA (SUKI) 😌', sub: 'nak telsu nuvvu na ROBLOX BESTFRIEND ga ustav ani 👀' },
        { heading: 'SHAIMA (SUKI) inka chalu..! 😤', sub: 'Nuvvu na ROBLOX BESTFRIEND ani nak telsu 💙' },
      ],
    },
  },

  hi: {
    flag: '🪷', code: 'HI', name: 'Hindi', nativeName: 'हिन्दी',
    btnYes: 'हाँ, हमेशा! ✨',
    btnNo: 'नहीं 🙈',
    footer: '~ रोहित सिर्फ तुम्हारा ROBLOX BESTFRIEND है ~',
    loaderText: 'कुछ ख़ास आ रहा है...',
    celebrate: 'ROBLOX BESTFRIEND SOULMATES तक 🎉🎊💙✨',
    scenes: {
      initial: {
        heading: 'क्या तुम मेरी ROBLOX BESTFRIEND बनोगी? 💖',
        sub: '~ हाँ बोलो… ROHIT की हमेशा की ROBLOX BESTFRIEND 🥂',
      },
      yes: {
        heading: 'मुझे पता था, SHAIMA (SUKI) 🫶',
        sub: 'तुम हमेशा मेरी सबसे करीबी ROBLOX BESTFRIEND रहोगी 🤝✨',
      },
      no: [
        { heading: 'अरे! इतनी आसानी से नहीं? 🤨', sub: 'एक बार मेरे लिए सोचो 🫠' },
        { heading: 'ऐसे जल्दी decide मत करो SHAIMA (SUKI) 😌', sub: 'मुझे पता है तुम हाँ बोलोगी 👀' },
        { heading: 'SHAIMA (SUKI) बस कर! 😤', sub: 'तुम मेरी ROBLOX BESTFRIEND हो, मुझे पता है 💙' },
      ],
    },
  },
  mr: {
    flag: '🌼', code: 'MR', name: 'Marathi', nativeName: 'मराठी',
    btnYes: 'हो नक्कीच! ✨',
    btnNo: 'नाही 🙈',
    footer: '~ रोहित फक्त तुझाच ROBLOX BESTFRIEND आहे ~',
    loaderText: 'काहीतरी खास येतंय...',
    celebrate: 'ROBLOX BESTFRIEND SOULMATES 🎉🎊💙✨',
    scenes: {
      initial: {
        heading: 'तू माझी ROBLOX BESTFRIEND होशील का? 💖',
        sub: '~ हो सांग… ROHIT ची forever ROBLOX BESTFRIEND 🥂',
      },
      yes: {
        heading: 'मला माहीत होतं SHAIMA (SUKI) 🫶',
        sub: 'तू नेहमीच माझी सगळ्यात जवळची ROBLOX BESTFRIEND राहशील 🤝✨',
      },
      no: [
        { heading: 'अगं! इतकं सहज नाही सांगायचं? 🤨', sub: 'एकदा माझ्यासाठी विचार कर 🫠' },
        { heading: 'असं लवकर ठरवू नकोस SHAIMA (SUKI) 😌', sub: 'मला माहीत आहे तू हो सांगशील 👀' },
        { heading: 'SHAIMA (SUKI) आता बास! 😤', sub: 'तू माझी ROBLOX BESTFRIEND आहेस, हे मला माहीत आहे 💙' },
      ],
    },
  },
  ja: {
    flag: '⛩️', code: 'JA', name: 'Japanese', nativeName: '日本語',
    btnYes: 'はい、いつも！✨',
    btnNo: 'いいえ 🙈',
    footer: '~ ロヒトはあなただけのROBLOX BESTFRIEND ~',
    loaderText: '特別なものがやってくる...',
    celebrate: 'ROBLOX BESTFRIEND から SOULMATES へ 🎉🎊💙✨',
    scenes: {
      initial: {
        heading: '僕のROBLOX BESTFRIENDになってくれる ?💖',
        sub: '〜 はいって言って…ROHITの永遠のROBLOX BESTFRIEND 🥂',
      },
      yes: {
        heading: 'わかってた、SHAIMA (SUKI) 🫶',
        sub: 'ずっとずっと大切なROBLOX BESTFRIENDだよ 🤝✨',
      },
      no: [
        { heading: 'え！そんなに簡単に？🤨', sub: 'もう一度だけ考えてみて 🫠' },
        { heading: 'そんなに急いで決めないで SHAIMA (SUKI) 😌', sub: '絶対にはいって言ってくれるよ 👀' },
        { heading: 'SHAIMA (SUKI)、もういいよ！😤', sub: 'あなたは私のROBLOX BESTFRIEND、それは知ってる 💙' },
      ],
    },
  },
  ur: {
    flag: '🌙', code: 'UR', name: 'Urdu', nativeName: 'اردو',
    btnYes: 'ہاں، ہمیشہ! ✨',
    btnNo: 'نہیں 🙈',
    footer: '~ روہت صرف آپ کا ROBLOX BESTFRIEND ہے ~',
    loaderText: 'کچھ خاص آ رہا ہے...',
    celebrate: 'ROBLOX BESTFRIEND سے SOULMATES تک 🎉🎊💙✨',
    scenes: {
      initial: {
        heading: 'کیا آپ میری ROBLOX BESTFRIEND بنیں گی؟ 💖',
        sub: '~ ہاں کہو… ROHIT کی ہمیشہ کی ROBLOX BESTFRIEND 🥂',
      },
      yes: {
        heading: 'مجھے معلوم تھا، SHAIMA (SUKI) 🫶',
        sub: 'آپ ہمیشہ میری قریب ترین ROBLOX BESTFRIEND رہیں گی 🤝✨',
      },
      no: [
        { heading: 'سچ میں؟ اتنی آسانی سے؟ 🤨', sub: 'ایک بار میرے لیے سوچیں 🫠' },
        { heading: 'ایسے جلدی فیصلہ مت کریں SHAIMA (SUKI) 😌', sub: 'مجھے یقین ہے آپ ہاں کہیں گی 👀' },
        { heading: 'SHAIMA (SUKI) بس کریں! 😤', sub: 'آپ میری ROBLOX BESTFRIEND ہیں، یہ مجھے معلوم ہے 💙' },
      ],
    },
  },
  fr: {
    flag: '🥐', code: 'FR', name: 'French', nativeName: 'Français',
    btnYes: 'Oui, toujours ! ✨',
    btnNo: 'Non 🙈',
    footer: '~ Rohit est ton seul ROBLOX BESTFRIEND ~',
    loaderText: 'Quelque chose de spécial arrive...',
    celebrate: 'D\'ROBLOX BESTFRIEND À SOULMATES 🎉🎊💙✨',
    scenes: {
      initial: {
        heading: 'Seras-tu mon ROBLOX BESTFRIEND ? 💖',
        sub: '~ Dis oui… pour être l\'ROBLOX BESTFRIEND de ROHIT pour toujours 🥂',
      },
      yes: {
        heading: 'Je le savais, SHAIMA (SUKI) 🫶',
        sub: 'Tu seras toujours mon ROBLOX BESTFRIEND le plus proche, pour toujours 🤝✨',
      },
      no: [
        { heading: 'Sérieusement ? Si facilement ? 🤨', sub: 'Réfléchis-y encore une fois pour moi 🫠' },
        { heading: 'Ne décide pas si vite, SHAIMA (SUKI) 😌', sub: 'Je sais que tu diras oui finalement 👀' },
        { heading: 'SHAIMA (SUKI)… ça suffit maintenant ! 😤', sub: 'Tu es mon ROBLOX BESTFRIEND et je le sais déjà 💙' },
      ],
    },
  },
  es: {
    flag: '🌹', code: 'ES', name: 'Spanish', nativeName: 'Español',
    btnYes: '¡Sí, siempre! ✨',
    btnNo: 'No 🙈',
    footer: '~ Rohit es solo TU ROBLOX BESTFRIEND ~',
    loaderText: 'Algo especial está llegando...',
    celebrate: '¡DE ROBLOX BESTFRIEND A SOULMATES! 🎉🎊💙✨',
    scenes: {
      initial: {
        heading: '¿Serás mi ROBLOX BESTFRIEND? 💖',
        sub: '~ Di que sí… sé el ROBLOX BESTFRIEND de ROHIT para siempre 🥂',
      },
      yes: {
        heading: 'Lo sabía, SHAIMA (SUKI) 🫶',
        sub: 'Siempre serás mi ROBLOX BESTFRIEND más cercana, para siempre 🤝✨',
      },
      no: [
        { heading: '¿En serio? ¿Tan fácil? 🤨', sub: 'Piénsalo una vez más por mí 🫠' },
        { heading: 'No decidas tan rápido, SHAIMA (SUKI) 😌', sub: 'Sé que al final dirás que sí 👀' },
        { heading: 'SHAIMA (SUKI)… ¡ya basta! 😤', sub: 'Eres mi ROBLOX BESTFRIEND y ya lo sé 💙' },
      ],
    },
  },
};

export const LANGUAGE_ORDER: Language[] = ['ml','te', 'en', 'hi', 'mr', 'ja', 'ur', 'fr', 'es'];

export const GIF_MAP: Record<string, string> = {
  initial: '/gif/1.gif',
  yes:     '/gif/5.gif',
  no0:     '/gif/2.gif',
  no1:     '/gif/3.gif',
  no2:     '/gif/4.gif',
};

export const FRIENDSHIP_EMOJIS = [
  '🤝','🫂','💙','👯','🫶','😎','😂','🥂','🔥',
  '✨','💪','💫','🎉','😄','🙌','🤗','🧡','💛',
  '💚','💜','🩵','🩷','💖','💞','💓','🧸','🎈',
  '🎮','☕','📸','🎶','🌈','⭐','😌','😜','🥹',
  '🌸','🌺','🎊','🍓',
];
