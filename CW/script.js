const show = document.getElementById("show")
const state = document.getElementsByName("status")
const items = [

    { id: 1, item: "Item 1", status: "In Sale" },
  
    { id: 2, item: "Item 2", status: "New Release" },
  
    { id: 3, item: "Item 3", status: "New Release" },
  
    { id: 4, item: "Item 4", status: "In Sale" },
  
    { id: 5, item: "Item 5", status: "In Sale" }
  
  ]

  function render(val)
  {
     const list = val === "all" ? items : items.filter(item => item.status==val)
     const stuff = list.map(list => `
     <li>
     <b>ID:</b>${list.id}<br>
     <b>Item:</b>${list.item}<br>
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