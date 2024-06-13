
import './App.css';

const ArrCal = () => {
  const numbers = [1, 2, 3, 4, 5];
  const sum = numbers.reduce((acc,curr) =>{
    acc+=curr
    return acc
  } ,0)
  const avg = sum/numbers.length
  const max = numbers.reduce((acc,curr) =>{
    if(curr>acc)
      {
        acc=curr
      }
    return acc
  },numbers[0])
  const min = numbers.reduce((acc,curr) =>{
    if(curr<acc)
      {
        acc=curr
      }
    return acc
  },numbers[0])
  return(
    <div>
        <h1>Array Opeartions</h1>
        <p>Sum:{sum}</p>
        <p>Avg:{avg}</p>
        <p>Max:{max}</p>
        <p>Min:{min}</p>
    </div>
  )
}
const person = {

  name: "Sarah",

  age: 28,

  city: "New York",

};
const ObjectManipulation = ({person}) =>{
    person.age=29
    return(
      <div>
        <h1>Person Detail</h1>
        <p>Name: {person.name}</p>
        <p>Age: {person.age}</p>
        <p>City: {person.city}</p>
      </div>
    )
}

const SquareArea= () => {
  const sides = 5
  return (
    <div>
      <h1>Area of Square</h1>
      <p>The area of a square with sides {sides} is {sides*sides}</p>
    </div>
  )
}

const Capitalist = () => {
  const word = "hello world"
  return(
    <div>
      <h1>Capitalize Text</h1>
      <p>{word.toUpperCase()}</p>
    </div>
  )
}

const AreaC = () => {
  const r = 8
  return(
    <div>
      <h1>Area of Circle</h1>
      <p>The area of circle is: {3.14*r*r}</p>
    </div>
  )
}
function App() {
  return (
    <div>
      <ArrCal />
      <ObjectManipulation person={person} />
      <SquareArea />
      <Capitalist />
      <AreaC />
    </div>
  );
}

export default App;
