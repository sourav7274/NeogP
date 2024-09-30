const {initialDatabase} = require('./db/db.connect')
const express = require('express')
const app = express()

app.use(express.json())

const fs = require("fs")
const Movie = require('./models/movie.models')
const Profile = require('./models/twitterProfile.models')
const Book = require('./models/hw/book.model')
const Car = require('./models/hw/cars.models')
const { title } = require('process')
const Restaurant = require('./models/hw/latres.models')

const Hotel = require('./models/hw/hotel.models')
const { error } = require('console')
initialDatabase()

const jsonData = fs.readFileSync('movies.json','utf-8')
const moviesData = JSON.parse(jsonData)

const jsonProfileData = fs.readFileSync('profiles.json','utf-8')
const profileData = JSON.parse(jsonProfileData)

const jsonBookData = fs.readFileSync('books.json','utf-8')
const bookData  = JSON.parse(jsonBookData)

const jsonCarData = fs.readFileSync('cars.json','utf-8')
const carData = JSON.parse(jsonCarData)

async function createRestaurant(newRestaurant){
    try{
        const restaurant = new Restaurant(newRestaurant)
        const saveRes = await restaurant.save()
        return saveRes
    } catch(error)
    {
        throw error
    }
}

app.post('/restaurants',async (req,res) =>{
  try{  
    const saveRes = await createRestaurant(req.body)
    res.status(201).json({message:"Data added"})
  } catch{
    res.status(500).json({error:"Unable to send data"})
  }
})

const newMovie = {
    title: "New Movie",
    releaseYear: 195,
    genre: ["Romance"],
    director: "Aditya Somnya",
    actors: ["Shah Rukh", "Kajol"],
    language: "English",
    country: "India",
    rating: 6.8,
    plot: "A young man.",
    awards: "Multiple  Awards",
    posterUrl: "https://example.com/poster.jpg",
    trailerUrl: "https://example.com/trailer.mp4"
  }

  async function createMovie(newMovie)
  {
    try{
        const movie = new Movie(newMovie)
        const saveMovie = await movie.save()
        return saveMovie
    }catch(error){
        throw error
    }
  }

  app.post('/movies',async (req,res) =>{
    try{
     const saveMovie = await createMovie(req.body)
      res.status(201).json({message:"Movie added "})
    } catch(error)
    {
      res.status(500).json({error:"failed to add movie"})
    }
  })

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

async function readMovie(movieTitle)
{
  try{
    const movie = await Movie.findOne({title: movieTitle})
    return movie
  }catch(error){
    throw error
  }
}

async function readAllMovies()
{
  try{
    const movie = await Movie.find()
    return movie
  }
  catch(error){
      throw error
  }
}


async function findByDirec(directorName)
{
  try{
    const movie = await Movie.find({director: directorName})
    return movie
  } catch(error)
  {
    throw error
  }
}



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

async function readRes(name)
{
  try{
    const allRes = await Restaurant.find({cuisine: name})
    console.log(allRes)
    return allRes
  } catch(error)
  {
    throw error
  }
}

async function readAllRes()
{
  try{
    const res = await Restaurant.find()
    console.log(res)
    return res
  } catch(error)
  {
    throw error
  }
}

async function readResPhone(number)
{
  try{
    const res = await Restaurant.find({phoneNumber:number})
    console.log(res)
    return res
  }
  catch{
    throw error
  }
}

async function readResCuisisne(name)
{
  try{
    const res = await Restaurant.find({cuisine:name})
    console.log(res)
    return res
  } catch(error)
  {
    throw error
  }
}

async function readResLocation(name)
{
  try{
    const res = await Restaurant.find({location:name})
    console.log(res)
    return res
  } catch(error)
  {
      throw error
  }
}

// const newHotel1 = {
//   name: "Sunset Resort",
//   category: "Resort",
//   location: "12 Main Road, Anytown",
//   rating: 4.0,
//   reviews: [],
//   website: "https://sunset-example.com",
//   phoneNumber: "+1299655890",
//   checkInTime: "2:00 PM",
//   checkOutTime: "11:00 AM",
//   amenities: ["Room Service", "Horse riding", "Boating", "Kids Play Area", "Bar"],
//   priceRange: "$$$$ (61+)",
//   reservationsNeeded: true,
//   isParkingAvailable: true,
//   isWifiAvailable: true,
//   isPoolAvailable: true,
//   isSpaAvailable: true,
//   isRestaurantAvailable: true,
//   photos: ["https://example.com/hotel2-photo1.jpg", "https://example.com/hotel2-photo2.jpg"],
// };

