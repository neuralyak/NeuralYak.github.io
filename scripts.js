// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
});

// Lottie Animation Setup
document.addEventListener('DOMContentLoaded', () => {
    const lottieContainer = document.querySelector('.lottie-container');
    
    // Replace with your actual Lottie animation URL
    lottie.loadAnimation({
        container: lottieContainer,
        path: 'https://assets.codepen.io/2306774/lf30_editor.json',
        renderer: 'svg',
        loop: true,
        autoplay: true,
        speed: 0.5
    });
});

// Services Section Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px'
};

const serviceCardsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            entry.target.style.transition = 'all 0.5s ease-out';
            
            // Remove observer once animated
            serviceCardsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    serviceCardsObserver.observe(card);
});

// Pricing Carousel
const carouselNav = document.querySelector('.carousel-nav');
const priceCards = document.querySelectorAll('.price-card');

// Navigation buttons
const prevBtn = carouselNav.querySelector('.prev');
const nextBtn = carouselNav.querySelector('.next');

let currentIndex = 0;

function updateCarousel() {
    priceCards.forEach((card, index) => {
        card.classList.remove('active');
        if (index === currentIndex) {
            card.classList.add('active');
        }
    });
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + priceCards.length) % priceCards.length;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % priceCards.length;
    updateCarousel();
});

// Features Modal
const featuresModal = document.getElementById('featuresModal');
const closeModalBtn = document.querySelector('.close-modal');

// Show modal after 1 second delay
setTimeout(() => {
    featuresModal.style.display = 'flex';
    featuresModal.style.opacity = '1';
}, 1000);

closeModalBtn.addEventListener('click', () => {
    featuresModal.style.opacity = '0';
    setTimeout(() => {
        featuresModal.style.display = 'none';
    }, 300);
});

// WhatsApp Integration
const whatsappBtn = document.getElementById('whatsappBtn');
whatsappBtn.addEventListener('click', () => {
    const message = encodeURIComponent("Hi NeuralYak, I'm interested in learning more about your automation services.");
    window.open(`https://wa.me/?text=${message}`, '_blank');
});
