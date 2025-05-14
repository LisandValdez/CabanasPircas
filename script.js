let currentIndex = 1;

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    // Clonar el primer y el último slide
    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[totalSlides - 1].cloneNode(true);

    firstClone.id = 'first-clone';
    lastClone.id = 'last-clone';

    container.appendChild(firstClone);
    container.insertBefore(lastClone, slides[0]);

    const allSlides = document.querySelectorAll('.carousel-slide');
    container.style.transform = `translateX(${-currentIndex * 100}%)`;

    container.addEventListener('transitionend', () => {
        if (allSlides[currentIndex].id === 'first-clone') {
            container.style.transition = 'none';
            currentIndex = 1;
            container.style.transform = `translateX(${-currentIndex * 100}%)`;
        } else if (allSlides[currentIndex].id === 'last-clone') {
            container.style.transition = 'none';
            currentIndex = totalSlides;
            container.style.transform = `translateX(${-currentIndex * 100}%)`;
        }
    });
});

function changeSlide(direction) {
    const container = document.querySelector('.carousel-container');
    const allSlides = document.querySelectorAll('.carousel-slide');
    const totalSlides = allSlides.length - 2; // Excluyendo los clones

    if (direction === 1 && currentIndex >= totalSlides + 1) return;
    if (direction === -1 && currentIndex <= 0) return;

    currentIndex += direction;

    container.style.transition = 'transform 0.9s ease';
    container.style.transform = `translateX(${-currentIndex * 100}%)`;
}

