import Component from "./component.js";

export default class Img extends Component {
    constructor(src){
        super('img', {name:'src', value: src});
    }
}