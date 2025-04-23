// Performance Metrics Animation
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const metricsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                
                // Animate progress circles
                const circles = entry.target.querySelectorAll('.progress-circle');
                circles.forEach(circle => {
                    const value = circle.getAttribute('data-value');
                    const progress = (value / 100) * 360;
                    circle.style.setProperty('--progress', `${progress}deg`);
                });

                // Animate stat values
                const stats = entry.target.querySelectorAll('.stat-value');
                stats.forEach(stat => {
                    const value = parseFloat(stat.getAttribute('data-value'));
                    animateValue(stat, 0, value, 1500);
                });

                metricsObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all metric cards and sections
    document.querySelectorAll('.metric-card, .metric-section').forEach(element => {
        metricsObserver.observe(element);
    });
});

// Utility function to animate numeric values
function animateValue(element, start, end, duration) {
    const startTimestamp = performance.now();
    const isPercentage = element.textContent.includes('%');
    
    const animate = (currentTimestamp) => {
        const elapsed = currentTimestamp - startTimestamp;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(start + (end - start) * easeOutQuart);
        
        element.textContent = isPercentage ? `${current}%` : current;
        
        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    };
    
    requestAnimationFrame(animate);
} 