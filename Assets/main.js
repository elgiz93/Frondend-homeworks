function bodycolor() {
if (confirm("Background qara reng olsun?") == true){
    document.body.style.backgroundColor="black"
}
};


function howold(){
    let year=prompt("Yashinizi daxil edin:")
    if (year<18){
        alert("sizin yashiniz 18den azdir!")
    }
    else{
        alert("sizin yashiniz 18den coxdur!")
    }
};



bodycolor();
howold();