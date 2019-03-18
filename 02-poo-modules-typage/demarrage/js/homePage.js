import Component from "./component.js";
import PizzaThumbnail from "./pizzaThumbnail.js";

export default class HomePage extends Component{
    constructor(pizzas){
        super(
            'section',
            null,
            pizzas.map(pizza => new PizzaThumbnail(pizza))
        );
    }
}