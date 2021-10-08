todoListTable = document.querySelector("#todo-list-table");
today = new Date();
date = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`
document.querySelector("#date").innerText = date;

function newItemToDo() {
    let newEntryText = document.querySelector("#new-item").value;
    if (newEntryText != "") {
        if (todoListTable.children.length == 0) {
            count = 1;
        } else {
            count = todoListTable.children.length + 1;
        }
        let newRow = document.createElement("tr");
        let newEntry = document.createElement("td");
        newEntry.innerText = count + ". " + newEntryText;
        newRow.append(newEntry);
        todoListTable.append(newRow);
    } else {
        alert("You need to enter some data!")
    }
    document.querySelector("#new-item").value = "";
}

function clearTable() {
    while (todoListTable.firstChild) {
        todoListTable.removeChild(todoListTable.lastChild)
    }
}

document.querySelector("#submit").addEventListener("click", newItemToDo);
document.querySelector("#clear").addEventListener("click", clearTable);