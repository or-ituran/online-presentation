// Import slides configuration
import slidesConfig from './slides_config.js';

// Modular imports --------------------------------------------------
import { loadAllSlides } from './js/slideLoader.js';
import {
    initNavigation,
    showSlide,
    nextSlide,
    prevSlide,
    showSlideById
} from './js/navigation.js';

// Initialize presentation -----------------------------------------
document.addEventListener('DOMContentLoaded', async () => {
    const slidesContainer = document.getElementById('slides-container');
    const indicatorsContainer = document.getElementById('slide-indicators');

    // 1. Load slides & build DOM
    const { slides, indicators } = await loadAllSlides(
        slidesConfig,
        slidesContainer,
        indicatorsContainer
    );

    // 2. Set up navigation state & show first slide
    initNavigation({ slides, indicators });

    // 3. Hook up UI controls
    document.getElementById('prevSlide').addEventListener('click', prevSlide);
    document.getElementById('nextSlide').addEventListener('click', nextSlide);

    // Indicators (dots)
    document.querySelectorAll('.indicator').forEach((indicator, index) => {
        indicator.addEventListener('click', () => showSlide(index));
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            prevSlide();
        } else if (e.key === 'ArrowLeft' || e.key === 'Space') {
            nextSlide();
        }
    });

    // Touch swipe navigation
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    document.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchEndX - touchStartX;
        const swipeThreshold = 50;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) prevSlide();
            else nextSlide();
        }
    });

    // Generic click navigation based on data-slide attribute
    document.body.addEventListener('click', (e) => {
        const trigger = e.target.closest('[data-slide]');
        if (trigger) {
            e.preventDefault();
            showSlideById(trigger.dataset.slide);
        }
    });
});