// async function seedData(data)
// {
//   try{
//     const hotel = new Hotel(data)
//     const seedHotel = await hotel.save()
//     console.log("Seeded to DB",seedHotel)
//   } catch(error)
//   {
//     throw error
//   }
//  }
//  seedData(newHotel1)

async function readHotel(hName)
{
  try{
    const data = await Hotel.find({phoneNumber: hName})
    console.log(data)
    return data
  } catch(error)  
  {
    throw error
  }
}

async function readAllHotel()
{
  try{
    const data = await Hotel.find()
    console.log(data)
    return data
  } catch(error)  
  {
    throw error
  }
}

async function readHotelPhone(hName)
{
  try{
    const data = await Hotel.find({phoneNumber: hName})
    console.log(data)
    return data
  } catch(error)  
  {
    throw error
  }
}
async function readHotelRating(hNum)
{
  try{
    const data = await Hotel.find({rating: hNum})
    console.log(data)
    return data
  } catch(error)  
  {
    throw error
  }
}
async function readHotelCategory(hName)
{
  try{
    const data = await Hotel.find({category: hName})
    console.log(data)
    return data
  } catch(error)  
  {
    throw error
  }
}


// readHotel("+1299655890")

// async function updateMovie(id,data)
// {
//   try{
//       const updatedMovie = await Movie.findByIdAndUpdate(id,data,{new:true})
//       console.log(updatedMovie)
//   } catch(error)
//   {
//     throw error
//   }
// }

// updateMovie('66ecf1a71555fda9075b95ae',{releaseYear: 3002})

// async function updateMoviewithanything(thing,data)
// {
//   try{
//       const updatedMovie = await Movie.findOneAndUpdate({title: thing},data,{new: true})
//       console.log(updatedMovie)
//   } catch(error)
//   {
//     throw error
//   }
// }

// updateMoviewithanything('Dilwale Dulhania Le Jayenge',{releaseYear: 2001})


// async function updateRestaurant(thing,data)
// {
//   try{
//     const updateRes = await Hotel.findOneAndUpdate({phoneNumber:thing},data,{new:true})
//     console.log(updateRes)
//   } catch(error)
//   {
//     throw error
//   }
// }
// //wont work becuase mutiple data was sent while seeding
// updateRestaurant('+1299655890',{phoneNumber:"+1997687392"})

// async function deleteMovie(id)
// {
//   try{
//     const delteMovie = await  Movie.findOneAndDelete({title:id})
//   } catch(error)
//   {
//     throw error
//   }
// }

// deleteMovie('Kabhi Khushi Kabhie Gham')

// async function delteRes(thing)
// {
//   try{
//     const delteres = await Hotel.findByIdAndDelete(thing)
//     console.log("Deleted Succesfully")
//   } catch(error)
//   {
//     throw error
//   }
// }
// delteRes('+1299655890')

// const carDatas = {
//   brand: "Ford",
//   model: "Mustang",
//   year: 2019,
//   bodyStyle: "Convertible",
//   fuelType: "Gasoline",
//   transmission: "Automatic",
//   engine: "5.0L V8",
//   mileage: 25000,
//   color: "Red",
//   price: 3500000,
//   condition: "Used",
//   description: "Exciting Ford Mustang convertible with powerful V8 engine.",
//   photos: [
//     "https://example.com/mustang-photo1.jpg",
//     "https://example.com/mustang-photo2.jpg",
//     "https://example.com/mustang-photo3.jpg"
//   ]
// };
// const carDatas1 = {
//   brand: "Honda",
//   model: "Civic",
//   year: 2018,
//   bodyStyle: "Coupe",
//   fuelType: "Gasoline",
//   transmission: "Manual",
//   engine: "1.5L Turbocharged Inline-4",
//   mileage: 40000,
//   color: "Black",
//   price: 1800000,
//   condition: "Used",
//   description: "Sporty Civic coupe with low mileage and manual transmission.",
//   photos: [
//     "https://example.com/civic-photo1.jpg",
//     "https://example.com/civic-photo2.jpg",
//     "https://example.com/civic-photo3.jpg"
//   ]
// };

// async function seedCar(data)
// {
//   try{
//     const carData = new Car(data)
//     const seedCar = await carData.save()
//     console.log("Saved to DB")
//   } catch(error)
//   {
//     throw error
//   }
// }

// // seedCar(carDatas)
// // seedCar(carDatas1)

// async function readCars(name)
// {
//   try{
//     const carDetails = await Car.findOneAndDelete({bodyStyle:name})
//     console.log("Deleted Successfully")
//   } catch(error)
//   {
//     throw error
//   }
// }

// readCars("Coupe")

