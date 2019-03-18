import Component from "./component.js";
import Img from "./img.js";

export default class PizzaThumbnail extends Component{
    nom;
    base;
    prix_petite;
    prix_grande;

    constructor(pizza){
        super(
            'article',
            {name:'class', value:'media'},
            [new Component(
                'a',
                {name:'href', value:`images/${pizza.nom}.jpg`},
                [
                    new Img(`images/${pizza.nom.toLowerCase()}.jpg`),
                    new Component(
                        'section',
                        {name:'class', value:'infos'},
                        [
                            new Component(
                                'h4',
                                null,
                                'Regina'
                            ),
                            new Component(
                                'ul',
                                null,
                                [
                                    new Component(
                                        'li',
                                        null,
                                        `Prix petit format : ${pizza.prix_petite.toFixed(2)}`
                                    ),
                                    new Component(
                                        'li',
                                        null,
                                        `Prix grand format : ${pizza.prix_grande.toFixed(2)}`
                                    )
                                ]
                            )
                        ]
                    )
                ]
            )]
        );
    }
}