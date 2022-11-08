AOS.init();


let index2=1;
function next(){
    index2+=300;
    if(index2 >=1100){
        index2=1
    }
    let paren=document.getElementById("p");
    paren.scroll({left:index2,behavior:"smooth"})
}

function prev(){
    index2-=300;
    if(index2 <1){
        index2=1;
    }
    let paren=document.getElementById("p");
    paren.scroll({left:index2,behavior:"smooth"})
}

let index3=1;
function go(){
    index3+=300;
    if(index3 >=1100){
        index3=1
    }
    let parente=document.getElementById("s");
    parente.scroll({left:index3,behavior:"smooth"})
}

function back(){
    index3-=300;
    if(index3 <1){
        index3=1;
    }
    let parente=document.getElementById("s");
    parente.scroll({left:index3,behavior:"smooth"})
}