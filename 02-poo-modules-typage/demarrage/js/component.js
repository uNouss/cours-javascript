export default class Component {
    tag;
    children;
    attribute;

    constructor(tag, attribute, children){
        this.tag = tag;
        this.children = children;
        this.attribute = attribute;
    }

    render(){
        if(this.children == null){
            return (this.attribute == null) ? `<${this.tag} />` : `<${this.tag} ${this.renderAttribute()}" />`;
        }else{
            return (this.attribute == null) ? `<${this.tag}>${this.renderChildren()}</${this.tag}>`: `<${this.tag}  ${this.renderAttribute()}">${this.renderChildren()}</${this.tag}>`;
        }
    }

    renderAttribute(){
        return `${this.attribute.name}="${this.attribute.value}`;
    }

    renderChildren(){
        let child = '';
        if(this.children instanceof Array){
            this.children.forEach(function(item){
                child += (item instanceof Component) ? item.render(): item;
            });
        }else child = this.children;
        return child;
    }
}