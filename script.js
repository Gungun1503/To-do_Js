const inputbox=document.getElementById("input-box");
const licontaner=document.getElementById("list-container");
const button=document.getElementById("clicked");
button.addEventListener("click",()=>{
    if(inputbox.value===''){
        alert("you must right something");
    }else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        licontaner.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputbox.value="";
    saveData();
});

licontaner.addEventListener("click",(e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();

    } else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }

}, false);
function saveData(){
    localStorage.setItem("data",licontaner.innerHTML);
}
function showList(){
   licontaner.innerHTML= localStorage.getItem("data");
}
showList();