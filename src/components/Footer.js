import { Link } from "react-router-dom";

function Footer() {
    return (
        <div>
            <nav>
            <h4>© EnergyInformation.net 2025</h4>
            <br></br>
            <Link to="/contact"><h4>Contact Us</h4></Link>
            </nav>
        </div>
    )
}

export default Footer;