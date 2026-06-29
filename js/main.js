// js/main.js - Lógica principal del portafolio de Aitor Gallego
// Versión corregida

// ===================================
// VERIFICACIÓN INICIAL
// ===================================
let currentLang = null;

console.log("=".repeat(50));
console.log("🔍 INICIANDO VERIFICACIÓN INICIAL");
console.log("=".repeat(50));

console.log("📦 Verificando LANG:", typeof LANG);

if (typeof LANG === 'undefined') {
    console.error("❌ ERROR CRÍTICO: LANG no está definido.");
    console.error("   → Verifica que esp.js se cargue antes que main.js");
    console.error("   → Verifica la ruta: LANG/ES/esp.js");
} else {
    console.log("✅ LANG cargado correctamente");
    console.log("📊 Total de propiedades:", Object.keys(LANG).length);
    
    // Asignar idioma por defecto (español)
    currentLang = LANG;
    console.log("🌐 Idioma inicial: ES");
}

console.log("\n📦 Verificando GSAP:", typeof gsap);
console.log("📦 Verificando ScrollTrigger:", typeof ScrollTrigger);

// ===================================
// INICIALIZACIÓN PRINCIPAL
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    console.log("\n" + "=".repeat(50));
    console.log("🚀 DOMContentLoaded - Iniciando portafolio");
    console.log("=".repeat(50));
    
    try {
        console.log("\n1️⃣ Iniciando tema...");
        initTheme();
        console.log("   ✅ Tema inicializado");
    } catch (e) {
        console.error("   ❌ Error en initTheme():", e);
    }
    
    try {
        console.log("\n2️⃣ Iniciando toggle de idioma...");
        initLanguageToggle();
        console.log("   ✅ Toggle de idioma inicializado");
    } catch (e) {
        console.error("   ❌ Error en initLanguageToggle():", e);
    }
    
    try {
        console.log("\n3️⃣ Renderizando textos...");
        renderAllTexts();
        console.log("   ✅ Textos renderizados");
    } catch (e) {
        console.error("   ❌ Error en renderAllTexts():", e);
    }
    
    try {
        console.log("\n4️⃣ Iniciando navegación...");
        initNavigation();
        console.log("   ✅ Navegación inicializada");
    } catch (e) {
        console.error("   ❌ Error en initNavigation():", e);
    }
    
    try {
        console.log("\n5️⃣ Iniciando canvas de partículas...");
        initParticleCanvas();
        console.log("   ✅ Canvas inicializado");
    } catch (e) {
        console.error("   ❌ Error en initParticleCanvas():", e);
    }
    
    try {
        console.log("\n6️⃣ Iniciando máquina de escribir...");
        initTypeWriter();
        console.log("   ✅ Máquina de escribir inicializada");
    } catch (e) {
        console.error("   ❌ Error en initTypeWriter():", e);
    }
    
    try {
        console.log("\n7️⃣ Renderizando contenido dinámico...");
        renderDynamicContent();
        console.log("   ✅ Contenido dinámico renderizado");
    } catch (e) {
        console.error("   ❌ Error en renderDynamicContent():", e);
    }
    
    try {
        console.log("\n8️⃣ Iniciando contadores...");
        initCounters();
        console.log("   ✅ Contadores inicializados");
    } catch (e) {
        console.error("   ❌ Error en initCounters():", e);
    }
    
    try {
        console.log("\n9️⃣ Iniciando animaciones de scroll...");
        initScrollAnimations();
        console.log("   ✅ Animaciones inicializadas");
    } catch (e) {
        console.error("   ❌ Error en initScrollAnimations():", e);
    }
    
    try {
        console.log("\n🔟 Iniciando scroll suave...");
        initSmoothScroll();
        console.log("   ✅ Scroll suave inicializado");
    } catch (e) {
        console.error("   ❌ Error en initSmoothScroll():", e);
    }

    try {
    console.log("\n1️⃣1️⃣ Iniciando descarga de CV...");
    initCVDownload();
    console.log("   ✅ Descarga de CV inicializada");
} catch (e) {
    console.error("   ❌ Error en initCVDownload():", e);
}
    
    console.log("\n" + "=".repeat(50));
    console.log("✅ INICIALIZACIÓN COMPLETADA");
    console.log("=".repeat(50));
});

// ===================================
// RENDERIZADO DE TODOS LOS TEXTOS
// ===================================

