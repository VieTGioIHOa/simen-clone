const btnMeunu = document.querySelector('.nav__side-bar-btn');
const menu = document.querySelector('.nav__main-list');


btnMeunu.onclick = () => {
    menu.classList.toggle('nav__main-list--show');
}