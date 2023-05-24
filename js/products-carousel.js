const slides = [

    '<div><img src="img/baby-yoda.svg" class="d-block w-50 mx-auto" alt="Baby Yoda"></div>',
    '<div><img src="img/banana.svg" class="d-block w-50 mx-auto" alt="Banana"></div>',
    '<div><img src="img/viking.svg" class="d-block w-50 mx-auto" alt="Viking"></div>',
    '<div><img src="img/girl.svg" class="d-block w-50 mx-auto" alt="Girl"></div>'

]

let currentSlide = 0;

const slideContainer = document.querySelector('.products__carousel-slide');

const showCurrentSlide = () => {
    slideContainer.innerHTML = slides[currentSlide];
    if(window.innerWidth > 768) {
        const secondSlideIdx = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
        slideContainer.innerHTML += slides[secondSlideIdx];
        if(window.innerWidth > 1024) {
            const thirdSlideIdx = secondSlideIdx === slides.length - 1 ? 0 : secondSlideIdx + 1;
            slideContainer.innerHTML += slides[thirdSlideIdx];
        
        }
    }
}

showCurrentSlide();

const nextSlide = () => {
    currentSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1; 
    showCurrentSlide();
}

const prevSlide = () => {
    currentSlide = currentSlide === slides.length - 1 ? 0 : currentSlide - 1; 
    showCurrentSlide();
}

const nextBtn = document.querySelector('.products_carousel-slide-btn--next');
const prevBtn = document.querySelector('.products_carousel-slide-btn--prev');

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

window.addEventListener('resize', showCurrentSlide);