
import './App.css';

const Movies = ({movies,title}) =>{
  const details = movies.find(movie=>movie.title===title)
  return(
    <div>
      <h2>Movie Details</h2>
      <p>Title:{details.title}</p>
      <p>Director:{details.director}</p>
      <p>Genre:{details.genre}</p>
      <hr/>
    </div>
  )
}

const Cafes = ({cafes,name}) =>{
  const details = cafes.find(cafe=>cafe.name===name)
  return(
    <div>
      <h2>Cafe Details</h2>
      <p>Name:{details.name}</p>
      <p>{details.location}</p>
      <p>Rating:{details.rating}</p>
      <hr/>
    </div>
  )
}

const Podcasts = ({podcasts,title}) =>{
  const details = podcasts.find(podcast=>podcast.title===title)
  return(
    <div>
      <h2>Podcast Details</h2>
      <p>Title:{details.title}</p>
      <p>{details.host}</p>
      <p>Listenres:{details.listeners}</p>
      <hr/>
    </div>
  )
}
const Books = ({books,title}) =>{
  const details = books.find(book=>book.title===title)
  return(
    <div>
      <h2>Books Details</h2>
      <p>Title:{details.title}</p>
      <p>{details.author}</p>
      <p>Pages:{details.pages}</p>
      <hr/>
    </div>
  )
}
const Articles = ({articles,title}) =>{
  const details = articles.find(article=>article.title===title)
  return(
    <div>
      <h2>Article Details</h2>
      <p>Title:{details.title}</p>
      <p>{details.author}</p>
      <p>Category:{details.category}</p>
      <hr/>
    </div>
  )
}
const Blogposts = ({blogPosts,category}) =>{
  const details = blogPosts.find(blog=>blog.category===category)
  return(
    <div key={details.id}>
      <h2>BlogPost Details</h2>
      <p>Title:{details.title}</p>
      <p>{details.content}</p>
      <p>Category:{details.category}</p>
      <hr/>
    </div>
  )
}

function App() {
  const articles = [

    { title: "Article 1", author: "Author 1", category: "Technology" },

    { title: "Article 2", author: "Author 2", category: "Food" },

    { title: "Article 3", author: "Author 3", category: "Fashion" },

  ];
  const books = [

    { title: "Book 1", author: "Author 1", pages: 300 },

    { title: "Book 2", author: "Author 2", pages: 250 },

    { title: "Book 3", author: "Author 3", pages: 400 },

  ];
  const movies = [

    { title: "Movie 1", director: "Director 1", genre: "Action" },

    { title: "Movie 2", director: "Director 2", genre: "Comedy" },

    { title: "Movie 3", director: "Director 3", genre: "Drama" },

  ];
  const cafes = [

    { name: "Cafe 1", location: "Location 1", rating: 4.5 },

    { name: "Cafe 2", location: "Location 2", rating: 4.2 },

    { name: "Cafe 3", location: "Location 3", rating: 4.8 },

  ];
  const podcasts = [

    { title: "Podcast 1", host: "Host 1", listeners: 5000 },

    { title: "Podcast 2", host: "Host 2", listeners: 3000 },

    { title: "Podcast 3", host: "Host 3", listeners: 7000 },

  ];
  const blogPosts = [

    { id: 1, title: 'Blog Post 1', content: 'Content 1', category: 'Technology' },

    { id: 2, title: 'Blog Post 2', content: 'Content 2', category: 'Food' },

    { id: 3, title: 'Blog Post 3', content: 'Content 3', category: 'Technology' }

  ];

  return (
    <div>
     <Movies movies={movies} title="Movie 2" />
     <Cafes cafes={cafes} name="Cafe 2"/>
     <Podcasts podcasts={podcasts} title="Podcast 3" />
     <Books books={books} title="Book 1" />
     <Articles articles={articles} title="Article 2" />
     <Blogposts blogPosts={blogPosts} category="Food" />
    </div>   
  )
}

export default App;
