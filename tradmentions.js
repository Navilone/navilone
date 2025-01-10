  const translations = {
    en: {
        footitle1:"Navilone",
        footitle2:"Important information",
        footitle3:"All rights reserved",
        foo1:"Turn your ideas into successes with expert, tailor-made, results-oriented project management.",
        foo2:"Terms of use",
        foo3:"Privacy policy",

    },    
    
    fr: { 
        footitle1:"La société Navilone",
        footitle2:"Informations importantes",
        footitle3:"Tous droits réservés",
        foo1:"Transformez vos idées en succès grâce à une gestion de projet experte, sur-mesure et orientée résultats.",
        foo2:"Mentions légales",
        foo3:"Politique de confidentialité",

        

    },
  };
  
  function setLanguage(lang) {
    document.getElementById('footitle1').innerText = translations[lang].footitle1;
    document.getElementById('footitle2').innerText = translations[lang].footitle2;
    document.getElementById('footitle3').innerText = translations[lang].footitle3;
    document.getElementById('foo1').innerText = translations[lang].foo1;
    document.getElementById('foo2').innerText = translations[lang].foo2;
    document.getElementById('foo3').innerText = translations[lang].foo3;

  }
  
  // Langue par défaut
  setLanguage('en');
