class Rectangle{
    constructor(name,width,height){
        this.name = name;
        this.width = width;
        this.height = height;
    }
    area(){
        return this.width*this.height;
    }
    static getClassName(){
        return "Rectangle";
    }
}

const rect1=new Rectangle("Rect1",20,20);
console.log(Rectangle.getClassName()); 

//bind() and this
class App{
    constructor(){
        this.serverName='localhost';
        document.querySelector('button').addEventListener('click',this.getServerName.bind(this));
    }
    getServerName(){
        console.log(this.serverName);
    }
}

const app=new App();
app.getServerName();