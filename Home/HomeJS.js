// SlideShow Best Product
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

let currentSlideBestProduct = 0;

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active-dot'));
    currentSlideBestProduct = (n + slides.length) % slides.length;
    slides[currentSlideBestProduct].classList.add('active');
    dots[currentSlideBestProduct].classList.add('active-dot');
}

showSlide(currentSlideBestProduct);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

setInterval(() => {
    showSlide(currentSlideSpillProduct + 1);
}, 3000);

// They spill the tea

const slides_spill = document.querySelectorAll('.slide_spill');
const dots_spill = document.querySelectorAll('.dot_spill');

let currentSlideSpillProduct = 0;

function showSlide_spill(n) {
    slides_spill.forEach(slide_spill => slide_spill.classList.remove('active-spill'));
    dots_spill.forEach(dot_spill => dot_spill.classList.remove('active-dot')); // Perbaikan penamaan kelas di sini
    currentSlideSpillProduct = (n + slides_spill.length) % slides_spill.length;
    slides_spill[currentSlideSpillProduct].classList.add('active-spill');
    dots_spill[currentSlideSpillProduct].classList.add('active-dot'); // Perbaikan penamaan kelas di sini
}

showSlide_spill(currentSlideSpillProduct);

dots_spill.forEach((dot_spill, index) => {
    dot_spill.addEventListener('click', () => {
        showSlide_spill(index);
    });
});

const slideInterval = setInterval(() => {
    showSlide_spill(currentSlideSpillProduct + 1);
}, 3000);

// Jika ada potensi untuk menghentikan slideshow, gunakan clearInterval
// clearInterval(slideInterval);




