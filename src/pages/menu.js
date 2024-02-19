export default function menu() {
    const content = document.querySelector('.content');

    const menuContent = document.createElement('div');
    menuContent.classList = 'menu_content';
    menuContent.innerHTML = 'menu';
    content.appendChild(menuContent);
}