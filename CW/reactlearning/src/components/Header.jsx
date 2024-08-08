import {NavLink} from 'react-router-dom'
const Header =() =>{
    return(
        <header className="bg-dark text-light ">
            <div className="container py-4">
                <h1 className='pb-3'>Virat Kohli</h1>
                <nav>
                    <ul className="nav">
                        <li className="nav-item"><NavLink to="/"  className="nav-link">Overview</NavLink></li>
                        <li className="nav-item"><NavLink to="/bio"  className="nav-link">Biography</NavLink></li>
                        <li className="nav-item"><NavLink  to="/records" className="nav-link">Records</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;