// ========================================
// HEADER COMPONENT - Th-tech
// ========================================

function createHeader() {
    const header = document.createElement('header');
    header.className = 'header';
    header.innerHTML = `
        <div class="logo">
            <span class="logo-main">Th</span><span class="logo-accent">-tech.</span>
        </div>

        <nav class="nav" id="nav">
            <a href="Acceuil.html" data-i18n="nav_home">Accueil</a>
            <a href="a-propos.html" data-i18n="nav_about">À propos</a>
            <a href="Services.html" data-i18n="nav_services">Services</a>
            <a href="contact.html" data-i18n="nav_contact">Contact</a>
        </nav>
        
        <div class="header-actions">
            <button class="btn-service" data-i18n="nav_cta">DEMANDER UN SERVICE</button>
        </div>
        
        <div class="burger" id="burger">
            <span></span>
            <span></span>
            <span></span>
        </div>
    `;
    return header;
}

// Insert header
document.addEventListener('DOMContentLoaded', function() {
    // Create and insert header
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.parentNode.replaceChild(createHeader(), headerPlaceholder);
    }
    
    // Burger menu toggle
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');
    
    if (burger && nav) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }
});

