const menu = document.querySelector('#mobile-menu');
const menu1 = document.querySelector('#mobile-menu1');
const menuLinks = document.querySelector('.navbar-menu');
const navLogo = document.querySelector('#blacklogo2');
const navbLinks = document.querySelector('#navbar_links');

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menu1.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    navbLinks.classList.toggle('is-active');
};

menu.addEventListener('click', mobileMenu);


const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if(window.innerWidth <= 700 && menuBars) {
        menu.classList.toggle('is-active');
        menu1.classList.toggle('is-active');
        menuLinks.classList.remove('active');
        navbLinks.classList.remove('active');
    }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);