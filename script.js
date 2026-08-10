// ========================================
// TH-TECH: Language & Theme Manager
// ========================================

// Translations
const translations = {
    fr: {
        // Navigation
        "nav_home": "Accueil",
        "nav_about": "À propos",
        "nav_services": "Services",
        "nav_contact": "Contact",
        "nav_cta": "DEMANDER UN SERVICE",
        
        // Home Page
        "hero_subtitle": "Des solutions IT parfaites pour votre entreprise",
        "hero_title": "Solutions Digitales de",
        "hero_title_highlight": "Haute Précision",
        "hero_description": "Chez Th-tech, nous concevons des infrastructures web et logicielles sur mesure. Nous transformons vos défis complexes en solutions numériques fluides et sécurisées.",
        "hero_btn": "NOS SERVICES",
        
        "intro_title": "Une expertise digitale orientée solutions",
        "intro_text1": "Groupe d'étudiants en génie logiciel, nous concevons des solutions numériques adaptées aux besoins des entreprises et des particuliers. Mon approche est axée sur la pratique, la clarté et l'évolution continue.",
        "intro_text2": "Du développement web aux solutions logicielles, je vous accompagne dans la mise en place d'outils fiables et efficaces.",
        "intro_btn": "En savoir plus",
        
        "process_title": "Comment nous travaillons",
        "process_subtitle": "Une approche claire et progressive pour garantir des solutions efficaces et adaptées à vos besoins.",
        
        "step1_title": "Analyse du besoin",
        "step1_text": "Compréhension de votre projet, de vos objectifs et de vos contraintes techniques.",
        "step2_title": "Proposition de solution",
        "step2_text": "Choix des technologies et définition d'une solution claire et réaliste.",
        "step3_title": "Développement",
        "step3_text": "Mise en œuvre progressive avec des tests réguliers et des ajustements.",
        "step4_title": "Tests & validation",
        "step4_text": "Vérification du bon fonctionnement, corrections et optimisations.",
        "step5_title": "Livraison",
        "step5_text": "Livraison du projet et accompagnement pour la prise en main.",
        
        "why_title": "Pourquoi nous choisir ?",
        "why_intro": "Nous ne nous contentons pas de créer des sites, nous construisons des solutions utiles et modernes.",
        
        "why_point1_title": "Approche moderne",
        "why_point1_text": "Design actuel, performance et expérience utilisateur.",
        "why_point2_title": "Orienté résultats",
        "why_point2_text": "Un site qui sert un objectif clair.",
        "why_point3_title": "Solutions sur mesure",
        "why_point3_text": "Chaque projet est unique et fait sur mesure.",
        "why_point4_title": "Accompagnement humain",
        "why_point4_text": "Écoute, échanges et suivi après livraison.",
        
        "cta_title": "Un projet en tête ?",
        "cta_text": "Site web, application ou solution informatique, discutons ensemble de votre idée.",
        "cta_btn": "Nous contacter",
        
        // Services
        "services_title": "Nos Services",
        "services_subtitle": "Des solutions digitales complètes pour propulser votre entreprise",
        
        "service_web_title": "Développement Web",
        "service_web_desc": "Création de sites web modernes, performants et adaptés à vos besoins. Nous transformons vos idées en réalité numérique.",
        "service_web_feature1": "Sites vitrines professionnels",
        "service_web_feature2": "Développement WordPress & Drupal",
        "service_web_feature3": "Applications web sur mesure",
        "service_web_feature4": "Responsive Design (Mobile-first)",
        
        "service_mobile_title": "Applications Mobiles",
        "service_mobile_desc": "Développement d'applications mobiles simples et performantes avec Ionic. Reach your customers anywhere, anytime.",
        "service_mobile_feature1": "Applications iOS & Android",
        "service_mobile_feature2": "Progressive Web Apps (PWA)",
        "service_mobile_feature3": "Interface utilisateur intuitive",
        "service_mobile_feature4": "Synchronisation en temps réel",
        
        "service_software_title": "Logiciels Sur Mesure",
        "service_software_desc": "Solutions logicielles personnalisées pour optimiser vos processus métier. Nous développons des outils qui s'adaptent à votre activité.",
        "service_software_feature1": "Logiciels de gestion",
        "service_software_feature2": "Solutions ERP/CRM",
        "service_software_feature3": "Automatisation de tâches",
        "service_software_feature4": "Intégration APIs",
        
        "service_support_title": "Maintenance & Support",
        "service_support_desc": "Nous assurons la pérennité de vos solutions digitales avec un support technique réactif et une maintenance proactive.",
        "service_support_feature1": "Support technique 24h/24, 7j/7",
        "service_support_feature2": "Mises à jour de sécurité",
        "service_support_feature3": "Optimisation des performances",
        "service_support_feature4": "Sauvegardes automatiques",
        
        "other_services_title": "Autres Services",
        "other_services_subtitle": "Découvrez toutes nos offres",
        
        "service_design": "Design UI/UX",
        "service_design_desc": "Interfaces utilisateur modernes et expériences utilisateur optimisées.",
        "service_hosting": "Hébergement",
        "service_hosting_desc": "Solutions d'hébergement sécurisées et performantes pour votre site.",
        "service_seo": "SEO & Marketing",
        "service_seo_desc": "Optimisation pour les moteurs de recherche et stratégies digitales.",
        "service_security": "Cybersécurité",
        "service_security_desc": "Protection de vos données et systèmes contre les menaces.",
        
        "cta_services_title": "Prêt à démarrer votre projet ?",
        "cta_services_text": "Discutons ensemble de vos besoins et trouvons la meilleure solution.",
        
        // About
        "about_title": "À propos de Th-tech",
        "about_text1": "Th-tech accompagne les entreprises et particuliers dans la création de solutions digitales modernes, performantes et adaptées à leurs besoins.",
        "about_text2": "Notre approche repose sur la clarté, l'efficacité et l'innovation, afin de transformer vos idées en outils concrets et durables.",
        "about_btn": "Nous contacter",
        
        "vision_title": "Notre vision",
        "vision_main": "Construire des solutions",
        "vision_subtitle": "utiles, durables et modernes",
        "vision_intro": "Chez Th-tech, nous croyons que la technologie doit simplifier, accélérer et valoriser les projets humains.",
        
        "value_innovation": "Innovation",
        "value_innovation_desc": "Des solutions modernes adaptées aux usages actuels.",
        "value_results": "Résultats",
        "value_results_desc": "Chaque projet répond à un objectif clair et mesurable.",
        "value_support": "Accompagnement",
        "value_support_desc": "Un suivi humain avant, pendant et après livraison.",
        
        "stats_years": "Années d'expérience",
        "stats_projects": "Projets réalisés",
        "stats_clients": "Clients satisfaits",
        "stats_support": "Support disponible",
        
        "team_title": "Notre équipe",
        "team_subtitle": "Des experts passionnés prêts à transformer vos idées en réalité",
        "team_founder": "Fondateur & Développeur",
        "team_founder_desc": "Expert en développement web et solutions logicielles sur mesure.",
        "team_tech": "Équipe Technique",
        "team_tech_desc": "Une équipe dynamique spécialisée dans les dernières technologies.",
        
        // Contact
        "contact_title": "Contactez-nous",
        "contact_subtitle": "Une question ? Un projet ? N'hésitez pas à nous envoyer un message",
        
        "form_title": "Envoyez-nous un message",
        "form_subtitle": "Remplissez le formulaire ci-dessous et nous vous répondrons sous 24h",
        "form_name": "Votre nom",
        "form_firstname": "Votre prénom",
        "form_email": "Votre adresse email",
        "form_phone": "Votre téléphone (optionnel)",
        "form_subject": "Sujet de votre message",
        "form_subject_devis": "Demande de devis",
        "form_subject_info": "Demande d'information",
        "form_subject_support": "Support technique",
        "form_subject_partnership": "Partenariat",
        "form_subject_other": "Autre",
        "form_message": "Votre message",
        "form_newsletter": "S'abonner à la newsletter pour recevoir nos actualites",
        "form_submit": "Envoyer le message",
        "form_success": "Message envoyé !",
        
        "info_address": "Notre adresse",
        "info_email": "Email",
        "info_phone": "Téléphone",
        "info_hours": "Disponibilité",
        "info_address_value": "Douala, Cameroun",
        "info_email_value": "contact@th-tech.com",
        "info_phone_value": "+237 640 92 48 27",
        "info_hours_value": "24h/24 - 7j/7",
        
        "social_follow": "Suivez-nous",
        
        "map_location": "Douala, Cameroun",
        
        "faq_title": "Questions Fréquentes",
        "faq_subtitle": "Trouvez rapidement les réponses à vos questions",
        
        "faq_question1": "Quels sont vos délais de réalisation ?",
        "faq_answer1": "Les délais varient selon la complexité du projet. Pour un site vitrine, comptez environ 2-3 semaines. Pour des applications plus complexes, nous établissons un calendrier précis lors de la phase de consultation.",
        
        "faq_question2": "Proposez-vous des forfaits maintenance ?",
        "faq_answer2": "Oui, nous proposons plusieurs formules de maintenance adaptées à vos besoins, incluant mises à jour, support technique et sauvegardes régulières. N'hésitez pas à nous contacter pour un devis personnalisé.",
        
        "faq_question3": "Comment se passe la collaboration ?",
        "faq_answer3": "Nous commençons par une consultation gratuite pour comprendre vos besoins. Ensuite, nous établissons un cahier des charges détaillé et restons en contact régulier tout au long du développement.",
        
        "faq_question4": "Quels sont vos moyens de paiement ?",
        "faq_answer4": "Nous acceptons plusieurs moyens de paiement : virement bancaire, Mobile Money (MTN, Orange), et PayPal. Les modalités de paiement sont discutées lors de la signature du contrat.",
        
        "cta_contact_title": "Prêt à démarrer votre projet ?",
        "cta_contact_text": "Discutons ensemble de vos besoins et trouvons la meilleure solution pour vous.",
        "cta_call": "Appeler maintenant",
        "cta_whatsapp": "WhatsApp",
        
        // Footer
        "footer_description": "Expertise en solutions technologiques innovantes pour propulser votre entreprise vers l'avenir numérique.",
        "footer_nav": "Navigation",
        "footer_contact": "Contact",
        "footer_copyright": "Tous droits réservés."
    },
    
    en: {
        // Navigation
        "nav_home": "Home",
        "nav_about": "About",
        "nav_services": "Services",
        "nav_contact": "Contact",
        "nav_cta": "REQUEST SERVICE",
        
        // Home Page
        "hero_subtitle": "Perfect IT solutions for your business",
        "hero_title": "Digital Solutions of",
        "hero_title_highlight": "High Precision",
        "hero_description": "At Th-tech, we design custom web and software infrastructures. We transform your complex challenges into fluid and secure digital solutions.",
        "hero_btn": "OUR SERVICES",
        
        "intro_title": "A solution-oriented digital expertise",
        "intro_text1": "As software engineering students, we design digital solutions tailored to the needs of businesses and individuals. My approach is focused on practice, clarity, and continuous evolution.",
        "intro_text2": "From web development to software solutions, I accompany you in setting up reliable and efficient tools.",
        "intro_btn": "Learn more",
        
        "process_title": "How We Work",
        "process_subtitle": "A clear and progressive approach to ensure effective solutions tailored to your needs.",
        
        "step1_title": "Needs Analysis",
        "step1_text": "Understanding of your project, objectives, and technical constraints.",
        "step2_title": "Solution Proposal",
        "step2_text": "Technology choices and definition of a clear and realistic solution.",
        "step3_title": "Development",
        "step3_text": "Progressive implementation with regular testing and adjustments.",
        "step4_title": "Testing & Validation",
        "step4_text": "Verification of proper functioning, corrections, and optimizations.",
        "step5_title": "Delivery",
        "step5_text": "Project delivery and support for onboarding.",
        
        "why_title": "Why Choose Us?",
        "why_intro": "We don't just create websites, we build useful and modern solutions.",
        
        "why_point1_title": "Modern Approach",
        "why_point1_text": "Current design, performance, and user experience.",
        "why_point2_title": "Results-Oriented",
        "why_point2_text": "A website that serves a clear objective.",
        "why_point3_title": "Custom Solutions",
        "why_point3_text": "Each project is unique and made to measure.",
        "why_point4_title": "Human Support",
        "why_point4_text": "Listening, exchanges, and follow-up after delivery.",
        
        "cta_title": "Have a project in mind?",
        "cta_text": "Website, application, or IT solution, let's discuss your idea together.",
        "cta_btn": "Contact Us",
        
        // Services
        "services_title": "Our Services",
        "services_subtitle": "Complete digital solutions to boost your business",
        
        "service_web_title": "Web Development",
        "service_web_desc": "Creation of modern, high-performance websites tailored to your needs. We turn your ideas into digital reality.",
        "service_web_feature1": "Professional showcase sites",
        "service_web_feature2": "WordPress & Drupal development",
        "service_web_feature3": "Custom web applications",
        "service_web_feature4": "Responsive Design (Mobile-first)",
        
        "service_mobile_title": "Mobile Applications",
        "service_mobile_desc": "Development of simple and high-performance mobile applications with Ionic. Reach your customers anywhere, anytime.",
        "service_mobile_feature1": "iOS & Android applications",
        "service_mobile_feature2": "Progressive Web Apps (PWA)",
        "service_mobile_feature3": "Intuitive user interface",
        "service_mobile_feature4": "Real-time synchronization",
        
        "service_software_title": "Custom Software",
        "service_software_desc": "Custom software solutions to optimize your business processes. We develop tools that adapt to your activity.",
        "service_software_feature1": "Management software",
        "service_software_feature2": "ERP/CRM solutions",
        "service_software_feature3": "Task automation",
        "service_software_feature4": "API integration",
        
        "service_support_title": "Maintenance & Support",
        "service_support_desc": "We ensure the longevity of your digital solutions with responsive technical support and proactive maintenance.",
        "service_support_feature1": "24/7 technical support",
        "service_support_feature2": "Security updates",
        "service_support_feature3": "Performance optimization",
        "service_support_feature4": "Automatic backups",
        
        "other_services_title": "Other Services",
        "other_services_subtitle": "Discover all our offers",
        
        "service_design": "UI/UX Design",
        "service_design_desc": "Modern user interfaces and optimized user experiences.",
        "service_hosting": "Hosting",
        "service_hosting_desc": "Secure and high-performance hosting solutions for your website.",
        "service_seo": "SEO & Marketing",
        "service_seo_desc": "Search engine optimization and digital marketing strategies.",
        "service_security": "Cybersecurity",
        "service_security_desc": "Protection of your data and systems against threats.",
        
        "cta_services_title": "Ready to start your project?",
        "cta_services_text": "Let's discuss your needs and find the best solution together.",
        
        // About
        "about_title": "About Th-tech",
        "about_text1": "Th-tech accompanies businesses and individuals in creating modern, high-performance digital solutions tailored to their needs.",
        "about_text2": "Our approach is based on clarity, efficiency, and innovation, to transform your ideas into concrete and lasting tools.",
        "about_btn": "Contact Us",
        
        "vision_title": "Our Vision",
        "vision_main": "Building",
        "vision_subtitle": "useful, durable, and modern solutions",
        "vision_intro": "At Th-tech, we believe that technology should simplify, accelerate, and enhance human projects.",
        
        "value_innovation": "Innovation",
        "value_innovation_desc": "Modern solutions tailored to current uses.",
        "value_results": "Results",
        "value_results_desc": "Each project meets a clear and measurable objective.",
        "value_support": "Support",
        "value_support_desc": "Human follow-up before, during, and after delivery.",
        
        "stats_years": "Years of experience",
        "stats_projects": "Projects completed",
        "stats_clients": "Satisfied clients",
        "stats_support": "Support available",
        
        "team_title": "Our Team",
        "team_subtitle": "Passionate experts ready to turn your ideas into reality",
        "team_founder": "Founder & Developer",
        "team_founder_desc": "Expert in web development and custom software solutions.",
        "team_tech": "Technical Team",
        "team_tech_desc": "A dynamic team specialized in the latest technologies.",
        
        // Contact
        "contact_title": "Contact Us",
        "contact_subtitle": "A question? A project? Feel free to send us a message",
        
        "form_title": "Send Us a Message",
        "form_subtitle": "Fill out the form below and we'll respond within 24 hours",
        "form_name": "Your name",
        "form_firstname": "Your first name",
        "form_email": "Your email address",
        "form_phone": "Your phone (optional)",
        "form_subject": "Subject of your message",
        "form_subject_devis": "Quote request",
        "form_subject_info": "Information request",
        "form_subject_support": "Technical support",
        "form_subject_partnership": "Partnership",
        "form_subject_other": "Other",
        "form_message": "Your message",
        "form_newsletter": "Subscribe to newsletter to receive our updates",
        "form_submit": "Send message",
        "form_success": "Message sent!",
        
        "info_address": "Our address",
        "info_email": "Email",
        "info_phone": "Phone",
        "info_hours": "Availability",
        "info_address_value": "Douala, Cameroon",
        "info_email_value": "contact@th-tech.com",
        "info_phone_value": "+237 640 92 48 27",
        "info_hours_value": "24/7",
        
        "social_follow": "Follow Us",
        
        "map_location": "Douala, Cameroon",
        
        "faq_title": "Frequently Asked Questions",
        "faq_subtitle": "Quickly find answers to your questions",
        
        "faq_question1": "What are your delivery times?",
        "faq_answer1": "Times vary according to the complexity of the project. For a showcase website, allow approximately 2-3 weeks. For more complex applications, we establish a precise schedule during the consultation phase.",
        
        "faq_question2": "Do you offer maintenance packages?",
        "faq_answer2": "Yes, we offer several maintenance plans tailored to your needs, including updates, technical support, and regular backups. Don't hesitate to contact us for a personalized quote.",
        
        "faq_question3": "How does the collaboration work?",
        "faq_answer3": "We start with a free consultation to understand your needs. Then, we establish a detailed specifications document and stay in regular contact throughout the development.",
        
        "faq_question4": "What are your payment methods?",
        "faq_answer4": "We accept several payment methods: bank transfer, Mobile Money (MTN, Orange), and PayPal. Payment terms are discussed when signing the contract.",
        
        "cta_contact_title": "Ready to start your project?",
        "cta_contact_text": "Let's discuss your needs and find the best solution for you.",
        "cta_call": "Call now",
        "cta_whatsapp": "WhatsApp",
        
        // Footer
        "footer_description": "Expertise in innovative technological solutions to propel your business towards the digital future.",
        "footer_nav": "Navigation",
        "footer_contact": "Contact",
        "footer_copyright": "All rights reserved."
    }
};

