AOS.init({
    duration: 1200,
    easing: 'ease-in-out',
    once: false,
    mirror: true
});

// PARTICULAS
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

const particleColors = [
    'rgba(160,140,255,0.36)', // lila
    'rgba(255,150,200,0.38)', // rosa
    'rgba(127,213,255,0.42)'  // celeste
];

let particles = [];

function initCanvas() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

window.addEventListener('resize', initCanvas);

initCanvas();

class Particle {

    constructor() {
        this.reset();
    }

    reset() {

        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        // make a small chance of larger, more visible particles
        if (Math.random() < 0.12) {
            this.size = Math.random() * 10 + 3; // larger bubble
        } else {
            this.size = Math.random() * 3 + 0.6; // normal small particle
        }

        // velocity scales slightly with size for natural motion
        const speedFactor = 0.45 + Math.min(this.size / 20, 0.6);
        this.vx = (Math.random() - 0.5) * speedFactor;
        this.vy = (Math.random() - 0.5) * speedFactor;
        this.color = particleColors[Math.floor(Math.random() * particleColors.length)];

    }

    update() {

        this.x += this.vx;
        this.y += this.vy;

        if (
            this.x < 0 ||
            this.x > canvas.width ||
            this.y < 0 ||
            this.y > canvas.height
        ) {
            this.reset();
        }

    }

    draw() {

        ctx.fillStyle = this.color;

        ctx.beginPath();

        ctx.arc(
            this.x,
            this.y,
            this.size,
            0,
            Math.PI * 2
        );

        ctx.fill();

    }

}

for (let i = 0; i < 120; i++) {
    particles.push(new Particle());
}

function animate() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    particles.forEach((p) => {

        p.update();
        p.draw();

    });

    requestAnimationFrame(animate);

}

animate();

// NAV
window.addEventListener('scroll', () => {

    const nav =
        document.querySelector('nav');

    if (window.scrollY > 50) {

        nav.style.padding =
            '0.8rem 0';

        nav.style.background =
            'rgba(5,5,5,0.9)';

    } else {

        nav.style.padding =
            '1.5rem 0';

        nav.style.background =
            'rgba(5,5,5,0.7)';
    }

});

// CURSOR LIGHT
const cursorLight =
    document.getElementById('cursor-light');

window.addEventListener('mousemove', (e) => {

    cursorLight.style.left =
        `${e.clientX}px`;

    cursorLight.style.top =
        `${e.clientY}px`;

    cursorLight.style.opacity =
        '1';

});

document.addEventListener('mouseleave', () => {

    cursorLight.style.opacity =
        '0';

});

// CERTIFICADOS
const certButtons =
    document.querySelectorAll('.cert-btn');

certButtons.forEach((btn) => {

    btn.addEventListener('click', () => {

        const preview =
            btn.nextElementSibling;

        preview.classList.toggle('active');

    });

});

const stickyCards = document.querySelectorAll('.sticky-card');

if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.25
    });

    stickyCards.forEach((card) => revealObserver.observe(card));
} else {
    stickyCards.forEach((card) => card.classList.add('visible'));
}

// PROJECT MODAL + CAROUSEL
const projectModal = document.getElementById('project-modal');
const projectCards = document.querySelectorAll('.project-trigger');
const modalOverlay = projectModal.querySelector('.modal-overlay');
const modalClose = projectModal.querySelector('.modal-close');
const carouselSlides = projectModal.querySelector('.carousel-slides');
const modalTitle = projectModal.querySelector('.project-modal-title');
const modalDescription = projectModal.querySelector('.project-modal-description');
const modalTech = projectModal.querySelector('.project-modal-tech');
const modalLinks = projectModal.querySelector('.project-modal-links');
const nextButton = projectModal.querySelector('.carousel-next');
const prevButton = projectModal.querySelector('.carousel-prev');

