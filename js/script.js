// Toogle class active hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
const navbar = document.querySelector('.navbar');

let isOpen = false;
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = (e) => {
    if (isOpen) {
        navbarNav.classList.toggle('active');
        setTimeout(() => {
            navbar.style.overflow = 'hidden';
        }, 100);
        isOpen = false;
        e.preventDefault();
    } else {
        navbarNav.classList.toggle('active');
        navbar.style.overflow = 'visible';
        isOpen = true;
        e.preventDefault();
    }
};

// klik di luar element untuk menghilangkan nav
const hm = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
    if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
        setTimeout(() => {
            navbar.style.overflow = 'hidden';
        }, 100);
        isOpen = false;
    }
});