// Dark mode translations
const darkModeStyles = `
    /* Dark Mode Styles */
    body.dark-mode {
        background-color: #0f172a;
        color: #e2e8f0;
    }
    
    body.dark-mode .header {
        background-color: #1e293b;
        box-shadow: 0 2px 10px rgba(0,0,0,0.3);
    }
    
    body.dark-mode .logo-main {
        color: #ffffff;
    }
    
    body.dark-mode .nav a {
        color: #e2e8f0;
    }
    
    body.dark-mode .nav a:hover,
    body.dark-mode .nav a.active {
        color: #7b61ff;
    }
    
    body.dark-mode .burger span {
        background: #ffffff;
    }
    
    body.dark-mode .burger svg path {
        stroke: #ffffff;
    }
    
    body.dark-mode .btn-service {
        border-color: #7b61ff;
        color: #7b61ff;
    }
    
    body.dark-mode .btn-service:hover {
        color: #ffffff;
    }
    
    /* Hero sections */
    body.dark-mode .hero,
    body.dark-mode .services-hero,
    body.dark-mode .contact-hero {
        filter: brightness(0.9);
    }
    
    /* Cards */
    body.dark-mode .card {
        background-color: #1e293b;
        border-color: #334155;
    }
    
    body.dark-mode .card h3,
    body.dark-mode .card h4 {
        color: #e2e8f0;
    }
    
    body.dark-mode .card p {
        color: #94a3b8;
    }
    
    body.dark-mode .card i {
        color: #7b61ff;
    }
    
    /* Sections */
    body.dark-mode .intro,
    body.dark-mode .process {
        background-color: #0f172a;
    }
    
    body.dark-mode .intro h2,
    body.dark-mode .process h2,
    body.dark-mode .why-content h2,
    body.dark-mode .form-header h2,
    body.dark-mode .info-content h4,
    body.dark-mode .social-section h4,
    body.dark-mode .faq-section h2,
    body.dark-mode .cta h2 {
        color: #e2e8f0;
    }
    
    body.dark-mode .intro p,
    body.dark-mode .process p,
    body.dark-mode .why-intro,
    body.dark-mode .process-header p {
        color: #94a3b8;
    }
    
    body.dark-mode .step-number {
        color: rgba(255,255,255,0.1);
    }
    
    body.dark-mode .step h3,
    body.dark-mode .step p {
        color: #94a3b8;
    }
    
    body.dark-mode .why {
        background: linear-gradient(135deg, #1e1b4b, #312e81);
    }
    
    /* Forms */
    body.dark-mode .contact-form-wrapper {
        background-color: #1e293b;
    }
    
    body.dark-mode .form-header p,
    body.dark-mode .form-check-label {
        color: #94a3b8;
    }
    
    body.dark-mode .form-control,
    body.dark-mode .form-select {
        background-color: #0f172a;
        border-color: #334155;
        color: #e2e8f0;
    }
    
    body.dark-mode .form-control:focus,
    body.dark-mode .form-select:focus {
        background-color: #1e293b;
    }
    
    body.dark-mode .form-floating label {
        color: #94a3b8;
    }
    
    /* Info cards */
    body.dark-mode .info-card {
        background-color: #1e293b;
    }
    
    body.dark-mode .info-content p {
        color: #94a3b8;
    }
    
    /* Other services */
    body.dark-mode .other-services {
        background-color: #0f172a;
    }
    
    body.dark-mode .other-service-card {
        background-color: #1e293b;
    }
    
    body.dark-mode .other-service-card p {
        color: #94a3b8;
    }
    
    body.dark-mode .other-service-card h4 {
        color: #e2e8f0;
    }
    
    /* FAQ */
    body.dark-mode .faq-section {
        background-color: #0f172a;
    }
    
    body.dark-mode .accordion-item {
        background-color: #1e293b;
    }
    
    body.dark-mode .accordion-button {
        background-color: #1e293b;
        color: #e2e8f0;
    }
    
    body.dark-mode .accordion-body {
        color: #94a3b8;
    }
    
    /* Footer */
    body.dark-mode .footer {
        background-color: #1e293b;
    }
    
    body.dark-mode .footer a:not(.btn) {
        color: #94a3b8 !important;
    }
    
    body.dark-mode .footer h3 {
        color: #e2e8f0;
    }
    
    body.dark-mode .footer p {
        color: #94a3b8;
    }
    
    body.dark-mode .footer-bottom {
        color: #64748b;
    }
    
    /* About section */
    body.dark-mode .about-section {
        background-color: #0f172a;
    }
    
    body.dark-mode .about-section h2 {
        color: #e2e8f0;
    }
    
    body.dark-mode .about-section .lead {
        color: #94a3b8;
    }
    
    /* Map section */
    body.dark-mode .map-wrapper {
        filter: brightness(0.8);
    }
    
    /* CTA sections */
    body.dark-mode .cta {
        background: linear-gradient(135deg, #312e81, #1e1b4b);
    }
    
    body.dark-mode .cta p {
        color: #94a3b8;
    }
    
    /* Team section */
    body.dark-mode .team {
        background-color: #0f172a;
    }
    
    body.dark-mode .team .lead {
        color: #94a3b8;
    }
    
    /* Stats section */
    body.dark-mode .stats {
        background-color: #1e293b;
    }
    
    /* Contact page specific */
    body.dark-mode .contact-section {
        background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%);
    }
    
    body.dark-mode .text-muted {
        color: #94a3b8 !important;
    }
    
    /* Carousel */
    body.dark-mode .service-content h2,
    body.dark-mode .service-content .lead {
        color: #e2e8f0;
    }
    
    body.dark-mode .service-features li {
        color: #94a3b8;
    }
    
    body.dark-mode .service-badge {
        background: rgba(123, 97, 255, 0.2);
    }
`;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
// Robust mobile navigation toggle - burger menu
    function initBurgerMenu() {
        const burger = document.getElementById('burger');
        const nav = document.getElementById('nav');
        
        if (!burger || !nav) {
            console.warn('Burger or nav not found');
            return;
        }
        
        // Toggle function
        const toggleMenu = (e) => {
            e.preventDefault();
            e.stopPropagation();
            nav.classList.toggle('active');
            burger.classList.toggle('active');
        };
        
        // Remove existing listeners if any (prevent duplicates)
        burger.replaceWith(burger.cloneNode(true));
        const newBurger = document.getElementById('burger'); // Re-query
        
        newBurger.addEventListener('click', toggleMenu);
        
        // Close on nav links
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                newBurger.classList.remove('active');
            });
        });
        
        // Close on outside click
        document.addEventListener('click', (e) => {
            if (!newBurger.contains(e.target) && !nav.contains(e.target)) {
                nav.classList.remove('active');
                newBurger.classList.remove('active');
            }
        });
        
        // Close on resize/landscape
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                nav.classList.remove('active');
                newBurger.classList.remove('active');
            }
        });
    }
    
    initBurgerMenu();
});

