import {NavLink} from 'react-router-dom'
const Header =() =>{
    return(
        <header>
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container container-fluid">
                <a class="navbar-brand" href="/">Compnay Logo</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                 <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <NavLink className="nav-link active"  to="/">Home</NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink className="nav-link" to="/employees">Employee</NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink className="nav-link" to="/report">Report</NavLink>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </header>
    )
}

export default Header;