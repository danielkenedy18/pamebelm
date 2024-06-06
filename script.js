document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-up-content img');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    fadeElements.forEach(element => {
        observer.observe(element);
    });

    document.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const headerContentHero = document.querySelector('.header-content-hero');
        headerContentHero.style.transform = `translateY(${scrolled * 0.5}px)`;
    });

    document.addEventListener('scroll', function() {
        var menu = document.getElementById('menu');
        menu.style.opacity = window.scrollY === 0 ? '1' : '0';
    });

    const heroSecondary = document.getElementById('hero-secondary');
    const headerContentSecondary = document.querySelector('.header-content-secondary');
    const backgroundVideo = document.getElementById('background-video');
    const soundIcon = document.getElementById('sound-icon');

    let hideTimeout;

    function startHideTimeout() {
        clearTimeout(hideTimeout);
        hideTimeout = setTimeout(() => {
            headerContentSecondary.classList.remove('visible');
            headerContentSecondary.style.opacity = 0;
            headerContentSecondary.style.transform = 'translateX(100%)';
        }, 3000);
    }

    function showHeaderContent() {
        clearTimeout(hideTimeout);
        headerContentSecondary.classList.add('visible');
        headerContentSecondary.style.opacity = 1;
        headerContentSecondary.style.transform = 'translateX(0)';
    }

    // Reproduce el video sin sonido al cargar la página
    backgroundVideo.muted = true;
    backgroundVideo.play().catch(error => {
        console.log("Error attempting to play the video:", error);
    });

    // Maneja el clic en el icono de sonido para activar/desactivar el sonido
    soundIcon.addEventListener('click', () => {
        if (backgroundVideo.muted) {
            backgroundVideo.muted = false;
            soundIcon.classList.remove('muted');
            soundIcon.classList.add('unmuted');
        } else {
            backgroundVideo.muted = true;
            soundIcon.classList.remove('unmuted');
            soundIcon.classList.add('muted');
        }
    });

    // Intersection Observer para mostrar el texto cuando el 50% de la sección es visible
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                headerContentSecondary.classList.add('visible');
                headerContentSecondary.style.opacity = 1;
                headerContentSecondary.style.transform = 'translateX(0)';
                startHideTimeout();
            } else {
                headerContentSecondary.classList.remove('visible');
                headerContentSecondary.style.opacity = 0;
                headerContentSecondary.style.transform = 'translateX(100%)';
                clearTimeout(hideTimeout);
            }
        });
    }, {
        threshold: 0.5
    });

    sectionObserver.observe(heroSecondary);

    // Mostrar el texto de nuevo cuando se mueve el mouse
    document.addEventListener('mousemove', () => {
        showHeaderContent();
        startHideTimeout();
    });
});