// Apply translations to the page
function applyTranslations(lang) {
    const t = translations[lang];
    if (!t) return;
    
    // Apply translations to all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (t[key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = t[key];
            } else {
                element.textContent = t[key];
            }
        }
    });
    
    // Update specific elements by ID (for more complex translations)
    
    // Navigation
    const navHome = document.querySelector('a[href="Acceuil.html"]');
    const navAbout = document.querySelector('a[href="a-propos.html"]');
    const navServices = document.querySelector('a[href="Services.html"]');
    const navContact = document.querySelector('a[href="contact.html"]');
    
    if (navHome) navHome.textContent = t.nav_home;
    if (navAbout) navAbout.textContent = t.nav_about;
    if (navServices) navServices.textContent = t.nav_services;
    if (navContact) navContact.textContent = t.nav_contact;
    
    // Service button
    const ctaBtn = document.querySelector('.btn-service');
    if (ctaBtn) ctaBtn.textContent = t.nav_cta;
    
    // Home page
    const heroSubtitle = document.querySelector('.hero .subtitle');
    const heroTitle = document.querySelector('.hero h1');
    const heroDesc = document.querySelector('.hero .description');
    const heroBtn = document.querySelector('.hero .btn');
    
    if (heroSubtitle) heroSubtitle.textContent = t.hero_subtitle;
    if (heroTitle) {
        const parts = heroTitle.innerHTML.split('<br>');
        heroTitle.innerHTML = `${t.hero_title} <br><span>${t.hero_title_highlight}</span>`;
    }
    if (heroDesc) heroDesc.textContent = t.hero_description;
    if (heroBtn) heroBtn.textContent = t.hero_btn;
    
    // Intro section
    const introTitle = document.querySelector('.intro h2');
    const introText1 = document.querySelector('.intro-text p:first-of-type');
    const introText2 = document.querySelector('.intro-text p:nth-of-type(2)');
    const introBtn = document.querySelector('.intro .btn-secondary');
    
    if (introTitle) introTitle.textContent = t.intro_title;
    if (introText1) introText1.textContent = t.intro_text1;
    if (introText2) introText2.textContent = t.intro_text2;
    if (introBtn) introBtn.textContent = t.intro_btn;
    
    // Process section
    const processTitle = document.querySelector('.process h2');
    const processSubtitle = document.querySelector('.process .lead');
    if (processTitle) processTitle.textContent = t.process_title;
    if (processSubtitle) processSubtitle.textContent = t.process_subtitle;
    
    // Process steps
    const steps = document.querySelectorAll('.process-steps .step');
    if (steps.length >= 5) {
        steps[0].querySelector('h3').textContent = t.step1_title;
        steps[0].querySelector('p').textContent = t.step1_text;
        steps[1].querySelector('h3').textContent = t.step2_title;
        steps[1].querySelector('p').textContent = t.step2_text;
        steps[2].querySelector('h3').textContent = t.step3_title;
        steps[2].querySelector('p').textContent = t.step3_text;
        steps[3].querySelector('h3').textContent = t.step4_title;
        steps[3].querySelector('p').textContent = t.step4_text;
        steps[4].querySelector('h3').textContent = t.step5_title;
        steps[4].querySelector('p').textContent = t.step5_text;
    }
    
    // Why section
    const whyBadge = document.querySelector('.why-badge');
    const whyTitle = document.querySelector('.why h2');
    const whyIntro = document.querySelector('.why .lead');
    if (whyBadge) whyBadge.textContent = t.why_title;
    if (whyTitle) whyTitle.textContent = t.why_title;
    if (whyIntro) whyIntro.textContent = t.why_intro;
    
    // Why cards
    const whyCards = document.querySelectorAll('.why-card');
    if (whyCards.length >= 4) {
        whyCards[0].querySelector('h3').textContent = t.why_point1_title;
        whyCards[0].querySelector('p').textContent = t.why_point1_text;
        whyCards[1].querySelector('h3').textContent = t.why_point2_title;
        whyCards[1].querySelector('p').textContent = t.why_point2_text;
        whyCards[2].querySelector('h3').textContent = t.why_point3_title;
        whyCards[2].querySelector('p').textContent = t.why_point3_text;
        whyCards[3].querySelector('h3').textContent = t.why_point4_title;
        whyCards[3].querySelector('p').textContent = t.why_point4_text;
    }
    
    // CTA section (new format with cta-section class)
    const ctaTitle = document.querySelector('.cta-section .cta-title');
    const ctaText = document.querySelector('.cta-section .cta-text');
    const ctaBtn2 = document.querySelector('.cta-section .btn-cta');
    if (ctaTitle) ctaTitle.textContent = t.cta_title;
    if (ctaText) ctaText.textContent = t.cta_text;
    if (ctaBtn2) ctaBtn2.innerHTML = `<i class="bi bi-chat-dots me-2"></i>${t.cta_btn}`;
    
    // Footer
    const footerDesc = document.querySelector('.footer > .container > .row > .col-lg-4 p');
    const footerNavTitle = document.querySelector('.footer h3:nth-of-type(1)');
    const footerContactTitle = document.querySelector('.footer h3:nth-of-type(2)');
    const footerCopyright = document.querySelector('.footer .text-center p');
    
    if (footerDesc) footerDesc.textContent = t.footer_description;
    if (footerNavTitle) footerNavTitle.textContent = t.footer_nav;
    if (footerContactTitle) footerContactTitle.textContent = t.footer_contact;
    if (footerCopyright) footerCopyright.textContent = `© 2026 Th-tech. ${t.footer_copyright}`;
    
    // Footer links
    const footerLinks = document.querySelectorAll('.footer .list-unstyled li a');
    if (footerLinks.length >= 4) {
        footerLinks[0].textContent = t.nav_home;
        footerLinks[1].textContent = t.nav_services;
        footerLinks[2].textContent = t.nav_contact;
        footerLinks[3].textContent = t.nav_about;
    }
    
    // Footer contact info
    const footerContactInfo = document.querySelectorAll('.footer .list-unstyled li');
    if (footerContactInfo.length >= 3) {
        footerContactInfo[0].innerHTML = `<i class="bi bi-envelope me-2"></i>${t.info_email_value}`;
        footerContactInfo[1].innerHTML = `<i class="bi bi-phone me-2"></i>${t.info_phone_value}`;
        footerContactInfo[2].innerHTML = `<i class="bi bi-geo-alt me-2"></i>${t.info_address_value}`;
    }
    
    // Services page
    const servicesHeroTitle = document.querySelector('.services-hero h1');
    const servicesHeroSubtitle = document.querySelector('.services-hero .lead');
    if (servicesHeroTitle) servicesHeroTitle.textContent = t.services_title;
    if (servicesHeroSubtitle) servicesHeroSubtitle.textContent = t.services_subtitle;
    
    // Contact page
    const contactHeroTitle = document.querySelector('.contact-hero h1');
    const contactHeroSubtitle = document.querySelector('.contact-hero .lead');
    if (contactHeroTitle) contactHeroTitle.textContent = t.contact_title;
    if (contactHeroSubtitle) contactHeroSubtitle.textContent = t.contact_subtitle;
    
    // About page
    const aboutTitle = document.querySelector('.about-section h2');
    if (aboutTitle) aboutTitle.textContent = t.about_title;
    
    // Vision section
    const visionLabel = document.querySelector('.vision .badge');
    if (visionLabel) visionLabel.textContent = t.vision_title;
    
    // Update page title
    if (lang === 'en') {
        document.title = 'Th-tech | Digital Solutions';
    } else {
        document.title = 'Th-tech | Solutions Digitales';
    }
}

