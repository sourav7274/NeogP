
import './App.css';

const smartphone = {
  id:1,
  catergory:"Electronics",
  Price: 799.99,
  Stock: 100
}

const PhoneDetails = ({phone}) =>{
  return(
    <div>
      <h2>SmartPhone</h2>
      <p>Category: {phone.catergory}</p>
      <p>Price: {phone.Price}</p>
      <p>Stock: {phone.Stock} </p>
    </div>
  )
}

const Footer = () =>{
  return(
    <footer>
      <p>&copy; 2024 Our Company. All rights reserved</p>
    </footer>
  )
}

const Header = () =>{
  return(
    <header>
       <h1>Welcome to our Website</h1>
       <nav>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/'>About</a>
          </li>
          <li>
            <a href='/'>Contact</a>
          </li>
        </ul>
       </nav>
    </header>
   
  )
}

function App() {
  return (
    <di>
    <Header/>
      <PhoneDetails phone={smartphone} />
      <Footer/>
    </di>
  );
}

export default App;
