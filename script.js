// 🌙 Dark Mode Toggle Logic using Vanilla CSS hooks
const themeToggleBtn = document.getElementById('themeToggle');

// Check for saved theme preference in local storage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    themeToggleBtn.innerText = '🌙';
} else {
    // Default is dark
    themeToggleBtn.innerText = '☀️';
}

themeToggleBtn.addEventListener('click', () => {
    // Current is Light, Switch to Dark
    if (document.documentElement.getAttribute('data-theme') === 'light') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
        themeToggleBtn.innerText = '☀️';
    } else {
        // Current is Dark, Switch to Light
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeToggleBtn.innerText = '🌙';
    }
});

// 📌 Smooth Scroll for Navbar Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;

        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 🔝 Scroll to Top Button
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollBtn.classList.add("visible");
    } else {
        scrollBtn.classList.remove("visible");
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ✨ Reveal Animation on Scroll Using Vanilla JS and CSS active class
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const elementVisible = 100;

    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        
        // If element is in viewport
        if (elementTop < windowHeight - elementVisible) {
            el.classList.add("active");
        }
    });
}

// Attach event listener and trigger once on initial load
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// 🎯 Console Greeting (Bonus for recruiters 😄)
console.log("%c Welcome to Bhavya's Portfolio 🚀", "color: #6d28d9; font-size: 20px; font-weight: bold; background: #0a0a0c; padding: 10px; border-radius: 5px;");