const projectData = [
    {
        title: 'TuBuffet',
        description: 'TuBuffet es una aplicación Full-Stack que surge a partir de una problemática común en entornos escolares: las largas filas y los tiempos de espera en los buffets/kioscos durante los recreos. Como solución, se propone una aplicación móvil que permite realizar pedidos de forma virtual, rápida y organizada, evitando esperas innecesarias y mejorando la experiencia general.',
        tech: ['JavaScript', 'React Native', 'MySQL', 'Node.js', 'JWT', 'Figma', 'CSS', 'HTML'],
        images: [],
        github: 'https://github.com/Renaaa189/TuBuffet.git',
        live: null
    },
    {
        title: 'KnowBeat',
        description: 'Knowbeat es un sitio web social orientado al aprendizaje musical, tanto teórico como práctico, en la cual cualquier persona, con o sin conocimientos previos, puede ingresar, aprender y practicar con lecciones didácticas divididas por secciones tematizadas. A su vez, nuestro sitio cuenta con una comunidad en la cual múltiples personas pueden interactuar con publicaciones de otros miembros, lo cual permite que los usuarios aprendan y puedan despejar dudas posibles. Cuenta con múltiples funcionalidades de red social, mensajería, ejercicios personalizados, clases guiadas y experiencia del usuario.',
        tech: ['JavaScript', 'React', 'MySQL', 'Node.js', 'JWT', 'Figma', 'CSS', 'HTML', 'MongoDB'],
        images: [],
        github: 'https://github.com/Santino7537/Knowbeat.git',
        live: null
    },
    {
        title: 'NEXORA IA',
        description: 'NEXORA es un chatbot con inteligencia artificial desarrollado en Python que permite mantener conversaciones con un modelo de lenguaje avanzado. Funciona como una aplicación web local creada con Streamlit y utiliza la API de Groq para generar respuestas en tiempo real. Está pensado para que cualquier persona pueda usarlo, incluso sin experiencia previa en programación. La aplicación incluye funciones como creación de nuevos chats, edición de nombres, personalización del usuario con nombre y emoji, y ajustes del comportamiento de la IA como la creatividad de las respuestas o su longitud. Todo esto dentro de una interfaz simple y amigable tipo chat. Cuenta con características como interacción con IA, personalización, gestión de conversaciones y experiencia de usuario.',
        tech: ['Python', 'Visual Studio Code', 'Streamlit', 'Groq'],
        images: ['assets/img/NEXORA1.png', 'assets/img/NEXORA.PNG'],
        github: 'https://github.com/Renaaa189/Nexora.git',
        live: null
    },
    {
        title: 'NextRead',
        description: 'NextRead es una plataforma moderna y social para descubrir, compartir y conectar a través de libros. Permite a los usuarios explorar un extenso catálogo de obras, dejar reseñas, dar likes, seguir a otros lectores y recibir notificaciones en tiempo real. Cuenta con funcionalidades como la gestión de libros, perfil de usuario, reseñas y calificaciones, red social, seguridad y autenticación, administración y listas personalizadas.',
        tech: ['HTML', 'React', 'Vite', 'CSS3', 'JavaScript', 'Node.js', 'Express.js', 'Sequelize', 'MySQL', 'Figma', 'Framer Motion', 'Lucide React', 'React Router', 'Axios', 'JWT', 'bcrypt', 'Canva'],
        images: ['assets/img/NextRead.PNG', 'assets/img/NextRead1.PNG'],
        github: 'https://github.com/AlejoGuerraa/nextRead.git',
        live: 'https://nextread.net'
    },
    {
        title: 'NetStat',
        description: 'NetStat es una aplicación que permite escanear redes locales de forma rápida, clara y eficiente. Permite identificar dispositivos activos dentro de una red y cuenta con múltiples funcionalidades que facilitan la obtención de información clave, mostrando los resultados en una interfaz intuitiva pensada tanto para usuarios sin experiencia como para quienes buscan una herramienta técnica simple pero funcional. Sus características principales son: escaneo de red, visualización de datos, control de proceso y gestión de resultados.',
        tech: ['java.io', 'java.util', 'BufferedReader', 'InputStreamReader', 'Swing', 'Java'],
        images: ['assets/img/NetStat.png', 'assets/img/NetStat1.PNG'],
        github: 'https://github.com/Renaaa189/NetStat.git',
        live: null
    },
    {
        title: 'Almendra',
        description: 'Almendra es un proyecto de diseño y desarrollo frontend inspirado en una identidad visual cálida, artesanal y moderna. La idea principal fue crear una experiencia visual que transmitiera cercanía, estética y una navegación agradable, utilizando animaciones suaves y una composición mucho más dinámica que una página tradicional. Tiene características como identidad visual, experiencia de usuario, composición moderna y animaciones sutiles.',
        tech: ['HTML', 'CSS', 'VS Code', 'GitHub', 'Figma'],
        images: ['assets/img/Almendra.PNG', 'assets/img/Almendra1.PNG', 'assets/img/Almendra2.PNG'],
        github: 'https://github.com/Renaaa189/Almendra.git',
        live: 'https://renaaa189.github.io/Almendra/'
    }
];

