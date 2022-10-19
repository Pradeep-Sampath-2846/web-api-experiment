
const textBox=document.getElementById('output');
const text=document.getElementById('text');

const textList=['HELLO','HOW ARE YOU ?',"WELCOME TO GITHUB PROFILE","I'M PRADEEP SAMPATH","THIS IS AN EXPERIMENT DONE BY ME WITH WEB API",'SEE YOU CAN THROW AWAY BALLS WITH THE CURSOR..COOL','THANK YOU'];


let index=0;
let charIndex=0;
let erase=false;

const typeText=()=>{
    if(!erase){
        text.innerText=textList[index].substring(0,charIndex++);
        if(charIndex===(textList[index].length+15)){
            charIndex=textList[index].length;
            erase=true;
        }

    }
};
const eraseText=()=>{
    if(erase){
        text.innerText=textList[index].substring(0,charIndex--);
        if(charIndex===0){
            erase=false;
            index++;
            if(index==textList.length){
                index=0;
            }
        }

    }
};


let t1=0;
let t2 =0;

  function animateText(timestamp){
    if(!t1) t1=timestamp;
    if(!t2) t2=timestamp;
    const diff1=timestamp-t1;
    const diff2=timestamp-t2;

    if(diff2>=25){
        t2=timestamp;
        eraseText();
    };
    if(diff1>=65){
        t1=timestamp;
        typeText();
    };
    requestAnimationFrame(animateText);
    
  }

  requestAnimationFrame(animateText);