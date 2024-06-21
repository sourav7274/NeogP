
import './App.css';

const Message = ({isLoggin}) => {
  // if(isLoggin)
  // {
  //   return <p>Welcome back,User</p>
  // }
  // else{
  //   return <p>Please Login to continue</p>
  // }

  return isLoggin ? <p>Welcome Back User!</p> : <p>Please Login to continue</p>
} 

const Greeting = ({isMorning}) => {
  return <p>{isMorning ? "Good Morning": "Good Eveinig" }</p> 
}

const ShowNoti = ({noti}) => {
  return <div>{noti && <p>{noti}</p>}</div>
}

const TicketPricing = ({passangerAge}) =>{
  let price = 100

  return(
    <div>
      {passangerAge > 60 ? <p>Ticket Price: {price - price*0.15}</p> : <p>Ticket Price: {price}</p>}
    </div>
  )
}

function App() {
  return (
    <div>
     <Message isLoggin={true} />
     <Greeting isMorning={true} />
     <ShowNoti noti="iugeugdfhg" />
     <TicketPricing passangerAge={50} />
    </div>
  );
}

export default App;
