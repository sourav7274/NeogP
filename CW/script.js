const products  = [
    {id:1,name:"Alice",position:"Developer"},
    {id:2,name:"Bob",position:"Designer"},
    {id:3,name:"Charlie",position:"Manager"},
    {id:4,name:"David",position:"Tester"}
]

const pdiv = document.getElementById("pId")

const productList = products.map((pro) => `<div>
 <strong>Id:</strong> ${pro.id}<br>
 <strong>Name:</strong>${pro.name}<br>
 <strong>Price:</strong>${pro.position}
 <hr>
</div>`)

pdiv.innerHTML = productList.join("")