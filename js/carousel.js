// Carousel changes every 10 seconds
const carousel = document.querySelector('.carousel');
const phraseElement = document.getElementById('phrase');

const slides = ['./img/terapia-desarrollo-personal-evolucion.png', './img/cambios-plenitud-equilibrio-personal.png', './img/liberacion-ansiedad-estres.png', './img/resolucion-conflictos-internos-bloqueos.png'];
const phrases = [
    "Bríndate la oportunidad de conocerte y desarrollar tu potencial con Hipnoterapia Clínica",
    "¿Qué cambios puedes hacer para vivir con más equilibrio y plenitud? Descubre el Método",
    "Libérate de la Ansiedad y de lo que te impide disfrutar tu vida con plenitud y satisfacción",
    "Resuelve tus conflictos internos, bloqueos y limitaciones con Sesiones Personalizadas"
];

let currentIndex = 0;

setInterval(() => {
    carousel.style.opacity = '0';
    phraseElement.style.opacity = '0';
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % 4;
        carousel.style.backgroundImage = `url(${slides[currentIndex]})`;
        carousel.style.opacity = '1';
        setTimeout(() => {
            phraseElement.textContent = phrases[currentIndex];
            phraseElement.style.opacity = '1';
        }, 1000);
    }, 200);
}, 8000);
