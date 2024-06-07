const show = document.getElementById("show")
const more = document.getElementById("more")
const items = [

  {id: 1, item: "Item 1", price: 10},

  {id: 2, item: "Item 2", price: 20},

  {id: 3, item: "Item 3", price: 15},

  {id: 4, item: "Item 4", price: 25}

]

  const list = items.reduce((acc,curr) => {
    const liE = document.createElement("li")
    liE.textContent = `${curr.item} -${curr.price}`
    show.appendChild(liE) 
    acc.total +=curr.price
    return acc
  },{total:0})

const avg = list.total/items.length
more.innerHTML = `
<p><b>Total Cost: </b>$${list.total}</p>
<p><b>Average Cost: </b>$${avg}</p>
`