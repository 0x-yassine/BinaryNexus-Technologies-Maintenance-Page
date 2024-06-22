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
const form = document.querySelector(".contact-form");
const emailInput = document.querySelector(".email-input");
const subjectInput = document.querySelector(".subject-input");
const msgInput = document.querySelector(".msg-input");
const submitBtn = document.querySelector(".contact-submit");
const emailError = document.querySelector(".email-error");
const subjectError = document.querySelector(".subject-error");
const msgError = document.querySelector(".msg-error");

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

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    emailInput.classList.remove("error");
    subjectInput.classList.remove("error");
    msgInput.classList.remove("error");

    if (emailInput.value.trim() === "") {
        emailInput.classList.add("error");
        emailError.classList.add("error");
        isValid = false;
    }

    if (subjectInput.value.trim() === "") {
        subjectInput.classList.add("error");
        subjectError.classList.add("error");
        isValid = false;
    }

    if (msgInput.value.trim() === "") {
        msgInput.classList.add("error");
        msgError.classList.add("error");
        isValid = false;
    }

    if (isValid) {
        alert("Thanks for contacting us");
        this.reset();
    } else {
        if (emailInput.classList.contains("error")) {
            emailInput.focus();
        } else if (subjectInput.classList.contains("error")) {
            subjectInput.focus();
        } else {
            msgInput.focus();
        }
    }
})