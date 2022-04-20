let btn=document.getElementById("btn");

btn.onclick=function(){
  if(document.getElementById("input").value!=""){
   
let input=document.getElementById("input").value;
let li=document.createElement("li");
let ul=document.getElementById("ul");
 
let span=document.createElement("span");
span.innerText=input;
span.className="liler";

let buttons=document.createElement("buttons");

let edit=document.createElement("edit");
edit.innerText="EDIT";
edit.className="duymeler btn_edit";

let silmek=document.createElement("silmek");
silmek.innerText="DELETE";
silmek.className="duymeler btn_delete"

buttons.appendChild(edit);
buttons.appendChild(silmek);

li.appendChild(span);
li.appendChild(buttons);

ul.appendChild(li);

document.getElementById("input").value="";
}

let deletes=document.getElementsByClassName("btn_delete");
for(let btn of deletes)
{
    btn.onclick=function(e){
        e.target.parentElement.parentElement.remove()
    }
}

let edits=document.getElementsByClassName("btn_edit");
for(let btn of edits)
{
    btn.onclick=function(e){
        document.getElementById("input").value=e.target.parentElement.previousElementSibling.innerText;
        document.getElementById("btn").innerHTML="SAVE";
        let submit_edit=document.getElementById("btn");

        submit_edit.onclick=function(){
        e.target.parentElement.previousElementSibling.innerText=document.getElementById("input").value;
        document.getElementById("input").value="";
        document.getElementById("btn").innerHTML="ADD TO LIST";

        }
    }
}


}
