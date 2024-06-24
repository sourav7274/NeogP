
import './App.css';

const Cars = ({cars}) =>{
  const carList = cars.map(car =>(
    <div key={car.id}>
       <h3>Brand:{car.Brand}</h3>
       <p>Price:{car.price}</p>
    </div>   
  ))
  return(
    <>
      <h2>Cars</h2>
      {carList}
      <hr/>
    </>
  )
}
const Hotels = ({hotels}) =>{
  const hotelList = hotels.map(hotel =>(
    <div  key={hotel.id}>
       <h3>Brand:{hotel.name}</h3>
       <p>Price:{hotel.location}</p>
    </div>   
  ))
  return(
    <>
      <h2>Hotels</h2>
      {hotelList}
      <hr/>
    </>
  )
}
const Podcasts = ({podcasts}) =>{
  const PodList = podcasts.map(pod =>(
    <div  key={pod.id}>
       <h3>Brand:{pod.title}</h3>
       <p>Price:{pod.host}</p>
    </div>   
  ))
  return(
    <>
      <h2>Podcats</h2>
      {PodList}
      <hr/>
    </>
  )
}
const Articles = ({articles}) =>{
  const articleList = articles.map(article =>(
    <div  key={article.id}>
       <h3>Title:{article.title}</h3>
       <p>Content:{article.content}</p>
    </div>   
  ))
  return(
    <>
      <h2>Articles</h2>
      {articleList}
      <hr/>
    </>
  )
}
const Movies = ({movies}) =>{
  const movieList = movies.map(movie =>(
    <div  key={movie.id}>
       <h3>Title:{movie.title}</h3>
       <p>Director:{movie.director}</p>
    </div>   
  ))
  return(
    <>
      <h2>Movies</h2>
      {movieList}
      <hr/>
    </>
  )
}


function App() {
  
  const cars = [
    {id:1,Brand:"Product 1",price:25000},
    {id:2,Brand:"Product 2",price:35000},
    {id:3,Brand:"Product 3",price:45000},
  ]

  const hotels= [
    {id:1,name:"Mariyat",location:"New York"},
    {id:2,name:"Hilton",location:"Los Angeles"},
    {id:3,name:"Sheraton",location:"Chicago"},
  ]

  const podcasts = [
    {id:1,title:"Pdocast 1",host:"Host 1"},
    {id:2,title:"Pdocast 2",host:"Host 2"},
    {id:3,title:"Pdocast 3",host:"Host 3"},
  ]
  const articles = [
    {id:1,title:"Article 1",content:"Content 1"},
    {id:2,title:"Article 2",content:"Content 2"},
    {id:3,title:"Article 3",content:"Content 3"},
  ]

  const movies = [
    {id:1,title:"Movie 1",director:"Director 1"},
    {id:2,title:"Movie 2",director:"Director 2"},
    {id:3,title:"Movie 3",director:"Director 3"},
  ]

  return (
    <div>
      <Cars cars={cars}/>
      <Hotels hotels={hotels}/>
      <Podcasts podcasts={podcasts}/>
      <Articles articles={articles}/>
      <Movies movies={movies}/>
    </div>   
  )
}

export default App;
