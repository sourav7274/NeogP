
import './App.css';

const Blogpost = ({blogPosts}) =>{
  const total = blogPosts.reduce((acc,curr)=> curr.category==="Food"?acc+=(curr.content).length:acc ,0)
  return(
    <div>
      <h2>Total Count={total.toFixed(2)} </h2>
      <hr/>
    </div>
    
  )
}

const Laptops = ({laptops}) =>{
  const total = laptops.reduce((acc,curr)=>acc+=curr.price,0)
  return(
    <div>
      <h2>Total={total} </h2>
      <hr/>
    </div>
  )
}

const Cafes = ({cafes}) =>{
  const total = cafes.reduce((acc,curr)=>acc+=curr.rating,0)
  return(
    <div>
      <h2>Average Rating = {total/cafes.length} </h2>
      <hr/>
    </div>
  )
}

const Books = ({books}) =>{
  const total = books.reduce((acc,curr)=>acc+=curr.pages,0)
  return(
    <div>
      <h2>Total Pages= {total} </h2>
      <hr/>
    </div>
  )
}

const Tweets =({tweets}) =>{
  const morningTotal = tweets.reduce((acc,curr)=>curr.schedule==="Morning tweet"?acc+=curr.likes:acc,0)
  const eveningTotal = tweets.reduce((acc,curr)=>curr.schedule==="Evening tweet"?acc+=curr.likes:acc,0)
  return(
    <div>
      <h2>Morning Tweets:{morningTotal}</h2>
      <h2>Evening Tweets:{eveningTotal}</h2>
      <hr/>
    </div>
  )
}

const Podcasts = ({podcasts}) =>{
  const total = podcasts.reduce((acc,curr)=> curr.type==="verified"?acc+=curr.listeners:acc ,0)
  return(
    <div>
      <h2>Total Count={total} </h2>
      <hr/>
    </div>
    
  )
}

function App() {
  const blogPosts = [

    { id: 1, title: "Blog Post 1", content: "Content 1", category: "Technology"},

    { id: 2, title: "Blog Post 2", content: "Content 2", category: "Food" },

    { id: 3, title: "Blog Post 3", content: "Content 3", category: "Technology"},

    { id: 4, title: "Blog Post 4", content: "New content of food called Content 4", category: "Food"},

  ];
  const laptops = [

    { id: 1, brand: "Dell", price: 8999.99 },

    { id: 2, brand: "HP", price: 7999.99 },

    { id: 3, brand: "MacBook", price: 12999.99 },

  ];
  const cafes = [

    { id: 1, name: "Coffee House", rating: 4.5, type: "cafe" },

    { id: 2, name: "Cafe Latte", rating: 4.2, type: "cafe" },

    { id: 3, name: "Espresso Bar", rating: 4.8, type: "cafe" },

    { id: 3, name: "Me and U", rating: 4.3, type: "restaurant" },

  ];
  const books = [

    { id: 1, title: "Book 1", pages: 300 },

    { id: 2, title: "Book 2", pages: 250 },

    { id: 3, title: "Book 3", pages: 400 },

  ];
  const tweets = [

    { id: 1, content: "Tweet 1", likes: 20, schedule: "Morning tweet" },

    { id: 2, content: "Tweet 2", likes: 15, schedule: "Evening tweet" },

    { id: 3, content: "Tweet 3", likes: 30, schedule: "Morning tweet" },

{ id: 4, content: "Tweet 4", likes: 15, schedule: "Evening tweet" },

  ];

  const podcasts = [

    { id: 1, title: "Tech Talk", listeners: 5000, type: "verified" },

    { id: 2, title: "Science Insights", listeners: 1000, type: "unverified" },

    { id: 3, title: "Comedy Hour", listeners: 7000, type: "verified" },

  ];

  return (
    <div>
      <Blogpost blogPosts={blogPosts} />
      <Laptops laptops={laptops} />
      <Cafes  cafes={cafes}/>
      <Books books={books}/>
      <Tweets tweets={tweets}/>
      <Podcasts podcasts={podcasts} />
    </div>   
  )
}

export default App;
