const products  = [
    {id:1,name:"laptop",price:50},
    {id:2,name:"phone",price:10},
    {id:3,name:"unga",price:150},
    {id:4,name:"bunga",price:500}
]

const pdiv = document.getElementById("pId")

const productList = products.map((pro) => `<div>
 <strong>Id:</strong> ${pro.id}<br>
 <strong>Name:</strong>${pro.name}<br>
 <strong>Price:</strong>${pro.price}
 <hr>
</div>`)

pdiv.innerHTML = productList.join("")