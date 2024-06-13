
import './App.css';

const Add = () => {
  const a= 2
  const b= 4
  return(
    <p>Result of {a} + {b} = {a+b}</p>
  )
}

const TempCal = () => {
  const cel = 30
  return(
    <p>Celcius {cel} degree Celcius is equal to {cel*9/5 + 32} Fahrenheit</p>
  )
}

const Combied = () =>{
  const a = 15
  const b = 7
  const c= 3
  return(
    <div>
      <p>{a} + {b} + {c} = {a+b+c}</p>
      <p>{a} - {b} = {a-b}</p>
      <p>{a} * {b} = {a*b}</p>
    </div>
  )
}

const Welcome =()=>{
 const  fname = "John"
 const  lanme = "Doe"
  return <p>{`Welcome, ${fname} ${lanme} `}</p>
  
}
function App() {
  return (
    <div>
      <Add/>
      <TempCal/>
      <Combied/>
      <Welcome/>
    </div>
  );
}

export default App;
