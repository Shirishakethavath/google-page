let hrs=document.getElementById("hrs");
        let mins=document.getElementById("mins");
        let sec=document.getElementById("sec");
      
         setInterval(()=>{  
            let currentTime = new Date();

        hrs.innerHTML =  (currentTime.getHours()<10?"0":"") + currentTime.getHours();
        mins.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
        sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds(); 
        },1000)

let inputBx= document.querySelector("#inputbx")
let taskList= document.querySelector("#task-list")
let addBtn= document.querySelector("#add")

function addTask(){
    if(inputBx.value === ''){
        alert("Task should not be empty!")
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=inputBx.value;
        taskList.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span)
       
    }
    inputBx.value="";
    saveData();
}
addBtn.addEventListener("click",addTask)
taskList.addEventListener("click",function(e){
    if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove()
        saveData();
    }
}
)
function saveData(){
    localStorage.setItem("data",taskList.innerHTML)
}
function showtask(){
    taskList.innerHTML=localStorage.getItem("data")
}
showtask();
