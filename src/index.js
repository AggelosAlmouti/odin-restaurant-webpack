import css from './style.css';
import cutSteakImage from './assets/cut_steak.jpg';
import menu from './pages/menu.js';
import about from './pages/about.js';

//navbar
const nav = document.querySelector('nav');

const homeButton = document.createElement('button');
homeButton.classList = 'home';
homeButton.innerHTML = 'Home';
nav.appendChild(homeButton);

const menuButton = document.createElement('button');
menuButton.classList = 'menu';
menuButton.innerHTML = 'Menu';
nav.appendChild(menuButton);

const aboutButton = document.createElement('button');
aboutButton.classList = 'about';
aboutButton.innerHTML = 'About';
nav.appendChild(aboutButton);

//home content
const content = document.querySelector('.content');
const homeContent = document.createElement('div');
homeContent.classList = 'home_content';
content.appendChild(homeContent);

const homeImage = new Image();
homeImage.src = cutSteakImage;
homeImage.classList = 'home_image';
homeContent.appendChild(homeImage);

const title = document.createElement('div');
title.classList = 'title';
homeContent.appendChild(title);

const titleH1 = document.createElement('h1');
titleH1.innerHTML = 'Steak House';
title.appendChild(titleH1);

const titleP = document.createElement('p');
titleP.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius consectetur!';
title.appendChild(titleP);

//tab browsing
homeButton.addEventListener('click', () => {
    if (content.hasChildNodes()) {
        content.removeChild(content.children[0]);
    }
    content.appendChild(homeContent);
})

menuButton.addEventListener('click', () => {
    if (content.hasChildNodes()) {
        content.removeChild(content.children[0]);
    }
    menu();
})

aboutButton.addEventListener('click', () => {
    if (content.hasChildNodes()) {
        content.removeChild(content.children[0]);
    }
    about();
})