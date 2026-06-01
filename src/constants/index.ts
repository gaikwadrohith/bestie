import type { Language, LanguagePack } from '@/types';

export const LANGUAGE_PACKS: Record<Language, LanguagePack> = {
  te: {
    flag: '🌺', code: 'TE', name: 'Telugu', nativeName: 'తెలుగు',
    btnYes: 'అవును ఖచ్చితంగా ✨',
    btnNo: 'లేదు 🙈',
    footer: '~ రోహిత్ నీ ఒక్కదానికే unknown ~',
    loaderText: 'ఏదో ప్రత్యేకమైనది వస్తోంది...',
    celebrate: 'UNKNOWN SOULMATES 🎉🎊💙✨',
    scenes: {
      initial: {
        heading: 'నువ్వు నా unknown గా ఉంటావా? 💖',
        sub: '~ yes na… ROHIT ki unknown ga untanu 🥂',
      },
      yes: {
        heading: 'Nak telsu PRIYA (PIUUU) 🫶',
        sub: 'nuvvu na unknown laga ellapaudu untav ani 🤝✨',
      },
      no: [
        { heading: 'Areyy antha easy ga noo antav enti? 🤨', sub: 'Okasari nakosam aalochinchu 🫠' },
        { heading: 'Edho random ga decide avvaku PRIYA (PIUUU) 😌', sub: 'nak telsu nuvvu na unknown ga ustav ani 👀' },
        { heading: 'PRIYA (PIUUU) inka chalu..! 😤', sub: 'Nuvvu na unknown ani nak telsu 💙' },
      ],
    },
  },
  en: {
    flag: '🌸', code: 'EN', name: 'English', nativeName: 'English',
    btnYes: 'Yes, always! ✨',
    btnNo: 'No way 🙈',
    footer: '~ Rohit is only YOUR unknown ~',
    loaderText: 'Something special is coming...',
    celebrate: 'UNKNOWN SOULMATES 🎉🎊💙✨',
    scenes: {
      initial: {
        heading: 'Will you be my unknown? 💖',
        sub: '~ Say yes… be ROHIT\'s closest unknown forever 🥂',
      },
      yes: {
        heading: 'I knew it, PRIYA (PIUUU) 🫶',
        sub: 'You\'ll always be my closest unknown, forever & ever 🤝✨',
      },
      no: [
        { heading: 'Seriously? That easy to say no? 🤨', sub: 'Think about it once more for me 🫠' },
        { heading: 'Don\'t decide so fast, PRIYA (PIUUU) 😌', sub: 'I know you\'ll say yes eventually 👀' },
        { heading: 'PRIYA (PIUUU)… okay, that\'s enough! 😤', sub: 'You\'re MY unknown and I already know it 💙' },
      ],
    },
  },
  hi: {
    flag: '🪷', code: 'HI', name: 'Hindi', nativeName: 'हिन्दी',
    btnYes: 'हाँ, हमेशा! ✨',
    btnNo: 'नहीं 🙈',
    footer: '~ रोहित सिर्फ तुम्हारा unknown है ~',
    loaderText: 'कुछ ख़ास आ रहा है...',
    celebrate: 'UNKNOWN SOULMATES तक 🎉🎊💙✨',
    scenes: {
      initial: {
        heading: 'क्या तुम मेरी unknown बनोगी? 💖',
        sub: '~ हाँ बोलो… ROHIT की हमेशा की unknown 🥂',
      },
      yes: {
        heading: 'मुझे पता था, PRIYA (PIUUU) 🫶',
        sub: 'तुम हमेशा मेरी सबसे करीबी unknown रहोगी 🤝✨',
      },
      no: [
        { heading: 'अरे! इतनी आसानी से नहीं? 🤨', sub: 'एक बार मेरे लिए सोचो 🫠' },
        { heading: 'ऐसे जल्दी decide मत करो PRIYA (PIUUU) 😌', sub: 'मुझे पता है तुम हाँ बोलोगी 👀' },
        { heading: 'PRIYA (PIUUU) बस कर! 😤', sub: 'तुम मेरी unknown हो, मुझे पता है 💙' },
      ],
    },
  },
  mr: {
    flag: '🌼', code: 'MR', name: 'Marathi', nativeName: 'मराठी',
    btnYes: 'हो नक्कीच! ✨',
    btnNo: 'नाही 🙈',
    footer: '~ रोहित फक्त तुझाच unknown आहे ~',
    loaderText: 'काहीतरी खास येतंय...',
    celebrate: 'UNKNOWN SOULMATES 🎉🎊💙✨',
    scenes: {
      initial: {
        heading: 'तू माझी unknown होशील का? 💖',
        sub: '~ हो सांग… ROHIT ची forever unknown 🥂',
      },
      yes: {
        heading: 'मला माहीत होतं PRIYA (PIUUU) 🫶',
        sub: 'तू नेहमीच माझी सगळ्यात जवळची unknown राहशील 🤝✨',
      },
      no: [
        { heading: 'अगं! इतकं सहज नाही सांगायचं? 🤨', sub: 'एकदा माझ्यासाठी विचार कर 🫠' },
        { heading: 'असं लवकर ठरवू नकोस PRIYA (PIUUU) 😌', sub: 'मला माहीत आहे तू हो सांगशील 👀' },
        { heading: 'PRIYA (PIUUU) आता बास! 😤', sub: 'तू माझी unknown आहेस, हे मला माहीत आहे 💙' },
      ],
    },
  },
  ja: {
    flag: '⛩️', code: 'JA', name: 'Japanese', nativeName: '日本語',
    btnYes: 'はい、いつも！✨',
    btnNo: 'いいえ 🙈',
    footer: '~ ロヒトはあなただけのunknown ~',
    loaderText: '特別なものがやってくる...',
    celebrate: 'UNKNOWN から SOULMATES へ 🎉🎊💙✨',
    scenes: {
      initial: {
        heading: '僕のunknownになってくれる ?💖',
        sub: '〜 はいって言って…ROHITの永遠のunknown 🥂',
      },
      yes: {
        heading: 'わかってた、PRIYA (PIUUU) 🫶',
        sub: 'ずっとずっと大切なunknownだよ 🤝✨',
      },
      no: [
        { heading: 'え！そんなに簡単に？🤨', sub: 'もう一度だけ考えてみて 🫠' },
        { heading: 'そんなに急いで決めないで PRIYA (PIUUU) 😌', sub: '絶対にはいって言ってくれるよ 👀' },
        { heading: 'PRIYA (PIUUU)、もういいよ！😤', sub: 'あなたは私のunknown、それは知ってる 💙' },
      ],
    },
  },
  ur: {
    flag: '🌙', code: 'UR', name: 'Urdu', nativeName: 'اردو',
    btnYes: 'ہاں، ہمیشہ! ✨',
    btnNo: 'نہیں 🙈',
    footer: '~ روہت صرف آپ کا unknown ہے ~',
    loaderText: 'کچھ خاص آ رہا ہے...',
    celebrate: 'UNKNOWN سے SOULMATES تک 🎉🎊💙✨',
    scenes: {
      initial: {
        heading: 'کیا آپ میری unknown بنیں گی؟ 💖',
        sub: '~ ہاں کہو… ROHIT کی ہمیشہ کی unknown 🥂',
      },
      yes: {
        heading: 'مجھے معلوم تھا، PRIYA (PIUUU) 🫶',
        sub: 'آپ ہمیشہ میری قریب ترین unknown رہیں گی 🤝✨',
      },
      no: [
        { heading: 'سچ میں؟ اتنی آسانی سے؟ 🤨', sub: 'ایک بار میرے لیے سوچیں 🫠' },
        { heading: 'ایسے جلدی فیصلہ مت کریں PRIYA (PIUUU) 😌', sub: 'مجھے یقین ہے آپ ہاں کہیں گی 👀' },
        { heading: 'PRIYA (PIUUU) بس کریں! 😤', sub: 'آپ میری unknown ہیں، یہ مجھے معلوم ہے 💙' },
      ],
    },
  },
  fr: {
    flag: '🥐', code: 'FR', name: 'French', nativeName: 'Français',
    btnYes: 'Oui, toujours ! ✨',
    btnNo: 'Non 🙈',
    footer: '~ Rohit est ton seul unknown ~',
    loaderText: 'Quelque chose de spécial arrive...',
    celebrate: 'D\'UNKNOWN À SOULMATES 🎉🎊💙✨',
    scenes: {
      initial: {
        heading: 'Seras-tu mon unknown ? 💖',
        sub: '~ Dis oui… pour être l\'unknown de ROHIT pour toujours 🥂',
      },
      yes: {
        heading: 'Je le savais, PRIYA (PIUUU) 🫶',
        sub: 'Tu seras toujours mon unknown le plus proche, pour toujours 🤝✨',
      },
      no: [
        { heading: 'Sérieusement ? Si facilement ? 🤨', sub: 'Réfléchis-y encore une fois pour moi 🫠' },
        { heading: 'Ne décide pas si vite, PRIYA (PIUUU) 😌', sub: 'Je sais que tu diras oui finalement 👀' },
        { heading: 'PRIYA (PIUUU)… ça suffit maintenant ! 😤', sub: 'Tu es mon unknown et je le sais déjà 💙' },
      ],
    },
  },
  es: {
    flag: '🌹', code: 'ES', name: 'Spanish', nativeName: 'Español',
    btnYes: '¡Sí, siempre! ✨',
    btnNo: 'No 🙈',
    footer: '~ Rohit es solo TU unknown ~',
    loaderText: 'Algo especial está llegando...',
    celebrate: '¡DE UNKNOWN A SOULMATES! 🎉🎊💙✨',
    scenes: {
      initial: {
        heading: '¿Serás mi unknown? 💖',
        sub: '~ Di que sí… sé el unknown de ROHIT para siempre 🥂',
      },
      yes: {
        heading: 'Lo sabía, PRIYA (PIUUU) 🫶',
        sub: 'Siempre serás mi unknown más cercana, para siempre 🤝✨',
      },
      no: [
        { heading: '¿En serio? ¿Tan fácil? 🤨', sub: 'Piénsalo una vez más por mí 🫠' },
        { heading: 'No decidas tan rápido, PRIYA (PIUUU) 😌', sub: 'Sé que al final dirás que sí 👀' },
        { heading: 'PRIYA (PIUUU)… ¡ya basta! 😤', sub: 'Eres mi unknown y ya lo sé 💙' },
      ],
    },
  },
};

export const LANGUAGE_ORDER: Language[] = ['te', 'en', 'hi', 'mr', 'ja', 'ur', 'fr', 'es'];

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
