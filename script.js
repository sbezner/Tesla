// Add .js class to html for progressive enhancement
document.documentElement.classList.add('js');

// Fixed nav scroll behavior
const mainNav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.nav-link');

function updateNav() {
    // Add scrolled class after scrollY > 40
    if (window.scrollY > 40) {
        mainNav.classList.add('scrolled');
    } else {
        mainNav.classList.remove('scrolled');
    }
    
    // Update active nav link based on current section
    const sections = ['history', 'vehicles', 'energy'];
    let currentSection = 'history';
    
    for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 200 && rect.bottom >= 200) {
                currentSection = section;
                break;
            }
        }
    }
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Show year rail only in history section
    if (currentSection === 'history') {
        document.body.classList.add('in-history');
    } else {
        document.body.classList.remove('in-history');
    }
}

window.addEventListener('scroll', updateNav);
updateNav();

// Check if user prefers reduced motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
    // Intersection Observer for chapters and plaques
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
    
    // Observe all chapters and plaques
    const chapters = document.querySelectorAll('.chapter');
    const plaques = document.querySelectorAll('.plaque');
    
    chapters.forEach(chapter => observer.observe(chapter));
    plaques.forEach(plaque => observer.observe(plaque));
} else {
    // Immediately show all if user prefers reduced motion
    const chapters = document.querySelectorAll('.chapter');
    const plaques = document.querySelectorAll('.plaque');
    
    chapters.forEach(chapter => chapter.classList.add('visible'));
    plaques.forEach(plaque => plaque.classList.add('visible'));
}

// Year rail active state - only for history section
const yearLinks = document.querySelectorAll('.year-rail a');
const historyChapters = document.querySelectorAll('.chapter');

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
    
    historyChapters.forEach(chapter => {
        activeObserver.observe(chapter);
    });
}
