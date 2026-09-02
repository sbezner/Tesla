// Intersection Observer for chapter reveal
document.addEventListener('DOMContentLoaded', () => {
    const chapters = document.querySelectorAll('.chapter');
    const yearLinks = document.querySelectorAll('.year-rail a');
    
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
        // Immediately show all chapters if user prefers reduced motion
        chapters.forEach(chapter => {
            chapter.classList.add('visible');
        });
    } else {
        // Create intersection observer for fade-in
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.18
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);
        
        // Observe all chapters
        chapters.forEach(chapter => {
            observer.observe(chapter);
        });
    }
    
    // Track active section for year rail
    if (yearLinks.length > 0) {
        const activeObserverOptions = {
            root: null,
            rootMargin: '-50% 0px -50% 0px',
            threshold: 0
        };
        
        const activeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    yearLinks.forEach(link => {
                        if (link.getAttribute('href') === `#${id}`) {
                            link.classList.add('active');
                        } else {
                            link.classList.remove('active');
                        }
                    });
                }
            });
        }, activeObserverOptions);
        
        chapters.forEach(chapter => {
            activeObserver.observe(chapter);
        });
    }
});
