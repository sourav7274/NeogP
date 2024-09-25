const express = require('express')
require('dotenv').config()
const app = express();

app.use(express.json())

const cars = [
    {id:1,make:"Toyota",model:"Camry",year:2022}
]

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

app.get('/cars',(req,res) => {
    res.send(cars)
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
    console.log("Server is running on Port",PORT)
})

