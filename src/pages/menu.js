import dishImage from '../assets/grilled_steak.jpg';

export default function menu() {
    const content = document.querySelector('.content');

    const menuContent = document.createElement('div');
    menuContent.classList = 'menu_content';
    content.appendChild(menuContent);

    const container = document.createElement('div');
    container.classList = 'dish_container';
    menuContent.appendChild(container);

    const dish = [];
    for (let i = 0; i < 6; i++) {
        dish[i] = document.createElement('div');
        dish[i].classList = 'dish';
        container.appendChild(dish[i]);

        const title = document.createElement('h2');
        title.innerHTML = 'Grilled Steak';
        dish[i].appendChild(title);

        const image = new Image();
        image.src = dishImage;
        dish[i].appendChild(image);

        const description = document.createElement('p');
        description.innerHTML = 'This is a discription of the dish you are about to order.'
        dish[i].appendChild(description);

        const price = document.createElement('p');
        price.classList = 'price';
        price.innerHTML = '30.00€'
        dish[i].appendChild(price);
    }
}