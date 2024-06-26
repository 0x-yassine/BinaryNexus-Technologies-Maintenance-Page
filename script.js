function toggleMenu() {
    const menu = document.querySelector(".mobile-nav-links");
    const icon = document.querySelector(".mobile-menu-icon");
    const logo = document.querySelector(".logo");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
    logo.classList.toggle("open");
}

const button = document.querySelector('.main-cta');
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
    servicesSection.scrollIntoView({ behavior: "smooth" });
});

window.addEventListener("scroll", function () {
    var navbar = document.querySelector("nav");
    navbar.classList.toggle("sticky", window.scrollY > 0);
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
    emailError.classList.remove("error");
    subjectError.classList.remove("error");
    msgError.classList.remove("error");

    if (emailInput.value.trim() === "") {
        emailInput.classList.add("error");
        emailError.textContent = "Please enter a valid email address";
        emailError.classList.add("error");
        isValid = false;
    }

    if (subjectInput.value.trim() === "") {
        subjectInput.classList.add("error");
        subjectError.textContent = "Please enter a subject";
        subjectError.classList.add("error");
        isValid = false;
    }

    if (msgInput.value.trim() === "") {
        msgInput.classList.add("error");
        msgError.textContent = "Please type something";
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
});