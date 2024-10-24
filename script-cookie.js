document.addEventListener("DOMContentLoaded", function(){
    const cookieBanner = document.getElementById("cookie-banner")
    const acceptButton = document.getElementById("accept-cookie")
    
    function executeScripts(){
        console.log("Les scripts sont déclenchés")
    
    }

    if(localStorage.getItem('cookiesAccepted') === 'true'){
        cookiesBanner.style.display = "none";
        executeScripts();
    }

    acceptButton.addEventListener('click', function(){
        localStorage.setItem('cookiesAccept', 'true');
        cookieBanner.style.display = "none"; 
        executeScripts()
    })


})