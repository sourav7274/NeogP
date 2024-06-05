const show = document.getElementById("show")

const data = [
   {id:1,title:"Movie 1",genre:"action"},
   {id:2,title:"Movie 2",genre:"comedy"},
   {id:3,title:"Movie 3",genre:"drama"},
   {id:4,title:"Movie 4",genre:"action"},
   {id:5,title:"Movie 5",genre:"comedy"},
]

const radioB = document.getElementsByName('genre')
function render(val)
{
    const list = val === "all" ? data : data.filter(d => d.genre==val)
    const movieHtml = list.map(d => `
<li>
    <b>ID:</b>${d.id}<br>
    <b>Title:</b>${d.title}<br>
    <b>Genre:</b>${d.genre}<br>
    <hr>
</li>
`)
show.innerHTML = movieHtml.join("")
}
render("all")
radioB.forEach(b => {
    b.addEventListener("change",function(){
        render(this.value)
    })
})