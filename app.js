//  to do app
let todoinput = document.getElementById("todoinput")
let addtodo = document.getElementById("addtodo")
let todolist = document.getElementById("todolist")
function todoadd() {
    let inputvalue = todoinput.value.trim();
    if (inputvalue === "") {
        alert("ENTER THE TASK FIRST")
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputvalue;
        todolist.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = '\u00D7'
        li.appendChild(span)
    }
    todoinput.value = "";
    savedata()
}
addtodo.addEventListener("click", todoadd)
todolist.addEventListener("click", function removetodo(e) {
    if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove()
        savedata()
    } else if (e.target.tagName === "LI") {
        e.target.style.textDecoration = "line-through"
        savedata()
    }
})
function savedata() {
    localStorage.setItem("data", todolist.innerHTML);
}
function showtask() {
   const storeddata =  localStorage.getItem("data");
    if (storeddata) {
        todolist.innerHTML = storeddata;
    }
}
showtask();