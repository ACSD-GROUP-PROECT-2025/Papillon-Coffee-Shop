import { Link } from "react-router-dom";

function Footer() {
    return (
      <footer className="site-footer">
        <div className="footer-row">
          <div className="footer-item">
            <h4>192 Parnell Street, D01 XW18</h4>
          </div>
          <div className="footer-item">
            <Link to="/contact"><h4>Contact Us</h4></Link>
            <Link to="/"><h4>Privacy Policy</h4></Link>
          </div>
          <div className="footer-item">
            <Link to="https://www.instagram.com/papilloncafedublin"><h4>Instagram</h4></Link>
          </div>
        </div>
      </footer>
    );
  }

export default Footer;