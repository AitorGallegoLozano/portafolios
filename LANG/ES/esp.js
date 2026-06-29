// LANG/ES/esp.js - Archivo de idioma español para el portafolio de Aitor Gallego
// NOTA: NO usar module.exports - esto debe ser un objeto global del navegador

const LANG = {
    // Información personal
    nombre: "Aitor Gallego Lozano",
    rol: "Técnico de Nóminas y RRHH",
    rolEspecialidad: "Especializado en Gestión de Nóminas y RRHH",
    
    // Meta
    meta_description: "Portafolio profesional de Aitor Gallego Lozano - Técnico Superior en Administración y Finanzas",
    
    // Navegación
    nav_inicio: "Inicio",
    nav_sobre: "Sobre Mí",
    nav_experiencia: "Experiencia",
    nav_habilidades: "Habilidades",
    nav_logros: "Logros",
    nav_contacto: "Contacto",
    
    // Hero Section
    hero_greeting: "Hola, soy",
    hero_role: "Técnico de Nóminas y RRHH",
    hero_description: "Técnico Superior en Administración y Finanzas (Bilingüe) especializado en la gestión integral del ciclo laboral, procesamiento de nóminas y administración de personal. Cuento con experiencia demostrada gestionando carteras de empresas de alta exigencia.",
    
    // Estadísticas
    stats_empresas: "Empresas Gestionadas",
    stats_anos: "Años de Experiencia",
    stats_plataformas: "Plataformas Oficiales del Estado",
    
    // Botones
    btn_contacto: "Contactar",
    btn_cv_icon: "📄",
    btn_cv_text: "Descargar CV",
    scroll_down: "Desplázate hacia abajo",
    
    // Sobre Mí
    about_title: "Sobre Mí",
    about_description: "Técnico Superior en Administración y Finanzas (Bilingüe) especializado en la gestión integral del ciclo laboral, procesamiento de nóminas y administración de personal, pero abierto a aprender nuevas labores. Cuento con experiencia demostrada gestionando carteras de empresas de alta exigencia, se adjunta acreditación. Destaco por mi manejo avanzado de herramientas de RRHH (META4, Sistema RED, SILTRA…), alta competencia lingüística en inglés y capacidad de liderazgo operativo. Profesional meticuloso, orientado a resultados, entornos corporativos dinámicos y a garantizar la excelencia normativa y fiscal.",
    
    // Detalles personales - títulos
    detail_ubicacion: "Ubicación",
    detail_email: "Email",
    detail_telefono: "Teléfono",
    detail_edad: "Fecha de Nacimiento",
    detail_carnet: "Carnet de Conducir",
    
    // Detalles personales - valores
    detail_location: "Plaza de la Villa, nº 11, 28814 Daganzo de Arriba, Madrid",
    detail_email_address: "aitorgallego98@gmail.com",
    detail_phone: "+34 689 65 02 22",
    detail_birth: "15 de abril de 1998",
    detail_driving: "Clase B",
    
    // Experiencia
    experience_title: "Experiencia Profesional",
    experience_data: [
        {
            puesto: "Técnico de Nóminas (Payroll Technician)",
            empresa: "Food Delivery Brands, S.A.",
            ubicacion: "San Sebastián de los Reyes, Madrid",
            periodo: "2023 – Actualidad",
            actual: true,
            responsabilidades: [
                "Gestión del ciclo laboral: onboarding (altas) hasta offboarding (bajas y finiquitos) para cartera de 30 a 60 empresas, picos >100.",
                "Ecosistema digital: SISTEMA RED, SILTRA, Contrat@, Certific@2, Delt@ y ERP META4.",
                "Procesamiento: nóminas mensuales, contratos, incidencias rutinarias y extraordinarias.",
                "Fiscalidad: Modelos 111 y 190, RLC y RNT (Seguridad Social).",
                "Relaciones institucionales: TGSS, SEPE, Agencia Tributaria; asesoramiento a directivos."
            ]
        }
    ],
    
    // Habilidades
    skills_title: "Habilidades y Competencias",
    skills_data: [
        {
            categoria: "Plataformas Oficiales",
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
            categoria: "Fiscalidad y Cotización",
            icono: "📊",
            habilidades: [
                { nombre: "Modelos 111/190", nivel: 90 },
                { nombre: "RLC/RNT", nivel: 90 }
            ]
        },
        {
            categoria: "Ciclo Laboral",
            icono: "📋",
            habilidades: [
                { nombre: "Onboarding/Offboarding", nivel: 95 },
                { nombre: "Nóminas y Finiquitos", nivel: 95 }
            ]
        },
        {
            categoria: "Idiomas",
            icono: "🌍",
            habilidades: [
                { nombre: "Español", nivel: 100 },
                { nombre: "Inglés (C1/Bilingüe)", nivel: 90 }
            ]
        },
        {
            categoria: "Competencias Transversales",
            icono: "🎯",
            habilidades: [
                { nombre: "Liderazgo Operativo", nivel: 90 },
                { nombre: "Orientación a Resultados", nivel: 90 },
                { nombre: "Comunicación Efectiva", nivel: 90 }
            ]
        }
    ],
    
    // Logros/Proyectos
    projects_title: "Logros Destacados",
    projects_data: [
        {
            titulo: "Optimización de Nóminas para 100+ Empresas",
            descripcion: "Implementación de procesos eficientes para el procesamiento masivo de nóminas durante picos de trabajo, gestionando carteras de más de 100 empresas simultáneamente con cero errores y cumplimiento normativo del 100%.",
            tecnologias: ["META4", "SILTRA", "SISTEMA RED", "Gestión de Carteras"],
            icono: "🚀",
            metrica: "100+",
            metrica_label: "Empresas en Picos"
        },
        {
            titulo: "Mejora de Gestión de Incidencias con META4",
            descripcion: "Desarrollo de un sistema optimizado para la resolución de incidencias en META4, reduciendo el tiempo de respuesta en un 40% y mejorando la comunicación con directivos y empleados.",
            tecnologias: ["META4", "ERP", "Automatización", "RRHH"],
            icono: "⚡",
            metrica: "40%",
            metrica_label: "Reducción Tiempo"
        }
    ],
    
    // Contacto
    contact_title: "Contacto",
    contact_description: "¿Interesado en colaborar o tienes alguna pregunta? No dudes en contactarme a través de cualquiera de los siguientes medios. Estoy disponible para nuevas oportunidades y proyectos desafiantes.",
    
    // Métodos de contacto
    contact_email_title: "Email",
    contact_phone_title: "Teléfono",
    contact_address_title: "Dirección",
    contact_email_icon: "📧",
    contact_phone_icon: "📱",
    contact_address_icon: "📍",
    contact_address_value: "Plaza de la Villa, nº 11, 28814 Daganzo de Arriba, Madrid",
    contact_email_value: "aitorgallego98@gmail.com",
    contact_phone_value: "+34 689 65 02 22",
    
    // Footer
    footer_text: "© 2026 Aitor Gallego Lozano. Todos los derechos reservados."
};

// Verificación de carga (útil para debugging)
console.log("✅ LANG cargado correctamente:", Object.keys(LANG).length, "propiedades");