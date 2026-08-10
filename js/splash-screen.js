// ========================================
// SPLASH SCREEN - Th-tech
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    'use strict';
    
    // Configuration (Total duration under 5s)
    const SPLASH_DURATION = 3500; // 3.5s + 0.6s exit = ~4.1s
    
    const splashScreen = document.querySelector('.splash-screen');
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('loadingText');
    const targetPage = 'Acceuil.html';
    
    if (!splashScreen || !progressBar) return;
    
    const loadingMessages = [
        'Chargement...',
        'Préparation des ressources...',
        'Connexion au serveur...',
        'Finalisation...'
    ];
    
    let startTime = Date.now();
    let isNavigating = false;
    let messageIndex = 0;
    
    function animateProgressBar() {
        if (isNavigating) return;
        
        const elapsed = Date.now() - startTime;
        const progress = Math.min((elapsed / SPLASH_DURATION) * 100, 100);
        
        progressBar.style.width = progress + '%';
        
        const newIndex = Math.min(
            Math.floor((progress / 100) * loadingMessages.length),
            loadingMessages.length - 1
        );
        
        if (newIndex !== messageIndex && progressText) {
            messageIndex = newIndex;
            progressText.style.opacity = '0.3';
            setTimeout(() => {
                progressText.textContent = loadingMessages[messageIndex];
                progressText.style.opacity = '1';
            }, 150);
        }
        
        if (elapsed < SPLASH_DURATION) {
            requestAnimationFrame(animateProgressBar);
        } else {
            navigateToHome();
        }
    }
    
    function navigateToHome() {
        if (isNavigating) return;
        isNavigating = true;
        
        progressBar.style.width = '100%';
        if (progressText) progressText.textContent = 'Prêt !';
        
        splashScreen.classList.add('fade-out');
        
        setTimeout(() => {
            window.location.href = targetPage;
        }, 600);
    }
    
    requestAnimationFrame(animateProgressBar);
    
    // Cliquer n'importe où pour passer
    splashScreen.addEventListener('click', function() {
        navigateToHome();
    });
    
    window.addEventListener('load', function() {
        history.pushState(null, null, window.location.href);
        window.addEventListener('popstate', function() {
            history.pushState(null, null, window.location.href);
        });
    });
});


