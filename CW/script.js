const show = document.getElementById("show")
const state = document.getElementsByName("status")
const tasks = [

    {id: 1, task: "Task 1", status: "todo"},
  
    {id: 2, task: "Task 2", status: "completed"},
  
    {id: 3, task: "Task 3", status: "inProgress"},
  
    {id: 4, task: "Task 4", status: "todo"},
  
    {id: 5, task: "Task 5", status: "completed"}
  
  ]

  function render(val)
  {
     const list = val === "all" ? tasks : tasks.filter(task => task.status==val)
     const stuff = list.map(list => `
     <li>
     <b>ID:</b>${list.id}<br>
     <b>Task:</b>${list.task}<br>
     <b>Status:</b>${list.status}<br>
     </li>
     <hr>     
     `)
     show.innerHTML = stuff.join("")
  }

  render("all")
state.forEach(s => {
    s.addEventListener("change",function(){
        render(this.value)
    })
})