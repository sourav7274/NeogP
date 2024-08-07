import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';

const Display =() => {
  return(
    <div className='container py-4'>
      <h1 className='pb-3'>OverView</h1>
      <img className='img-fluid rounded mb-3' src='https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='TajMahal'/>
      <p>The Taj Mahal is one of the most famous monuments in the worldllt is located in Agra, India, and is a symbol of eternal love. This stunning white marble
      mausoleum was built by Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal.</p>
      <p>The Taj Mahal is not only a UNESCO World Heritage Site but also considered one of the most beautiful architectural masterpieces in history.</p>
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
