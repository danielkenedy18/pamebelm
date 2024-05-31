document.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const headerContent = document.querySelector('.header-content');
    headerContent.style.transform = `translateY(${scrolled * 0.5}px)`;
});
document.addEventListener('scroll', function() {
    var menu = document.getElementById('menu');
    if (window.scrollY === 0) {
        menu.style.opacity = '1';
    } else {
        menu.style.opacity = '0';
    }
});
function showCarousel() {
    document.getElementById('portfolio-initial-view').style.display = 'none';
    document.getElementById('portfolio-carousel-view').style.display = 'flex';
    document.querySelector('.portfolio-content .split-left-portfolio').style.display = 'flex';
    document.querySelector('.portfolio-content .split-right-portfolio').style.flex = '1';
}

// Inicializar el carrusel
document.addEventListener('DOMContentLoaded', () => {
    showImage('left', imagesLeft, currentImageIndexLeft);
});

const imagesLeft = ['arriba.jpeg', 'enmedio.jpeg', 'abajo.jpg'];
let currentImageIndexLeft = 0;

function showImage(side, images, index) {
    const imgElement = document.getElementById(`carousel-image-${side}`);
    imgElement.src = images[index];
}

function prevImage(side) {
    currentImageIndexLeft = (currentImageIndexLeft === 0) ? imagesLeft.length - 1 : currentImageIndexLeft - 1;
    showImage(side, imagesLeft, currentImageIndexLeft);
}

function nextImage(side) {
    currentImageIndexLeft = (currentImageIndexLeft === imagesLeft.length - 1) ? 0 : currentImageIndexLeft + 1;
    showImage(side, imagesLeft, currentImageIndexLeft);
}

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

    // Code for the header text scroll effect
    document.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const headerContent = document.querySelector('.header-content');
        headerContent.style.transform = `translateY(${scrolled * 0.5}px)`;
    });

    // Code for hiding the menu button when scrolling
    document.addEventListener('scroll', function() {
        var menu = document.getElementById('menu');
        if (window.scrollY === 0) {
            menu.style.opacity = '1';
        } else {
            menu.style.opacity = '0';
        }
    });
    let currentIndex = 0;
    const images = ['arriba.jpeg', 'enmedio.jpeg', 'abajo.jpg'];

    function showCarousel() {
        document.getElementById('portfolio-initial-view').style.display = 'none';
        document.getElementById('portfolio-carousel-view').style.display = 'flex';
        document.querySelector('.portfolio-content .split-left-portfolio').style.display = 'flex';
        document.querySelector('.portfolio-content .split-right-portfolio').style.display = 'flex';
    }

    function hideCarousel() {
        document.getElementById('portfolio-initial-view').style.display = 'flex';
        document.getElementById('portfolio-carousel-view').style.display = 'none';
    }

    function showImage(index) {
        const carouselInner = document.querySelector('.carousel-inner');
        carouselInner.style.transform = `translateX(${-index * 100}%)`;
    }

    function prevImage() {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        showImage(currentIndex);
    }

    function nextImage() {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        showImage(currentIndex);
    }

    document.addEventListener('DOMContentLoaded', () => {
        showImage(currentIndex);

        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY || document.documentElement.scrollTop;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            
            if (scrollPosition > windowHeight / 0.4 || (documentHeight - scrollPosition) > windowHeight / 0.4) {
                hideCarousel();
            }
        });

        setInterval(nextImage, 3000); // Automatically change images every 3 seconds
    });
});
