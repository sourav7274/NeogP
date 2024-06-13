
import './App.css';

const Greetings = (props) => {
  return <h1>Welcome,{props.name}</h1>
}

const BookDetail =(props) => {
  return (
    <div>
    <h1>Book Details</h1>
      <p>Title: {props.title}</p>
      <p>Author: {props.author}</p>
      <p>Genre: {props.genre}</p>
    </div>
  )
}

const ArticleInformation = (props) => {
  return(
    <div>
      <h1>Artilce Information</h1>
      <p>Title: {props.title} C </p>
      <p>Author: {props.author} </p>
      <p>Published Data: {props.publishedDate}</p>
    </div>
  )
}

const ProductDetails = (props) => {
  return(
    <div>
      <h1>Product Details</h1>
      <p>Name: {props.name} </p>
      <p>Brand: {props.brand} </p>
      <p>Price: {props.price} </p>
    </div>
  )
}

const EventDetails = (props) => {
  return(
    <div>
      <h1>Event Details</h1>
      <p>Title: {props.title}</p>
      <p>Location: {props.location} </p>
      <p>Date: {props.date}  </p>
    </div>
  )
}

const UserProfile = (props) => {
  return(
    <div>
      <h1>User Profile</h1>
      <p>Name: {props.name}</p>
      <img src = {props.url} alt = {props.alt} />
    </div>
  )
}
const eventData = {

  title: "Tech Conference 2024",

  location: "San Francisco",

  date: "April 15, 2024",

};
const productData = {

  name: "Smartphone",

  brand: "Samsung",

  price: 799.99,

};
const bookData = {

  title: "To Kill a Mockingbird",

  author: "Harper Lee",

  genre: "Classic",

};
const articleData = {

  title: "The Power of Habit",

  author: "Charles Duhigg",

  publishedDate: "March 1, 2024",

};
function App() {
  return (
    <div>
       <Greetings name="Emily"/>
       <BookDetail title={bookData.title} author={bookData.author} genre = {bookData.genre} />
       <ArticleInformation title={articleData.title} author={articleData.author} publishedDate ={articleData.publishedDate} />
       <ProductDetails name={productData.name} brand = {productData.brand} price = {productData.price} />
       <EventDetails title ={eventData.title} location = {eventData.location} date = {eventData.date}  />
       <UserProfile name="Chirs" url= "https://placehold.co/150x150?text=Hello+World" alt="Unga Bunga"/>
    </div>
  );
}

export default App;
