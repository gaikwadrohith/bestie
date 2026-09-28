import type { Language, LanguagePack } from '@/types';

export const NAME =
  (typeof window !== 'undefined' &&
    new URLSearchParams(window.location.search).get('name')) ||
  'SHAIMA (SUKI)';

export const LANGUAGE_PACKS: Record<Language, LanguagePack> = {
  ml: {
    flag: '🌺', code: 'ML', name: 'Malayalam', nativeName: 'മലയാളം',
    btnYes: 'അതെ, തീർച്ചയായും 😏✨',
    btnNo: 'ഇല്ല 🙈',
    footer: '~ റോഹിത് നിനക്ക് മാത്രം സ്വന്തം 😘 ~',
    loaderText: 'നിന്റെ ഹൃദയം കവരാൻ ഒരുങ്ങുന്നു...',
    celebrate: 'ഇനി ഒഫീഷ്യൽ ആണ് 🎉🎊💘✨',
    scenes: {
      initial: {
        heading: 'നീ എന്റേതാകുമോ? 💖',
        sub: '~ yes na… ROHIT എന്നും നിന്റേത് മാത്രം 🥂',
      },
      yes: {
        heading: 'എനിക്ക് അറിയാമായിരുന്നു ' + NAME + ' 😏💘',
        sub: 'നീ എന്റെ ദിവസം മനോഹരമാക്കി… ഇനി നിന്നെ വിടില്ല 🥂✨',
      },
      no: [
        { heading: 'അയ്യോ, ഇത്ര പെട്ടെന്ന് no പറയുമോ? 🥺', sub: 'ഒരിക്കൽ കൂടി എനിക്കായി ആലോചിക്കൂ 🫠' },
        { heading: 'ജാഡ കാണിക്കണ്ട ' + NAME + ' 😌', sub: 'നീ yes പറയുമെന്ന് നമ്മൾ രണ്ടുപേർക്കും അറിയാം 👀' },
        { heading: NAME + ', ഇനി മതി..! 😤', sub: 'നീ ഇതിനകം എന്റേതാണ്, Yes അമർത്തൂ 💙' },
      ],
    },
  },

  en: {
    flag: '🌸', code: 'EN', name: 'English', nativeName: 'English',
    btnYes: 'Yes, obviously 😏✨',
    btnNo: 'No way 🙈',
    footer: '~ Rohit is only yours, and you know it 😘 ~',
    loaderText: 'Getting ready to steal your heart...',
    celebrate: 'IT\'S OFFICIAL 🎉🎊💘✨',
    scenes: {
      initial: {
        heading: 'Will you be mine? 💖',
        sub: '~ Say yes… ROHIT promises to be worth it 🥂',
      },
      yes: {
        heading: 'I knew it, ' + NAME + ' 😏💘',
        sub: 'You just made my whole day… and I\'m not letting you go now 🥂✨',
      },
      no: [
        { heading: 'Aww, that hurt… try again? 🥺', sub: 'Come on, that\'s not the answer I was flirting for 🫠' },
        { heading: 'Don\'t play hard to get, ' + NAME + ' 😌', sub: 'We both know you\'re gonna say yes 👀' },
        { heading: NAME + '… okay, that\'s enough! 😤', sub: 'You\'re already mine, just tap Yes 💙' },
      ],
    },
  },

  te: {
    flag: '🌺', code: 'TE', name: 'Telugu', nativeName: 'తెలుగు',
    btnYes: 'అవును, తప్పకుండా 😏✨',
    btnNo: 'లేదు 🙈',
    footer: '~ రోహిత్ నీకు మాత్రమే సొంతం 😘 ~',
    loaderText: 'నీ మనసు దొంగిలించడానికి రెడీ అవుతున్నా...',
    celebrate: 'ఇప్పుడు ఆఫీషియల్ 🎉🎊💘✨',
    scenes: {
      initial: {
        heading: 'నువ్వు నా దానివి అవుతావా? 💖',
        sub: '~ yes na… ROHIT eppudu nee vaadey 🥂',
      },
      yes: {
        heading: 'Nak telsu ' + NAME + ' 😏💘',
        sub: 'nuvvu naa roju ni special chesav… ippudu ninnu vadhalanu 🥂✨',
      },
      no: [
        { heading: 'Areyy appude noo antava? 🥺', sub: 'Okasari nakosam aalochinchu 🫠' },
        { heading: 'Nakhralu cheyyaku ' + NAME + ' 😌', sub: 'manam iddaram ki telsu nuvvu yes antav ani 👀' },
        { heading: NAME + ' inka chalu..! 😤', sub: 'Nuvvu already naa dhaanivi, Yes nokku 💙' },
      ],
    },
  },

  hi: {
    flag: '🪷', code: 'HI', name: 'Hindi', nativeName: 'हिन्दी',
    btnYes: 'हाँ, बिल्कुल! 😏✨',
    btnNo: 'नहीं 🙈',
    footer: '~ रोहित सिर्फ तुम्हारा है 😘 ~',
    loaderText: 'तुम्हारा दिल चुराने की तैयारी हो रही है...',
    celebrate: 'अब तो ऑफिशियल है 🎉🎊💘✨',
    scenes: {
      initial: {
        heading: 'क्या तुम मेरी बनोगी? 💖',
        sub: '~ हाँ बोलो… ROHIT हमेशा तुम्हारा रहेगा 🥂',
      },
      yes: {
        heading: 'मुझे पता था, ' + NAME + ' 😏💘',
        sub: 'तुमने मेरा दिन बना दिया… अब तुम्हें जाने नहीं दूँगा 🥂✨',
      },
      no: [
        { heading: 'अरे! इतनी जल्दी ना? 🥺', sub: 'एक बार फिर सोचो, मेरे लिए 🫠' },
        { heading: 'नखरे मत दिखाओ ' + NAME + ' 😌', sub: 'हम दोनों जानते हैं तुम हाँ ही बोलोगी 👀' },
        { heading: NAME + ' बस कर! 😤', sub: 'तुम तो पहले से मेरी हो, बस Yes दबा दो 💙' },
      ],
    },
  },

  mr: {
    flag: '🌼', code: 'MR', name: 'Marathi', nativeName: 'मराठी',
    btnYes: 'हो, अर्थात! 😏✨',
    btnNo: 'नाही 🙈',
    footer: '~ रोहित फक्त तुझाच आहे 😘 ~',
    loaderText: 'तुझं मन जिंकायची तयारी सुरू आहे...',
    celebrate: 'आता ऑफिशियल आहे 🎉🎊💘✨',
    scenes: {
      initial: {
        heading: 'तू माझी होशील का? 💖',
        sub: '~ हो सांग… ROHIT कायम तुझाच 🥂',
      },
      yes: {
        heading: 'मला माहीत होतं ' + NAME + ' 😏💘',
        sub: 'तू माझा दिवस बनवलास… आता तुला जाऊ देणार नाही 🥂✨',
      },
      no: [
        { heading: 'अरेरे! इतक्या लवकर नाही? 🥺', sub: 'एकदा माझ्यासाठी परत विचार कर 🫠' },
        { heading: 'नखरे करू नकोस ' + NAME + ' 😌', sub: 'आपल्या दोघांना माहीत आहे तू हो म्हणणार 👀' },
        { heading: NAME + ' आता बास! 😤', sub: 'तू आधीच माझी आहेस, फक्त Yes दाब 💙' },
      ],
    },
  },

  ja: {
    flag: '⛩️', code: 'JA', name: 'Japanese', nativeName: '日本語',
    btnYes: 'はい、もちろん！😏✨',
    btnNo: 'いいえ 🙈',
    footer: '~ ロヒトはあなただけのもの 😘 ~',
    loaderText: 'あなたの心を奪う準備中...',
    celebrate: 'これで正式に決まり 🎉🎊💘✨',
    scenes: {
      initial: {
        heading: '僕のものになってくれる？💖',
        sub: '〜 はいって言って…ROHITはずっとあなただけ 🥂',
      },
      yes: {
        heading: 'わかってた、' + NAME + ' 😏💘',
        sub: '今日を最高の日にしてくれた…もう離さないよ 🥂✨',
      },
      no: [
        { heading: 'え、そんなに早く？🥺', sub: 'もう一度だけ考えてみて 🫠' },
        { heading: 'ツンツンしないで ' + NAME + ' 😌', sub: '本当は「はい」って言うって、二人とも知ってる 👀' },
        { heading: NAME + '、もういいよ！😤', sub: 'もう僕のものなんだから、「はい」を押して 💙' },
      ],
    },
  },

  ur: {
    flag: '🌙', code: 'UR', name: 'Urdu', nativeName: 'اردو',
    btnYes: 'ہاں، بالکل! 😏✨',
    btnNo: 'نہیں 🙈',
    footer: '~ روہت صرف آپ کا ہے 😘 ~',
    loaderText: 'آپ کا دل چرانے کی تیاری ہو رہی ہے...',
    celebrate: 'اب یہ آفیشل ہے 🎉🎊💘✨',
    scenes: {
      initial: {
        heading: 'کیا آپ میری بنیں گی؟ 💖',
        sub: '~ ہاں کہو… ROHIT ہمیشہ آپ کا رہے گا 🥂',
      },
      yes: {
        heading: 'مجھے معلوم تھا، ' + NAME + ' 😏💘',
        sub: 'آپ نے میرا دن بنا دیا… اب آپ کو جانے نہیں دوں گا 🥂✨',
      },
      no: [
        { heading: 'ارے! اتنی جلدی نہیں؟ 🥺', sub: 'ایک بار میرے لیے پھر سوچیں 🫠' },
        { heading: 'نخرے مت دکھائیں ' + NAME + ' 😌', sub: 'ہم دونوں جانتے ہیں آپ ہاں ہی کہیں گی 👀' },
        { heading: NAME + ' بس کریں! 😤', sub: 'آپ تو پہلے ہی میری ہیں، بس Yes دبا دیں 💙' },
      ],
    },
  },

  fr: {
    flag: '🥐', code: 'FR', name: 'French', nativeName: 'Français',
    btnYes: 'Oui, évidemment ! 😏✨',
    btnNo: 'Non 🙈',
    footer: '~ Rohit est rien qu\'à toi 😘 ~',
    loaderText: 'Je prépare de quoi voler ton cœur...',
    celebrate: 'C\'EST OFFICIEL 🎉🎊💘✨',
    scenes: {
      initial: {
        heading: 'Voudras-tu être à moi ? 💖',
        sub: '~ Dis oui… ROHIT sera à toi pour toujours 🥂',
      },
      yes: {
        heading: 'Je le savais, ' + NAME + ' 😏💘',
        sub: 'Tu as rendu ma journée parfaite… je ne te laisse plus partir 🥂✨',
      },
      no: [
        { heading: 'Aïe, si vite ? 🥺', sub: 'Réfléchis-y encore une fois pour moi 🫠' },
        { heading: 'Ne fais pas ta difficile, ' + NAME + ' 😌', sub: 'On sait tous les deux que tu diras oui 👀' },
        { heading: NAME + '… ça suffit maintenant ! 😤', sub: 'Tu es déjà à moi, appuie sur Oui 💙' },
      ],
    },
  },

  es: {
    flag: '🌹', code: 'ES', name: 'Spanish', nativeName: 'Español',
    btnYes: '¡Sí, obvio! 😏✨',
    btnNo: 'No 🙈',
    footer: '~ Rohit es solo tuyo 😘 ~',
    loaderText: 'Preparando algo para robarte el corazón...',
    celebrate: '¡AHORA ES OFICIAL! 🎉🎊💘✨',
    scenes: {
      initial: {
        heading: '¿Serás mía? 💖',
        sub: '~ Di que sí… ROHIT será tuyo para siempre 🥂',
      },
      yes: {
        heading: 'Lo sabía, ' + NAME + ' 😏💘',
        sub: 'Me hiciste el día… y ya no te dejo ir 🥂✨',
      },
      no: [
        { heading: 'Ay, ¿tan rápido? 🥺', sub: 'Piénsalo una vez más por mí 🫠' },
        { heading: 'No te hagas la difícil, ' + NAME + ' 😌', sub: 'Los dos sabemos que dirás que sí 👀' },
        { heading: NAME + '… ¡ya basta! 😤', sub: 'Ya eres mía, solo pulsa Sí 💙' },
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