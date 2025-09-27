// script.js

// Animation Functionality
function animateElement(element, animationClass) {
    element.classList.add(animationClass);
    element.addEventListener('animationend', () => {
        element.classList.remove(animationClass);
    });
}

// Progress Bar Functionality
function setProgressBar(element, value) {
    element.style.width = value + '%';
    element.setAttribute('aria-valuenow', value);
}

// Typing Effect Functionality
function typingEffect(element, text, delay) {
    let index = 0;
    const interval = setInterval(() => {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
        } else {
            clearInterval(interval);
        }
    }, delay);
}

// Particle System Functionality
function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    document.body.appendChild(particle);
    setTimeout(() => {
        particle.remove();
    }, 1000);
}

// Project Card Interaction
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        animateElement(card, 'highlight');
    });
});

// Example usage of functions
// setProgressBar(document.querySelector('.progress-bar'), 70);
typingEffect(document.querySelector('.typing-effect'), 'Welcome to my portfolio!', 100);

// Create particles on click
document.addEventListener('click', (e) => {
    createParticle(e.pageX, e.pageY);
});