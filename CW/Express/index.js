const express = require('express')
require('dotenv').config()
const app = express();

app.use(express.json())

const cars = [
    {id:1,make:"Toyota",model:"Camry",year:2022}
]
const books = [

    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
  
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }
  
  ];
  const todos = [

    { id: 1, title: 'Water the plants', day: 'Saturday' },
  
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

app.get('/todos',(req,res) =>{
    res.send(todos)
})

app.get('/books',(req,res) =>{
    res.send(books)
})
app.get('/cars',(req,res) => {
    res.send(cars)
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
    console.log("Server is running on Port",PORT)
})

