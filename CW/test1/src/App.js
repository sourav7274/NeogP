
import './App.css';

const UserStatus = ({isOnline}) => {
  return isOnline?<p>User is Online</p> : <p>User is Offline</p>
}

const DayOfWeek = ({isWeekend}) => {
  return isWeekend ? <p>Enjoy Your Weekend</p> : <p>Have a great day</p>
}

const Shoppingcart = ({itemCount}) => {
  return itemCount!==0 ? <p>Your have {itemCount} items in your cart</p>: <p>Your cart is empty</p>
}
const DiscountOffer =({isPrimeMember}) => {
  return isPrimeMember ? <p>Your are eligible for a 20% discount</p>:<p>Become a prime member for exclusive discounts</p>
}
const ShowError = ({showErorr}) =>{
  return (
    <div>
      {showErorr && <p>You have an error please try again.</p>}
    </div>
  )
}
function App() {
  return (
    <div> 
      <UserStatus isOnline={true} />
      <DayOfWeek isWeekend={true} />
      <Shoppingcart itemCount={56} />
      <DiscountOffer isPrimeMember={true} />
      <ShowError showErorr={"jgbeiug"} />
    </div>
  );
}

export default App;
