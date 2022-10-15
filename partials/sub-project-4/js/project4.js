const carElm=document.querySelector('#mycar');
const aiCar1Elm=document.querySelector('#aiCar1');
const aiCar2Elm=document.querySelector('#aiCar2');
const aiCar3Elm=document.querySelector('#aiCar3');
const roadElm=document.querySelector('#road');
const popupWrapperElm=document.querySelector('#popup-wrapper');
const btnPlayElm=document.querySelector('#btn-play');
const backgroundElm=document.querySelector('.background');
const backgroundRightElm=document.querySelector('#right-bank');


function collisionDetect(aiElem,usrElm){
    if((usrElm.offsetTop-usrElm.offsetHeight)<aiElem.offsetTop && aiElem.offsetTop<(usrElm.offsetTop+usrElm.offsetHeight) 
     && (usrElm.offsetLeft-usrElm.offsetWidth)<aiElem.offsetLeft && aiElem.offsetLeft<(usrElm.offsetLeft+usrElm.offsetWidth)){
        console.log(carElm.offsetLeft);
        usrElm.style.width='50px';
        clearInterval(collisionTimer);
        // window.location.reload();
        popupWrapperElm.style.opacity='1';
        btnPlayElm.innerText='Replay';
        return aiElem;
        clearInterval(car1Interval);
        clearInterval(car2Interval);
        clearInterval(car3Interval);

     }
}
let collisionTimer=setInterval(()=>{
    collisionDetect(aiCar1Elm,carElm);
    collisionDetect(aiCar2Elm,carElm);
    collisionDetect(aiCar3Elm,carElm);
    
},10);

btnPlayElm.addEventListener('click',()=>{
    popupWrapperElm.style.opacity='0';

    let pos =10;
    let rdTop =-200;
    let rdTopCar1=-100;
    let rdTopCar2=-250;
    let rdTopCar3=-90;

    let speed=20;

    const rdSpeedFuntion =function(){
        if(rdTop>=0){
            rdTop=-200
        }
        rdTop+=1;
        roadElm.style.top=`${rdTop}%`;
    }
    const rdInterval= setInterval(rdSpeedFuntion,20);

    addEventListener('keydown',(event1)=>{
        if(event1.key=='ArrowRight'){
            if(pos<85){
                pos+=1;
            }
            carElm.style.left=`${pos}%`;
        }else if(event1.key=='ArrowLeft'){
            if(pos>5){
                pos-=1;
            }
            carElm.style.left=`${pos}%`;
        }
        // else if(event1.key=='ArrowUp'){
        //     speed-=0.1;
        //     rdInterval= setInterval(rdSpeedFuntion,[speed]);
        // }
        // else if(event1.key=='ArrowUp'){
        //     if(rdTop>-20){
        //         rdTop=-200
        //     }
        //     roadElm.style.top=`${rdTop+=2}%`;
        // }
    } );

    const car1Interval=setInterval(()=>{
        if(rdTopCar1>110){
            rdTopCar1=-100;
        }
        aiCar1Elm.style.top=`${rdTopCar1++}%`;
    },10);

    const car2Interval=setInterval(()=>{
        if(rdTopCar2>140){
            rdTopCar2=-150;
        }
        aiCar2Elm.style.top=`${rdTopCar2++}%`;
    },15);
    const car3Interval=setInterval(()=>{
        if(rdTopCar3>130){
            rdTopCar3=-90;
        }
        aiCar3Elm.style.top=`${rdTopCar3++}%`;
    },25);

    

});

