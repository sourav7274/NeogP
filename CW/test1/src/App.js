
import './App.css';

const employee = {
  id:1,
  name:"John Doe",
  position:"Software Developer",
  department:"Engineering",
  email:"johndoe@gmail.com"
}

const EmployeeDetails = ({employee}) =>{
  return(
    <div>
      <h2>Employee Details</h2>
      <p>Name: {employee.name}</p>
      <p>position: {employee.position}</p>
      <p>Department: {employee.department} </p>
      <p>Email: {employee.email}</p>
    </div>
  )
}

const Footer = () =>{
  return(
    <footer>
      <p>&copy; 2024 Company Name. All rights reserved</p>
    </footer>
  )
}

const Header = () =>{
  return(
    <header>
       <h1>Welcome to our Company</h1>
       <nav>
        <ul>
          <li>
            <a href='/'>Name</a>
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
      <EmployeeDetails employee={employee} />
      <Footer/>
    </di>
  );
}

export default App;
