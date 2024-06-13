
import './App.css';

const Greetings = (props) => {
  return <h1>Hello,{props.name}</h1>
}

const UserDetail =(props) => {
  return (
    <div>
    <h1>User Details</h1>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Country: {props.country}</p>
    </div>
  )
}

const WeatherInfo = (props) => {
  return(
    <div>
      <h1>Weather Info</h1>
      <p>Temperature: {props.temp} C </p>
      <p>Condition: {props.cond} </p>
    </div>
  )
}

const UserAvatar = (props) => {
  return(
    <div>
      <h1>UserAvatar</h1>
      <img src={props.img} alt={props.alt}/>
    </div>
  )
}

function App() {
  return (
    <div>
       <Greetings name="John"/>
       <UserDetail name="Bob" age={20}  country="India" />
       <WeatherInfo temp={30} cond="Sunny" />
       <UserAvatar img="https://via.placeholder.com/150" alt="SomeImg" />
    </div>
  );
}

export default App;
