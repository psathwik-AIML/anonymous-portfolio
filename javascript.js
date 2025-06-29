// Show scroll-to-top button when scrolling down
const scrollBtn = document.querySelector('.scroll-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
});

// Toggle light/dark theme
function toggleTheme() {
    document.body.classList.toggle("light-theme");
    const icon = document.querySelector(".toggle-btn i");
    icon.classList.toggle("fa-moon");
    icon.classList.toggle("fa-sun");
}

// Fade-in effect using Intersection Observer
const sections = document.querySelectorAll('.fade-in');
const options = { threshold: 0.1 };
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, options);
sections.forEach(section => observer.observe(section));

// Typing text effect
const text = "Aspiring Web Developer";
const typingElement = document.querySelector(".typing");
let index = 0;
function typeText() {
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeText,100);
    }
}
typeText();
