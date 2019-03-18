// @flow
import HomePage from './HomePage.js';
import data from './data.js';
import PageRenderer from './PageRenderer.js';

PageRenderer.titleElement = document.querySelector('.pageTitle');
PageRenderer.contentElement = document.querySelector('.pizzasContainer');

const homePage:HomePage = new HomePage([]);

PageRenderer.renderPage( homePage ); // page vide
homePage.data = data;
PageRenderer.renderPage( homePage ); // liste des vidéos

document.querySelector("header .navbar-brand").innerHTML += `<small class="label label-success">les pizzas c'est la vie</small>`;

let addPizza = document.querySelector(".pizzaFormButton");


let infos = document.querySelectorAll(".infos>h4");
infos.forEach(info => {
    let nom = info.textContent.trim();
    console.log(nom);
});