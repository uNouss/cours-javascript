"use strict";

var cal = document.querySelector(".horloge");

function horloge() {
  var date = new Date();
  var months = ['Janvier', 'Février', 'Mars', 'Avril', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
  var days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  var hours = date.getHours();
  hours = (hours < 10 ? '0' : '') + hours;
  var minutes = date.getMinutes();
  minutes = (minutes < 10 ? '0' : '') + minutes;
  var secondes = date.getSeconds();
  secondes = (secondes < 10 ? '0' : '') + secondes;
  var day = date.getDay();
  days = days[day];
  var month = months[date.getMonth()];
  var year = date.getFullYear();
  cal.textContent = "".concat(days, ", le ").concat(day, " ").concat(month, " ").concat(year, " # ").concat(hours, ":").concat(minutes, ":").concat(secondes);
  setInterval(horloge, 1000);
}

window.addEventListener('load', horloge);
var IMAGE_FOLDER = 'images/';
var EXT_IMG = '.jpg';
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

var pizzas = [{
  nom: 'Regina',
  base: 'tomate',
  prix_petite: 5.5,
  prix_grande: 7.5
}, {
  nom: 'Napolitaine',
  base: 'fromage',
  prix_petite: 6.2,
  prix_grande: 8.0
}, {
  nom: 'Spicy',
  base: 'piment',
  prix_petite: 6.5,
  prix_grande: 9.95
}];
var pizzasContainer = document.querySelector(".pizzasContainer");
var article = document.createElement('article');
article.className = 'media';
pizzas.forEach(function (pizza) {
  var url = IMAGE_FOLDER + pizza.nom.toLowerCase() + EXT_IMG;
  var a = document.createElement('a');
  var img = document.createElement('img');
  img.setAttribute("src", url);
  var h4 = document.createElement('h4');
  h4.textContent = "".concat(pizza.nom, " -> ").concat(pizza.base);
  var ul = document.createElement('ul');
  var li = document.createElement('li');
  li.textContent = "Prix petit format : ".concat(pizza.prix_petite.toFixed(2));
  ul.appendChild(li);
  li = document.createElement('li');
  li.textContent = "Prix petit format : ".concat(pizza.prix_grande.toFixed(2));
  ul.appendChild(li);
  var section = document.createElement('section');
  section.className = 'infos';
  section.append(h4, ul);
  a.append(img, section);
  article.appendChild(a);
  article.appendChild(document.createElement('br'));
});
pizzasContainer.appendChild(article);
console.log(pizzasContainer);
//# sourceMappingURL=main.js.map