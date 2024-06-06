document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    let lastScrollTop = 0;

    // Function to show or hide images based on the scroll direction
    const handleScroll = () => {
        const st = window.pageYOffset || document.documentElement.scrollTop;
        fadeElements.forEach((element) => {
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            if (st + window.innerHeight > elementPosition) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: 'center' // Centrar la sección verticalmente
            });
        });
    });

    // Carrusel
    const track = document.querySelector('.carousel-track');
    let index = 0;

    const moveCarousel = () => {
        const trackWidth = track.scrollWidth / 2;
        const imgWidth = track.querySelector('img').clientWidth;
        const margin = parseInt(getComputedStyle(track.querySelector('img')).marginRight, 10);
        index += imgWidth + (2 * margin);
        if (index >= trackWidth) {
            index = 0;
            track.style.transition = 'none';
            track.style.transform = 'translateX(0)';
            setTimeout(() => {
                track.style.transition = 'transform 0.5s ease-in-out';
            }, 50); // Allow time for the browser to repaint
        } else {
            track.style.transform = `translateX(-${index}px)`;
        }
    };

    setInterval(moveCarousel, 3000); // Cambiar imagen cada 3 segundos

    // Para asegurar que la animación se aplique en la carga de la página
    setTimeout(() => {
        document.querySelector('.header-content h1').classList.add('visible');
        document.querySelector('#portfolio-subtitle').classList.add('visible');
    }, 1000); // Puedes ajustar el tiempo según tu preferencia
});
