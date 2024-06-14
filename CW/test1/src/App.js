
import './App.css';

const MathOPs = () => {
  const a = 30
  const b = 20
  const getSum = (x,y) => {
    return x+y
  }
  const getDiff = (x,y) => {
    return x-y
  }

  return(
    <div>
      <p>{a} + {b} equals {getSum(a,b)}</p>
      <p>{a} - {b} equals {getDiff(a,b)}</p>
    </div>
  )
}

const CallGreeting = () =>{
  const greeting = () =>{
    return "Hello World"
  }
  return <h1>{greeting()}</h1>
}

const DateFomrate = () => {
  const getCurrentDate = () =>{
    return new Date().toLocaleDateString()
  }

  return <h1>{getCurrentDate()}</h1>
}
function App() {
  return (
    <div>
     <MathOPs />
     <CallGreeting/>
     <DateFomrate/>
    </div>
  );
}

export default App;