let currentProjectIndex = 0;
let currentSlideIndex = 0;

function buildProjectSlides(images) {
    carouselSlides.innerHTML = '';
    carouselSlides.style.transform = 'translateX(0)';

    if (!images || images.length === 0) {
        const placeholder = document.createElement('div');
        placeholder.className = 'carousel-slide';
        placeholder.innerHTML = '<div class="carousel-placeholder">No hay imágenes disponibles aún. En este proyecto se muestra la descripción completa y las tecnologías utilizadas.</div>';
        carouselSlides.appendChild(placeholder);
        prevButton.style.display = 'none';
        nextButton.style.display = 'none';
        return;
    }

    images.forEach((src) => {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';

        const image = document.createElement('img');
        image.src = src;
        image.alt = `${projectData[currentProjectIndex].title} imagen`;
        slide.appendChild(image);
        carouselSlides.appendChild(slide);
    });

    prevButton.style.display = images.length > 1 ? 'grid' : 'none';
    nextButton.style.display = images.length > 1 ? 'grid' : 'none';
}

function updateCarousel() {
    const slideCount = carouselSlides.querySelectorAll('.carousel-slide').length;
    if (slideCount === 0) return;
    carouselSlides.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
}

function buildTechList(technologies) {
    modalTech.innerHTML = '';
    technologies.forEach((name) => {
        const item = document.createElement('span');
        item.textContent = name;
        modalTech.appendChild(item);
    });
}

function buildLinkButtons(project) {
    modalLinks.innerHTML = '';
    const githubLink = document.createElement('a');
    githubLink.href = project.github;
    githubLink.target = '_blank';
    githubLink.rel = 'noopener noreferrer';
    githubLink.innerHTML = '<i class="fab fa-github"></i> Ver GitHub';
    modalLinks.appendChild(githubLink);

    if (project.live) {
        const liveLink = document.createElement('a');
        liveLink.href = project.live;
        liveLink.target = '_blank';
        liveLink.rel = 'noopener noreferrer';
        liveLink.innerHTML = '<i class="fas fa-external-link-alt"></i> Visitar sitio';
        modalLinks.appendChild(liveLink);
    }
}

function openProjectModal(index) {
    currentProjectIndex = Number(index);
    currentSlideIndex = 0;
    const project = projectData[currentProjectIndex];
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    buildTechList(project.tech);
    buildLinkButtons(project);
    buildProjectSlides(project.images);
    updateCarousel();
    projectModal.classList.add('open');
    document.body.style.overflow = 'hidden';
    // update modal nav buttons visibility (no wrap)
    const nextBtn = projectModal.querySelector('.modal-next-project');
    const prevBtn = projectModal.querySelector('.modal-prev-project');
    if (nextBtn) nextBtn.style.display = (currentProjectIndex < projectData.length - 1) ? 'grid' : 'none';
    if (prevBtn) prevBtn.style.display = (currentProjectIndex > 0) ? 'grid' : 'none';
}

