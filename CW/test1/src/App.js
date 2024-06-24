
import './App.css';

const ProducTotal = ({smartphones}) =>{
  const total = smartphones.reduce((acc,curr)=>acc+=curr.price,0)
  return(
    <div>
      <h2>Total Price={total.toFixed(2)} </h2>
      <hr/>
    </div>
    
  )
}
const Hotel = ({hotels}) =>{
  const total = hotels.reduce((acc,curr)=>acc+=curr.rating,0)
  return(
    <div>
      <h2>Average Rating = {(total/hotels.length).toFixed(2)}</h2>
      <hr/>
    </div>
  )
}
const Podcasts = ({podcasts}) =>{
  const total = podcasts.reduce((acc,curr)=>acc+=curr.listeners,0)
  return(
    <div>
      <h2>Total Listeners</h2>
      <p>{total}</p>
      <hr/>
    </div>
  )
}
const Tweets = ({tweets}) =>{
  const total = tweets.reduce((acc,curr)=>acc+=curr.retweets,0)
  return(
    <div>
      <h2>Total Retweets</h2>
      {total}
      <hr/>
    </div>
  )
}
const Articles = ({articles}) =>{
  const total = articles.reduce((acc,curr)=>acc+=(curr.content).length,0)
  return(
    <div>
      <h2>Total Word Count</h2>
      {total}
      <hr/>
    </div>
  )
}

const Likes = ({likes}) =>{
  const total = likes.reduce((acc,curr)=>curr.user==="User1"?acc+=curr.likes:acc,0)
  return(
    <div>
      <h2>Total Likes</h2>
      {total}
    </div>
  )
}

function App() {
  
  const smartphones = [

    { id: 1, brand: "Samsung", price: 799.99 },

    { id: 2, brand: "iPhone", price: 999.99 },

    { id: 3, brand: "Google Pixel", price: 899.99 },

  ];

  const hotels = [

    { id: 1, name: "Luxury Hotel", rating: 4.8 },

    { id: 2, name: "Budget Inn", rating: 3.5 },

    { id: 3, name: "Resort Paradise", rating: 4.2 },

  ];

  const podcasts = [

    { id: 1, title: "Tech Talk", listeners: 5000 },

    { id: 2, title: "Science Insights", listeners: 3000 },

    { id: 3, title: "Comedy Hour", listeners: 7000 },

  ];
  const tweets = [

    { id: 1, content: "Tweet 1", retweets: 20 },

    { id: 2, content: "Tweet 2", retweets: 15 },

    { id: 3, content: "Tweet 3", retweets: 30 },

  ];
  const articles = [

    { id: 1, title: "Article 1", content: "Content 1" },

    { id: 2, title: "Article 2", content: "Content 2" },

    { id: 3, title: "Article 3", content: "Content 3" },

  ];
  const posts = [

    { id: 1, title: "Post 1", content: "Content 1", likes: 10, user: "User1" },

    { id: 2, title: "Post 2", content: "Content 2", likes: 5, user: "User2" },

    { id: 3, title: "Post 3", content: "Content 3", likes: 7, user: "User1" },

  ];

  return (
    <div>
      <ProducTotal smartphones={smartphones} />
      <Hotel hotels={hotels}/>
      <Podcasts podcasts={podcasts}/>
      <Tweets tweets={tweets}/>
      <Articles articles={articles}/>
      <Likes likes={posts}/>
    </div>   
  )
}

export default App;
