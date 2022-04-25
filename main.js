let dragarea=document.querySelector(".box");
let droparea=document.getElementById("droparea");

droparea.addEventListener("dragover",function(e){
    e.preventDefault();
    droparea.style.border="2px dashed rgb(152, 62, 62)";
})
droparea.addEventListener("dragleave",function(e){
    e.preventDefault();
    droparea.style.border="2px solid rgb(152, 62, 62)";
})

for (let i = 0; i < dragarea.length; i++) {
    dragarea[i].addEventListener("dragstart",function(param){
param.dataTrasfer.setData("param",this.id)
    })
}

droparea.addEventListener('drop',function(e){
    let index=e.dataTransfer.getData("param");
    let xx=document.getElementById("index");
    droparea.appendChild(xx);
  })