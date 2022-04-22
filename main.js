
rock.onclick= function(){
   let random=Math.floor(Math.random() * 3);
   console.log(random);
   if(random==0){
      document.getElementById("cavab").innerHTML="Qarsi teref das secdi! Yeniden Secin!"
   }
   else if(random==1){
      document.getElementById("cavab").innerHTML="Qarsi teref yarpaq secdi! KAYBETDINIZ!"
   }
   else if(random==2){
      document.getElementById("cavab").innerHTML="Qarsi teref qayci secdi! QAZANDINIZ!"
   }
}
paper.onclick= function(){
   let random=Math.floor(Math.random() * 3);
   console.log(random);
   if(random==0){
      document.getElementById("cavab").innerHTML="Qarsi teref das secdi! QAZANDINIZ!"
   }
   else if(random==1){
      document.getElementById("cavab").innerHTML="Qarsi teref yarpaq secdi! Yeniden Secin!"
   }
   else if(random==2){
      document.getElementById("cavab").innerHTML="Qarsi teref qayci secdi! KAYBETDINIZ!"
   }
}
qayci.onclick= function(){
   let random=Math.floor(Math.random() * 3);
   console.log(random);
   if(random==0){
      document.getElementById("cavab").innerHTML="Qarsi teref das secdi! KAYBETDINIZ!"
   }
   else if(random==1){
      document.getElementById("cavab").innerHTML="Qarsi teref yarpaq secdi! QAZANDINIZ"
   }
   else if(random==2){
      document.getElementById("cavab").innerHTML="Qarsi teref qayci secdi! Yeniden Secin!"
   }
}