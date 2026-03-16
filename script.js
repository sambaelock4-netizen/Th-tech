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

// Make functions globally available
window.applyTranslations = applyTranslations;
