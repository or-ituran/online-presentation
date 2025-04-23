// Import slides configuration
import slidesConfig from './slides_config.js';

let currentSlide = 0;
let slides = [];

// Function to load a slide from file
async function loadSlide(file) {
    try {
        const response = await fetch(file);
        const html = await response.text();
        return html;
    } catch (error) {
        console.error(`Error loading slide ${file}:`, error);
        return '';
    }
}

// Function to load all slides
async function loadAllSlides() {
    const slidesContainer = document.getElementById('slides-container');
    const indicatorsContainer = document.getElementById('slide-indicators');
    
    // Clear existing content
    slidesContainer.innerHTML = '';
    indicatorsContainer.innerHTML = '';
    
    // Load each slide
    for (let i = 0; i < slidesConfig.length; i++) {
        const slideHtml = await loadSlide(slidesConfig[i].file);
        slidesContainer.innerHTML += slideHtml;
        
        // Create indicator
        const indicator = document.createElement('span');
        indicator.className = 'indicator';
        indicator.dataset.slide = i;
        indicatorsContainer.appendChild(indicator);
    }
    
    // Initialize slides array
    slides = document.querySelectorAll('.slide');
    
    // Show first slide
    showSlide(0);
}

// Function to show a specific slide
function showSlide(index) {
    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Update indicators
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Show the selected slide
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
    currentSlide = index;
}

// Function to go to next slide
function nextSlide() {
    if (currentSlide < slides.length - 1) {
        showSlide(currentSlide + 1);
    }
}

// Function to go to previous slide
function prevSlide() {
    if (currentSlide > 0) {
        showSlide(currentSlide - 1);
    }
}

// Initialize presentation
document.addEventListener('DOMContentLoaded', function() {
    loadAllSlides();
    
    document.getElementById('prevSlide').addEventListener('click', prevSlide);
    document.getElementById('nextSlide').addEventListener('click', nextSlide);
    
    // Initialize indicators
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => showSlide(index));
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' || e.key === 'Space') {
            nextSlide();
        } else if (e.key === 'ArrowRight') {
            prevSlide();
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
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchEndX - touchStartX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                prevSlide();
            } else {
                nextSlide();
            }
        }
    }
});