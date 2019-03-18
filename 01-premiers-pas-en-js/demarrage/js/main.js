let cal = document.querySelector(".horloge");

function horloge(){
    let date = new Date();

    let months = ['Janvier', 'Février', 'Mars', 'Avril', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
    let days   = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']

    let hours = date.getHours();
    hours = ((hours < 10) ? '0' : '' ) + hours;

    let minutes = date.getMinutes();
    minutes = ((minutes < 10) ? '0' : '' ) + minutes;

    let secondes = date.getSeconds();
    secondes = ((secondes < 10) ? '0' : '' ) + secondes;

    let day = date.getDay();
    days = days[day];

    let month = months[date.getMonth()];
    
    let year = date.getFullYear();

    cal.textContent = `${days}, le ${day} ${month} ${year} # ${hours}:${minutes}:${secondes}`; 
    setInterval(horloge, 1000);
}

window.addEventListener('load', horloge);

const IMAGE_FOLDER = 'images/';
const EXT_IMG = '.jpg';


/*let data = ['Regina', 'Napolitaine', 'Spicy'];

let url = ''; 
let img = '';
let h4 = ''; 
let html = '';

for(let i = 0; i < data.length; i++ ){
    url = IMAGE_FOLDER + data[i].toLowerCase() + EXT_IMG;

    img = `<img src="${url}" alt="${data[i]}" />`
    h4 = `<h4>${data[i]}</h4>`

    html += `<a href="${url}" alt="${data[i]}">`
    html += `${img}`;
    html += `${h4}`;
    html += `</a>`;
}
data.forEach(function(element) {
    url = IMAGE_FOLDER + element.toLowerCase() + EXT_IMG;

    img = `<img src="${url}" alt="${element}" />`
    h4 = `<h4>${element}</h4>`

    html += `<a href="${url}" alt="${element}">`
    html += `${img}`;
    html += `${h4}`;
    html += `</a>`;
});
*/

let pizzas = [
    {
        nom: 'Regina',
        base: 'tomate',
        prix_petite: 5.5,
        prix_grande: 7.5
    },
    {
        nom: 'Napolitaine',
        base: 'fromage',
        prix_petite: 6.2,
        prix_grande: 8.0
    },
    {
        nom: 'Spicy',
        base: 'piment',
        prix_petite: 6.5,
        prix_grande: 9.95
    }   
];

let pizzasContainer = document.querySelector(".pizzasContainer");

let article = document.createElement('article');
article.className = 'media';

pizzas.forEach(function(pizza){
    let url = IMAGE_FOLDER + pizza.nom.toLowerCase() + EXT_IMG;
    let a = document.createElement('a');
    
    let img = document.createElement('img');
    img.setAttribute("src", url);
    
    let h4 = document.createElement('h4');
    h4.textContent = `${pizza.nom} -> ${pizza.base}`;

    let ul = document.createElement('ul');
    
    let li = document.createElement('li');
    li.textContent = `Prix petit format : ${pizza.prix_petite.toFixed(2)}`;
    ul.appendChild(li);

    li = document.createElement('li');
    li.textContent = `Prix petit format : ${pizza.prix_grande.toFixed(2)}`;
    ul.appendChild(li);

    let section = document.createElement('section');
    section.className = 'infos';
    section.append(h4, ul);
    
    a.append(img, section);

    article.appendChild(a);
    article.appendChild(document.createElement('br'));
});

pizzasContainer.appendChild(article);
console.log(pizzasContainer);