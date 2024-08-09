import Header from '../components/Header'
import { useParams } from 'react-router-dom'

const Display = () =>{
  const empID = useParams()
  const data = [
    {id:1,name:"John Doe", position:"Software Engineer",department:"IT" },
    {id:2,name:"Jane Smith", position:"Designer",department:"Design" },
    {id:3,name:"Bob Jhonson", position:"Project Manager",department:"Management" }      
    ]
    const val = data.find(pro => pro.id == empID.empid)
 
    return(<div className='container py-4'>
      <h1 className='mb-4'>{val.name}</h1>
      <ul className='list-group'>
        <li className='list-group-item'><b>Name</b>:{val.name}</li>
        <li className='list-group-item'><b>Designation</b>:{val.position}</li>
        <li className='list-group-item'><b>Department</b>:{val.department}</li>
      </ul>
    </div>)   

}

const EmployeeDetails = () =>{
    return(<>
        <Header/>
          <Display/>
    </>)
}

export default EmployeeDetails;