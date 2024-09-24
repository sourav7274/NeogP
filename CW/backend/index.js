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

// const newHotel = {
//     name: "New Hotel",
//     category: "Mid-Range",
//     location: "123 Main Street, Frazer Town",
//     rating: 4.0,
//     reviews: [],
//     website: "https://hotel-example.com",
//     phoneNumber: "+1234567890",
//     checkInTime: "2:00 PM",
//     checkOutTime: "12:00 PM",
//     amenities: ["Laundry", "Room Service"],
//     priceRange: "$$$ (31-60)",
//     reservationsNeeded: true,
//     isParkingAvailable: true,
//     isWifiAvailable: true,
//     isPoolAvailable: false,
//     isSpaAvailable: false,
//     isRestaurantAvailable: true,
//     photos: ["https://example.com/hotel-photo1.jpg", "https://example.com/hotel-photo2.jpg"],
//   };

// async function createHotel(data){
//     try{
//         const hotel = new Hotel(data)
//         const saveData = await hotel.save()
//         console.log("Done",saveData)
//     } catch(error)
//     {
//         throw error
//     }
// }
// createHotel(newHotel)

// async function readMovie(movieTitle)
// {
//   try{
//     const movie = await Movie.findOne({title: movieTitle})
//     console.log(movie)
//   }catch(error){
//     throw error
//   }
// }

// readMovie("Bahubali: The Beginning")

// async function allMovies(){
//   try{
//     const allMovies = await Movie.find()
//     console.log(allMovies)
//   } catch(error)
//   {
//     throw error
//   }
// }

// allMovies()

// async function findByDirec(directorName)
// {
//   try{
//     const movie = await Movie.find({director: directorName})
//     console.log(movie)
//   } catch(error)
//   {
//     throw error
//   }
// }

// findByDirec("Karan Johar")

// const res1= {
//   name: "Somi",
//   cuisine: ["Greek"],
//   location: "11 Main Road, Gem",
//   rating: 4.3,
//   reviews: [],
//   website: "https://somi-example.com",
//   phoneNumber: "+1234997390",
//   openHours: "Tue-Sun: 11:00 AM - 10:00 PM",
//   priceRange: "$$ (11-30)",
//   reservationsNeeded: false,
//   isDeliveryAvailable: true,
//   menuUrl: "https://somi-example.com/menu",
//   photos: ["https://example.com/somi-photo1.jpg", "https://example.com/somi-photo2.jpg"],
// };

// const res2 = {
//   name: "Yo China",
//   cuisine: ["Chinese", "Italian"],
//   location: "MG Road, Bangalore",
//   rating: 3.9,
//   reviews: [],
//   website: "https://yo-example.com",
//   phoneNumber: "+1288997392",
//   openHours: "Tue-Sun: 10:00 AM - 11:00 PM",
//   priceRange: "$$$ (31-60)",
//   reservationsNeeded: true,
//   isDeliveryAvailable: false,
//   menuUrl: "https://yo-example.com/menu",
//   photos: ["https://example.com/yo-photo1.jpg", "https://example.com/yo-photo2.jpg", "https://example.com/yo-photo3.jpg"]
// };
// async function seedRes(data)
// {
//     try{
//       const res = new Restaurant(data)
//       const saveres = await res.save()
//       console.log("Seeded",saveres)
//     } catch(error)
//     {
//       throw error
//     }
// }

// seedRes(res2)

// async function readRes(name)
// {
//   try{
//     const allRes = await Restaurant.find({cuisine: name})
//     console.log(allRes)
//   } catch(error)
//   {
//     throw error
//   }
// }

// readRes("Italian")


const newHotel = {
  name: "Lake View",
  category: "Mid-Range",
  location: "124 Main Street, Anytown",
  rating: 3.2,
  reviews: [],
  website: "https://lake-view-example.com",
  phoneNumber: "+1234555890",
  checkInTime: "2:00 PM",
  checkOutTime: "12:00 PM",
  amenities: ["Laundry", "Boating"],
  priceRange: "$$$ (31-60)",
  reservationsNeeded: true,
  isParkingAvailable: false,
  isWifiAvailable: true,
  isPoolAvailable: false,
  isSpaAvailable: false,
  isRestaurantAvailable: false,
  photos: ["https://example.com/hotel1-photo1.jpg", "https://example.com/hotel1-photo2.jpg"],
};
const newHotel1 = {
  name: "Sunset Resort",
  category: "Resort",
  location: "12 Main Road, Anytown",
  rating: 4.0,
  reviews: [],
  website: "https://sunset-example.com",
  phoneNumber: "+1299655890",
  checkInTime: "2:00 PM",
  checkOutTime: "11:00 AM",
  amenities: ["Room Service", "Horse riding", "Boating", "Kids Play Area", "Bar"],
  priceRange: "$$$$ (61+)",
  reservationsNeeded: true,
  isParkingAvailable: true,
  isWifiAvailable: true,
  isPoolAvailable: true,
  isSpaAvailable: true,
  isRestaurantAvailable: true,
  photos: ["https://example.com/hotel2-photo1.jpg", "https://example.com/hotel2-photo2.jpg"],
};

async function seedData(data)
{
  try{
    const hotel = new Hotel(data)
    const seedHotel = await hotel.save()
    console.log("Seeded to DB",seedHotel)
  } catch(error)
  {
    throw error
  }
 }
// seedData(newHotel)
//  seedData(newHotel1)

async function readHotel(hName)
{
  try{
    const data = await Hotel.find({phoneNumber: hName})
    console.log(data)
  } catch(error)  
  {
    throw error
  }
}

readHotel("+1299655890")