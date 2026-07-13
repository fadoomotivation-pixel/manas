/* ================================
   MANAS PROPERTY - Coming Soon
   Interactive JavaScript
   ================================ */

// ============ COUNTDOWN TIMER ============
(function initCountdown() {
    // Set launch date to 30 days from now
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 30);
    launchDate.setHours(0, 0, 0, 0);

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = launchDate.getTime() - now;

        if (distance <= 0) {
            daysEl.textContent = '00';
            hoursEl.textContent = '00';
            minutesEl.textContent = '00';
            secondsEl.textContent = '00';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysEl.textContent = String(days).padStart(2, '0');
        hoursEl.textContent = String(hours).padStart(2, '0');
        minutesEl.textContent = String(minutes).padStart(2, '0');
        secondsEl.textContent = String(seconds).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
})();


// ============ PARTICLE BACKGROUND ============
(function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrame;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resize();
    window.addEventListener('resize', resize);

    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.3;
            this.speedY = (Math.random() - 0.5) * 0.3;
            this.opacity = Math.random() * 0.4 + 0.1;
            this.hue = 40 + Math.random() * 20; // Gold range
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            // Gentle pulse
            this.opacity += Math.sin(Date.now() * 0.001 + this.x) * 0.002;
            this.opacity = Math.max(0.05, Math.min(0.5, this.opacity));

            if (this.x < -10 || this.x > canvas.width + 10 ||
                this.y < -10 || this.y > canvas.height + 10) {
                this.reset();
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(${this.hue}, 70%, 60%, ${this.opacity})`;
            ctx.fill();
        }
    }

    // Create particles based on screen size
    const particleCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000));
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            p.update();
            p.draw();
        });

        // Draw connections between nearby particles
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 120) {
                    const opacity = (1 - dist / 120) * 0.08;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `hsla(42, 70%, 55%, ${opacity})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }

        animationFrame = requestAnimationFrame(animate);
    }

    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!prefersReducedMotion.matches) {
        animate();
    } else {
        // Draw static particles once
        particles.forEach(p => p.draw());
    }

    prefersReducedMotion.addEventListener('change', (e) => {
        if (e.matches) {
            cancelAnimationFrame(animationFrame);
        } else {
            animate();
        }
    });
})();


// ============ SCROLL ANIMATIONS ============
(function initScrollAnimations() {
    const elements = document.querySelectorAll('[data-animate]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(el => observer.observe(el));
})();


// ============ NOTIFY FORM ============
(function initNotifyForm() {
    const form = document.getElementById('notify-form');
    const phoneInput = document.getElementById('phone-input');
    const notifyBtn = document.getElementById('notify-btn');
    const successMsg = document.getElementById('notify-success');

    if (!form || !phoneInput || !notifyBtn) return;

    // Only allow numeric input
    phoneInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D/g, '').slice(0, 10);
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const phone = phoneInput.value.trim();

        if (phone.length !== 10) {
            phoneInput.style.borderColor = '#ef4444';
            phoneInput.focus();
            setTimeout(() => {
                phoneInput.style.borderColor = '';
            }, 2000);
            return;
        }

        // Simulate submission
        notifyBtn.disabled = true;
        notifyBtn.querySelector('.btn-text').textContent = 'भेज रहे हैं...';

        setTimeout(() => {
            form.style.display = 'none';
            successMsg.style.display = 'flex';

            // Reset after some time
            setTimeout(() => {
                form.style.display = 'flex';
                successMsg.style.display = 'none';
                notifyBtn.disabled = false;
                notifyBtn.querySelector('.btn-text').textContent = 'सूचित करें';
                phoneInput.value = '';
            }, 5000);
        }, 1500);
    });
})();


// ============ SMOOTH HEADER SCROLL EFFECT ============
(function initHeaderScroll() {
    const header = document.getElementById('header');
    if (!header) return;

    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.position = 'sticky';
            header.style.top = '0';
            header.style.background = 'rgba(10, 10, 20, 0.85)';
            header.style.backdropFilter = 'blur(20px)';
            header.style.zIndex = '50';
            header.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
            header.style.padding = '12px 0';
        } else {
            header.style.position = 'relative';
            header.style.background = 'transparent';
            header.style.backdropFilter = 'none';
            header.style.borderBottom = 'none';
            header.style.padding = '';
        }

        lastScroll = currentScroll;
    }, { passive: true });
})();


// ============ COUNTDOWN NUMBER FLIP ANIMATION ============
(function initNumberFlip() {
    const countdownValues = document.querySelectorAll('.countdown-value');

    countdownValues.forEach(el => {
        const observer = new MutationObserver(() => {
            el.style.transform = 'scale(1.05)';
            setTimeout(() => {
                el.style.transform = 'scale(1)';
            }, 150);
        });

        observer.observe(el, { childList: true, characterData: true, subtree: true });
    });
})();