function closeProjectModal() {
    projectModal.classList.remove('open');
    document.body.style.overflow = '';
}

projectCards.forEach((card) => {
    card.addEventListener('click', (event) => {
        if (event.target.closest('a')) return;
        const projectId = card.dataset.projectId;
        openProjectModal(projectId);
    });
});

// card-level next buttons removed: navigation now only inside modal

modalClose.addEventListener('click', closeProjectModal);
modalOverlay.addEventListener('click', closeProjectModal);
nextButton.addEventListener('click', () => {
    const images = projectData[currentProjectIndex].images;
    if (images.length > 1) {
        currentSlideIndex = (currentSlideIndex + 1) % images.length;
        updateCarousel();
    }
});
prevButton.addEventListener('click', () => {
    const images = projectData[currentProjectIndex].images;
    if (images.length > 1) {
        currentSlideIndex = (currentSlideIndex - 1 + images.length) % images.length;
        updateCarousel();
    }
});

window.addEventListener('keydown', (event) => {
    if (!projectModal.classList.contains('open')) return;
    if (event.key === 'Escape') {
        closeProjectModal();
    }
    if (event.key === 'ArrowRight') {
        nextButton.click();
    }
    if (event.key === 'ArrowLeft') {
        prevButton.click();
    }
});

// Add a next-project button inside the modal to jump to the next project
(function addModalNextProjectButton() {
    const modalNextBtn = document.createElement('button');
    modalNextBtn.className = 'modal-next-project';
    modalNextBtn.setAttribute('aria-label', 'Siguiente proyecto');
    modalNextBtn.innerHTML = '<i class="fas fa-arrow-right"></i>';

    // append to the modal (positioned absolute)
    projectModal.appendChild(modalNextBtn);

    modalNextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (typeof currentProjectIndex === 'undefined') return;
        const nextId = Number(currentProjectIndex) + 1;
        if (nextId < projectData.length) {
            openProjectModal(nextId);
        }
    });
    // previous project button
    const modalPrevBtn = document.createElement('button');
    modalPrevBtn.className = 'modal-prev-project';
    modalPrevBtn.setAttribute('aria-label', 'Proyecto anterior');
    modalPrevBtn.innerHTML = '<i class="fas fa-arrow-left"></i>';
    projectModal.appendChild(modalPrevBtn);

    modalPrevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (typeof currentProjectIndex === 'undefined') return;
        const prevId = Number(currentProjectIndex) - 1;
        if (prevId >= 0) {
            openProjectModal(prevId);
        }
    });

})();

// MAIN TECHNOLOGIES FILTERS
function initMainTechFilters() {
    const filterButtons = document.querySelectorAll('.tech-filter-btn');
    const techBoxes = document.querySelectorAll('.tech-center-grid .tech-box');

    const categories = {
        frontend: ['tech-javascript', 'tech-react', 'tech-html', 'tech-css'],
        tools: ['tech-figma', 'tech-vscode', 'tech-eclipse', 'tech-poo'],
        backend: ['tech-node', 'tech-java', 'tech-python', 'tech-sequelize'],
        db: ['tech-sql', 'tech-database', 'tech-sequelize']
    };

    function apply(filterA) {
        techBoxes.forEach(box => {
            if (filter === 'all') {
                box.style.display = '';
                return;
            }
            const cls = Array.from(box.classList);
            const allowed = categories[filter] || [];
            const match = allowed.some(c => cls.includes(c));
            box.style.display = match ? '' : 'none';
        });
    }

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            apply(btn.dataset.filter);
        });
    });
}

document.addEventListener('DOMContentLoaded', initMainTechFilters);

