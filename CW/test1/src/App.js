
import './App.css';

const Books = ({books,genre}) =>{
  const details = books.filter(book=>book.genre===genre)
  const list = details.map(d=>(
    <div key={d.id}>
    <h2>Title:{d.title}</h2>
    <p>Genre:{d.genre}</p>
  
  </div>
  ))
   
 return(
  <div>
    <h1>Book Detials</h1>
    {list}
    <hr/>
  </div>
 )
}

const Users = ({users,role}) =>{
  const details = users.filter(user=>user.role===role)
  const list = details.map(d => (
    <div key={d.id}>
       <p>Name:{d.name}</p>
       <p>{d.role}</p>
    </div>
  ))
  return(
    <div>
      <h2>User Details</h2>
      {list}
      <hr/>
    </div>
  )
}

const Products = ({products,price}) =>{
  const details = products.filter(product=>product.price>=price)
  const list = details.map(d => (
    <div key={d.id}>
       <p>Name:{d.name}</p>
       <p>Price:{d.price}</p>
       <p>Color:{d.features.color}</p>
       <p>Is Water Proof:{d.features.isWaterProof? "Yes" : "No"}</p>
       <hr/>
    </div>
  ))
  return(
    <div>
      <h2>Product Details</h2>
      {list}
    </div>
  )
}
const Cities = ({cities,population}) =>{
  const details = cities.filter(city=>city.population>=population)
  const list = details.map(d=>(
    <div key={d.id}>
      <p>Name:{d.name}</p>
      <p>Population:{d.population}</p>
      <hr/>
    </div>
  ))
  return(
    <div>
      <h2>Cities Details</h2>      {list}

    </div>
  )
}
const Movies = ({movies,releaseYear}) =>{
  const details = movies.filter(movie=>movie.releaseYear>=releaseYear)
  const list = details.map(d=>(
    <div key={d.id}>
      <p>Title:{d.title}</p>
      <p>Release Year:{d.releaseYear}</p>
      <hr/>
    </div>
  ))
  return(
    <div>
      <h2>Movie Details</h2>     
       {list}
    </div>
  )
}

const Podcasts = ({podcasts,featured})=>{
  const details = podcasts.filter(pod => pod.featured===featured)
  const list  = details.map(d => (
    <div key={d.id}>
      <p>Title:{d.title}</p>
      <p>host:{(d.host).join(",")}</p>
      <p>Featured: {d.featured?"Yes":"No"}</p>
      <hr/>
    </div>
  ))
  return(
    <div>
      <h2>Podcasts Details</h2>
      {list}
    </div>
  )
}

const Moviess = ({moviess,releaseYear}) =>{
  const details = moviess.filter(movie => movie.releaseYear>=releaseYear)
  const list = details.map(d=>(
    <div key={d.id}>
      <p>Title:{d.title}</p>
      <p>Duration:{d.duration}</p>
      <p>Release Year:{d.releaseYear}</p>
      <hr/>
    </div>
  ))
  return(
    <div>
      <h2>Movie Details</h2>
      {list}
    </div>
  )
}

const Tasks = ({tasks,completed}) =>{
  const details = tasks.filter(task => task.completed===completed)
  const list = details.map(d=>(
    <div key={d.id}>
      <p>Description:{d.description}</p>
      <p>Completed:{d.completed?"YES":"NO"}</p>
      <hr/>
    </div>
  ))
  return(
    <div>
      <h2>Task Details</h2>
      {list}
    </div>
  )
}

const Vehicles = ({vehicles}) =>{
  const total = vehicles.reduce((acc,curr)=>acc+=curr.distance,0)
  return(
    <div>
      <h2>Total Distance is {total}kms</h2>
      <hr/>
    </div>
  )
}

const Sales = ({sales}) =>{
  const total = sales.reduce((acc,curr)=>acc+=(curr.quantity*curr.price),0)
  return(
    <div>
      <h2>Total Revenue is {total}</h2>
    </div>
  )
}

function App() {
  const sales = [

    { id: 1, product: "Widget A", price: 25, quantity: 10 },
  
    { id: 2, product: "Gadget B", price: 50, quantity: 5 },
  
    { id: 3, product: "Tool C", price: 30, quantity: 8 },
  
  ];
  const vehicles = [

    { id: 1, name: "Car", distance: 150 },
  
    { id: 2, name: "Bicycle", distance: 10 },
  
    { id: 3, name: "Motorcycle", distance: 75 },
  
  ];
  const moviess = [

    { id: 1, title: "The Matrix", duration: 136, releaseYear: 1999 },
  
    { id: 2, title: "Inception", duration: 148, releaseYear: 2010 },
  
    { id: 3, title: "Avatar", duration: 162, releaseYear: 2009 },
  
  ];
  const podcasts = [

    { id: 1, title: "Tech Talk", host: ["host 1"], featured: true },
  
    { id: 2, title: "Business Insights", host: ["host 2"], featured: false },
  
    { id: 3, title: "Science Hour", host: ["host 3", "host 4"], featured: true },
  
  ];
  const movies = [

    { id: 1, title: "Inception", releaseYear: 2010 },
  
    { id: 2, title: "La La Land", releaseYear: 2016 },
  
    { id: 3, title: "Interstellar", releaseYear: 2014 },
  
    { id: 4, title: "Dune 2", releaseYear: 2024 },
  
  ];

  const cities = [

    { id: 1, name: "New York", population: 8500000 },
  
    { id: 2, name: "Los Angeles", population: 539900 },
  
    { id: 3, name: "Chicago", population: 2700000 },
  
  ];
  
  
  const books = [

    { id: 1, title: "Dune", genre: "Science Fiction" },
  
    { id: 2, title: "Neuromancer", genre: "Science Fiction" },
  
    { id: 3, title: "Foundation", genre: "Sci-fi" },
  
  ];

  const users = [

  { id: 1, name: "Alice", role: "User" },

  { id: 2, name: "Bob", role: "Admin" },

  { id: 3, name: "Charlie", role: "User" },

  { id: 4, name: "John", role: "Admin" },

];
const products = [

  { id: 1, name: "Laptop", price: 1200, features: {color: "green", isWaterProof: false} },

  { id: 2, name: "Smartphone", price: 800, features: {color: "blue", isWaterProof: true} },

  { id: 3, name: "Headphones", price: 150, features: {color: "silver", isWaterProof: false} },

];

const tasks = [

  { id: 1, description: "Complete project proposal", completed: true },

  { id: 2, description: "Review client feedback", completed: false },

  { id: 3, description: "Submit final report", completed: true },

];

  
  return (
    <div>
     <Books books={books} genre="Science Fiction" />
     <Users users={users} role="Admin"/>
     <Products products={products} price={100} />
     <Cities cities={cities} population={1000000} />
     <Movies movies={movies} releaseYear={2015} />
     <Podcasts podcasts={podcasts} featured={true} />
     <Moviess moviess={moviess} releaseYear={2000} />
     <Tasks tasks={tasks} completed={true}/>
     <Vehicles vehicles={vehicles} /> 
     <Sales sales={sales}/>
    </div>   
  )
}

export default App;
