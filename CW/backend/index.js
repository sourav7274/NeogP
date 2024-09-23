const {initialDatabase} = require('./db/db.connect')

const fs = require("fs")
const Movie = require('./models/movie.models')
const Profile = require('./models/twitterProfile.models')
const Book = require('./models/hw/book.model')
const Car = require('./models/hw/cars.models')
const { title } = require('process')
const Restaurant = require('./models/hw/latres.models')

const Hotel = require('./models/hw/hotel.models')
initialDatabase()

const jsonData = fs.readFileSync('movies.json','utf-8')
const moviesData = JSON.parse(jsonData)

const jsonProfileData = fs.readFileSync('profiles.json','utf-8')
const profileData = JSON.parse(jsonProfileData)

const jsonBookData = fs.readFileSync('books.json','utf-8')
const bookData  = JSON.parse(jsonBookData)

const jsonCarData = fs.readFileSync('cars.json','utf-8')
const carData = JSON.parse(jsonCarData)

const newRestaurant = {
    name: "Cha Cha",
    cuisine: ["Spanish"],
    location: "123 Main Street, Anytown",
    rating: 4.0,
    reviews: [],
    website: "https://example.com",
    phoneNumber: "+1234567890",
    openHours: "Mon-Sun: 11:00 AM - 10:00 PM",
    priceRange: "$$ (11-30)",
    reservationsNeeded: true,
    isDeliveryAvailable: true,
    menuUrl: "https://example.com/menu",
    photos: ["https://example.com/photo1.jpg", "https://example.com/photo2.jpg"],
  };

// async function createRestaurant(newRestaurant){
//     try{
//         const restaurant = new Restaurant(newRestaurant)
//         const saveRes = await restaurant.save()
//         console.log("New Restaurant Data",saveRes)
//     } catch(error)
//     {
//         throw error
//     }
// }

// createRestaurant(newRestaurant)

// const newMovie = {
//     title: "New Movie",
//     releaseYear: 195,
//     genre: ["Romance"],
//     director: "Aditya Somnya",
//     actors: ["Shah Rukh", "Kajol"],
//     language: "English",
//     country: "India",
//     rating: 6.8,
//     plot: "A young man.",
//     awards: "Multiple  Awards",
//     posterUrl: "https://example.com/poster.jpg",
//     trailerUrl: "https://example.com/trailer.mp4"
//   }

//   async function createMovie(newMovie)
//   {
//     try{
//         const movie = new Movie(newMovie)
//         const saveMovie = await movie.save()
//         console.log("New movie Data", saveMovie)
//     }catch(error){
//         throw error
//     }
//   }

//   createMovie(newMovie)

const newHotel = {
    name: "New Hotel",
    category: "Mid-Range",
    location: "123 Main Street, Frazer Town",
    rating: 4.0,
    reviews: [],
    website: "https://hotel-example.com",
    phoneNumber: "+1234567890",
    checkInTime: "2:00 PM",
    checkOutTime: "12:00 PM",
    amenities: ["Laundry", "Room Service"],
    priceRange: "$$$ (31-60)",
    reservationsNeeded: true,
    isParkingAvailable: true,
    isWifiAvailable: true,
    isPoolAvailable: false,
    isSpaAvailable: false,
    isRestaurantAvailable: true,
    photos: ["https://example.com/hotel-photo1.jpg", "https://example.com/hotel-photo2.jpg"],
  };

async function createHotel(data){
    try{
        const hotel = new Hotel(data)
        const saveData = await hotel.save()
        console.log("Done",saveData)
    } catch(error)
    {
        throw error
    }
}
createHotel(newHotel)