function renderAllTexts() {
    if (!currentLang) {
        console.error("❌ currentLang no disponible, abortando renderAllTexts");
        return;
    }
    
    // META
    const metaDesc = document.getElementById('meta-description');
    if (metaDesc && currentLang.meta_description) {
        metaDesc.setAttribute('content', currentLang.meta_description);
    }
    
    // TÍTULO
    const pageTitle = document.getElementById('page-title');
    if (pageTitle && currentLang.nombre) {
        pageTitle.textContent = `${currentLang.nombre} | Portafolio`;
    }
    
    // NAVEGACIÓN
    setTextIf('nav-link-inicio', currentLang.nav_inicio);
    setTextIf('nav-link-sobre', currentLang.nav_sobre);
    setTextIf('nav-link-experiencia', currentLang.nav_experiencia);
    setTextIf('nav-link-habilidades', currentLang.nav_habilidades);
    setTextIf('nav-link-logros', currentLang.nav_logros);
    setTextIf('nav-link-contacto', currentLang.nav_contacto);
    
    // HERO
    setTextIf('hero-greeting', currentLang.hero_greeting);
    setTextIf('hero-name', currentLang.nombre);
    setTextIf('hero-description', currentLang.hero_description);
    
    // STATS
    setTextIf('stats-empresas', currentLang.stats_empresas);
    setTextIf('stats-plataformas', currentLang.stats_plataformas);
    
    // BOTONES
    setTextIf('btn-contacto', currentLang.btn_contacto);
    const btnCv = document.getElementById('btn-cv');
    if (btnCv) {
        btnCv.innerHTML = `<span>${currentLang.btn_cv_icon || '📄'}</span> ${currentLang.btn_cv_text || 'Descargar CV'}`;
    }
    
    // SCROLL
    setTextIf('scroll-down', currentLang.scroll_down);
    
    // SOBRE MÍ
    setTextIf('about-title', currentLang.about_title);
    setTextIf('about-description', currentLang.about_description);
    
    // Títulos de detalles
    setTextIf('detail-ubicacion-title', currentLang.detail_ubicacion);
    setTextIf('detail-email-title', currentLang.detail_email);
    setTextIf('detail-telefono-title', currentLang.detail_telefono);
    setTextIf('detail-edad-title', currentLang.detail_edad);
    setTextIf('detail-carnet-title', currentLang.detail_carnet);
    
    // Valores de detalles
    setTextIf('detail-location', currentLang.detail_location);
    setTextIf('detail-email', currentLang.detail_email_address);
    setTextIf('detail-phone', currentLang.detail_phone);
    setTextIf('detail-birth', currentLang.detail_birth);
    setTextIf('detail-driving', currentLang.detail_driving);
    
    // TÍTULOS DE SECCIONES
    setTextIf('experience-title', currentLang.experience_title);
    setTextIf('skills-title', currentLang.skills_title);
    setTextIf('projects-title', currentLang.projects_title);
    setTextIf('contact-title', currentLang.contact_title);
    
    // CONTACTO
    setTextIf('contact-description', currentLang.contact_description);
    
    // FOOTER
    setTextIf('footer-text', currentLang.footer_text);
}

function setTextIf(id, text) {
    const el = document.getElementById(id);
    if (!el) {
        console.warn(`⚠️ Elemento #${id} NO encontrado`);
        return;
    }
    if (text === undefined || text === null) {
        console.warn(`⚠️ Texto para #${id} es undefined/null`);
        return;
    }
    el.textContent = text;
}

// ===================================
// TEMA OSCURO/CLARO
// ===================================

function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) {
        console.warn("⚠️ themeToggle no encontrado");
        return;
    }
    
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
}

