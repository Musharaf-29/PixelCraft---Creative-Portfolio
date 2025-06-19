document.addEventListener('DOMContentLoaded', () => {
    // Loader
    window.addEventListener('load', () => {
        const loader = document.getElementById('loader');
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 1000);
    });

    // Initialize AOS Animation
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });

    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('.theme-icon');
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-bs-theme', currentTheme);
    themeIcon.textContent = currentTheme === 'light' ? '🌙' : '☀️';

    themeToggle.addEventListener('click', () => {
        const newTheme = document.body.getAttribute('data-bs-theme') === 'light' ? 'dark' : 'light';
        document.body.setAttribute('data-bs-theme', newTheme);
        themeIcon.textContent = newTheme === 'light' ? '🌙' : '☀️';
        localStorage.setItem('theme', newTheme);

        // Add animation to theme toggle
        themeToggle.classList.add('animate__animated', 'animate__pulse');
        setTimeout(() => {
            themeToggle.classList.remove('animate__animated', 'animate__pulse');
        }, 500);
    });

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
            // Close mobile menu
            const navbarToggler = document.querySelector('.navbar-toggler');
            if (!navbarToggler.classList.contains('collapsed')) {
                navbarToggler.click();
            }
        });
    });

    // Back to Top Button
    const backToTopButton = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Contact Form Validation
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const subject = document.getElementById('subject');
        const message = document.getElementById('message');

        // Reset validation
        [name, email, subject, message].forEach(field => {
            field.classList.remove('is-invalid');
        });

        // Validate name
        if (!name.value.trim()) {
            name.classList.add('is-invalid');
            isValid = false;
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim() || !emailRegex.test(email.value)) {
            email.classList.add('is-invalid');
            isValid = false;
        }

        // Validate subject
        if (!subject.value.trim()) {
            subject.classList.add('is-invalid');
            isValid = false;
        }

        // Validate message
        if (!message.value.trim()) {
            message.classList.add('is-invalid');
            isValid = false;
        }

        if (isValid) {
            // Simulate form submission
            const formSuccess = document.getElementById('form-success');
            form.classList.add('d-none');
            formSuccess.classList.remove('d-none');

            // Reset form after 3 seconds
            setTimeout(() => {
                form.reset();
                form.classList.remove('d-none');
                formSuccess.classList.add('d-none');
            }, 3000);
        }
    });

    // Portfolio Item Click Effect
    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.addEventListener('click', function() {
            this.classList.add('animate__animated', 'animate__pulse');
            setTimeout(() => {
                this.classList.remove('animate__animated', 'animate__pulse');
            }, 500);
        });
    });

    // Auto-play hero video (for mobile)
    const heroVideo = document.getElementById('hero-video');
    if (heroVideo) {
        // Ensure video plays on mobile
        heroVideo.muted = true;
        heroVideo.playsInline = true;
        heroVideo.play().catch(e => console.log('Video autoplay prevented:', e));
    }
});