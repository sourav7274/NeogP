
import './App.css';

const ReverseArr = () =>{
    const reverse = (a) =>{
      return a.reverse()
    }
    return (
      <div>
        <h1>Reverse Array</h1>
        <p>Reversed Array: {reverse([1,2,3,4,5]).join(',')}</p>
      </div>
    )
}

const CalcBmi = () =>{
  const bmi = (a,b) => a/(b*b)
  return (
    <div>
      <h1>BMI Calculator</h1>
      <p>BMI: {bmi(70,1.75)} </p>
    </div>
  )
}

const GenQ = () =>{
  const quotes = [

    "The only way to do great work is to love what you do. - Steve Jobs",

    "Innovation distinguishes between a leader and a follower. - Steve Jobs",

    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",

    "Stay hungry, stay foolish. - Steve Jobs",

    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",

  ];
  const display = (n) =>{
    console.log(n)
    return quotes[n]
  }
  const random = Math.floor(Math.random()*quotes.length)
  return(
    <div>
      <h1>Random Quote</h1>
      <p>{display(random)}</p>
    </div>
  )
}

const GradeAnalyse = () =>{
  let remarks = ""
  let grade=""
  const Calc = (n) =>{
    if(n>89)
      {
        grade = "A"
        remarks = "Excellent work!"
      }
    else if(n>79)
      {
        grade = "B"
        remarks = "Good job!"
      }
      else if(n>69)
        {
          grade = "C"
          remarks = "Not bad, keep it up!"
        }
      else if(n>59)
        {
          grade = "D"
          remarks = "You passed, but aim higher next time."
        }
      else
        {
          grade = "E"
         remarks = "Sorry, you didn't pass. Keep working hard!"
        }
      return [grade,remarks]
  }
  return(
    <div>
      <h1>Grade Analyser</h1>
      <p>Score: 85</p>
      <p>Grade: {Calc(85)[0]}</p>
      <p>{Calc(85)[1]}</p>
    </div>
  )
}

const TempFeed = () =>{
  const result = (n) =>{
    if(n<0)
    {
      return "Brr, it's freezing!"
    }
    else if(n<10)
      {
        return "It's quite cold, bundle up!"
      }
    else if(n<20)
    {
      return "The weather is cool and comfortable."
    }
    else if(n<30)
    {
      return "It's a warm day!"
    }
    else
    {
      return "It's hot outside, stay cool!"
    }
  }  
  return(
    <div>
      <h1>Temperaure FeedBack</h1>
      <p>Current Temperature: 25 Degree Celcius</p>
      <p>{result(25)}</p>
    </div>
  )
}

function App() {
  return (
    <div>
     <ReverseArr />
     <CalcBmi />
     <GenQ />
     <GradeAnalyse />
     <TempFeed />
    </div>
  );
}

export default App;
