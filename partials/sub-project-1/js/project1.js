const cursorElements= document.getElementById('cursor');
let tmrId=null;

addEventListener('mousemove',(eventData)=>{  /* all event handles has a property as the first property in all languages */

    if(tmrId){
        clearTimeout(tmrId);
        tmrId=null;
    }
    cursorElements.style.opacity=1;
    cursorElements.style.top=`${eventData.pageY}px`
    cursorElements.style.left=`${eventData.pageX}px`
    tmrId=setTimeout(()=>{
        cursorElements.style.opacity=0;
    },3000);
});

document.body.addEventListener('mouseleave',()=>{
    cursorElements.style.opacity='0';
});

document.body.addEventListener('mouseenter',()=>{
    cursorElements.style.opacity='1';
});

/* ================  Timer  =================== */

// let x=0;
// const timerId1=setInterval(()=>{
//     console.log('print this!'+ x++)
// },500);

// const btnStopTimer=document.querySelector("#btnStopTimer1");
// btnStopTimer.addEventListener('click',()=>{
//     clearInterval(timerId1);
// })

// const timerId1=setInterval(()=>{
//     // console.log('Bonbe pipiruwa');
//     customElements.style.opacity='0';
// },300);

// const btnStopTimer=document.querySelector("#btnStopTimer1");
// btnStopTimer.addEventListener('click',()=>{
//     clearTimeout(timerId1);
//     console.log('bonbe nishkriya kala')
// })
