
import './App.css';

const Laptops = ({laptops}) =>{
  const laptopList = laptops.map(laptop =>(
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
const Tspots = ({tspots}) =>{
  const tspotList = tspots.map(tspot =>(
    <div key={tspot.id}>
       <h3>{tspot.name}</h3>
       <p>Location:{tspot.location}</p>
    </div>   
  ))
  return(
    <>
      <h2>Tourist Spots</h2>
      {tspotList}
      <hr/>
    </>
  )
}
const Podcasts = ({podcasts}) =>{
  const PodList = podcasts.map(pod =>(
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
const Articles = ({articles}) =>{
  const articleList = articles.map(article =>(
    <div  key={article.id}>
       <h3>{article.title}</h3>
       <p>{article.description}</p>
    </div>   
  ))
  return(
    <>
      <h2>News Articles</h2>
      {articleList}
      <hr/>
    </>
  )
}
const Games = ({games}) =>{
  const gameList = games.map(game =>(
    <div  key={game.id}>
       <h3>{game.title}</h3>
       <p>Genre:{game.genre}</p>
    </div>   
  ))
  return(
    <>
      <h2>Games</h2>
      {gameList}
      <hr/>
    </>
  )
}


function App() {
  
  const laptops = [
    {id:1,Brand:"Dell",price:999},
    {id:2,Brand:"HP",price:899},
    {id:3,Brand:"Lenovo",price:1099},
  ]

  const tspots= [
    {id:1,name:"Grand Canyon",location:"Arizona,USA"},
    {id:2,name:"Eiffel Tower",location:"Paris,France"},
    {id:3,name:"Great Wall Of China",location:"Bejing,China"},
  ]

  const podcasts = [
    {id:1,title:"Episode 1",duration:30},
    {id:2,title:"Episode 2",duration:40},
    {id:3,title:"Episode 3",duration:60},
  ]
  const articles = [
    {id:1,title:"News 1",description:"Description 1"},
    {id:2,title:"News 2",description:"Description 2"},
    {id:3,title:"News 3",description:"Description 3"},
  ]

  const games = [
    {id:1,title:"Game 1",genre:"Action"},
    {id:2,title:"Game 2",genre:"Adventure"},
    {id:3,title:"Game 3",genre:"Strategy"},
  ]

  return (
    <div>
      <Laptops laptops={laptops}/>
      <Tspots tspots={tspots}/>
      <Podcasts podcasts={podcasts}/>
      <Articles articles={articles}/>
      <Games games={games}/>
    </div>   
  )
}

export default App;
