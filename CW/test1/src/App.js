
import './App.css';

const Laptops = ({laptops}) =>{
  const laptopFil = laptops.filter(laptop => laptop.price>4999 && laptop.price<15000)
  const laptopList = laptopFil.map(laptop =>(
    <div key={laptop.id}>
       <h3>{laptop.Brand}</h3>
       <p>Price:${laptop.price}</p>
    </div>   
  ))
  return(
    <>
      <h2>Laptops</h2>
      {laptopList}
      <hr/>
    </>
  )
}
const Books = ({books}) =>{
  const bookFil = books.filter(book => book.genre==="Fantasy")
  const bookList = bookFil.map(book =>(
    <div key={book.id}>
       <h3>{book.name}</h3>
       <p>Genre:{book.genre}</p>
    </div>   
  ))
  return(
    <>
      <h2>Fantasy Books</h2>
      {bookList}
      <hr/>
    </>
  )
}
const Podcasts = ({podcasts}) =>{
  const podcastFil = podcasts.filter(pod => pod.duration>30)
  const PodList = podcastFil.map(pod =>(
    <div  key={pod.id}>
       <h3>{pod.title}</h3>
       <p>Duration:{pod.duration} minutes</p>
    </div>   
  ))
  return(
    <>
      <h2>Podcast Episodes</h2>
      {PodList}
      <hr/>
    </>
  )
}
const Movies = ({movies}) =>{
  const movieFil = movies.filter(movie=>movie.genre==="Action")
  const movieList = movieFil.map(movie =>(
    <div  key={movie.id}>
       <h3>{movie.title}</h3>
       <p>{movie.genre}</p>
    </div>   
  ))
  return(
    <>
      <h2>Action movies</h2>
      {movieList}
      <hr/>
    </>
  )
}
const Jobs = ({jobs}) =>{
  const jobFil = jobs.filter(job => job.type==="Full-time")
  const jobList = jobFil.map(job =>(
    <div  key={job.id}>
       <h3>{job.title}</h3>
       <p>Type:{job.type}</p>
    </div>   
  ))
  return(
    <>
      <h2>Jobs</h2>
      {jobList}
      <hr/>
    </>
  )
}

const Playlist = ({playlist}) =>{
  const playFil = playlist.filter(play => play.artist==="Artist 1")
  const playList = playFil.map(play =>(
    <div id={play.id} >
      <h3>{play.title}</h3>
      <p>{play.artist}</p>
    </div>
  ))
  return(
    <>
      <h2>Songs</h2>
      {playList}
    </>
  )
}

function App() {
  
  const laptops = [

    { id: 1, brand: "Dell", price: 8000 },

    { id: 2, brand: "HP", price: 7000 },

    { id: 3, brand: "Lenovo", price: 19000 },

  ];

  const books = [

    { id: 1, title: "Harry Potter and the Sorcerer's Stone", genre: "Fantasy" },

    { id: 2, title: "The Hobbit", genre: "Self-help" },

    { id: 3, title: "Mistborn: The Final Empire", genre: "Fantasy" },

  ];

  const podcasts = [

    { id: 1, title: "Tech Talk", duration: 45 },

    { id: 2, title: "Business Insights", duration: 25 },

    { id: 3, title: "Science Hour", duration: 60 },

  ];
  const movies = [

    { id: 1, title: "Mission Impossible", genre: "Action" },

    { id: 2, title: "Die Hard", genre: "Action" },

    { id: 3, title: "The Avengers", genre: "Adventure" },

  ];

  const jobs = [

    { id: 1, title: "Software Engineer", type: "Full-time" },

    { id: 2, title: "Marketing Manager", type: "Part-time" },

    { id: 3, title: "Data Analyst", type: "Full-time" },

  ];
  const songs = [

    { id: 1, title: "Song 1", artist: "Artist 1" },

    { id: 2, title: "Song 2", artist: "Artist 2" },

    { id: 3, title: "Song 3", artist: "Artist 1" },

  ];
  return (
    <div>
      <Laptops laptops={laptops}/>
      <Books books={books}/>
      <Podcasts podcasts={podcasts}/>
      <Movies movies={movies}/>
      <Jobs jobs={jobs}/>
      <Playlist playlist={songs}/>
    </div>   
  )
}

export default App;
