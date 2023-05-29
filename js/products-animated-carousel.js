const carousel = document.querySelector('.animated-carousel');
const carouselInner = carousel.querySelector('.animated-carousel__inner');
const prevButton = carousel.querySelector('.carousel__btn--prev');
const nextButton = carousel.querySelector('.carousel__btn--next');
const productCard = carousel.querySelectorAll('.product-card');

let currentIndex = 0;

const updateCarousel = () => {
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + productCard.length) % productCard.length;
    updateCarousel();
})

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % productCard.length;
    updateCarousel();
})