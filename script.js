function addTodo() {
  const todoText = newTodoInput.value.trim();
  if (todoText !== "") {
    const todoItem = document.createElement("li");
    todoItem.innerText = todoText;
    todoList.appendChild(todoItem);
    newTodoInput.value = "";
  }
}

addTodoBtn.addEventListener("click", addTodo);
