let slides = [];
let indicators = [];
let currentSlide = 0;
let onSlideChangeCallback = () => {};
let idToIndex = {};

/**
 * Initialises navigation state with loaded slides.
 * Shows the first slide by default.
 * @param {{ slides: NodeListOf<HTMLElement> | HTMLElement[], indicators?: NodeListOf<HTMLElement>|HTMLElement[], onChange?: (index:number)=>void }} opts
 */
export function initNavigation({ slides: loadedSlides, indicators: loadedIndicators = [], onChange }) {
    slides = Array.from(loadedSlides);
    indicators = Array.from(loadedIndicators);
    if (!slides.length) throw new Error('No slides provided to initNavigation');
    if (typeof onChange === 'function') onSlideChangeCallback = onChange;

    // build id map
    idToIndex = slides.reduce((acc, slideEl, idx) => {
        if (slideEl.id) acc[slideEl.id] = idx;
        return acc;
    }, {});

    showSlide(0);
}

/**
 * Show slide by index.
 * Updates indicator dot active class as well.
 * @param {number} index
 */
export function showSlide(index) {
    if (index < 0 || index >= slides.length) return;

    slides.forEach((el) => el.classList.remove('active'));
    indicators.forEach((el) => el.classList.remove('active'));

    slides[index].classList.add('active');
    if (indicators[index]) indicators[index].classList.add('active');
    currentSlide = index;

    // notify
    onSlideChangeCallback(index);
}

export function nextSlide() {
    if (currentSlide < slides.length - 1) showSlide(currentSlide + 1);
}

export function prevSlide() {
    if (currentSlide > 0) showSlide(currentSlide - 1);
}

export function showSlideById(id) {
    const index = idToIndex[id];
    if (index !== undefined) showSlide(index);
} 