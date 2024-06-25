
import './App.css';

const Cars = ({cars,model}) =>{
  const details = cars.find(car=>car.model===model)
  return(
    <div>
      <h2>Car Details</h2>
      <p>Model:{details.model}</p>
      <p>Make:{details.make}</p>
      <p>Year:{details.year}</p>
      <hr/>
    </div>
  )
}

const Gyms = ({gyms,location}) =>{
  const details = gyms.find(gym=>gym.location===location)
  return(
    <div>
      <h2>Gym Details</h2>
      <p>Name:{details.name}</p>
      <p>{details.location}</p>
      <p>Rating:{details.rating}</p>
      <hr/>
    </div>
  )
}

const Travels = ({travels,destination}) =>{
  const details = travels.find(travel=>travel.destination===destination)
  return(
    <div>
      <h2>Travel Details</h2>
      <p>Title:{details.destination}</p>
      <p>{details.duration}</p>
      <p>Activities:{(details.activities).join(",")}</p>
      <hr/>
    </div>
  )
}
const Laptops = ({laptops,processor}) =>{
  const details = laptops.find(laptop=>laptop.processor===processor)
  return(
    <div>
      <h2>Laptops Details</h2>
      <p>Brand:{details.brand}</p>
      <p>{details.processor}</p>
      <p>Ram:{details.ram}</p>
      <hr/>
    </div>
  )
}
const Recipes = ({recipes,dish}) =>{
  const details = recipes.find(recipe=>recipe.dish===dish)
  return(
    <div>
      <h2>Recipe Details</h2>
      <p>{details.dish}</p>
      <p>{details.cuisine}</p>
      <p>Ingredients:{(details.ingredients).join(',')}</p>
      <hr/>
    </div>
  )
}
const Blogposts = ({blogPosts,title}) =>{
  const details = blogPosts.find(blog=>blog.title===title)
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
  const recipes = [

    {

      dish: "Recipe 1",

      cuisine: "Italian",

      ingredients: ["Tomatoes", "Pasta", "Cheese"],

    },

    {

      dish: "Recipe 2",

      cuisine: "Mexican",

      ingredients: ["Beans", "Rice", "Avocado"],

    },

    {

      dish: "Recipe 3",

      cuisine: "Indian",

      ingredients: ["Curry", "Rice", "Naan"],

    },

  ];


  const laptops = [

    { brand: "Laptop 1", processor: "Intel i5", ram: "8GB" },

    { brand: "Laptop 2", processor: "AMD Ryzen 7", ram: "16GB" },

    { brand: "Laptop 3", processor: "Apple M1", ram: "12GB" },

  ];
  const cars = [

    { model: "Car 1", make: "Make 1", year: 2022 },

    { model: "Car 2", make: "Make 2", year: 2021 },

    { model: "Car 3", make: "Make 3", year: 2023 },

  ];

  const gyms = [

    { name: "Gym 1", location: "Location 1", rating: 4.7 },

    { name: "Gym 2", location: "Location 2", rating: 4.2 },

    { name: "Gym 3", location: "Location 3", rating: 4.5 },

  ];
  const travels = [

    {

      destination: "Travel 1",

      duration: "5 days",

      activities: ["Hiking", "Sightseeing"],

    },

    {

      destination: "Travel 2",

      duration: "7 days",

      activities: ["Beach", "Shopping"],

    },

    {

      destination: "Travel 3",

      duration: "3 days",

      activities: ["Cultural Tours", "Photography"],

    },

  ];


  const blogPosts = [

    { id: 1, title: 'Blog Post 1', content: 'Content 1', category: 'Technology' },

    { id: 2, title: 'Blog Post 2', content: 'Content 2', category: 'Food' },

    { id: 3, title: 'Blog Post 3', content: 'Content 3', category: 'Fashion' }

  ];

  return (
    <div>
     <Cars cars={cars} model="Car 2" />
     <Gyms gyms={gyms} location="Location 2"/>
     <Travels travels={travels} destination="Travel 3" />
     <Laptops laptops={laptops} processor="Apple M1" />
     <Recipes recipes={recipes} dish="Recipe 2" />
     <Blogposts blogPosts={blogPosts} title="Blog Post 3" />
    </div>   
  )
}

export default App;
