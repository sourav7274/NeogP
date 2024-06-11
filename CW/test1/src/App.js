
import './App.css';

const StudentDetails =() => {
  const name = "Bob"
  const age =20
  const grade = "A"

  return(
    <div>
      <h2>Name: {name}</h2>
      <p>Age: {age} </p>
      <p>Grade: {grade} </p>
    </div>
  )
}

const Product = () =>{
  const product ={
    name:"Laptop",
    brand:"Dell",
    price:20000
  }
  return(
    <div>
      <p>Name: {product.name}</p>
      <p>Brand Name: {product.brand} </p>
      <p>Price: INR{product.price}</p>
    </div>
  )
}

const UserProfile = () => {
  const user ={
    name:"John Doe",
    age: 35,
    address:{
      street:"123 Strert",
      city:"New York",
      state:"West Bengal",
      zipcode:"234546"
    }
  }

  return(
    <div>
      <p>Name:{user.name} </p>
      <p>Age:{user.age} </p>
      <p>Address:{user.address.street},{user.address.city},{user.address.state},{user.address.zipcode} </p>
      <p></p>
    </div>
  )
}

const MovieDetails = () =>{
  const movie ={
    title:"Inception",
    releaseYear:2010,
    director:{
      name:"Christopher Nolan",
      nationality:"British",
    },
    genre:["Sci-fi","Action","Thriller"]
  }
  return(
    <div>
      <p>title: {movie.title}</p>
      <p>releaseYear: {movie.releaseYear}</p>
      <p>director: {movie.director.name},{movie.director.nationality}</p>
      <p>Genre: {movie.genre.join(",")}</p>
    </div>
  )
}

function App() {
  return (
    <div>
    <h1>Student Details</h1>
      <StudentDetails/>
    <h1>Product Details</h1>
      <Product/>
     <h1>User Profile</h1> 
      <UserProfile/>
     <h1>Movie Details</h1>
      <MovieDetails/> 
    </div>
  );
}

export default App;
