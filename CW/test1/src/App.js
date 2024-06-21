
import './App.css';

const CreditCardPayment = ({bill}) =>{
  return bill>1000?<p>Please your credit card for payment</p> : <p>You can pay using cash or debit card</p>
  }
const ProductAvailability =({inStock}) =>{
  return inStock? <p>Product is available order now!</p> :<p>Sorry,the product is out of stock</p>
}
const Trafficlight = ({color}) =>{
  return color === "red" ? <p>Stop the lights are red!.</p>:<p>Go! The light is green.</p>
}

const MembershipStatus = ({isPremium}) =>{
  return isPremium ? <p>Welcome,Premium Memeber</p>:<p>Upgrade to premium for exclusive benefits.</p>
}

const WeatherReport = ({isSuny}) =>{
  return isSuny ? <p>Its is a Sunny Day</p> :<p>It is not sunny today.</p>
}
function App() {
  return (
    <div> 
        <CreditCardPayment bill={500} />
        <ProductAvailability inStock={true} />
        <Trafficlight color={"htgjhd"} />
        <MembershipStatus isPremium={false} />
        <WeatherReport isSuny={true} />
    </div>
  );
}

export default App;
