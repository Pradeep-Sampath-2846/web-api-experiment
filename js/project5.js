class Box{
    #width;
    #height;
    #dx;
    #dy;
    #elm;

    constructor(){
        this.#elm = document.createElement('div');
        this.#elm.classList.add('box');
        this.#width = 60 + (Math.random() * 30);
        this.#height =  this.#width; //20 + (Math.random() * 10);
        this.#dx = Math.random() * 8 * (Math.random() < 0.5? -1: 1);
        this.#dy = Math.random() * 8 * (Math.random() < 0.5? -1: 1);
        this.#elm.style.left = `${Math.random() * (innerWidth - this.#width)}px`;
        this.#elm.style.top = `${Math.random() * (innerHeight - this.#height)}px`;
        this.#elm.style.width = `${this.#width}px`;
        this.#elm.style.height = `${this.#height}px`;
        document.body.append(this.#elm);
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const alpha = 0.4 + Math.random();
        this.#elm.style.backgroundColor = `rgba(${red},${green}, ${blue}, ${alpha})`;
        // this.#elm.style.borderRadius = `${Math.random() * 101}%`;
        this.#elm.style.borderRadius = `100%`;
        this.#elm.style.transform = `rotate(${Math.random() * 361}deg)`;
    }

    move(){
        if (this.#elm.offsetTop >= (innerHeight - this.#height) || this.#elm.offsetTop <= 0){
            this.#dy = -this.#dy;
        }
        if (this.#elm.offsetLeft >= (innerWidth - this.#width) || this.#elm.offsetLeft <= 0){      
            this.#dx = -this.#dx;
        } 
    
        this.#elm.style.left = `${this.#elm.offsetLeft + this.#dx}px`;
        this.#elm.style.top = `${this.#elm.offsetTop + this.#dy}px`; 
    }
    get width(){
        return this.#width;
    }
    get height(){
        return this.#height;
    }
    get offSetTop(){
        return this.#elm.offsetTop;
    }
    get offSetLeft(){
        return this.#elm.offsetLeft;
    }
    get dx(){
        return this.#dx;
    }
    get dy(){
        return this.#dy;
    }
    set dx(valx){
        this.#dx=valx;
    }
    set dy(valy){
        this.#dy=valy;
    }
}
const cursorElements= document.getElementById('cursor');
const boxes = [];
for(let i = 0; i < 30; i++){
    boxes.push(new Box());
}

setInterval(()=>{
    boxes.forEach(box => box.move());
}, 20);

function collisionDetect(curser,elm){

    let y=elm.offSetTop+elm.height/2;
    let x=elm.offSetLeft+elm.width/2;

    let y0=curser.offsetTop+curser.offsetHeight/2;
    let x0=curser.offsetLeft+curser.offsetWidth/2;

    let z =Math.sqrt((x-x0)*(x-x0)+(y-y0)*(y-y0));
    let zMin =elm.width/2+curser.offsetWidth/2;

    if(z<=zMin+50){
        elm.dx=8*(x-x0)/z;
        elm.dy=8*(y-y0)/z;
    }

}
let collisionTimer=setInterval(()=>{
    boxes.forEach(box =>{
        collisionDetect(cursorElements,box);

    });  
},10);