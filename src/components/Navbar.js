import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
        <nav>
            <Link to="/"><img rel src="../../energy-information-high-resolution-logo-transparent.png" alt="Sustainable Energy Logo" className="logo"/></Link>
            <br></br>
            <Link to="/"><h4>Home</h4></Link>
            <Link to="/solar"><h4>Solar</h4></Link>
            <Link to="/wind"><h4>Wind</h4></Link>
            <Link to="/geothermal"><h4>Geothermal</h4></Link>
            <Link to="/fusion"><h4>Fusion</h4></Link>
            <Link to="/contact"><h4>Contact</h4></Link>
        </nav>
        </div>
    )
}

export default Navbar;