function toggleMenu() {
    const menu = document.querySelector(".mobile-nav-links");
    const icon = document.querySelector(".mobile-menu-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const button = document.querySelector('.main-cta');
const aboutSection = document.getElementById('about');

button.addEventListener('click', () => {
    aboutSection.scrollIntoView({ behavior: "smooth" });
});

const abt_btn = document.querySelector('.about-cta');
const contactSection = document.getElementById('contact');

abt_btn.addEventListener('click', () => {
    contactSection.scrollIntoView({ behavior: "smooth" });
});