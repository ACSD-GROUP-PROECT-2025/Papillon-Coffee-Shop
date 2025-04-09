import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
        <nav>
            <Link to="/"><img rel src="../../Papillon_Cafe_Logo.png" alt="Papillon Cafe Logo" className="logo"/></Link>
            <br></br>
            <Link to="/"><h4>Home</h4></Link>
            <Link to="/about"><h4>About</h4></Link>
            <Link to="/coffee"><h4>Our Coffee</h4></Link>
            <Link to="/menu"><h4>Menu</h4></Link>
            <Link to="/findus"><h4>Find us</h4></Link>
            <Link to="/contact"><h4>Contact</h4></Link>
        </nav>
        </div>
    )
}

export default Navbar;