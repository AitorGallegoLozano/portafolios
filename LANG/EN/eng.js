// LANG/EN/eng.js - English language file for Aitor Gallego's portfolio
// NOTE: NO module.exports - this must be a browser global object

const LANG_EN = {
    // Personal information
    nombre: "Aitor Gallego Lozano",
    rol: "Payroll & HR Technician",
    rolEspecialidad: "Specialized in Payroll Management & HR",
    
    // Meta
    meta_description: "Professional portfolio of Aitor Gallego Lozano - Senior Technician in Administration and Finance",
    
    // Navigation
    nav_inicio: "Home",
    nav_sobre: "About Me",
    nav_experiencia: "Experience",
    nav_habilidades: "Skills",
    nav_logros: "Achievements",
    nav_contacto: "Contact",
    
    // Hero Section
    hero_greeting: "Hello, I'm",
    hero_role: "Payroll & HR Technician",
    hero_description: "Senior Technician in Administration and Finance (Bilingual) specialized in comprehensive labor cycle management, payroll processing, and personnel administration. I have proven experience managing portfolios of high-demand companies.",
    
    // Statistics
    stats_empresas: "Companies Managed",
    stats_anos: "Years of Experience",
    stats_plataformas: "Platforms Mastered",
    
    // Buttons
    btn_contacto: "Contact Me",
    btn_cv_icon: "📄",
    btn_cv_text: "Download CV",
    scroll_down: "Scroll down",
    
    // About Me
    about_title: "About Me",
    about_description: "Senior Technician in Administration and Finance (Bilingual) specialized in comprehensive labor cycle management, payroll processing, and personnel administration, but open to learning new tasks. I have proven experience managing portfolios of high-demand companies, certification attached. I stand out for my advanced handling of HR tools (META4, SISTEMA RED, SILTRA…), high linguistic competence in English, and operational leadership capacity. Meticulous professional, results-oriented, dynamic corporate environments, and committed to ensuring regulatory and fiscal excellence.",
    
    // Personal details - titles
    detail_ubicacion: "Location",
    detail_email: "Email",
    detail_telefono: "Phone",
    detail_edad: "Date of Birth",
    detail_carnet: "Driver's License",
    
    // Personal details - values
    detail_location: "Plaza de la Villa, nº 11, 28814 Daganzo de Arriba, Madrid",
    detail_email_address: "aitorgallego98@gmail.com",
    detail_phone: "+34 689 65 02 22",
    detail_birth: "April 15, 1998",
    detail_driving: "Class B",
    
    // Experience
    experience_title: "Professional Experience",
    experience_data: [
        {
            puesto: "Payroll Technician",
            empresa: "Food Delivery Brands, S.A.",
            ubicacion: "San Sebastián de los Reyes, Madrid",
            periodo: "2023 – Present",
            actual: true,
            responsabilidades: [
                "Labor cycle management: onboarding (registrations) to offboarding (terminations and settlements) for a portfolio of 30 to 60 companies, peaks >100.",
                "Digital ecosystem: SISTEMA RED (Spanish Social Security), SILTRA, Contrat@, Certific@2, Delt@, and META4 ERP.",
                "Processing: monthly payrolls, contracts, routine and extraordinary incidents.",
                "Taxation: Tax Forms 111 and 190, RLC and RNT (Social Security contribution documents).",
                "Institutional relations: TGSS (Social Security Treasury), SEPE (Public Employment Service), Tax Agency; executive advisory."
            ]
        }
    ],
    
    // Skills
    skills_title: "Skills & Competencies",
    skills_data: [
        {
            categoria: "Official Platforms",
            icono: "🏛️",
            habilidades: [
                { nombre: "SISTEMA RED", nivel: 95 },
                { nombre: "SILTRA", nivel: 95 },
                { nombre: "Contrat@", nivel: 90 },
                { nombre: "Certific@2", nivel: 85 },
                { nombre: "Delt@", nivel: 85 }
            ]
        },
        {
            categoria: "ERP / Software",
            icono: "💻",
            habilidades: [
                { nombre: "META4", nivel: 90 }
            ]
        },
        {
            categoria: "Taxation & Contributions",
            icono: "📊",
            habilidades: [
                { nombre: "Tax Forms 111/190", nivel: 90 },
                { nombre: "RLC/RNT", nivel: 90 }
            ]
        },
        {
            categoria: "Labor Cycle",
            icono: "📋",
            habilidades: [
                { nombre: "Onboarding/Offboarding", nivel: 95 },
                { nombre: "Payroll & Settlements", nivel: 95 }
            ]
        },
        {
            categoria: "Languages",
            icono: "🌍",
            habilidades: [
                { nombre: "Spanish", nivel: 100 },
                { nombre: "English (C1/Bilingual)", nivel: 90 }
            ]
        },
        {
            categoria: "Transversal Competencies",
            icono: "🎯",
            habilidades: [
                { nombre: "Operational Leadership", nivel: 90 },
                { nombre: "Results Orientation", nivel: 90 },
                { nombre: "Effective Communication", nivel: 90 }
            ]
        }
    ],
    
    // Achievements/Projects
    projects_title: "Key Achievements",
    projects_data: [
        {
            titulo: "Payroll Optimization for 100+ Companies",
            descripcion: "Implementation of efficient processes for massive payroll processing during peak work periods, managing portfolios of over 100 companies simultaneously with zero errors and 100% regulatory compliance.",
            tecnologias: ["META4", "SILTRA", "SISTEMA RED", "Portfolio Management"],
            icono: "🚀",
            metrica: "100+",
            metrica_label: "Companies at Peak"
        },
        {
            titulo: "Incident Management Improvement with META4",
            descripcion: "Development of an optimized system for incident resolution in META4, reducing response time by 40% and improving communication with executives and employees.",
            tecnologias: ["META4", "ERP", "Automation", "HR"],
            icono: "⚡",
            metrica: "40%",
            metrica_label: "Time Reduction"
        }
    ],
    
    // Contact
    contact_title: "Contact",
    contact_description: "Interested in collaborating or have a question? Don't hesitate to contact me through any of the following means. I'm available for new opportunities and challenging projects.",
    
    // Contact methods
    contact_email_title: "Email",
    contact_phone_title: "Phone",
    contact_address_title: "Address",
    contact_email_icon: "📧",
    contact_phone_icon: "📱",
    contact_address_icon: "📍",
    contact_address_value: "Plaza de la Villa, nº 11, 28814 Daganzo de Arriba, Madrid",
    contact_email_value: "aitorgallego98@gmail.com",
    contact_phone_value: "+34 689 65 02 22",
    
    // Footer
    footer_text: "© 2026 Aitor Gallego Lozano. All rights reserved."
};

// Load verification (useful for debugging)
console.log("✅ LANG_EN loaded successfully:", Object.keys(LANG_EN).length, "properties");