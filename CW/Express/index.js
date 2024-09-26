const express = require('express')
require('dotenv').config()
const app = express();

app.use(express.json())

const cars = [
    { id: 1, make: "Toyota", model: "Camry", year: 2022 },
    { id: 2, make: "Honda", model: "Civic", year: 2021 },
    { id: 3, make: "Ford", model: "Mustang", year: 2022 },
    { id: 4, make: "Chevrolet", model: "Corvette", year: 2023 },
    { id: 5, make: "Tesla", model: "Model 3", year: 2021 },
    { id: 6, make: "Nissan", model: "Altima", year: 2022 },
    { id: 7, make: "BMW", model: "M3", year: 2023 }, 
    { id: 8, make: "Mercedes-Benz", model: "C-Class", year: 2021 },
    { id: 9, make: "Audi", model: "A4", year: 2022 },
    { id: 10, make: "Lexus", model: "RX", year: 2023 },
    { id: 11, make: "Hyundai", model: "Tucson", year: 2021 },
    { id: 12, make: "Kia", model: "Seltos", year: 2022 },
    { id: 13, make: "Mazda", model: "CX-5", year: 2023 },
    { id: 14, make: "Subaru", model: "Outback", year: 2021 },
    { id: 15, make: "Volkswagen", model: "Golf", year: 2022 }
  ];
  
  const books = [

    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
  
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
  
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 }
  
  ];
  const todos = [

    { id: 1, title: 'Water the plants', day: 'Saturday' },
  
    { id: 2, title: 'Go for a walk', day: 'Sunday' }
  
  ];
  const movies = [

    { id: 1, title: 'Inception', director: 'Christopher Nolan', year: 2010 },
  
    { id: 2, title: 'The Godfather', director: 'Francis Ford Coppola', year: 1972 },
  
    { id: 3, title: 'The Shawshank Redemption', director: 'Frank Darabont', year: 1994 }
  
  ];
  const items = [

    { id: 1, itemName: 'Spoon', color: 'Silver', quantity: 8},
  
   { id: 2, itemName: 'Fork', color: 'Silver', quantity: 8 },
  
   { id: 3, itemName: 'Plate', color: 'Off-White', quantity: 6 }
  
  ];
app.get('/',(req,res) => {
    res.send("Home page")
})

app.post('/cars',(req,res) => {
    const newCar = req.body

    if(!newCar.make || !newCar.model || !newCar.year)
    {
        res.status(400).json({error:"Make model and year are needed"})
    } 
    else
    {
        cars.push(newCar)
        res.status(201).json({message: "Car added successfully",car:newCar})
    }
})

app.post('/books',(req,res) =>{
    const newBook =  req.body
    if(!newBook.title || !newBook.author || !newBook.year)
    {
        res.status(400).json({error: "Title author and year are needed"})
    }
    else
    {
        books.push(newBook)
        res.status(200).json({message:"Book Added Successfully",book:newBook})
    }
})

app.delete('/movies/:id',(req,res) =>{
    const movieID = req.params.id
    const index = movies.findIndex(movie => movie.id == movieID)
    if(index === -1)
    {
        res.status(404).json({error:"Not Found"})
    }
    else
    {
        movies.splice(index,1)
        res.status(200).json({message:"Delete Success"})
    }
})

app.delete('/items/:id',(req,res) =>{
    const itemID = req.params.id
    const index = movies.findIndex(item => item.id == itemID)
    if(index === -1)
    {
        res.status(404).json({error:"Not Found"})
    }
    else
    {
        items.splice(index,1)
        res.status(200).json({message:"Delete Success"})
    }
})

app.post('/todos',(req,res)=>{
    const newTodo = req.body
    if(!newTodo.title || !newTodo.day)
    {
        res.status(400).json({error:"Add details"})
    }
    else
    {
        todos.push(newTodo)
        res.status(200).json({message:"Addedd Successfully"})
    }
})


app.post('/movies',(req,res)=>{
    const newMovie = req.body

    if(!newMovie.title || !newMovie.director || !newMovie.year)
    {
        res.status(400).json({error:"Add Details"})
    }
    else
    {
        movies.push(newMovie)
        res.status(200).json({message:"Added Successfully"})
    }
})
app.get('/movies',(req,res)=>{
    res.send(movies)
})

app.post('/items',(req,res) =>{
    const newItem = req.body
    if(!newItem.itemName|| !newItem.color || !newItem.quantity)
    {
        res.status(400).json({error:"Add Details"})
    }
    else
    {
        items.push(newItem)
        res.status(200).json({message:"Addedd Successfully"})
    }
})

app.get('/items',(req,res) =>{
    res.send(items)
})


app.get('/todos',(req,res) =>{
    res.send(todos)
})

app.get('/books',(req,res) =>{
    res.send(books)
})
app.get('/cars',(req,res) => {
    res.send(cars)
})


app.delete('/cars/:id',(req,res) => {
    const carId = req.params.id
    const index = cars.findIndex(car => car.id == carId)
    if(index === -1)
    {
        res.status(404).json({error:"Car not Found"})
    }
    else
    {
        cars.splice(index,1)
        res.status(200).json({message:"Delteed Successulyy"})
    }
})

