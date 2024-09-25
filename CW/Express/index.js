const express = require('express')
require('dotenv').config()
const app = express();

app.get('/',(req,res) => {
    res.send("Hello Express JS")
})

app.get('/products',(req,res) =>{
    res.send("Browse on our products here")
})

app.get('/services',(req,res) => {
    res.send("EXplore our services")
})

app.get('/faq',(req,res) =>{
    res.send("Frequently asked questions")
})

app.get('/gallery',(req,res) => {
    res.send("View our gallery")
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
    console.log("Server is running on Port",PORT)
})