function updateThemeIcon(theme) {
    const toggleIcon = document.querySelector('.toggle-icon');
    if (toggleIcon) {
        toggleIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
}

// ===================================
// TOGGLE DE IDIOMA (ES / EN)
// ===================================

function initLanguageToggle() {
    console.log("\n🌐 Iniciando toggle de idioma...");
    
    const langToggle = document.getElementById('langToggle');
    if (!langToggle) {
        console.warn("⚠️ #langToggle no encontrado");
        return;
    }
    
    const langLabel = langToggle.querySelector('.lang-label');
    
    // Cargar idioma guardado
    const savedLang = localStorage.getItem('lang') || 'es';
    console.log(`📦 Idioma guardado: ${savedLang}`);
    
    if (savedLang === 'en' && typeof LANG_EN !== 'undefined') {
        currentLang = LANG_EN;
        if (langLabel) langLabel.textContent = 'ES';
        console.log("🌐 Idioma activo: EN");
    } else {
        currentLang = LANG;
        if (langLabel) langLabel.textContent = 'EN';
        console.log("🌐 Idioma activo: ES");
    }
    
    // Event listener
    langToggle.addEventListener('click', () => {
        const isSpanish = currentLang === LANG;
        
        if (isSpanish) {
            // Cambiar a inglés
            if (typeof LANG_EN === 'undefined') {
                console.warn("⚠️ LANG_EN no está cargado. Cargando eng.js dinámicamente...");
                loadLanguageFile('LANG/EN/eng.js', 'LANG_EN', () => {
                    currentLang = LANG_EN;
                    if (langLabel) langLabel.textContent = 'ES';
                    localStorage.setItem('lang', 'en');
                    renderAllTexts();
                    renderDynamicContent();
                    initScrollAnimations();
                    console.log("✅ Cambiado a EN");
                });
            } else {
                currentLang = LANG_EN;
                if (langLabel) langLabel.textContent = 'ES';
                localStorage.setItem('lang', 'en');
                renderAllTexts();
                renderDynamicContent();
                initScrollAnimations();
                console.log("✅ Cambiado a EN");
            }
        } else {
            // Cambiar a español
            currentLang = LANG;
            if (langLabel) langLabel.textContent = 'EN';
            localStorage.setItem('lang', 'es');
            renderAllTexts();
            renderDynamicContent();
            initScrollAnimations();
            console.log("✅ Cambiado a ES");
        }
    });
    
    console.log("✅ Toggle de idioma inicializado");
}

// Carga dinámica de archivos de idioma
function loadLanguageFile(url, globalVarName, callback) {
    const script = document.createElement('script');
    script.src = url;
    script.onload = () => {
        console.log(`✅ ${globalVarName} cargado desde ${url}`);
        if (callback) callback();
    };
    script.onerror = () => {
        console.error(`❌ Error al cargar ${url}`);
    };
    document.head.appendChild(script);
}

// ===================================
// NAVEGACIÓN
// ===================================

function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (!navToggle || !navMenu) {
        console.warn("⚠️ Elementos de navegación no encontrados");
        return;
    }
    
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            if (scrollY >= section.offsetTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ===================================
// CANVAS DE PARTÍCULAS
// ===================================

function initParticleCanvas() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) {
        console.warn("⚠️ particleCanvas no encontrado");
        return;
    }
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 80;
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.radius = Math.random() * 2 + 1;
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(59, 130, 246, 0.5)';
            ctx.fill();
        }
    }
    
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    function connectParticles() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 150) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(59, 130, 246, ${0.2 * (1 - distance / 150)})`;
                    ctx.lineWidth = 1;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        connectParticles();
        requestAnimationFrame(animate);
    }
    
    animate();
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// ===================================
// EFECTO MÁQUINA DE ESCRIBIR
// ===================================

function initTypeWriter() {
    const element = document.getElementById('hero-role');
    if (!element || !currentLang || !currentLang.hero_role) {
        console.warn("⚠️ No se puede iniciar máquina de escribir");
        return;
    }
    
    const text = currentLang.hero_role;
    let index = 0;
    element.textContent = '';
    
    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, 80);
        }
    }
    
    setTimeout(type, 1000);
}

// ===================================
// CONTENIDO DINÁMICO
// ===================================

function renderDynamicContent() {
    if (!currentLang) {
        console.error("❌ currentLang no disponible para renderDynamicContent");
        return;
    }
    
    renderExperience();
    renderSkills();
    renderProjects();
    renderContactMethods();
}

// ===================================
// RENDERIZAR EXPERIENCIA
// ===================================

function renderExperience() {
    console.log("\n🔧 === renderExperience() ===");
    
    const timeline = document.getElementById('timeline');
    if (!timeline) {
        console.error("❌ #timeline NO encontrado en el DOM");
        return;
    }
    console.log("✅ #timeline encontrado");
    
    if (!currentLang.experience_data) {
        console.error("❌ currentLang.experience_data no existe");
        return;
    }
    
    if (!Array.isArray(currentLang.experience_data)) {
        console.error("❌ currentLang.experience_data no es un array");
        return;
    }
    
    console.log(`📊 ${currentLang.experience_data.length} experiencias para renderizar`);
    
    if (currentLang.experience_data.length === 0) {
        console.warn("⚠️ No hay experiencias para renderizar");
        return;
    }
    
    timeline.innerHTML = '';
    
    currentLang.experience_data.forEach((exp, index) => {
        console.log(`\n📝 Procesando experiencia ${index + 1}...`);
        console.log(`   - Puesto: ${exp.puesto}`);
        console.log(`   - Empresa: ${exp.empresa}`);
        
        try {
            if (!exp.puesto || !exp.empresa) {
                console.error(`   ❌ Datos incompletos en experiencia ${index + 1}`);
                return;
            }
            
            const timelineItem = document.createElement('div');
            timelineItem.className = 'timeline-item';
            
            let responsibilities = '';
            if (Array.isArray(exp.responsabilidades) && exp.responsabilidades.length > 0) {
                responsibilities = exp.responsabilidades.map(resp => 
                    `<li>${resp}</li>`
                ).join('');
                console.log(`   ✅ ${exp.responsabilidades.length} responsabilidades`);
            } else {
                console.warn(`   ⚠️ Sin responsabilidades`);
            }
            
            const ubicacion = exp.ubicacion || '';
            const periodo = exp.periodo || '';
            
            timelineItem.innerHTML = `
                <div class="timeline-content">
                    <div class="timeline-header">
                        <h3 class="timeline-title">${exp.puesto}</h3>
                        <h4 class="timeline-company">${exp.empresa}</h4>
                        ${ubicacion ? `<p class="timeline-location">📍 ${ubicacion}</p>` : ''}
                        ${periodo ? `<span class="timeline-period">${periodo}</span>` : ''}
                    </div>
                    ${responsibilities ? `<ul class="timeline-responsibilities">${responsibilities}</ul>` : ''}
                </div>
            `;
            
            timeline.appendChild(timelineItem);
            console.log(`   ✅ Experiencia ${index + 1} renderizada`);
            
        } catch (error) {
            console.error(`   ❌ Error en experiencia ${index + 1}:`, error);
        }
    });
    
    console.log(`\n🎉 renderExperience() completado: ${timeline.children.length} elementos`);
}

// ===================================
// RENDERIZAR HABILIDADES
// ===================================

function renderSkills() {
    console.log("\n🔧 === renderSkills() ===");
    
    const skillsGrid = document.getElementById('skills-grid');
    if (!skillsGrid) {
        console.error("❌ #skills-grid NO encontrado");
        return;
    }
    console.log("✅ #skills-grid encontrado");
    
    if (!currentLang.skills_data || !Array.isArray(currentLang.skills_data)) {
        console.error("❌ currentLang.skills_data no es un array válido");
        return;
    }
    
    console.log(`📊 ${currentLang.skills_data.length} categorías de habilidades`);
    
    skillsGrid.innerHTML = '';
    
    currentLang.skills_data.forEach((category, index) => {
        console.log(`\n📝 Procesando categoría ${index + 1}: ${category.categoria}`);
        
        try {
            const skillCategory = document.createElement('div');
            skillCategory.className = 'skill-category';
            
            const skills = category.habilidades.map(skill => `
                <div class="skill-item">
                    <div class="skill-name">
                        <span>${skill.nombre}</span>
                        <span class="skill-level">${skill.nivel}%</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-progress" data-level="${skill.nivel}"></div>
                    </div>
                </div>
            `).join('');
            
            skillCategory.innerHTML = `
                <div class="skill-category-header">
                    <span class="skill-category-icon">${category.icono}</span>
                    <h3 class="skill-category-title">${category.categoria}</h3>
                </div>
                ${skills}
            `;
            
            skillsGrid.appendChild(skillCategory);
            console.log(`   ✅ ${category.habilidades.length} habilidades renderizadas`);
            
        } catch (error) {
            console.error(`   ❌ Error en categoría ${index + 1}:`, error);
        }
    });
    
    console.log(`\n🎉 renderSkills() completado: ${skillsGrid.children.length} categorías`);
}

// ===================================
// RENDERIZAR PROYECTOS/LOGROS
// ===================================

function renderProjects() {
    console.log("\n🔧 === renderProjects() ===");
    
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) {
        console.error("❌ #projects-grid NO encontrado");
        return;
    }
    console.log("✅ #projects-grid encontrado");
    
    if (!currentLang.projects_data || !Array.isArray(currentLang.projects_data)) {
        console.error("❌ currentLang.projects_data no es un array válido");
        return;
    }
    
    console.log(`📊 ${currentLang.projects_data.length} proyectos para renderizar`);
    
    projectsGrid.innerHTML = '';
    
    currentLang.projects_data.forEach((project, index) => {
        console.log(`\n📝 Procesando proyecto ${index + 1}: ${project.titulo}`);
        
        try {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            
            const technologies = project.tecnologias.map(tech => 
                `<span class="tech-tag">${tech}</span>`
            ).join('');
            
            projectCard.innerHTML = `
                <div class="project-icon">${project.icono}</div>
                <h3 class="project-title">${project.titulo}</h3>
                <p class="project-description">${project.descripcion}</p>
                <div class="project-metric">
                    <span class="metric-number">${project.metrica}</span>
                    <span class="metric-label">${project.metrica_label}</span>
                </div>
                <div class="project-technologies">
                    ${technologies}
                </div>
            `;
            
            projectsGrid.appendChild(projectCard);
            console.log(`   ✅ Proyecto ${index + 1} renderizado`);
            
        } catch (error) {
            console.error(`   ❌ Error en proyecto ${index + 1}:`, error);
        }
    });
    
    console.log(`\n🎉 renderProjects() completado: ${projectsGrid.children.length} proyectos`);
}

// ===================================
// RENDERIZAR MÉTODOS DE CONTACTO
// ===================================

function renderContactMethods() {
    console.log("\n🔧 === renderContactMethods() ===");
    
    const contactMethods = document.getElementById('contact-methods');
    if (!contactMethods) {
        console.error("❌ #contact-methods NO encontrado");
        return;
    }
    console.log("✅ #contact-methods encontrado");
    
    try {
        contactMethods.innerHTML = `
            <a href="mailto:${currentLang.contact_email_value}" class="contact-method">
                <span class="method-icon">${currentLang.contact_email_icon}</span>
                <div class="method-details">
                    <h4>${currentLang.contact_email_title}</h4>
                    <p>${currentLang.contact_email_value}</p>
                </div>
            </a>
            <a href="tel:${currentLang.contact_phone_value.replace(/\s/g, '')}" class="contact-method">
                <span class="method-icon">${currentLang.contact_phone_icon}</span>
                <div class="method-details">
                    <h4>${currentLang.contact_phone_title}</h4>
                    <p>${currentLang.contact_phone_value}</p>
                </div>
            </a>
            <div class="contact-method">
                <span class="method-icon">${currentLang.contact_address_icon}</span>
                <div class="method-details">
                    <h4>${currentLang.contact_address_title}</h4>
                    <p>${currentLang.contact_address_value}</p>
                </div>
            </div>
        `;
        console.log("✅ Métodos de contacto renderizados");
    } catch (error) {
        console.error("❌ Error en renderContactMethods():", error);
    }
}

// ===================================
// CONTADORES ANIMADOS
// ===================================

function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    if (counters.length === 0) {
        console.warn("⚠️ No hay contadores para animar");
        return;
    }
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute('data-count');
                let count = 0;
                const increment = target / 100;
                
                const updateCount = () => {
                    if (count < target) {
                        count += increment;
                        counter.innerText = Math.ceil(count);
                        requestAnimationFrame(updateCount);
                    } else {
                        counter.innerText = target + '+';
                    }
                };
                
                updateCount();
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
}

// ===================================
// ANIMACIONES DE SCROLL CON GSAP
// ===================================

function initScrollAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
        console.warn("⚠️ GSAP o ScrollTrigger no están disponibles");
        return;
    }
    
    console.log("\n🎬 === initScrollAnimations() ===");
    
    // CRÍTICO: Refrescar ScrollTrigger después de renderizar contenido dinámico
    ScrollTrigger.getAll().forEach(t => t.kill());
    gsap.registerPlugin(ScrollTrigger);
    
    // 1. Animar secciones generales
    console.log("📦 Animando secciones...");
    gsap.utils.toArray('.section').forEach(section => {
        gsap.fromTo(section, 
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                    once: true
                }
            }
        );
    });
    
    // 2. Animar progreso de barras de habilidades
    console.log("📊 Configurando barras de habilidades...");
    ScrollTrigger.create({
        trigger: '#habilidades',
        start: 'top 75%',
        once: true,
        onEnter: () => {
            console.log("  → Activando barras de habilidades");
            document.querySelectorAll('.skill-progress').forEach((bar, i) => {
                const level = bar.getAttribute('data-level');
                gsap.to(bar, {
                    width: level + '%',
                    duration: 1.5,
                    delay: i * 0.05,
                    ease: 'power2.out'
                });
            });
        }
    });
    
    // 3. Animar items del timeline (experiencia)
    console.log("📅 Animando timeline...");
    const timelineItems = document.querySelectorAll('.timeline-item');
    console.log(`   Encontrados ${timelineItems.length} items de timeline`);
    
    timelineItems.forEach((item, index) => {
        // Forzar estado inicial visible para evitar flash
        gsap.set(item, { opacity: 1, x: 0 });
        
        gsap.fromTo(item,
            { opacity: 0, x: -50 },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                delay: index * 0.2,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: item,
                    start: 'top 90%',
                    toggleActions: 'play none none none',
                    once: true
                }
            }
        );
    });
    
    // 4. Animar cards de proyectos
    console.log("🏆 Animando proyectos...");
    const projectCards = document.querySelectorAll('.project-card');
    console.log(`   Encontradas ${projectCards.length} cards`);
    
    projectCards.forEach((card, index) => {
        gsap.set(card, { opacity: 1, y: 0 });
        
        gsap.fromTo(card,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: index * 0.15,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 90%',
                    toggleActions: 'play none none none',
                    once: true
                }
            }
        );
    });
    
    // 5. Animar detalles de "Sobre Mí"
    gsap.utils.toArray('.detail-item').forEach((item, index) => {
        gsap.fromTo(item,
            { opacity: 0, x: -30 },
            {
                opacity: 1,
                x: 0,
                duration: 0.6,
                delay: index * 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: item,
                    start: 'top 95%',
                    once: true
                }
            }
        );
    });
    
    // 6. Animar métodos de contacto
    gsap.utils.toArray('.contact-method').forEach((method, index) => {
        gsap.fromTo(method,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: index * 0.15,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: method,
                    start: 'top 95%',
                    once: true
                }
            }
        );
    });
    
    // CRÍTICO: Refrescar todos los triggers después de configurar
    console.log("🔄 Refreshing ScrollTrigger...");
    ScrollTrigger.refresh();
    console.log("✅ initScrollAnimations() completado");
}

// ===================================
// SCROLL SUAVE
// ===================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===================================
// DESCARGA DE CV (SIN SALIR DE LA PÁGINA)
// ===================================

function initCVDownload() {
    console.log("\n📄 Iniciando descarga de CV...");
    
    const btnCv = document.getElementById('btn-cv');
    if (!btnCv) {
        console.warn("⚠️ #btn-cv no encontrado");
        return;
    }
    
    btnCv.addEventListener('click', async function(e) {
        e.preventDefault(); // Evita la navegación por defecto
        
        const cvUrl = this.getAttribute('href');
        console.log(`📥 Descargando CV desde: ${cvUrl}`);
        
        // Feedback visual: mostrar estado de descarga
        const originalHTML = this.innerHTML;
        this.innerHTML = '<span>⏳</span> Descargando...';
        this.style.pointerEvents = 'none';
        
        try {
            const response = await fetch(cvUrl);
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            
            const blob = await response.blob();
            
            // Crear URL temporal del blob
            const blobUrl = window.URL.createObjectURL(blob);
            
            // Crear enlace temporal y forzar descarga
            const tempLink = document.createElement('a');
            tempLink.href = blobUrl;
            tempLink.download = 'CV_Aitor_Gallego.pdf'; // Nombre del archivo descargado
            tempLink.style.display = 'none';
            document.body.appendChild(tempLink);
            tempLink.click();
            
            // Limpiar
            setTimeout(() => {
                document.body.removeChild(tempLink);
                window.URL.revokeObjectURL(blobUrl);
            }, 100);
            
            // Restaurar botón
            this.innerHTML = originalHTML;
            this.style.pointerEvents = 'auto';
            
            console.log("✅ CV descargado correctamente");
            
        } catch (error) {
            console.error("❌ Error al descargar CV:", error);
            
            // Restaurar botón
            this.innerHTML = originalHTML;
            this.style.pointerEvents = 'auto';
            
            // Mostrar mensaje de error al usuario
            alert('No se pudo descargar el CV. Por favor, inténtalo de nuevo más tarde o contacta directamente por email.');
        }
    });
    
    console.log("✅ Descarga de CV inicializada");
}