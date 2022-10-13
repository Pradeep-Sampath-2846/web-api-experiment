const carElm=document.querySelector('#mycar');
const aiCar1Elm=document.querySelector('#aiCar1');
const aiCar2Elm=document.querySelector('#aiCar2');
const aiCar3Elm=document.querySelector('#aiCar3');
const roadElm=document.querySelector('#road');
const popupWrapperElm=document.querySelector('#popup-wrapper');
const btnPlayElm=document.querySelector('#btn-play');
const backgroundElm=document.querySelector('.background');
const backgroundRightElm=document.querySelector('#right-bank');

btnPlayElm.addEventListener('click',()=>{
    popupWrapperElm.style.opacity='0';

    let pos =10;
    let rdTop =-200;
    let rdTopCar1=-100;
    let rdTopCar2=-250;
    let rdTopCar3=-90;
    addEventListener('keydown',(event1)=>{
        if(event1.key=='ArrowRight'){
            if(pos<85){
                pos+=3;
            }
            carElm.style.left=`${pos}%`;
            console.log(pos);
        }else if(event1.key=='ArrowLeft'){
            if(pos>5){
                pos-=3;
            }
            carElm.style.left=`${pos}%`;
            console.log(pos);
        }
        // else if(event1.key=='ArrowUp'){
        //     if(rdTop>-20){
        //         rdTop=-200
        //     }
        //     roadElm.style.top=`${rdTop+=2}%`;
        // }
    } );

    setInterval(()=>{
        if(rdTop>-20){
            rdTop=-200
        }
        rdTop+=1;
        roadElm.style.top=`${rdTop}%`;
        // backgroundElm.style.top=`${rdTop+=1}%`;
        // backgroundRightElm.style.top=`${rdTop+=1}%`;
      

    },12);

    setInterval(()=>{
        if(rdTopCar1>110){
            rdTopCar1=-100;
        }
        aiCar1Elm.style.top=`${rdTopCar1++}%`;
    },10);

    setInterval(()=>{
        if(rdTopCar2>140){
            rdTopCar2=-150;
        }
        aiCar2Elm.style.top=`${rdTopCar2++}%`;
    },15);
    setInterval(()=>{
        if(rdTopCar3>200){
            rdTopCar3=-90;
        }
        aiCar3Elm.style.top=`${rdTopCar3++}%`;
    },25);

});
