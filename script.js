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

// Function to generate team images
function generateTeamImage(container, slideConfig) {
    if (!slideConfig.teamImage) return;
    
    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 400;
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.objectFit = 'cover';
    canvas.style.borderRadius = '12px';
    
    const ctx = canvas.getContext('2d');
    
    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, slideConfig.teamImage.colors[0]);
    gradient.addColorStop(1, slideConfig.teamImage.colors[1]);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add geometric patterns
    ctx.save();
    ctx.globalAlpha = 0.1;
    for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.moveTo(Math.random() * canvas.width, 0);
        ctx.lineTo(Math.random() * canvas.width, canvas.height);
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();
    }
    ctx.restore();
    
    // Add title with shadow
    ctx.save();
    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
    ctx.shadowBlur = 10;
    ctx.font = 'bold 40px Arial';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.fillText(slideConfig.teamImage.title, canvas.width/2, canvas.height/2 - 20);
    
    // Add subtitle
    ctx.font = '30px Arial';
    ctx.fillText(slideConfig.teamImage.subtitle, canvas.width/2, canvas.height/2 + 40);
    ctx.restore();
    
    // Replace img with canvas
    const img = container.querySelector('img');
    if (img) {
        img.replaceWith(canvas);
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
        const slideConfig = slidesConfig[i];
        const slideHtml = await loadSlide(slideConfig.file);
        slidesContainer.innerHTML += slideHtml;
        
        // Create indicator
        const indicator = document.createElement('span');
        indicator.className = 'indicator';
        indicator.dataset.slide = i;
        indicatorsContainer.appendChild(indicator);
    }
    
    // Initialize slides array
    slides = document.querySelectorAll('.slide');
    
    // Generate team images
    slidesConfig.forEach(slideConfig => {
        if (slideConfig.teamImage) {
            const container = document.querySelector(`#${slideConfig.id} .team-image-container`);
            if (container) {
                generateTeamImage(container, slideConfig);
            }
        }
    });
    
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