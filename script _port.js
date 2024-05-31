// Añadir este script al final del archivo JavaScript existente
document.addEventListener('DOMContentLoaded', () => {
    const headerText = document.querySelector('.header-content h1');
    const subtitleText = document.querySelector('#portfolio-subtitle');

    headerText.classList.add('fade-in');
    subtitleText.classList.add('fade-in');

    // Forzar reflow para asegurarnos de que la animación se aplique
    headerText.offsetHeight;
    subtitleText.offsetHeight;

    requestAnimationFrame(() => {
        headerText.classList.add('visible');
        subtitleText.classList.add('visible');
    });
});

