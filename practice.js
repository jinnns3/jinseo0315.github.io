const input=document.querySelector(".app-insert input");
const toDos=document.querySelector(".app-list");

input.addEventListener("keyup",function(event){
    if(event.keyCode===13){
        console.log(123);
        if(input.value!==""){
            addTask(input.value);
            input.value="";
        }
    }
},
false
);

function addTask(task){
    var newTask =document.createElement("li");
    newTask.setAttribute("class","task");
    newTask.innerHTML=task+'<a href="javascript:;" class="remove-task">remove</a>'; 

    var list=document.querySelector(".app-list ul");
    list.appendChild(newTask)
 }