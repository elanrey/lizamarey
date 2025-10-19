// Carousel changes every 10 seconds
const carousel = document.querySelector('.carousel');
const phraseElement = document.getElementById('phrase');

const slides = ['img/surf1.png', 'img/surf2.png', 'img/surf3.png', 'img/surf4.png'];
const phrases = [
    "Bríndate la oportunidad de conocerte, evolucionar y desarrollar tu potencial.",
    "Pregúntate: ¿Qué cambios puedo hacer para vivir con más equilibrio y plenitud?",
    "Libérate de lo que te impide vivir con plenitud y satisfacción",
    "Resuelve tus conflictos internos, bloqueos y limitaciones"
];

let currentIndex = 0;

setInterval(() => {
    carousel.style.opacity = '0';
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % 4;
        carousel.style.backgroundImage = `url(${slides[currentIndex]})`;
        phraseElement.textContent = phrases[currentIndex];
        carousel.style.opacity = '1';
    }, 1000);
}, 10000);
