
import './App.css';

const Greetings = (props) => {
  return <h1>Welcome to {props.name} app!</h1>
}

const ReciepeDetail =(props) => {
  return (
    <div>
    <h1>Recipe Details</h1>
      <p>Title: {props.title}</p>
      <p>Author: {props.author}</p>
      <p>Genre: {props.rating}</p>
    </div>
  )
}
const recipeData = {

  title: "Chocolate Cake",

  author: "Baker Betty",

  rating: 4.7,

};


const MovieInformation = (props) => {
  return(
    <div>
      <h1>Movie Information</h1>
      <p>Title: {props.title} C </p>
      <p>Author: {props.director} </p>
      <p>Release Date: {props.releaseDate}</p>
    </div>
  )
}

const ProductFeatures = (props) => {
  return(
    <div>
      <h1>Product Details</h1>
      <p>Name: {props.name} </p>
      <p>Color: {props.color} </p>
      <p>Size: {props.size} </p>
    </div>
  )
}

const UserProfile = (props) => {
  return(
    <div>
      <h1>User Details</h1>
      <p>Name: {props.name}</p>
      <p>Email: {props.email} </p>
      <p>Role: {props.role} </p>
    </div>
  )
}

const movieData = {

  title: "The Godfather",

  director: "Francis Ford Coppola",

  releaseDate: "March 24, 1972",

};
const productData = {

  name: "Smartwatch",

  color: "Black",

  size: "Medium",

};
function App() {
  return (
    <div>
       <Greetings name="My Reciepe"/>
       <ReciepeDetail title={recipeData.title} author={recipeData.author} rating = {recipeData.rating} />
       <MovieInformation title={movieData.title} director={movieData.director} releaseDate ={movieData.releaseDate} />
       <ProductFeatures name={productData.name} color = {productData.color} size = {productData.size} />
       <UserProfile name="Alici" email= "Emaili.com" role="Roli" />  
    </div>
  );
}

export default App;
