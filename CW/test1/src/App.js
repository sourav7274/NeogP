
import './App.css';

const MyComponent = () => {
  return (<h1>Hello JSX!</h1>)
}

const name = "John"
const Greeting = () => {
  return(<h1>Hello {name}!</h1>)
}

const Link = () => {
  const url = "https://exmaple.com"
  return <a href={url} target='_blank'>Visit Exmaple website</a>
}

const Image = () => {
  const img = "https://via.placeholder.com/150"
  return <div><img src={img} alt="some_placeholder"/></div>  
}

const Profile = () => {
  const details = {
    name:"John",
    age:19,
    email:"somegmail",
    bio:"XYZ"
  }
  return (
    <div>
      <p>Name : {details.name}</p>
      <p>Age : {details.age}</p>
      <p>Email : {details.email}</p>
      <p>Bio : {details.bio}</p>
    </div>
  )
}
function App() {
  return (
    <div>
       <MyComponent />
       <Greeting/>
       <Link/>
       <Image/>
       <Profile/>
    </div>
  );
}

export default App;
