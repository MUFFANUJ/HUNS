let todoList = [];
displaytodo();

function addtodo() {
  let userinput = document.querySelector("#userinput");
  let userinputvalue = userinput.value;
  todoList.push(userinputvalue);
  userinput.value = "";
  displaytodo();
}
function displaytodo() {
  let displaytodolist = document.querySelector("#display-todo");
  displaytodolist.innerText = " ";
  for (i = 0; i < todoList.length; i++) {
    displaytodolist.innerText = displaytodolist.innerText + "\n " + todoList[i];
  }
}
