
import './App.css';

const ProductList = ({products}) =>{
  
  const filterProducts = products.filter(product => product.price>=20 && product.price<=50)
  
  const productListing = filterProducts.map(product =>(
    <div key={product.id}>
      <h3>Name:{product.name}</h3>
      <p>Price:{product.price}</p>
    </div>
  ))
  return(
    <>
      <h2>Products</h2>
      {productListing}
      <hr/>
    </>
  )
}

const Restaurants = ({restaurants}) =>{

  const filterRes = restaurants.filter(res => res.cuisine==="Italian")

  const restaurantsList = filterRes.map(restaurant => (
    <div key={restaurant.id}>
        <h3>Name:{restaurant.name}</h3>
        <p>Cuisine:{restaurant.cuisine}</p>
    </div>
  ))

  return(
    <>
      <h2>Restaurants</h2>
      {restaurantsList}
      <hr/>
    </>
  )
}

const Videos = ({videos}) =>{
  const videoFIl = videos.filter(vid => vid.views>1000)
  const videoList = videoFIl.map(video => (
    <div key={video.id}>
      <h3>Name:{video.name}</h3>
      <p>Views:{video.views}</p>
    </div>
  ))

  return(
    <>
      <h2>Videos</h2>
      {videoList}
    </>
  )
}

function App() {
  
  const products = [
    {id:1,name:"Product 1",price:19.99},
    {id:2,name:"Product 2",price:29.99},
    {id:3,name:"Product 3",price:39.99},
  ]

  const restaurants = [
    {id:1,name:"Restaurant 1",cuisine:"Italian"},
    {id:2,name:"Restaurant 2",cuisine:"Mexican"},
    {id:3,name:"Restaurant 3",cuisine:"Chineese"},
  ]

  const videos = [
    {id:1,name:"Video 1",views:200},
    {id:2,name:"Video 2",views:4000},
    {id:3,name:"Video 3",views:5000},
  ]

  return (
    <div>
         <ProductList products={products} />
         <Restaurants restaurants={restaurants}/>
         <Videos videos={videos}/>
    </div>   
  )
}

export default App;
