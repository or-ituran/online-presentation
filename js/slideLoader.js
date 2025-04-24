import generateTeamImage from './teamImage.js';

/**
 * Fetches HTML fragment for a slide.
 * @param {string} file - Path to the HTML fragment.
 * @returns {Promise<string>} - The HTML markup (string). Empty string if failed.
 */
async function loadSlideMarkup(file) {
    try {
        const response = await fetch(file);
        return await response.text();
    } catch (err) {
        console.error(`Error loading slide ${file}:`, err);
        return '';
    }
}

/**
 * Load all slides into a supplied container and build indicator dots.
 * @param {Array<object>} slidesConfig
 * @param {HTMLElement} slidesContainer Element where slide HTML will be injected.
 * @param {HTMLElement} indicatorsContainer Element where dots will be appended.
 * @returns {Promise<{slides: NodeListOf<HTMLElement>, indicators: NodeListOf<HTMLElement>}>}
 */
export async function loadAllSlides(slidesConfig, slidesContainer, indicatorsContainer) {
    if (!slidesContainer || !indicatorsContainer) {
        throw new Error('slidesContainer and indicatorsContainer elements must be provided');
    }

    // Reset any pre-existing content
    slidesContainer.innerHTML = '';
    indicatorsContainer.innerHTML = '';

    // Sequentially load slide fragments (order matters)
    for (let i = 0; i < slidesConfig.length; i++) {
        const cfg = slidesConfig[i];
        const markup = await loadSlideMarkup(cfg.file);
        slidesContainer.insertAdjacentHTML('beforeend', markup);

        // Build indicator dot
        const dot = document.createElement('span');
        dot.className = 'indicator';
        dot.dataset.slide = i;
        indicatorsContainer.appendChild(dot);
    }

    // Gather live NodeLists
    const slides = slidesContainer.querySelectorAll('.slide');
    const indicators = indicatorsContainer.querySelectorAll('.indicator');

    // Generate runtime team images where requested
    slidesConfig.forEach((cfg) => {
        if (!cfg.teamImage) return;
        // Expect container .team-image-container inside slide section
        const container = document.querySelector(`#${cfg.id} .team-image-container`);
        if (container) {
            generateTeamImage(container, cfg);
        }
    });

    return { slides, indicators }; // Returned for navigation module
} 