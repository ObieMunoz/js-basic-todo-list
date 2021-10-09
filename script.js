const todoList = document.querySelector("#todo-list");
const finishedList = document.querySelector("#finished-list")

const today = new Date();
const date = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`

document.querySelector("#date").innerText = date;

function newItemToDo() {
    let newEntryText = document.querySelector("#new-item").value;

    if (newEntryText != "") {
        const toDoLi = document.createElement("li");

        toDoLi.innerText = newEntryText;
        toDoLi.class = "todo";
        toDoLi.addEventListener("click", handleDelete)
        console.log(toDoLi)

        todoList.append(toDoLi)
    } else {
        alert("You need to enter some data!")
    }
    document.querySelector("#new-item").value = "";
    document.querySelector("#new-item").focus();
}

function handleDelete(event) {
    console.log(event.target);
    finishedList.append(event.target);
    event.target.removeEventListener("click", handleDelete)
}

function clearTable() {
    todoList.innerHTML = "";
}

document.querySelector("#submit").addEventListener("click", newItemToDo);
document.querySelector("#clear").addEventListener("click", clearTable);
document.querySelector("#new-item").addEventListener("keyup", function(event) {
    if (event.code === "Enter") {
        event.preventDefault();
        newItemToDo();
    }
})

// CREATE A FOOTER FOR OUR PAGES
const thisYear = new Date().getFullYear();
const footer = document.createElement("div");
const footerLink = document.createElement("a")
footer.className = "footer"
footerLink.href = "mailto:obiemunozjr@gmail.com"
footerLink.innerText = `Copyright © ${thisYear} Obie Munoz`
footer.append(footerLink)
document.body.querySelector(".container").append(footer)