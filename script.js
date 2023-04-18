const menu = document.querySelector('.menu-icon');
const nav = document.querySelector('header');
menu.addEventListener('click', () => {
  menu.classList.toggle('fa-bars');
  menu.classList.toggle('fa-xmark');
  nav.classList.toggle('mobile-menu');
});