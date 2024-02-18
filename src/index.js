import css from './style.css';
import cutSteakImage from './assets/cut_steak.jpg';
import home from './home.js';

//navbar
const nav = document.querySelector('nav');

const home_button = document.createElement('button');
home_button.classList = 'home';
home_button.innerHTML = 'Home';
nav.appendChild(home_button);

const menu_button = document.createElement('button');
menu_button.classList = 'menu';
menu_button.innerHTML = 'Menu';
nav.appendChild(menu_button);

const about_button = document.createElement('button');
about_button.classList = 'about';
about_button.innerHTML = 'About';
nav.appendChild(about_button);

//content
const content = document.querySelector('.content');

const mainImage = new Image();
mainImage.src = cutSteakImage;
mainImage.classList = 'main_image';
content.appendChild(mainImage);

const title = document.createElement('div');
title.classList = 'title';
content.appendChild(title);

const titleH1 = document.createElement('h1');
titleH1.innerHTML = 'Steak House';
title.appendChild(titleH1);

const titleP = document.createElement('p');
titleP.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius consectetur!';
title.appendChild(titleP);