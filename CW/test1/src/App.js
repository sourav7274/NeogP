
import './App.css';

const Heading = () => {
  return <h1>React Playground</h1>
}
const name = "Alice Smith"
const Greetings = () => {
  return <h2>Hello,{name}</h2>
}
const ExternalLink = () => {
  return <a target='_blank' href='https://www.reactexamples.com'>Visit React Examples</a>
}

const Avatar = () => {
  return <div> 
  <img src='https://placehold.co/200x200?text=Hello\nWorld' alt='someImgae' />
  </div>
}
const Display =() => {
  const user = {

    name: "Alice Smith",

    age: 28,

    email: "alice.smith@example.com",

    bio: "Passionate about React and building innovative web applications."

  };
  return (
    <div>
       <h1>User Information</h1>
       <p><b>Name:</b>{user.name}</p>
       <p><b>Age:</b>{user.age}</p>
       <p><b>Email:</b>{user.email}</p>
       <p><b>Bio:</b>{user.bio}</p>
    </div>
  )
}


function App() {
  return (
    <div>
      <Heading/>
      <Greetings/>
      <ExternalLink/>
      <Avatar/>
      <Display/>
    </div>
  );
}

export default App;
