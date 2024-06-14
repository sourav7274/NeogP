
import './App.css';

const GenGreeting = () =>{
  const greeting = () =>{
    return "Hello John!"
  }
  return <h1>{greeting()}</h1>
}

const CalculatArea = () =>{
  const area = (a,b) => a*b
   return (
    <div>
       <p>Rectangle area: {area(10,5)}</p>
     
    </div>   
  )
}

const CalculatePeri = () =>{
  const perimter = (a,b) => 2*(a+b)
  return <p>Rectangle Perimter: {perimter(10,5)}</p>
}

const GenMessage = () =>{
  const hrs = new Date().getHours()
  let greet =""
  if(hrs<12)
    {
      greet="Good Morning!"
    }
    else if(hrs>12 && hrs<18)
      {
        greet="Good Afternoon!"
      }
    else
    {
      greet="Good Evening!"
    }

    return <h1>{greet}</h1>
}

const CalcVolume = () =>{
  const volume= (a,b) => Math.PI*a*a*b
  return <p>Volume of Cylinder: {volume(3,5)}</p>
}

function App() {
  return (
    <div>
     <GenGreeting/>
     <CalculatArea/>
     <CalculatePeri/>
     <GenGreeting />
    <GenMessage />
    <CalcVolume />
    </div>
  );
}

export default App;
