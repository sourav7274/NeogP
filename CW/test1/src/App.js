
import './App.css';

const Exercises = ({exercises}) =>{
  const total = exercises.reduce((acc,curr) => acc+=curr.caloriesBurned,0)
 return(
  <div>
    <p>Total calories burned: {total}</p>
    <hr/>
  </div>
 )
}

const Songs = ({songs,rating}) =>{
 const total = songs.reduce((acc,curr)=> curr.rating>rating?acc+=curr.duration:acc ,0) 
  return(
    <div>
      <p>Total Duration is {total}</p>    
      <hr/>
    </div>
  )
}

const Books = ({books,title}) =>{
  const details = books.find(book=>book.title===title)
  return(
    <div>
      <h2>Book Details</h2>
      <p>Title:{details.title}</p>
       <p>Author:{details.author}</p>
       <p>Genre:{details.genre}</p>
       <hr/>
    </div>
  )
}
const Songss = ({songss,title}) =>{
  const details = songss.find(song=>song.title===title)
  return(
    <div>
      <h2>Songs Details</h2> 
       <p>Title:{details.title}</p>
       <p>Artist:{details.artist}</p>
       <p>Genre:{details.genre}</p>
       <hr/>
    </div>
  )
}
const Cities = ({cities,name}) =>{
  const details = cities.find(city=>city.name===name)
  return(
    <div>
      <h2>City Details</h2>
      <p>Name:{details.name}</p>
      <p>Population:{details.population}</p>
      <hr/>
    </div>
  )
}

const Products = ({products,id}) =>{
  const details = products.find(pro =>pro.id===id)
  return(
    <div>
      <h2>Product Details</h2>
      <p>Name:{details.name}</p>
      <p>Price:{details.price}</p>
      <hr/>
    </div>
  )
}

const Students = ({students,name}) =>{
  const details = students.find(student => student.name===name)
  return(
    <div>
      <h2>Student Details</h2>
      <p>Name:{details.name}</p>
      <p>Age:{details.age}</p>
      <p>Science:{details.grades.science}</p>
      <p>Maths{details.grades.math}:</p>
      <p>English:{details.grades.english}</p>
    </div>
  )
}

const Orders = ({orders,name}) =>{
  const details = orders.find(order => order.customer===name)
  const list = details.products.map(p => (
    <>
      <p>Id:{p.id}</p>
      <p>Name:{p.name}</p>
      <p>Quantity:{p.quantity}</p>
    </>
  ))
  return(
    <div>
      <h2>Order Details</h2>
      <p>Customer:{details.customer}</p>
      <p>Total Amount:{details.totalAmount}</p>
      {list}
      <hr/>
    </div>
  )
}

const Employees = ({employees,id}) =>{
  const details = employees.find(employee => employee.id===id)
  return(
    <div>
      <h2>Employee Details</h2>
      <p>Id:{details.id}</p>
      <p>Name:{details.name}</p>
      <p>Position{details.position}:</p>
      <p>Department Name:{details.department.name}</p>
      <p>Department Location:{details.department.location}</p>
      <hr/>
    </div>
  )
}

const Store = ({store}) =>{
  const total = store.categories.reduce((acc,curr) => curr.itemDetail.inStock? acc+=1 : acc ,0)
  return(
    <h2>Total Number of items in stock are: {total}</h2>
  )
}

function App() {
  const store = {

    name: "Tech Emporium",
  
    categories: [
  
      { id: 1, name: "Electronics", itemDetail: { id: 101, product: "Laptop", inStock: true } },
  
      { id: 2, name: "Accessories", itemDetail: { id: 201, product: "Headphones", inStock: true } },
  
      { id: 3, name: "Electronics", itemDetail: { id: 301, product: "Heater", inStock: false } },
  
    ]
  
  };
  
  const students = [

    { id: 1, name: "Alice", age: 20, grades: { math: 90, science: 85, english: 92 } },
  
    { id: 2, name: "Bob", age: 22, grades: { math: 78, science: 80, english: 85 } },
  
    { id: 3, name: "Charlie", age: 21, grades: { math: 95, science: 88, english: 94 } },
  
  ];
  
  
  const products = [

    { id: 1, name: "Laptop", price: 1200 },
  
    { id: 2, name: "Smartphone", price: 800 },
  
    { id: 3, name: "Headphones", price: 60 },
  
  ];
  const cities = [

    { id: 1, name: "New York", population: 8500000 },
  
    { id: 2, name: "Paris", population: 2200000 },
  
    { id: 3, name: "Tokyo", population: 3770000 },
  
  ];

  const songss = [

    { id: 1, title: "Stairway to Heaven", artist: "Led Zeppelin", genre: "Rock" },
  
    { id: 2, title: "Bohemian Rhapsody", artist: "Queen", genre: "Rock" },
  
    { id: 3, title: "Rolling in the Deep", artist: "Adele", genre: "Pop" },
  
  ];
  
  const exercises = [

    { id: 1, name: "Running", caloriesBurned: 300 },
  
    { id: 2, name: "Cycling", caloriesBurned: 200 },
  
    { id: 3, name: "Swimming", caloriesBurned: 400 },
  
  ];

  const songs = [

    { id: 1, title: "Song A", duration: 180, rating: 4.2 },
  
    { id: 2, title: "Song B", duration: 210, rating: 3.8 },
  
    { id: 3, title: "Song C", duration: 150, rating: 4.5 },
  
  ];
  const books = [

    { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction" },
  
    { id: 2, title: "1984", author: "George Orwell", genre: "Dystopian" },
  
    { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic" },
  
  ];
  
  
  const orders = [

    { id: 1, customer: "John Doe", totalAmount: 150, products: [{ id: 101, name: "Widget", quantity: 2 }, { id: 102, name: "Gadget", quantity: 1 }] },
  
    { id: 2, customer: "Alice Smith", totalAmount: 200, products: [{ id: 103, name: "Tool", quantity: 1 }, { id: 104, name: "Device", quantity: 3 }] },
  
    { id: 3, customer: "Bob Johnson", totalAmount: 100, products: [{ id: 105, name: "Accessory", quantity: 5 }] },
  
  ];
  const employees = [

    { id: 1, name: "Jane Doe", position: "Software Engineer", department: { name: "Engineering", location: "Building A" } },
  
    { id: 2, name: "Sam Smith", position: "Marketing Manager", department: { name: "Marketing", location: "Building B" } },
  
    { id: 3, name: "Mike Johnson", position: "HR Specialist", department: { name: "Human Resources", location: "Building C" } },
  
  ];

  return (
    <div>
     <Exercises exercises={exercises}/>
     <Songs songs={songs} rating={3.9}/>
     <Books books={books} title="The Great Gatsby" />
     <Songss songss={songss} title="Bohemian Rhapsody" />
     <Cities cities={cities} name="Paris" />
     <Products products={products} id={3} />
     <Students students={students} name="Charlie" />
     <Orders orders={orders} name="Alice Smith"/>
    <Employees employees={employees} id={1}/>
    <Store store={store}/>
    </div>   
  )
}

export default App;