app.delete('/books/:id',(req,res) =>{
    const bookID = req.params.id
    const index = books.findIndex(book => book.id == bookID)
    if(index === -1)
    {
        res.status(404).json({error:"Not Found"})
    }
    else
    {
        books.splice(index,1)
        res.status(200).json({message:"Delted Success"})
    }
}) 

app.delete('/todos/:id',(req,res) =>{
    const totdoID = req.params.id
    const index = todos.findIndex(todo => todo.id == totdoID)
    if(index === -1)
    {
        res.status(404).json({error:"Not Found"})
    }
    else
    {
        todos.splice(index,1)
        res.status(200).json({message:"Delete Success"})
    }
})


app.post("/cars/:id",(req,res) =>{
    const id = req.params.id
    const updateData = req.body
    const carToUpdate = cars.find(car => car.id == id)

    if(!carToUpdate)
    {
        res.status(404).json({error:"Not FOund"})
    }
    else
    {
        if(!updateData.model || !updateData.make || !updateData.year)
        {
            res.status(400).json({error:"Make Model Year are required"})
        }
        else
        {
            Object.assign(carToUpdate,updateData)
            res.status(200).json({message:"Updated ",car: updateData})
        }
    }

})

app.post('/books/:id',(req,res) =>{
    const id = req.params.id
    const updateData = req.body
    const oldData  = books.find(book => book.id == id)
    if(oldData)
    {
        if(!updateData.title  || !updateData.author || !updateData.year )
            {
                res.status(400).json({error:"Improper Updata"})
            } 
        else
        {
            Object.assign(oldData,updateData)
            res.status(200).json({message:"Update Successfully"})
        }
    }
    else
    {
        res.status(404).json({error:"Data not Found"})
    }
})

app.post('/todos/:id',(req,res) =>{
    const id = req.params.id
    const updateData = req.body
    const oldData = todos.find(todo => todo.id == id)

    if(oldData)
    {
        if(!updateData.title || !updateData.day)
        {
            res.status(400).json({error:"Improper Request"})
        }
        else
        {
            Object.assign(oldData,updateData)
            res.status(200).json({message:"Updated Successfullt", todos: oldData})
        }
    }
    else
    {
        res.status(404).jsonp({error:"Not FOund"})
    }
})

app.post('/movies/:id',(req,res) =>{
    const id = req.params.id
    const updateData = req.body
    const oldData = movies.find(todo => todo.id == id)

    if(oldData)
    {
        if(!updateData.title || !updateData.year)
        {
            res.status(400).json({error:"Improper Request"})
        }
        else
        {
            Object.assign(oldData,updateData)
            res.status(200).json({message:"Updated Successfullt", todos: oldData})
        }
    }
    else
    {
        res.status(404).jsonp({error:"Not FOund"})
    }
})

app.post('/items/:id',(req,res) =>{
    const id = req.params.id
    const updateData = req.body
    const oldData = items.find(todo => todo.id == id)

    if(oldData)
    {
        if(!updateData.itemName || !updateData.color || !updateData.quantity)
        {
            res.status(400).json({error:"Improper Request"})
        }
        else
        {
            Object.assign(oldData,updateData)
            res.status(200).json({message:"Updated Successfullt", todos: oldData})
        }
    }
    else
    {
        res.status(404).jsonp({error:"Not FOund"})
    }
})

const albums = 
  [

    { id: 1, title: 'Abbey Road', artist: 'The Beatles', year: 1969 },
  
    { id: 2, title: 'The Dark Side of the Moon', artist: 'Pink Floyd', year: 1973 },
  
    { id: 3, title: 'Thriller', artist: 'Michael Jackson', year: 1982 }
  
  ];

  app.get('/albums',(req,res) =>{
        res.send(albums)
  })

  app.post('/albums',(req,res) =>{
    const data = req.body

    if(data.title || data.artist || data.year)
    {
        albums.push(data)
        res.status(200).json({message:"Data Added"})
    }
    else
    {
        res.status(400).json({error:"Imporper Details"})
    }   
  })
  app.delete('/albums/:id', (req,res) => {
        const id = req.params.id
        const index = albums.findIndex(al => al.id == id)

        if(index != -1)
        {
            albums.splice(index,1)
            res.status(200).json({message:"Data Deleted"})
        }
        else
        {
            res.status(404).json({error:"Data not Found"})
        }
  })

  app.post('/albums/:id',(req,res) =>{
    const id = req.params.id
    const updateData = req.body

    const oldData = albums.find(al => al.id == id)

    if(oldData)
    {
        if(updateData.title || updateData.year)
        {
            Object.assign(oldData,updateData)
            res.status(200).json({message:"Data Updated"})
        }
        else
        {
            res.status(400).json({error:"Improper Data"})
        }
    }
    else
    {
        res.status(400).json({error:"Data not Found"})
    }
  })

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
    console.log("Server is running on Port",PORT)
})

