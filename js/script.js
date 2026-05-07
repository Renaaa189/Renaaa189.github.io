AOS.init({
    duration: 1200,
    easing: 'ease-in-out',
    once: false,
    mirror: true
});

// PARTICULAS
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

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

        this.size = Math.random() * 2 + 0.5;

        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;

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

        ctx.fillStyle =
            'rgba(192,132,252,0.4)';

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