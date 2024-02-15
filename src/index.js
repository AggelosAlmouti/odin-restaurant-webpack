import css from './style.css';
import image1 from './assets/cut_steak.jpg';

const content = document.querySelector('.content');

const mainImage = new Image();
mainImage.src = image1;
mainImage.classList = 'main_image';
content.appendChild(mainImage);