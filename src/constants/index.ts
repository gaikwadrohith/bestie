import type { Language, LanguagePack } from '@/types';

export const LANGUAGE_PACKS: Record<Language, LanguagePack> = {
  te: {
    flag: '🌺', code: 'TE', name: 'Telugu', nativeName: 'తెలుగు',
    btnYes: 'అవును ఖచ్చితంగా ✨',
    btnNo: 'లేదు 🙈',
    footer: '~ రోహిత్ నీ ఒక్కదానికే బెస్టీ ~',
    loaderText: 'ఏదో ప్రత్యేకమైనది వస్తోంది...',
    celebrate: 'BEST FRIENDS FOREVER 🎉🎊💙✨',
    scenes: {
      initial: {
        heading: 'నువ్వు నా friend గా ఉంటావా? 💖',
        sub: '~ yes na… Avunu ROHIT ki bestie ga untanu 🥂',
      },
      yes: {
        heading: 'Nak telsu PRIYA (PIUUU) 🫶',
        sub: 'nuvvu na best friend laga ellapaudu untav ani 🤝✨',
      },
      no: [
        { heading: 'Areyy antha easy ga noo antav enti? 🤨', sub: 'Okasari nakosam aalochinchu 🫠' },
        { heading: 'Edho random ga decide avvaku PRIYA (PIUUU) 😌', sub: 'nak telsu nuvvu na bestie ga ustav ani 👀' },
        { heading: 'PRIYA (PIUUU) inka chalu..! 😤', sub: 'Nuvvu na bestie ani nak telsu 💙' },
      ],
    },
  },
  en: {
    flag: '🌸', code: 'EN', name: 'English', nativeName: 'English',
    btnYes: 'Yes, of course! ✨',
    btnNo: 'No way 🙈',
    footer: '~ Rohit is only YOUR bestie ~',
    loaderText: 'Loading something special for you...',
    celebrate: 'BEST FRIENDS FOREVER 🎉🎊💙✨',
    scenes: {
      initial: {
        heading: 'Will you be my best friend? 💖',
        sub: '~ Say yes… be ROHIT\'s bestie forever 🥂',
      },
      yes: {
        heading: 'I knew it, PRIYA (PIUUU) 🫶',
        sub: 'You\'ll always be my best friend, forever & ever 🤝✨',
      },
      no: [
        { heading: 'Seriously? That easy to say no? 🤨', sub: 'Think about it once more for me 🫠' },
        { heading: 'Don\'t decide randomly, PRIYA (PIUUU) 😌', sub: 'I know you\'ll say yes eventually 👀' },
        { heading: 'PRIYA (PIUUU)… okay, that\'s enough! 😤', sub: 'You\'re MY bestie and I already know it 💙' },
      ],
    },
  },
  hi: {
    flag: '🪷', code: 'HI', name: 'Hindi', nativeName: 'हिन्दी',
    btnYes: 'हाँ, बिल्कुल! ✨',
    btnNo: 'नहीं 🙈',
    footer: '~ रोहित सिर्फ तुम्हारा बेस्टी है ~',
    loaderText: 'कुछ ख़ास लोड हो रहा है...',
    celebrate: 'बेस्ट फ्रेंड्स फॉरएवर 🎉🎊💙✨',
    scenes: {
      initial: {
        heading: 'क्या तुम मेरी बेस्ट फ्रेंड बनोगी? 💖',
        sub: '~ हाँ बोलो… ROHIT की बेस्टी हमेशा के लिए 🥂',
      },
      yes: {
        heading: 'मुझे पता था, PRIYA (PIUUU) 🫶',
        sub: 'तुम हमेशा मेरी बेस्ट फ्रेंड रहोगी 🤝✨',
      },
      no: [
        { heading: 'अरे! इतनी आसानी से नहीं? 🤨', sub: 'एक बार मेरे लिए सोचो 🫠' },
        { heading: 'ऐसे random decide मत करो PRIYA (PIUUU) 😌', sub: 'मुझे पता है तुम हाँ बोलोगी 👀' },
        { heading: 'PRIYA (PIUUU) बस कर! 😤', sub: 'तुम मेरी बेस्टी हो, मुझे पता है 💙' },
      ],
    },
  },
  mr: {
    flag: '🌼', code: 'MR', name: 'Marathi', nativeName: 'मराठी',
    btnYes: 'हो नक्कीच! ✨',
    btnNo: 'नाही 🙈',
    footer: '~ रोहित फक्त तुझाच बेस्टी आहे ~',
    loaderText: 'काहीतरी खास लोड होतंय...',
    celebrate: 'बेस्ट फ्रेंड्स फॉरेव्हर 🎉🎊💙✨',
    scenes: {
      initial: {
        heading: 'तू माझी बेस्ट फ्रेंड होशील का? 💖',
        sub: '~ हो सांग… ROHIT ची forever बेस्टी 🥂',
      },
      yes: {
        heading: 'मला माहीत होतं PRIYA (PIUUU) 🫶',
        sub: 'तू नेहमीच माझी बेस्ट फ्रेंड राहशील 🤝✨',
      },
      no: [
        { heading: 'अगं! इतकं सहज नाही सांगायचं? 🤨', sub: 'एकदा माझ्यासाठी विचार कर 🫠' },
        { heading: 'असं random ठरवू नकोस PRIYA (PIUUU) 😌', sub: 'मला माहीत आहे तू हो सांगशील 👀' },
        { heading: 'PRIYA (PIUUU) आता बास! 😤', sub: 'तू माझी बेस्टी आहेस, हे मला माहीत आहे 💙' },
      ],
    },
  },
  ja: {
    flag: '⛩️', code: 'JA', name: 'Japanese', nativeName: '日本語',
    btnYes: 'はい、もちろん！✨',
    btnNo: 'いいえ 🙈',
    footer: '～ ロヒトはあなただけのベスティ ～',
    loaderText: '特別なものをロード中...',
    celebrate: 'ベスト・フレンズ・フォーエバー 🎉🎊💙✨',
    scenes: {
      initial: {
        heading: 'ベストフレンドになってくれる？💖',
        sub: '〜 はいって言って…ROHITの永遠のベスティ 🥂',
      },
      yes: {
        heading: 'わかってた、PRIYA (PIUUU) 🫶',
        sub: 'ずっとずっと大切なベストフレンドだよ 🤝✨',
      },
      no: [
        { heading: 'え！そんなに簡単に？🤨', sub: 'もう一度だけ考えてみて 🫠' },
        { heading: 'そんなに急いで決めないで PRIYA (PIUUU) 😌', sub: '絶対にはいって言ってくれるよ 👀' },
        { heading: 'PRIYA (PIUUU)、もういいよ！😤', sub: 'あなたは私のベスティ、それは知ってる 💙' },
      ],
    },
  },
  ur: {
    flag: '🌙', code: 'UR', name: 'Urdu', nativeName: 'اردو',
    btnYes: 'ہاں، بالکل! ✨',
    btnNo: 'نہیں 🙈',
    footer: '~ روہت صرف آپ کا بیسٹی ہے ~',
    loaderText: 'کچھ خاص لوڈ ہو رہا ہے...',
    celebrate: 'بیسٹ فرینڈز فاریور 🎉🎊💙✨',
    scenes: {
      initial: {
        heading: 'کیا آپ میری بہترین دوست بنیں گی؟ 💖',
        sub: '~ ہاں کہو… ROHIT کی ہمیشہ کی بیسٹی 🥂',
      },
      yes: {
        heading: 'مجھے معلوم تھا، PRIYA (PIUUU) 🫶',
        sub: 'آپ ہمیشہ میری بہترین دوست رہیں گی 🤝✨',
      },
      no: [
        { heading: 'سچ میں؟ اتنی آسانی سے؟ 🤨', sub: 'ایک بار میرے لیے سوچیں 🫠' },
        { heading: 'ایسے جلدی فیصلہ مت کریں PRIYA (PIUUU) 😌', sub: 'مجھے یقین ہے آپ ہاں کہیں گی 👀' },
        { heading: 'PRIYA (PIUUU) بس کریں! 😤', sub: 'آپ میری بیسٹی ہیں، یہ مجھے معلوم ہے 💙' },
      ],
    },
  },
  fr: {
    flag: '🥐', code: 'FR', name: 'French', nativeName: 'Français',
    btnYes: 'Oui, bien sûr ! ✨',
    btnNo: 'Non 🙈',
    footer: '~ Rohit est ton seul meilleur ami ~',
    loaderText: 'Quelque chose de spécial se charge...',
    celebrate: 'MEILLEURS AMIS POUR TOUJOURS 🎉🎊💙✨',
    scenes: {
      initial: {
        heading: 'Seras-tu ma meilleure amie ? 💖',
        sub: '~ Dis oui… pour être la bestie de ROHIT pour toujours 🥂',
      },
      yes: {
        heading: 'Je le savais, PRIYA (PIUUU) 🫶',
        sub: 'Tu seras toujours ma meilleure amie, pour toujours 🤝✨',
      },
      no: [
        { heading: 'Sérieusement ? Si facilement ? 🤨', sub: 'Réfléchis-y encore une fois pour moi 🫠' },
        { heading: 'Ne décide pas au hasard, PRIYA (PIUUU) 😌', sub: 'Je sais que tu diras oui finalement 👀' },
        { heading: 'PRIYA (PIUUU)… ça suffit maintenant ! 😤', sub: 'Tu es ma bestie et je le sais déjà 💙' },
      ],
    },
  },
  es: {
    flag: '🌹', code: 'ES', name: 'Spanish', nativeName: 'Español',
    btnYes: '¡Sí, claro! ✨',
    btnNo: 'No 🙈',
    footer: '~ Rohit es solo TU mejor amigo ~',
    loaderText: 'Cargando algo especial...',
    celebrate: '¡MEJORES AMIGOS PARA SIEMPRE! 🎉🎊💙✨',
    scenes: {
      initial: {
        heading: '¿Serás mi mejor amiga? 💖',
        sub: '~ Di que sí… sé la bestie de ROHIT para siempre 🥂',
      },
      yes: {
        heading: 'Lo sabía, PRIYA (PIUUU) 🫶',
        sub: 'Siempre serás mi mejor amiga, para siempre 🤝✨',
      },
      no: [
        { heading: '¿En serio? ¿Tan fácil? 🤨', sub: 'Piénsalo una vez más por mí 🫠' },
        { heading: 'No decidas al azar, PRIYA (PIUUU) 😌', sub: 'Sé que al final dirás que sí 👀' },
        { heading: 'PRIYA (PIUUU)… ¡ya basta! 😤', sub: 'Eres mi bestie y ya lo sé 💙' },
      ],
    },
  },
};

export const LANGUAGE_ORDER: Language[] = ['te', 'en', 'hi', 'mr', 'ja', 'ur', 'fr', 'es'];

export const GIF_MAP: Record<string, string> = {
  initial: '/gif/1.gif',
  yes: '/gif/5.gif',
  no0: '/gif/2.gif',
  no1: '/gif/3.gif',
  no2: '/gif/4.gif',
};

export const FRIENDSHIP_EMOJIS = [
  '🤝','🫂','💙','👯‍♂️','👯‍♀️','🫶','😎','😂','🥂','🔥',
  '🧠','✨','🐐','💪','💫','🎉','😄','😁','🙌','🤗',
  '🧡','💛','💚','💜','🩵','🩷','🤍','💖','💞','💓',
  '🧸','🎈','🧩','🎮','🍕','☕','📸','🎶','🌈','⭐',
  '😌','😜','😏','🤪','🥹','🫠','🫡','🫰','🌸','🌺',
];
