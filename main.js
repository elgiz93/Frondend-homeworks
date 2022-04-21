
//1-ci tapshiriq d-duymesi backspace-i evez edir
document.body.onkeyup = function(e) {
         if(e.keyCode === 68) {
            let input= document.getElementById("input").value;
            document.getElementById("input").value=input.slice(0,(input.length-1));
        }
     }


 //2ci tapshiriq
 document.body.onkeyup = function(e) {
    if(e.keyCode === 13) {
       let input= document.getElementById("input").value;
       document.body.style.backgroundColor=`${input}`;
   }
}


//3-cu tapsiriq
let lang=document.getElementById("lang");
lang.onclick=function(){
let lang_icon=document.getElementById("lang_icon");
lang_icon.classList.toggle("rotate");
document.getElementById("lang_menu").classList.toggle("displey_n");
}

let axtaris=document.getElementById("axtaris");
axtaris.onclick=function(){
document.getElementById("section2").classList.toggle("displey_n");
}
