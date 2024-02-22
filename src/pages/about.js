export default function about() {
    const content = document.querySelector('.content');

    const aboutContent = document.createElement('div');
    aboutContent.classList = 'about_content';
    content.appendChild(aboutContent);

    const map = document.createElement('iframe');
    map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.0523288874083!2d23.760943174967768!3d37.88245890595117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1958a7445a883%3A0xb1d97bcd2cb00327!2sMistra%2047-41%2C%20Glifada%20165%2061!5e0!3m2!1sen!2sgr!4v1708451122291!5m2!1sen!2sgr";
    aboutContent.appendChild(map);

    const info = document.createElement('div');
    info.classList = 'info';
    aboutContent.appendChild(info);
    const infoP = document.createElement('p');
    info.appendChild(infoP);
    const pspan1 = document.createElement('span');
    const pspan2 = document.createElement('span');
    const pspan3 = document.createElement('span');
    const pspan4 = document.createElement('span');
    
    pspan1.innerHTML = 'Steak House';
    pspan2.innerHTML = 'Mistra 47-41 Glifada 165 61';
    pspan3.innerHTML = '+306969420420';
    pspan4.innerHTML = 'steakhouse@eat.com';
    infoP.appendChild(pspan1);
    infoP.appendChild(pspan2);
    infoP.appendChild(pspan3);
    infoP.appendChild(pspan4);
}