// console.log('ih',window.innerHeight);
// console.log('oh',window.outerHeight);

// console.log('iw',window.innerWidth);
// console.log('ow',window.outerWidth);

// const boxElm=document.querySelector('#box');

/* ClientWidth ClientHeight =padding box */
// console.log(boxElm.clientWidth,boxElm.clientHeight);  

/* offsetWidth offsetWidth =border box */
// console.log(boxElm.offsetWidth,boxElm.offsetHeight); 

const boxElm=document.querySelector('#box');
// boxElm.style.top=`${innerHeight-80}px`;

// let top1=0;
// let up =false;
// setInterval(()=>{
//     boxElm.style.top=`${top1}px`;
//     top1+= !up ? 1:-1;
    
//     if(top1>=(window.innerHeight-80)){
//         up=true;
//     }else if(top1<=0){
//         up=false;
//     }


// },5);

let x=0;
const startY=(innerHeight/2)-(boxElm.offsetHeight/2);

setInterval(()=>{
  const y =startY+Math.sin(x++/180)*(window.innerHeight/2-boxElm.offsetHeight/2);
  boxElm.style.top=`${y}px`;

},1);

let n=0;
let leftMove=false;
setInterval(()=>{
  boxElm.style.left=`${n}px`;
  n+=!leftMove ? 1:-1;
  if(n+boxElm.offsetWidth>=window.innerWidth){
    leftMove=true;
  }else if(n<=0){
    leftMove=false;
  }
},10)