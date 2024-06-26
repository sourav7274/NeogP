
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
  <main className="container py-3">
    <h1>Featured Restaurants</h1>
    <img src="https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg?w=1380&t=st=1719397559~exp=1719398159~hmac=8143f54ce07e4a213375cc2c540b67d78c253f43f780244643804c6aa6f5b04e" alt="restaurant img" className="rounded img-fluid pb-2"/>
    <h2>Taste Of Italy</h2>
    <p>Italian | Rating: 4.5</p>
    <p>123 Main Road,Avgtom,USA</p>
    <img src="https://img.freepik.com/free-photo/restaurant-interior_1127-3392.jpg?w=1380&t=st=1719397704~exp=1719398304~hmac=f782e2b8b3bcbe4669ba1b119c95838ea906a1dc3967386214487d1faa368662" alt="restaurant img" className="rounded img-fluid pb-2"/>
    <h2>Spice Village</h2>
    <p>Indian | Rating: 4.3</p>
    <p>456  Not-Main Road,Avgtom,USA</p>
  </main>
  );
}

export default App;
