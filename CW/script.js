const products  = [
    {id:1,title:"The Shawshank Redemption",genre:"Drama",year:1994},
    {id:2,title:"The GodFather",genre:"Crime",year:1972},
    {id:3,title:"The Dark Knight",genre:"Action",year:2008},
    {id:4,title:"Pupl Fiction",genre:"Crime",year:1994}
]

const pdiv = document.getElementById("pId")

const productList = products.map((movie) => `<div>
 <strong>ID:</strong> ${movie.id}<br>
 <strong>Title:</strong>${movie.title}<br>
 <strong>Price:</strong>${movie.genre}<br>
 <strong>Year:</strong>${movie.year}
 <hr>
</div>`)

pdiv.innerHTML = productList.join("")