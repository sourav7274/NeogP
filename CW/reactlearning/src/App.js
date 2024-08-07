import {useState} from 'react'
const title = 'React is awesome'
const content = 'React is a JavaScript library for building user interfaces.'

const heading = 'About Me'
const name = 'Preeti' // you can put your name
const learning = 'I am learning React JS currently at neoG Camp.'

const Article = ({title,content}) => {
  const [dis,setDis] = useState(false)
  return(
    <div>
      <h1>{title}</h1>
      <button onClick={() => setDis(true)}>Know More</button>
      {dis && <p>{content}</p>}
    </div>
  )
}

const About = ({heading,name,learning}) => {
  const [dis,setDis] = useState(false)
  return(
    <div>
      <h1>{heading}</h1>
      <h2>{name}</h2>
      <button onClick={() => setDis(true)}>Know More</button>
      {dis && <p>{learning}</p>}
    </div>
  )
}

const UserInfo =({username,email,age}) =>{
  const [dis,setDis] = useState(false)
  return(
    <div>
      <h1>User Information</h1>
      <p><b>Username: </b>{username}</p>
      {dis === true 
        ?<>
          <p><b>Email: </b>{email}</p>
          <p><b>Age: </b>{age}</p>
        </> 
        :<><button onClick={() => setDis(true)}>See Profile</button></>}
    </div>
  )
}

const UserProfile =({username,imgurl,bio,location}) =>{
  const [dis,setDis] = useState(false)
  return(
    <div>
      <h1>User Profile</h1>
      <p><b>Username: </b>{username}</p>
      {dis === true 
        ?<>
        <img src={imgurl}/>
          <p><b>Bio: </b>{bio}</p>
          <p><b>Location: </b>{location}</p>
        </> 
        :<><button onClick={() => setDis(true)}>View Profile</button></>}
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <Article title={title} content={content} />
      <About heading={heading} learning={learning} name={name}/>
      <UserInfo username="unga" email="sammy7274@got.com" age={50} />
      <UserProfile username="bunga" imgurl="https://placehold.co/200x200" bio="Developer" location="Africa" />
    </div>
  );
}

export default App;
