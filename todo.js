const form = document.getElementById("add-form");
const listCont = document.querySelector(".list-container");
const tpl = document.getElementById("todo-template");
const footerText = document.querySelector(".footer-text");

let selectedAmount = 0;

form.addEventListener("submit", function(e) { 
  e.preventDefault();
  const text = form.querySelector(".text-bar").value.trim();
  makeList(text);
  form.reset();
});

function makeList(text) {
  const li = tpl.content.firstElementChild.cloneNode(true);
  li.querySelector(".todo-text").textContent = text;
  listCont.appendChild(li);

  const cBox = li.querySelector(".checkbox");
  const actions = li.querySelector(".btn-actions")
  
  cBox.addEventListener("change", function(e) {
    if(e.target.checked) {
      actions.classList.remove("hidden-buttons");
      actions.classList.add("active-buttons");
      selectedAmount++;
      footerText.textContent = `Selected: ${selectedAmount}`;
    }
    else {
      actions.classList.remove("active-buttons");
      actions.classList.add("hidden-buttons");
      selectedAmount--;
      footerText.textContent = `Selected: ${selectedAmount}`;
    }
  });

  const btnDelete = li.querySelector(".btn-delete");
  const btnEdit = li.querySelector(".btn-edit");
  btnDelete.addEventListener("click", function(e) {
    const liRemove = e.target.closest("li");

    if (!liRemove) return;

    const checkbox = liRemove.querySelector(".checkbox");
    if (checkbox.checked) {
      selectedAmount--;
      footerText.textContent = `Selected: ${selectedAmount}`;
    }
    liRemove.remove();

  });
  btnEdit.addEventListener("click", function(e) {
    let userInput = window.prompt("Edit your task...");

    switch(userInput) {
      case "":
        while(userInput === "") {
          userInput = window.prompt("Enter again...");
          if(userInput && userInput.trim() != "") {
            li.querySelector('.todo-text').textContent = userInput;
          }
        }
        break;
      case null:
        break;
      default:
        li.querySelector('.todo-text').textContent = userInput;
    }
  });
}


