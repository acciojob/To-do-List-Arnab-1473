//your code here
const input = document.getElementById("newTodoInput");
const button = document.getElementById("addTodoBtn");
const todoList = document.getElementById("todoList");

function addTodo(){
    const newTodo = input.ariaValueMax.trim();
    if(newTodo !== ""){
        const listItem = document.createElement("li");
        listItem.innerText = newTodo;
        todoList.appendChild(listItem);
        input.value = "";
    }
}

button.addEventListener("click", addTodo);

