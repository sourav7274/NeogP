
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Header />
      <main className='container py-4'>
        <h1>Latest Blogs</h1>
        <article>
          <h2>Blog 1</h2>
          <img src="https://via.placeholder.com/300x200" alt="somethings" className='img-fluid rounded'/>
          <p>Posted on July 2, by John</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </article>
        <article>
          <h2>Blog 2</h2>
          <p>Posted on June 32, ny Jane Smith</p>
          <img src="https://via.placeholder.com/300x200" alt="somethings" className='img-fluid rounded'/>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </article>
      </main>
      <Footer/>
    </>
  )
}

export default App;
