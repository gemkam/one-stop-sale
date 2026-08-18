const observerOptions = {
    threshold: 0.1 // Triggers when 10% of the element is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Apply animation based on index to alternate
            const animationClass = index % 2 === 0 ? 'animate-left' : 'animate-right';
            entry.target.classList.add('in-view', animationClass);
        }
    });
}, observerOptions);

// Target all your product cards
document.querySelectorAll('.product-card').forEach(card => {
    observer.observe(card);
});