app.get('/movies/:title',async (req,res) =>{
  try{
      const movie = await readMovie(req.params.title)
      if(movie)
      {
        res.json(movie)
      }
      else{
        res.status(404).json({error:"Movie Not Found"})
      }
  }
  catch(error)
  {
    res.status(500).json({error:"Failed to fetch movie"})
  }
})

app.get('/allMovies', async (req,res) =>{
  try{
    const movies = await readAllMovies()
    if(movies)
    {
      res.json(movies)
    }
    else
    {
      res.status(404).json({error:"Not Found"})
    }
  }
  catch{
    res.status(500).json({error:"Failed to fetch movie"})
  }
})

app.get('/movies/director/:directorName', async (req,res) =>{
  try{
    const movie = await findByDirec(req.params.directorName)
    if(movie)
    {
      res.json(movie)
    }
    else
    {
      res.status(404).json({error:"Movie not Found"})
    }
  } catch{
    res.status(500).json({error:"Unable to fetch"})
  }
})


app.get('/restaurants',async (req,res) =>{
  try{  
    const restaurant = await readAllRes()
    if(restaurant)
    {
      res.json(restaurant)
    }
    else
    {
      res.status(404).json({error:"Not found"})
    }
  } catch(error){
    res.status(500).json({error:"Unable to fetch",message: error.message})
  }
})

app.get('/restaurants/:resName',async (req,res) =>{
  try{  
    const restaurant = await readRes(req.params.resName)
    if(restaurant)
    {
      res.json(restaurant)
    }
    else
    {
      res.status(404).json({error:"Not found"})
    }
  } catch{
    res.status(500).json({error:"Unable to fetch"})
  }
})

app.get('/restaurants/directory/:phoneNumber',async (req,res) =>{
  try{
    const restaurant = await readResPhone(req.params.phoneNumber)
    if(restaurant)
    {
      res.json(restaurant)
    }
    else
    {
      res.status(404).json({error:"Not Found"})
    }
  } catch{
    res.status(500).json({error:"Unable to Fetch"})
  }
})
app.get('/restaurants/cuisine/:cuisineName',async (req,res) =>{
  try{
    const restaurant = await readResCuisisne(req.params.cuisineName)
    if(restaurant)
    {
      res.json(restaurant)
    }
    else
    {
      res.status(404).json({error:"Not Found"})
    }
  } catch{
    res.status(500).json({error:"Unable to Fetch"})
  }
})
app.get('/restaurants/location/:restaurantLocation',async (req,res) =>{
  try{
    const restaurant = await readResLocation(req.params.restaurantLocation)
    if(restaurant)
    {
      res.json(restaurant)
    }
    else
    {
      res.status(404).json({error:"Not Found"})
    }
  } catch{
    res.status(500).json({error:"Unable to Fetch"})
  }
})

app.get('/hotels',async (req,res) =>{
  try{
    const hotel = await readAllHotel()
    if(hotel)
    {
        res.json(hotel)
    }
    else
    {
      res.status(404).json({error:"Not Found"})
    }
  } catch{
    res.status(500).json({error:"Unable to fetch"})
  }
})

app.get('/hotels/:hotelName',async (req,res) =>{
  try{
    const hotel = await readHotel(req.params.hotelName)
    if(hotel)
    {
        res.json(hotel)
    }
    else
    {
      res.status(404).json({error:"Not Found"})
    }
  } catch{
    res.status(500).json({error:"Unable to fetch"})
  }
})

app.get('/hotels/directory/:phoneNumber',async (req,res) =>{
  try{
    const hotel = await readHotelPhone(req.params.phoneNumber)
    if(hotel)
    {
        res.json(hotel)
    }
    else
    {
      res.status(404).json({error:"Not Found"})
    }
  } catch{
    res.status(500).json({error:"Unable to fetch"})
  }
})
app.get('/hotels/rating/:hotelRating',async (req,res) =>{
  try{
    const hotel = await readHotelRating(req.params.hotelRating)
    if(hotel)
    {
        res.json(hotel)
    }
    else
    {
      res.status(404).json({error:"Not Found"})
    }
  } catch{
    res.status(500).json({error:"Unable to fetch"})
  }
})
app.get('/hotels/category/:hotelCategory',async (req,res) =>{
  try{
    const hotel = await readHotelCategory(req.params.hotelCategory)
    if(hotel)
    {
        res.json(hotel)
    }
    else
    {
      res.status(404).json({error:"Not Found"})
    }
  } catch{
    res.status(500).json({error:"Unable to fetch"})
  }
})


const PORT = 3000
app.listen(PORT,() =>{
  console.log(`Server is listening on ${PORT}`)
})