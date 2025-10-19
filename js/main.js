const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Carousel auto-slides every 10 seconds
let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-inner div');
const totalSlides = slides.length;

setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    document.querySelector('.carousel-inner').style.transform = `translateX(-${currentIndex * 100}%)`;
}, 10000);
