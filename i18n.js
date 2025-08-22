const supportedLanguages = ['es','en','fr','de','zh','ko'];

function detectLang(){
  const lang = (navigator.languages && navigator.languages[0]) || navigator.language || 'en';
  const lower = lang.toLowerCase();
  return supportedLanguages.find(l => lower.startsWith(l)) || 'en';
}

const translations = {
  en:{
    index:{
      title:'Japanify – Learn Japanese with mini-games',
      welcome:'Welcome to Japanify',
      intro:'Learn Japanese in a fun way with mini-games that adapt to your pace.',
      cta:'Get it on Google Play',
      privacy:'Privacy Policy',
      portfolioPrompt:'Visit my portfolio<br><a href="https://fernandopereirasalvador.com" target="_blank" rel="noopener">fernandopereirasalvador.com</a>',
      close:'Close'
    },
    privacy:{
      metaTitle:'Privacy Policy – Japanify',
      title:'Privacy Policy',
      app:'<strong>App:</strong> Japanify',
      developer:'<strong>Developer:</strong> Fernando Jose Pereira Salvador',
      dataTitle:'Data We Collect',
      email:'Email address (to create an account)',
      profile:'Profile photos (optional)',
      voice:'Voice recordings (for exercises)',
      analytics:'Analytics data (Firebase Analytics, Crashlytics)',
      usageTitle:'How We Use the Data',
      usageText:'The data is used only to provide educational features in the app and improve user experience. We do not share this information with third parties.',
      contactTitle:'Contact',
      contactText:'If you want to delete your account or data, you can write to: <a href="mailto:fernandopereirasalvador@gmail.com">fernandopereirasalvador@gmail.com</a>',
      back:'Back to home'
    }
  },
  es:{
    index:{
      title:'Japanify – Aprende japonés con minijuegos',
      welcome:'Bienvenido a Japanify',
      intro:'Aprende japonés de forma divertida con minijuegos que se adaptan a tu ritmo.',
      cta:'Disponible en Google Play',
      privacy:'Política de privacidad',
      portfolioPrompt:'Visita mi portafolio<br><a href="https://fernandopereirasalvador.com" target="_blank" rel="noopener">fernandopereirasalvador.com</a>',
      close:'Cerrar'
    },
    privacy:{
      metaTitle:'Política de privacidad – Japanify',
      title:'Política de privacidad',
      app:'<strong>App:</strong> Japanify',
      developer:'<strong>Desarrollador:</strong> Fernando Jose Pereira Salvador',
      dataTitle:'Datos que recopilamos',
      email:'Correo electrónico (para crear una cuenta)',
      profile:'Fotos de perfil (opcional)',
      voice:'Grabaciones de voz (para ejercicios)',
      analytics:'Datos analíticos (Firebase Analytics, Crashlytics)',
      usageTitle:'Cómo usamos los datos',
      usageText:'Los datos se usan únicamente para proporcionar funcionalidades educativas en la app y mejorar la experiencia del usuario. No compartimos esta información con terceros.',
      contactTitle:'Contacto',
      contactText:'Si deseas eliminar tu cuenta o tus datos, puedes escribir a: <a href="mailto:fernandopereirasalvador@gmail.com">fernandopereirasalvador@gmail.com</a>',
      back:'Volver al inicio'
    }
  },
  fr:{
    index:{
      title:'Japanify – Apprenez le japonais avec des mini-jeux',
      welcome:'Bienvenue sur Japanify',
      intro:'Apprenez le japonais de manière ludique grâce à des mini-jeux adaptés à votre rythme.',
      cta:'Disponible sur Google Play',
      privacy:'Politique de confidentialité',
      portfolioPrompt:'Visitez mon portfolio<br><a href="https://fernandopereirasalvador.com" target="_blank" rel="noopener">fernandopereirasalvador.com</a>',
      close:'Fermer'
    },
    privacy:{
      metaTitle:'Politique de confidentialité – Japanify',
      title:'Politique de confidentialité',
      app:'<strong>App :</strong> Japanify',
      developer:'<strong>Développeur :</strong> Fernando Jose Pereira Salvador',
      dataTitle:'Données que nous collectons',
      email:'Adresse e-mail (pour créer un compte)',
      profile:'Photos de profil (optionnel)',
      voice:'Enregistrements vocaux (pour les exercices)',
      analytics:'Données analytiques (Firebase Analytics, Crashlytics)',
      usageTitle:'Comment nous utilisons les données',
      usageText:'Les données sont utilisées uniquement pour fournir des fonctionnalités éducatives dans l\'application et améliorer l\'expérience utilisateur. Nous ne partageons pas ces informations avec des tiers.',
      contactTitle:'Contact',
      contactText:'Si vous souhaitez supprimer votre compte ou vos données, vous pouvez écrire à : <a href="mailto:fernandopereirasalvador@gmail.com">fernandopereirasalvador@gmail.com</a>',
      back:"Retour à l'accueil"
    }
  },
  de:{
    index:{
      title:'Japanify – Japanisch lernen mit Minispielen',
      welcome:'Willkommen bei Japanify',
      intro:'Lerne Japanisch auf unterhaltsame Weise mit Minispielen, die sich deinem Tempo anpassen.',
      cta:'Verfügbar bei Google Play',
      privacy:'Datenschutzrichtlinie',
      portfolioPrompt:'Besuche mein Portfolio<br><a href="https://fernandopereirasalvador.com" target="_blank" rel="noopener">fernandopereirasalvador.com</a>',
      close:'Schließen'
    },
    privacy:{
      metaTitle:'Datenschutzrichtlinie – Japanify',
      title:'Datenschutzrichtlinie',
      app:'<strong>App:</strong> Japanify',
      developer:'<strong>Entwickler:</strong> Fernando Jose Pereira Salvador',
      dataTitle:'Daten, die wir sammeln',
      email:'E-Mail-Adresse (zur Kontoerstellung)',
      profile:'Profilfotos (optional)',
      voice:'Sprachaufnahmen (für Übungen)',
      analytics:'Analysedaten (Firebase Analytics, Crashlytics)',
      usageTitle:'Wie wir die Daten verwenden',
      usageText:'Die Daten werden nur verwendet, um Bildungsfunktionen in der App bereitzustellen und die Benutzererfahrung zu verbessern. Wir geben diese Informationen nicht an Dritte weiter.',
      contactTitle:'Kontakt',
      contactText:'Wenn Sie Ihr Konto oder Ihre Daten löschen möchten, schreiben Sie an: <a href="mailto:fernandopereirasalvador@gmail.com">fernandopereirasalvador@gmail.com</a>',
      back:'Zurück zur Startseite'
    }
  },
  zh:{
    index:{
      title:'Japanify – 用小游戏学习日语',
      welcome:'欢迎来到 Japanify',
      intro:'通过适合您节奏的小游戏以有趣的方式学习日语。',
      cta:'在 Google Play 上获取',
      privacy:'隐私政策',
      portfolioPrompt:'访问我的作品集<br><a href="https://fernandopereirasalvador.com" target="_blank" rel="noopener">fernandopereirasalvador.com</a>',
      close:'关闭'
    },
    privacy:{
      metaTitle:'隐私政策 – Japanify',
      title:'隐私政策',
      app:'<strong>应用：</strong> Japanify',
      developer:'<strong>开发者：</strong> Fernando Jose Pereira Salvador',
      dataTitle:'我们收集的数据',
      email:'电子邮件地址（用于创建账号）',
      profile:'个人资料照片（可选）',
      voice:'语音录音（用于练习）',
      analytics:'分析数据（Firebase Analytics、Crashlytics）',
      usageTitle:'我们如何使用数据',
      usageText:'数据仅用于提供应用中的教育功能并改善用户体验。我们不会与第三方共享这些信息。',
      contactTitle:'联系',
      contactText:'如果您希望删除账户或数据，可以写信至：<a href="mailto:fernandopereirasalvador@gmail.com">fernandopereirasalvador@gmail.com</a>',
      back:'返回主页'
    }
  },
  ko:{
    index:{
      title:'Japanify – 미니게임으로 일본어 배우기',
      welcome:'Japanify에 오신 것을 환영합니다',
      intro:'미니게임을 통해 재미있게 일본어를 배우세요. 게임은 당신의 속도에 맞춰집니다.',
      cta:'Google Play에서 이용 가능',
      privacy:'개인정보 처리방침',
      portfolioPrompt:'내 포트폴리오 방문<br><a href="https://fernandopereirasalvador.com" target="_blank" rel="noopener">fernandopereirasalvador.com</a>',
      close:'닫기'
    },
    privacy:{
      metaTitle:'개인정보 처리방침 – Japanify',
      title:'개인정보 처리방침',
      app:'<strong>앱:</strong> Japanify',
      developer:'<strong>개발자:</strong> Fernando Jose Pereira Salvador',
      dataTitle:'수집하는 데이터',
      email:'이메일 주소(계정 생성용)',
      profile:'프로필 사진(선택 사항)',
      voice:'음성 녹음(연습용)',
      analytics:'분석 데이터(Firebase Analytics, Crashlytics)',
      usageTitle:'데이터 사용 방법',
      usageText:'데이터는 앱의 교육 기능을 제공하고 사용자 경험을 향상시키는 데만 사용됩니다. 우리는 이 정보를 제3자와 공유하지 않습니다.',
      contactTitle:'문의',
      contactText:'계정이나 데이터를 삭제하려면 다음 주소로 메일을 보내주세요: <a href="mailto:fernandopereirasalvador@gmail.com">fernandopereirasalvador@gmail.com</a>',
      back:'홈으로 돌아가기'
    }
  }
};

function applyTranslations(page){
  const lang = detectLang();
  document.documentElement.lang = lang;
  const dict = translations[lang][page];
  Object.keys(dict).forEach(key => {
    document.querySelectorAll(`[data-i18n="${key}"]`).forEach(el => {
      el.innerHTML = dict[key];
    });
  });
}

