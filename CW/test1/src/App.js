
import './App.css';

const ProductPage = ({inStock}) =>{
  return(
    <div>
      <h1>Product Page</h1>
      <h2>iPhone 15 Pro</h2>
      <img src="https://placehold.co/150x150?text=Iphone 15"  alt="SomePhone" />
      <p><b>Price:</b>$499.99</p>
      <p><b>Color:</b>Midnight Green</p>
      <p><b>Description:</b>The lastest flagship smartphone from Apple with cutting-edge features amd stunning designs</p>
      <p><b>{inStock ? "In Stock": "Out of Stock" }</b></p>
      <p>&copy;2024 Apple Inc.</p>
    </div>
  )
}

function App() {
  return (
    <div> 
        <ProductPage inStock={false} />
    </div>
  );
}

export default App;
