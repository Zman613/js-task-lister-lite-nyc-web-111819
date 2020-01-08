document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("form")
  let tasks = document.getElementById("tasks")
  form.addEventListener('submit', function(){ 
    event.preventDefault()
    let text = event.target.querySelector("input#new-task-description").value
    let li = document.createElement("li")
    let newTask = tasks.appendChild(li).innerHTML = text + ` <button>X</button>`
    li.querySelector('button').addEventListener('click',function(e){
      e.target.parentNode.remove()
    })
    form.reset()
  })
});
