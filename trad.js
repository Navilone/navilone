const translations = {
    en: {
      home:"Home",
      about:"About",
      news:"News", 
      welcome:"Welcome to the website of",
      expert:"We are expert in",
      contacten:"Contact us", 

    },
    
    fr: {
      home:"Accueil",
      about: "A propos",
      news:"Articles",
      welcome:"Bienvenue sur le site de",
      expert:"Nous sommes experts en",
      contacten:"Contactez-moi",
        
    },
  };
  
  function setLanguage(lang) {
    document.getElementById('homee').innerText = translations[lang].home;
    document.getElementById('about').innerText = translations[lang].about;
    document.getElementById('news').innerText = translations[lang].news;
    document.getElementById('welcome').innerText = translations[lang].welcome;
    document.getElementById('expert').innerText = translations[lang].expert;
    document.getElementById('contacten').innerText = translations[lang].contacten;


  }
  
  // Langue par défaut
  setLanguage('en');