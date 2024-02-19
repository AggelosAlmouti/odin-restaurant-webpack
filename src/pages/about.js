export default function about() {
    const content = document.querySelector('.content');

    const aboutContent = document.createElement('div');
    aboutContent.classList = 'about_content';
    aboutContent.innerHTML = 'about';
    content.appendChild(aboutContent);
}