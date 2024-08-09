import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Header from './components/Header';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';


const Display =() => {
  return(
    <div className='container py-4'>
      <img className='img-fluid mb-3' src='https://placehold.co/600x400?text=Employees+Smiling' alt='Employees'/>
      <div className='my-4'>
        <h2>Our Employees</h2>
        <p>Meet our dedicated team of professionals who work tirelessly to achieve our company's goals.</p>
        <Link to="/employees" className='btn btn-primary'>View Employees</Link>
      </div>
      <div className='mb-3'>
        <h2>Company Report</h2>
        <p>Explore our latest financial report to gain insights into our company's performance and growth.</p>
        <Link to="/report" className='btn btn-primary'>View Employees</Link>
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      <Header/>
      <Display/>
      <Footer/>
    </>
  );
}

export default App;
