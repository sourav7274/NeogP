const show = document.getElementById("show")
const avgrating = document.getElementById("avgrating")
const movies = [

    { id: 1, title: "Movie 1",rating:4.5 },
  
    { id: 2, title: "Movie 2", rating:3.8},
  
    { id: 3, title: "Movie 3", rating:4.2},
  
    { id: 4, title: "Movie 4", rating:3.5 },  
  ]

  const list = movies.reduce((acc,curr) => {
    acc.total += curr.rating

    const liE = document.createElement("li")
    liE.textContent = `${curr.title} - Rating: ${curr.rating}`
    show.appendChild(liE)
    
    return acc
  },{total:0})

  const avg = list.total/movies.length
  avgrating.textContent = avg