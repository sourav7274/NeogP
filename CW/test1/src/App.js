
import './App.css';

const bookD = {
  id:1,
  author:"Jane Doe",
  date:"March 1,2024",
  des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
}

const BookDetails = ({book}) =>{
  return(
    <div>
      <h2>The Importance of learning react</h2>
      <p>Author: {book.author}</p>
      <p>Date: {book.date}</p>
      <p>Stock: {book.des} </p>
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
       <h1>Welcome to Our Blog</h1>
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
      <BookDetails book={bookD} />
      <Footer/>
    </di>
  );
}

export default App;
