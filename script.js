const menu = document.getElementById('menu');
const nav = document.getElementById('nav-block');

menu.addEventListener('click', () => {
    nav.classList.toggle('show');
});