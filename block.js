class Block  {
    constructor(x,y)  {
        var options={
            isStatic:false
        }
        this.body = Bodies.rectangle(x, y, 30, 40, options);
        this.width = 30;
        this.height = 40;
        

        World.add(world,this.body)

    }
    display()  {
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.width,this.height)

    }
}