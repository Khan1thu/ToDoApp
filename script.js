const inputTodo = document.querySelector(".new_todo");
const todoLists = document.querySelector(".lists");
const body = document.querySelector("body");
const themeChangerSun = document.querySelector(".sun");
const themeChangerMoon = document.querySelector(".moon");
const items = document.querySelector(".items");
const cross = document.querySelector(".cross");
let todosArray = 0;
let productID = 1;

themeChangerSun.addEventListener("click", () => {
  themeChangerSun.classList.add("suntheme");
  themeChangerMoon.classList.add("moontheme");
  body.classList.add("whitetheme");
  document.querySelector(".new_todo").classList.add("new_todowhitetheme");
});

themeChangerMoon.addEventListener("click", () => {
  themeChangerMoon.classList.remove("moontheme");
  themeChangerSun.classList.remove("suntheme");
  body.classList.remove("whitetheme");
  document.querySelector(".new_todo").classList.remove("new_todowhitetheme");
});

inputTodo.addEventListener("change", (e) => {
  const inputValue = inputTodo.value;
  const todos = document.createElement("div");
  const check = document.createElement("div");
  const img = document.createElement("img");
  img.src = "images/icon-cross.svg";
  img.style.display = "none";
  check.addEventListener("click", (e) => {
    if (check.classList.contains("checked")) {
      check.classList.remove("checked");
      todos.classList.remove("todosChecked");
      img.style.display = "none";
      todos.style.textDecoration = "none";
    } else {
      todos.classList.add("todosChecked");
      check.classList.add("checked");
      img.style.display = "block";
      todos.style.textDecoration = "line-through";
    }
  });
  img.addEventListener("click", (e) => {
    todos.style.display = "none";
    todosArray -= 1;
    items.innerHTML = `<p> ${todosArray} Items left <p>`;
  });
  todos.id = productID;
  check.id = productID;
  todos.classList.add("todos");
  check.classList.add("check");
  todos.append(inputValue);
  todos.append(check);
  todos.append(img);
  todoLists.append(todos);
  const bars = document.querySelector(".new_todo");
  bars.value = "";
  todosArray += 1;
  items.innerHTML = `<p> ${todosArray} Items left <p>`;
  productID += 1;
});
