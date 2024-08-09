import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Display =() =>{
    const data = [
        {id:1,name:"John Doe", position:"Software Engineer" },
        {id:2,name:"Jane Smith", position:"Designer" },
        {id:3,name:"Bob Jhonson", position:"Project Manager" }      
    ]
    const dis = data.map(d => (
    <div key={d.id} className="card">
        <div className="card-body">
            <p className="card-text"><b>{d.name}</b></p>
            <p className="card-text">{d.position}</p>
            <Link to={`/employees/${d.id}`} className="btn btn-primary">View Details</Link>
        </div>
    </div>))
    return(
        <main className="container mb-4">
            <h1 className="my-4">List of Employees</h1>
            {dis}
        </main>
    )
}

const Employee =() =>{
    return(
        <>
           <Header/>
            <Display/>
           <Footer/> 
        </>
    )
}
export default Employee;