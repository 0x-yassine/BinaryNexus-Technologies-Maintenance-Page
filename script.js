function toggleMenu() {
    const menu = document.querySelector(".mobile-nav-links");
    const icon = document.querySelector(".mobile-menu-icon");
    const logo = document.querySelector(".logo");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
    logo.classList.toggle("open");
}

const button = document.querySelector('.main-cta');
const aboutSection = document.getElementById('about');
const servicesSection = document.getElementById('services');
const contactSection = document.getElementById('contact');

button.addEventListener('click', () => {
    aboutSection.scrollIntoView({ behavior: "smooth" });
});

const abt_btn = document.querySelector('.about-cta');

abt_btn.addEventListener('click', () => {
    contactSection.scrollIntoView({ behavior: "smooth" });
});

window.addEventListener("scroll", function () {
    var navbar = document.querySelector("nav");
    //const aboutSectionTop = aboutSection.getBoundingClientRect().top;
    //const servicesSectionTop = servicesSection.getBoundingClientRect().top;
    //const contactSectionTop = contactSection.getBoundingClientRect().top;
    //const isPastServices = window.scrollY > servicesSectionTop;
    //const isPastContact = window.scrollY > contactSectionTop;
    navbar.classList.toggle("sticky", window.scrollY > 0);
    //navbar.classList.toggle("black-on-services", isPastServices);
    //navbar.classList.toggle("white-on-contact", isPastContact);
});

window.addEventListener("scroll", function () {
    var mobilenavbar = document.querySelector(".mobile-nav");
    mobilenavbar.classList.toggle("sticky", window.scrollY > 0);
});