import {useState} from 'react'
const Food = () =>{
  const questions = [
    {
      question: "Which type of cuisine do you prefer?",
      options: {
        Asian: ["Chinese", "Japanese", "Indian"],
        European: ["Italian", "French", "Spanish"],
        American: ["Burgers", "Pizza", "BBQ"],
      },
    },
  ];
  const [cuisine,setCuisine] = useState("")
  const [dish,setDish] = useState([])
  const [dis,setDis] = useState(false)
  const displayCu = Object.keys(questions[0].options).map((c) => (<option value={c}>{c}</option>))
  const dishHandle = (event) =>{
      const value = event.target.value
      if(event.target.checked)
      {
        setDish((pval) => [...pval,value])
      }
      else
      {
        setDish((pval) => pval.filter(p => p!=value))
      }
  }
  return(
    <div>
      <h1>Food Survery App</h1>
   { dis === false ?  <><label>Select Your Cuisine: </label>
      <select onChange={(e) => setCuisine(e.target.value)}>
        <option>-- Select Your Cuisine --</option>
        {displayCu}
      </select>
      <br/>
      <br/>
      { cuisine &&
      <>
       <label>Select Your Prefered Cuisine</label>
       {questions[0].options[cuisine].map((c) => (<div>
        <input onChange={dishHandle} value={c} name='dish' type='checkbox' />{c}
       </div>))}
       <br/>
      </>}
      <button onClick={() => setDis(true)}>Submit</button></>:
      <>
        <h2>Thank You for Sharing Your preferences!</h2>
        <p>Cusine: {cuisine}</p>
        <p>Prefered Options: {dish.join(', ')}</p>
      </>}
    </div>
  )
}

const Feedback =() =>{
  const [val,setVal] = useState("")
  const [type,setType] = useState("")
  const [dis,setDis] = useState(false)
  return(
    <div>
      <h1>Feedback Form</h1>
      <label>Feedback Type </label>
      <select onChange={(e) => (setVal(""),setType(e.target.value))}>
        <option>-- Select Feedback Type --</option>
        <option value="Compliment">Compliment</option>
        <option value="Complaint">Complaint</option>
        <option value="Suggestion">Suggestion</option>
        <option value="Others">Others</option>
      </select>
      <br/>
      <br/>
      {type && 
            <>
              <label>Comments:</label>
              <textarea value={val} onChange={(e) => setVal(e.target.value)} rows={5} cols={30}/>
              <br/>    
              <br/>
            </>
      }
      <button onClick={() => setDis(true)}>Submit</button>
      {dis && <>
        <p>{type}</p>
        <p>This is a {type}</p>
      </>}
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Food/>
      <Feedback/>
    </div>
  );
}

export default App;
