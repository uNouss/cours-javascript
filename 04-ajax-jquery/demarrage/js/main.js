// @flow
import $ from 'jquery';

import HomePage from './HomePage.js';
import PageRenderer from './PageRenderer.js';
import AddPizzaPage from './AddPizzaPage.js';

PageRenderer.titleElement = document.querySelector('.pageTitle');
PageRenderer.contentElement = document.querySelector('.pizzasContainer');

const homePage:HomePage = new HomePage([]);
PageRenderer.renderPage( homePage ); // page vide


// A.2.1. querySelector
// console.log( document.querySelector('.navbar-brand img') );
// console.log( document.querySelector('.pizzaFormButton') );
// console.log( document.querySelector('footer a') );
// console.log( document.querySelector('.pizzasContainer article h4') );

//A.2.2. querySelectorAll
// console.log( document.querySelectorAll('.navbar-right li a') );
// console.log( document.querySelectorAll('.pizzasContainer article .infos li') );

//A.3.1. innerHTML
// console.log( document.querySelectorAll('.pizzasContainer article h4' )[1].innerHTML )
// document.querySelectorAll('.pizzasContainer article h4' )[1].innerHTML = 'Savoyarde';
const logoContainer:?HTMLElement = document.querySelector('.navbar-brand');
if (logoContainer){
	logoContainer.innerHTML += '<small class="label label-success">les pizzas c\'est la vie</small>';
}

// A.3.2. getAttribute/setAttribute
// console.log( document.querySelectorAll('footer a')[1].getAttribute('href'));
const homeLink:?HTMLElement = document.querySelector('.navbar-right li');
if (homeLink) {
	homeLink.setAttribute('class', 'active');
}

//B.2. La gestion du menu
function handleNavClick(event:Event){
	event.preventDefault();

	const link:EventTarget = event.currentTarget;
	if (link instanceof HTMLElement){
		console.log(link.innerHTML);
		const li:?Element = link.parentElement,
			prevActiveLi:?Element = document.querySelector('.navbar-right li.active');
		if (prevActiveLi) {
			prevActiveLi.setAttribute('class', '');
		}
		if (li) {
			li.setAttribute('class', 'active');
		}
	}
}
const navLinks:NodeList<HTMLElement> = document.querySelectorAll('.navbar-right a');
navLinks.forEach( element => element.addEventListener('click', handleNavClick) );

//C.3. le formulaire d'ajout de pizza
const addPizzaPage:AddPizzaPage = new AddPizzaPage();
function renderAddPizza():void{
	PageRenderer.renderPage( addPizzaPage );
}

const addPizzaLink:?HTMLElement = document.querySelector('.pizzaFormButton');
if (addPizzaLink) {
	addPizzaLink.addEventListener('click', (event:Event)=>{
		event.preventDefault();
		renderAddPizza();
	})
}



// console.log(1);

function displayNews(html:string):void {
	const newsContainer:?HTMLElement = document.querySelector('.newsContainer');
	if (newsContainer) {
		newsContainer.innerHTML = html;
	}
}

function renderHome(data:?JSON):void {
	if (data) {
		homePage.data = data;
	}
	PageRenderer.renderPage(homePage);
	$('.pizzasContainer').removeClass('is-loading');
}

fetch('./news.html')
	.then( (response:Response) => response.text() )
	.then( displayNews );
//console.log(2);


$('.pizzasContainer').addClass('is-loading');

fetch('http://localhost:8080/api/v1/pizzas')
  .then((response:Response) => response.json() )
  .then( renderHome );


// console.log( $('a.navbar-brand') );
// $('a').html("jQuery forever");
// console.log( $('a.navbar-brand').html() );


$('a.navbar-brand img').on('click', function(event) {
	event.preventDefault();
	PageRenderer.renderPage( homePage );
});

$('.pizzaListButton').on('click', function(event) {
	event.preventDefault();
	PageRenderer.renderPage( homePage );
});

$('article.media img').click(function (event) {
	event.preventDefault();
	console.log("salut");
});