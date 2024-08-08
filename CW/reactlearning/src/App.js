import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import Footer from './components/Footer';


const Display =() => {
  return(
    <div className='container py-4'>
      <h1 className='pb-3'>OverView</h1>
      <img className='img-fluid rounded mb-3' src='https://imgs.search.brave.com/FNwgwVa90c52xMehHRXWovSec1Icxus2dAkw3GQ9UTU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNzk3/MTc5NDkvcGhvdG8v/a3VhbGEtbHVtcHVy/LW1hbGF5c2lhLXZp/cmF0LWtvaGxpLW9m/LWluZGlhLXBvc2Vz/LWR1cmluZy10aGUt/aWNjLXUtMTktY3Jp/Y2tldC13b3JsZC1j/dXAtb2ZmaWNpYWwu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PW5EYjFIWTZUTEhF/Y2hScXpNa2p6SWVF/RjdqU3k5VTFIMmdB/d0ZrRl81WHM9' alt='Virat Kohli'/>
      <p>Virat Kohli, born on November 5, 1988, in Delhi, India, is one of the world's leading cricketers. He is known for his aggressive batting and strong
      leadership as the captain of the Indian cricket team.</p>
      <p>Kohli has consistently ranked among the world's top batsmen and has received numerous awards and accolades for his remarkable cricketing skills.</p>
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
