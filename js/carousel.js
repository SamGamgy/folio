// grab testimonial cards
const slides = document.querySelectorAll('.review-item')

// grab buttons
const buttons = document.querySelectorAll('.slide-ctrl-container button');

// generate random number for array index
let current = Math.floor(Math.random() * slides.length);
let next = current < slides.length - 1 ? current + 1 : 0;
let prev = current > 0 ? current - 1 : slides.length - 1;

const update = () => {
    slides.forEach((slide) => {
        slide.classList.remove('active', 'previous', 'next');
    })
    slides[current].classList.add('active');
    slides[prev].classList.add('previous');
    slides[next].classList.add('next');
}

const goToNum = (num) => {
    current = num;
    next = current < slides.length - 1 ? current + 1 : 0;
    prev = current > 0 ? current - 1 : slides.length - 1;
    update();
}

const goToNext = () => current < slides.length - 1 ? goToNum(current + 1) : goToNum(0); 
const goToPrev = () => current > 0 ? goToNum(current - 1) : goToNum( slides.length - 1) ;

for (let i = 0; i < buttons.length ; i++) {
    buttons[i].addEventListener('click', () => i === 0 ? goToPrev() : goToNext());
}

update();