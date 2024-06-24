
import './App.css';

const Products = ({products,productId}) =>{
  const productDetail = products.find(product => product.id===productId)
  return(
    <div key={productDetail.id}>
      <h2>Product Data</h2>
      <p>Name:{productDetail.name}</p>
      <p>Price:{productDetail.price}</p>
    </div>
  )
}

const Restaurants = ({restaurants,name})=>{
  const resDetail = restaurants.find(res => res.name===name)
  return(
    <div key={resDetail.id}>
      <h2>Restaurant Detail</h2>
      <p>Name:{resDetail.name}</p>
      <p>Cuisine:{resDetail.cuisine}</p>
    </div>
  )
}

const Videos = ({videos,name}) =>{
  const vidInfo = videos.find(vid => vid.name===name)
  return(
    <div key={vidInfo.id}>
      <h2>Restaurant Detail</h2>
      <p>Name:{vidInfo.name}</p>
      <p>Views:{vidInfo.views}</p>
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
    {id:1,name:"Restaurant 1",cuisine:"Italian"},
    {id:2,name:"Restaurant 2",cuisine:"Mexican"},
    {id:3,name:"Restaurant 3",cuisine:"Chineese"},
  ]

  const videos = [
    {id:1,name:"Video 1",views:2000},
    {id:2,name:"Video 2",views:4000},
    {id:3,name:"Video 3",views:5000},
  ]

  return (
    <div>
      <Products products={products}  productId={2}/>
      <Restaurants restaurants={restaurants} name="Restaurant 3"/>
      <Videos videos={videos} name="Video 1"/>
    </div>   
  )
}

export default App;
