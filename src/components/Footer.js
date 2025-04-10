import { Link } from "react-router-dom";

function Footer() {
    return (
        <div>
            <nav>
            <h4>192 Parnell Street, D01 XW18</h4>
            <br></br>
            <Link to="/contact"><h4>Contact Us</h4></Link>
            <Link to="https://www.instagram.com/papilloncafedublin"><h4>Instragram</h4></Link>
            </nav>
        </div>
    )
}

export default Footer;