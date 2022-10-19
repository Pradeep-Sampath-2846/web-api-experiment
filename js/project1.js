const cursorElements= document.getElementById('cursor');
let tmrId=null;

addEventListener('mousemove',(eventData)=>{  

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

