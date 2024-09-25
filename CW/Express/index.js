const express = require('express')
require('dotenv').config()
const app = express();

app.get('/',(req,res) => {
    res.send("Hello from Express JS")
})

app.get('/signin',(req,res) =>{
    res.send("This is Sign in Page")
})

app.get('/booking',(req,res) => {
    res.send("Book your tickets")
})

app.get('/clothing/kids',(req,res) =>{
    res.send("This is the kids wear page")
})

app.get('/blog',(req,res) => {
    res.send("This is the blog page")
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
    console.log("Server is running on Port",PORT)
})

