import HomePage from "./homePage.js";
import Component from "./component.js";
import data from "./data.js";
/*
class Animal {
	name;
	constructor( name ){
		this.name = name;
	}
	fly() { // déclaration de méthode
		console.log(`${this.name} is flying !`);
	}
}
const threeEyedRaven = new Animal( 'Bran' );
threeEyedRaven.fly();
*/
//const title = new Component( 'h1', 'La carte' );

var title = new Component('h1', null, ['La', ' ', 'carte']);
document.querySelector('.pageTitle').innerHTML = title.render(); //const img = new Component( 'img' );
// <img src="images/regina.jpg" />
//const img = new Component( 'img', {name:'src', value:'images/regina.jpg'} );
//const img = new Img('images/regina.jpg');
//document.querySelector( '.pizzasContainer' ).innerHTML = img.render();

/*const c = new Component( 'article', {name:'class', value:'media'}, [
	new Img('images/regina.jpg'),
	'Regina',
	'prix_grande: 785',
	'prix_petite: 588'
]);
document.querySelector( '.pizzasContainer' ).innerHTML = c.render();*/

/*const pt = new PizzaThumbnail(data[0]);
document.querySelector( '.pizzasContainer' ).innerHTML = pt.render();*/

var hp = new HomePage(data);
document.querySelector('.pizzasContainer').innerHTML = hp.render();
//# sourceMappingURL=main.js.map