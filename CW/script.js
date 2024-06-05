const tasks = [
    {id:1,title:"Task 1",status:"todo"},
    {id:2,title:"Task 2",status:"inProgress"},
    {id:3,title:"Task 3",status:"completed"},
    {id:4,title:"Task 4",status:"todo"},
]
const show = document.getElementById("show")
const statusI = document.getElementById("statusI")
statusI.addEventListener("change",function(){
    render(statusI.value)
})


function render(state)
{
    const value = state? tasks.filter(t => t.status==state) : tasks
    const list = value.map( t => `
    <li>
    <b>ID:</b>${t.id}<br>
    <b>Title:</b>${t.title}<br>
    <b>Status:</b>${t.status}<br>
    <hr><br>
    </li>
    `)
    show.innerHTML = list.join("")
}
render(false)