// ========================================
// REVEAL ANIMATION & OFFLINE ICON FALLBACK
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // 1. Staggered card entrance reveal animation
    const cards = document.querySelectorAll('.card');
    if (cards.length > 0) {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };

        const cardObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('card-revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        cards.forEach(card => {
            cardObserver.observe(card);
        });
    }

    // 2. Offline SVG Icon Fallback System
    const svgMap = {
        'bi-code-slash': '<svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor"><path d="M10.478 1.647a.5.5 0 0 0-.706.143L4.935 12.147a.5.5 0 0 0 .848.53l4.837-10.356a.5.5 0 0 0-.142-.674zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/></svg>',
        'bi-tools': '<svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor"><path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .707.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.293-1.971l2.654-2.617 2.675 2.675a1 1 0 0 1 .293.707v.07a1 1 0 0 0 .419.815L15 16l1-1-3.081-2.2a1 1 0 0 0-.815-.419h-.07a1 1 0 0 1-.707-.293l-2.675-2.675 2.617-2.654A3.003 3.003 0 0 0 16 3a3 3 0 1 0-5.293 1.971L8.053 7.588 5.378 4.913a1 1 0 0 1-.293-.707v-.07a1 1 0 0 0-.419-.815L1 0zm2.5 12a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm9.5-8.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>',
        'bi-windows': '<svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor"><path d="M6.555 1.375 0 2.237v5.45h6.555V1.375zM0 8.316v5.45l6.555.862V8.316H0zM7.445 1.25 16 0v7.687H7.445V1.25zM16 8.316V16l-8.555-1.25V8.316H16z"/></svg>',
        'bi-mortarboard': '<svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor"><path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 0 .906l7.5 3.5a.5.5 0 0 0 .422 0l7.5-3.5a.5.5 0 0 0 0-.906l-7.5-3.5zM4.14 6.5 8 4.698 11.86 6.5 8 8.302 4.14 6.5z"/><path d="M4.108 7.91 1 6.462v5.038a.5.5 0 0 0 .285.45l6.5 3a.5.5 0 0 0 .43 0l6.5-3a.5.5 0 0 0 .285-.45V6.462l-1.042.484V10.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V8.36L8.43 9.467a.5.5 0 0 1-.43 0L4.108 7.91z"/></svg>',
        'bi-telephone-fill': '<svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor"><path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/></svg>',
        'bi-phone': '<svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor"><path d="M11 1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM5 0h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/><path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>',
        'bi-whatsapp': '<svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.601 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.644 1.932 6.56 6.56 0 0 1 1.928 4.647c-.004 3.628-2.961 6.585-6.586 6.585zm3.61-4.935c-.198-.099-1.17-.578-1.353-.646-.182-.067-.315-.099-.447.099-.133.197-.513.646-.628.777-.116.132-.232.148-.43.05-.198-.099-.834-.307-1.589-.98-.588-.524-.986-1.171-1.102-1.368-.116-.198-.012-.305.087-.404.089-.088.198-.232.297-.348.099-.117.133-.198.198-.33.066-.133.033-.248-.016-.347-.05-.099-.447-1.077-.612-1.474-.16-.386-.324-.334-.447-.34-.116-.006-.248-.006-.38-.006a.729.729 0 0 0-.529.247c-.182.198-.694.678-.694 1.654 0 .976.71 1.916.81 2.049.098.133 1.397 2.132 3.384 2.99.472.204.842.326 1.13.418.475.152.907.13 1.248.08.38-.058 1.17-.478 1.336-.94.166-.463.166-.86.116-.94-.05-.079-.183-.147-.38-.246z"/></svg>',
        'bi-calendar-event': '<svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor"><path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H1a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/></svg>',
        'bi-geo-alt-fill': '<svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>',
        'bi-people-fill': '<svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor"><path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/></svg>',
        'bi-headset': '<svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H12.5A1.5 1.5 0 0 0 14 12V6a5 5 0 0 0-5-5z"/></svg>',
        'bi-envelope': '<svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.708 2.825L15 11.105V5.383zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741zM1 11.105l4.708-2.897L1 5.383v5.722z"/></svg>',
        'bi-facebook': '<svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/></svg>',
        'bi-linkedin': '<svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg>',
        'bi-laptop': '<svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor"><path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/></svg>',
        'bi-geo-alt': '<svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor"><path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/><path d="M8 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg>'
    };

    // Inject SVG inside elements with bi icon classes for guaranteed offline display
    Object.keys(svgMap).forEach(iconClass => {
        const iconElements = document.querySelectorAll(`i.${iconClass}`);
        iconElements.forEach(el => {
            if (!el.querySelector('svg')) {
                el.innerHTML = svgMap[iconClass];
                el.classList.add('has-svg');
            }
        });
    });
});

// Make functions globally available
window.applyTranslations = applyTranslations;
