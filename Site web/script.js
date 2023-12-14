document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let currentIndex = 0;

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + 2) % 2;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % 2;
        updateCarousel();
    });
    
    function updateCarousel() {
        const translateValue = -currentIndex * 50 + '%'; // Utilisez -50% au lieu de -100%
        carousel.style.transform = 'translateX(' + translateValue + ')';
    }
});
