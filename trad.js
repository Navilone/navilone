const translations = {
    en: {
      title: "Welcome",
      description: "This is an example site",
      home:"Home",
      about: "About",
      news:"News", 
    },
    
    fr: {
      title: "Bienvenue",
      description: "Ceci est un exemple de site",
      home:"Accueil",
      about: "A propos",
      news:"Articles"

    },
  };
  
  function setLanguage(lang) {
    document.getElementById('title').innerText = translations[lang].title;
    document.getElementById('description').innerText = translations[lang].description;
    document.getElementById('home').innerText = translations[lang].home;
    document.getElementById('about').innerText = translations[lang].about;
    document.getElementById('news').innerText = translations[lang].news;
    document.getElementById('about').innerText = translations[lang].about;




  }
  
  // Langue par défaut
  setLanguage('en');
  
