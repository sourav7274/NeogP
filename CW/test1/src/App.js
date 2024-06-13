
import './App.css';

const Rnum = () =>{
  let a = Math.floor(Math.random()*100)+1
  return <p>Random number between 1 and 100 is {a}</p>
}

const AbsVal = () =>{
  const number = -10
  return <p>Absolute Value: {Math.abs(number)}</p>
}

const SumE = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7]
  const sum = numbers.filter(n => {
    let sum = 0
    if(n%2===0)
      {
        sum+=n
      }
    return sum
  })
  return <p>Sum of Even Numbers: {sum}</p>
}

const Psq = () => {
  const side = 5
  return(
    <div>
      <h1>Square Perimeter Calculator</h1>
      <p>Side Length: {side}cm</p>
      <p>Perimeter: {side*4}cm</p>
    </div>
  )
}

const Convert =() =>{
  const amount = 50
  return(
    <div>
      <h1>Currency Converter</h1>
      <p>Amount in USD:${amount} </p>
      <p>Exchnage Rate: 1USD = 74.5INR </p>
      <p>Amount in INR: INR {amount*74.5}</p>
    </div>
  )
}
function App() {
  return (
    <div>
      <Rnum />
      <AbsVal/>
      <SumE />
      <Psq />
      <Convert />
    </div>
  );
}

export default App;
