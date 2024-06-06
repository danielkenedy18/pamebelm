document.addEventListener('DOMContentLoaded', () => {
    const headerContentSecondary = document.querySelector('.header-content-secondary');
    const heroSecondary = document.getElementById('hero-secondary');

    // Intersection Observer para mostrar el texto cuando el 50% de la sección es visible
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                headerContentSecondary.classList.add('visible');
                headerContentSecondary.style.opacity = 1;
                headerContentSecondary.style.transform = 'translateX(0)';
            } else {
                headerContentSecondary.classList.remove('visible');
                headerContentSecondary.style.opacity = 0;
                headerContentSecondary.style.transform = 'translateX(100%)';
            }
        });
    }, {
        threshold: 0.5
    });

    sectionObserver.observe(heroSecondary);

    // Agregar la animación de desvanecido y deslizamiento
    headerContentSecondary.style.opacity = 0;
    headerContentSecondary.style.transform = 'translateX(100%)';
    headerContentSecondary.style.transition = 'opacity 1s ease, transform 1s ease';
});
