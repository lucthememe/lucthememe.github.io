class ComponentBase{
    constructor(entity){
        this.entity = entity;
    }

    start(){}
    update(){}
    render(){}
}


class TransForm extends ComponentBase{
    constructor(entity, position = {x, y}, rotateion = 0, scaleFactor){
        super(entity);

        this.position = position;
        this.rotateion = rotateion;
        this.scaleFactor = this.scaleFactor
    }
}