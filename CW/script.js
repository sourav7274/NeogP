const show = document.getElementById("show")
const more = document.getElementById("more")
const checkI = document.getElementById("checkI")
const expenses = [

  { id: 1, name: "Groceries", amount: 150 },

  { id: 2, name: "Utilities", amount: 80 },

  { id: 3, name: "Dining Out", amount: 120 },

  { id: 4, name: "Transportation", amount: 50 }

];

const render = (renderthing) => {
  const thing = renderthing ? expenses.filter(e => e.amount>100):expenses
  show.textContent =""
  const list = thing.reduce((acc,curr) => {
    const liE = document.createElement("li")
    liE.innerHTML =
     `
    <b>Expense: </b>${curr.name}<br>
    <b>Amount: </b>${curr.amount}<hr>
    `
    show.appendChild(liE) 
    acc.total +=curr.amount
    return acc
  },{total:0})
  
    more.innerHTML = `
    <p><b>Total Expenses: </b>$${list.total}</p>

    `
}
render(false)
checkI.addEventListener("change",function(){
  render(checkI.checked)
})