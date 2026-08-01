// ========================================
// SPLASH SCREEN - Th-tech
// Gestion de l'écran de démarrage
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Configuration
    const SPLASH_DURATION = 3500; // Durée d'affichage en millisecondes (3.5s)
    
    const splashScreen = document.querySelector('.splash-screen');
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('loadingText');
    const targetPage = 'Acceuil.html';
    
    // Tableau de messages de chargement
    const loadingMessages = [
        'Chargement...',
        'Préparation des ressources...',
        'Connexion au serveur...',
        'Finalisation...'
    ];
    
    let startTime = Date.now();
    let messageIndex = 0;
    
    // Animation de la barre de progression
    function animateProgressBar() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min((elapsed / SPLASH_DURATION) * 100, 100);
        
        // Mettre à jour la largeur de la barre
        progressBar.style.width = progress + '%';
        
        // Changer le message selon le progrès
        const newIndex = Math.min(
            Math.floor(progress / 25),
            loadingMessages.length - 1
        );
        
        if (newIndex !== messageIndex) {
            messageIndex = newIndex;
            progressText.style.opacity = '0';
            
            setTimeout(() => {
                progressText.textContent = loadingMessages[messageIndex];
                progressText.style.opacity = '1';
            }, 200);
        }
        
        // Continuer l'animation
        if (elapsed < SPLASH_DURATION) {
            requestAnimationFrame(animateProgressBar);
        }
    }
    
    // Démarrer l'animation
    requestAnimationFrame(animateProgressBar);
    
    // Fonction pour naviguer vers la page d'accueil
    function navigateToHome() {
        // Ajout de l'effet de sortie
        splashScreen.classList.add('fade-out');
        
        // Attendre la fin de l'animation puis rediriger
        setTimeout(() => {
            window.location.href = targetPage;
        }, 800); // Correspond à la durée de l'animation fade-out
    }
    
    // Gestionnaire principal - lancer la navigation après le temps défini
    setTimeout(() => {
        // Changer le message final
        progressText.textContent = 'Prêt !';
        progressBar.style.width = '100%';
        
        // Attendre un court instant pour voir "Prêt !" puis naviguer
        setTimeout(navigateToHome, 300);
        
    }, SPLASH_DURATION);
    
    // Optionnel : permettre de cliquer pour skipper l'animation
    splashScreen.addEventListener('click', function() {
        navigateToHome();
    });
    
    // Empêcher le retour en arrière après le splash screen
    window.addEventListener('load', function() {
        history.pushState(null, null, window.location.href);
        
        window.addEventListener('popstate', function() {
            history.pushState(null, null, window.location.href);
        });
    });
});

