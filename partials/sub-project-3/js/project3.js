const earthElm=document.querySelector('#earth');
const jupitorElm=document.querySelector('#jupitor');
const mercuryElm=document.querySelector('#mercury');

let t=0;
setInterval(()=>{
    const y =window.innerHeight/2+200*Math.sin((t++)/180);
    const x =window.innerWidth/2+200*Math.cos((t++)/180);
    earthElm.style.top=`${y}px`;
    earthElm.style.left=`${x}px`;
},6);

let t1=0;
setInterval(()=>{
    const y =window.innerHeight/2+300*Math.cos((t1++)/180);
    const x =window.innerWidth/2+300*Math.sin((t1++)/180);
    jupitorElm.style.top=`${y}px`;
    jupitorElm.style.left=`${x}px`;
},15);

let t2=0;
setInterval(()=>{
    const y =window.innerHeight/2+150*Math.cos((t2++)/180);
    const x =window.innerWidth/2+150*Math.sin((t2++)/180);
    mercuryElm.style.top=`${y}px`;
    mercuryElm.style.left=`${x}px`;
},1);