todoListTable = document.querySelector("#todo-list-table")

function newItemToDo() {
    newEntryText = document.querySelector("#new-item").value;
    if (todoListTable.children.length == 0) {
        count = 1;
    } else {
        count = todoListTable.children.length + 1;
    }
    newRow = document.createElement("tr");
    newEntry = document.createElement("td");
    newEntry.innerText = count + ". " + newEntryText;
    newEntryText = "";
    newRow.append(newEntry);
    todoListTable.append(newRow);
}

function clearTable() {
    while (todoListTable.firstChild) {
        todoListTable.removeChild(todoListTable.lastChild)
    }
}

document.querySelector("#submit").addEventListener("click", newItemToDo);
document.querySelector("#clear").addEventListener("click", clearTable);