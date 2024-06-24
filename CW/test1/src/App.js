
import './App.css';

const ProducTotal = ({products}) =>{
  const total = products.reduce((acc,curr)=>acc+=curr.price,0)
  return(
    <div>
      <h2>Total Price={total} </h2>
      <hr/>
    </div>
    
  )
}
const Restaurant = ({restaurants}) =>{
  const total = restaurants.reduce((acc,curr)=>acc+=curr.rating,0)
  return(
    <div>
      <h2>Total Rating</h2>
      <p>{total}</p>
      <h2>Average Rating = {(total/restaurants.length).toFixed(2)}</h2>
      <hr/>
    </div>
  )
}
const Videos = ({videos}) =>{
  const total = videos.reduce((acc,curr)=>acc+=curr.views,0)
  return(
    <div>
      <h2>Total Views</h2>
      <p>{total}</p>
    </div>
  )
}
function App() {
  
  const products = [
    {id:1,name:"Product 1",price:19.99},
    {id:2,name:"Product 2",price:29.99},
    {id:3,name:"Product 3",price:39.99},
  ]

  const restaurants = [
    {id:1,name:"Restaurant 1",cuisine:"Italian",rating:5},
    {id:2,name:"Restaurant 2",cuisine:"Mexican",rating:3.5},
    {id:3,name:"Restaurant 3",cuisine:"Chineese",rating:2.7},
  ]

  const videos = [
    {id:1,name:"Video 1",views:2000},
    {id:2,name:"Video 2",views:4000},
    {id:3,name:"Video 3",views:5000},
  ]

  return (
    <div>
      <ProducTotal products={products} />
      <Restaurant restaurants={restaurants}/>
      <Videos videos={videos}/>
    </div>   
  )
}

export default App;
