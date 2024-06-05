const show = document.getElementById("show")

const data = [
    {id:1,name:"Alice",exp:2},
    {id:2,name:"Bob",exp:9},
    {id:3,name:"Charlie",exp:4},
    {id:4,name:"John",exp:19}
]

const expI = document.getElementById("expI")
function render(val)
{
    const list = val ? data.filter(emp => emp.exp>=5) : data
    const content= list.map(person => `
    <li>
    <b>ID:</b>${person.id}<br>
    <b>Name:</b>${person.name}<br>
    <b>Experience:</b>${person.exp} Years<br>
    <hr>
    </li>
    `)

    show.innerHTML = content.join(" ")
}
render(false)
expI.addEventListener("change",function(){
    render(expI.checked)
})