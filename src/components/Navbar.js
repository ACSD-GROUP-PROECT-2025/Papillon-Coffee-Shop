import { NavLink } from "react-router-dom"; // Change from Link to NavLink

function Navbar() {
    return (
        <div className="navbar-container">
            <nav>
                
                <div className="nav-links"><NavLink to="/" end>
                    <img src="../../Papillon_Cafe_Logo.png" alt="Papillon Cafe Logo" className="logo"/>
                </NavLink>
                    <NavLink to="/" end><h4>Home</h4></NavLink>
                    <NavLink to="/about"><h4>About</h4></NavLink>
                    <NavLink to="/coffee"><h4>Our Coffee</h4></NavLink>
                    <NavLink to="/menu"><h4>Menu</h4></NavLink>
                    <NavLink to="/findus"><h4>Find us</h4></NavLink>
                    <NavLink to="/contact"><h4>Contact</h4></NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;