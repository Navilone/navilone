const translations = {
    en: {
        home:"Home",
        about:"About",
        news:"News", 
        welcome:"Welcome to the website of",
        expert:"We are expert in",
        contacten:"Contact us", 
        art1tit:"Business advisory",
        art1tex:"We provide consulting services in project and management that fulfill your company's needs",
        art2tit:"Management tools",
        art2tex:"We help you manage your projects through cutting edge technologies such as Power Platfom and Dynamics 365",
        art3tit:"Trainings",
        art3tex:"We train and support your teams using our own methodologies",

    },    
    
    fr: { 
        home:"Accueil",
        about: "A propos",
        news:"Articles",
        welcome:"Bienvenue sur le site de",
        expert:"Nous sommes experts en",
        contacten:"Contactez-moi",
        art1tit:"Conseil pour PME",
        art1tex:"Nous proposons des services de conseil en gestion de projet qui répondent aux besoins spécifiques de votre entreprise.",
        art2tit:"Outils de gestion",
        art2tex:"Nous mettons en place les outils nécessaires pour la gestion de vos projets avec Powerplateform et Dynamics365.",
        art3tit:"Formations",
        art3tex:"Nous formons et suivons les collaborateurs pour utiliser les outils de manière optimales que nous vous avons mis en place.",

        
    },
  };
  
  function setLanguage(lang) {
    document.getElementById('homee').innerText = translations[lang].home;
    document.getElementById('about').innerText = translations[lang].about;
    document.getElementById('news').innerText = translations[lang].news;
    document.getElementById('welcome').innerText = translations[lang].welcome;
    document.getElementById('expert').innerText = translations[lang].expert;
    document.getElementById('contacten').innerText = translations[lang].contacten;
    document.getElementById('art1tit').innerText = translations[lang].art1tit;
    document.getElementById('art1tex').innerText = translations[lang].art1tex;
    document.getElementById('art2tit').innerText = translations[lang].art2tit;
    document.getElementById('art2tex').innerText = translations[lang].art2tex;
    document.getElementById('art3tit').innerText = translations[lang].art3tit;
    document.getElementById('art3tex').innerText = translations[lang].art3tex;
      


  }
  
  // Langue par défaut
  setLanguage('en');
