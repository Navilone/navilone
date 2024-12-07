const translations = {
    en: {
      home:"Home",
      about: "About",
      news:"News", 
    },
    
    fr: {
      home:"Accueil",
      about: "A propos",
      news:"Articles"

    },
  };
  
  function setLanguage(lang) {
    document.getElementById('home').innerText = translations[lang].home;
    document.getElementById('about').innerText = translations[lang].about;
    document.getElementById('news').innerText = translations[lang].news;

  }
  
  // Langue par défaut
  setLanguage('en');
  
