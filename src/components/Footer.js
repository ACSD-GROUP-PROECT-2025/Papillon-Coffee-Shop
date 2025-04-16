import { Link } from "react-router-dom";

function Footer() {
    return (
      <footer className="site-footer">
        <div className="footer-row">
          <div className="footer-item">
            <h4>Papillon Cafe Dublin,<br></br>192 Parnell Street<br></br>Dublin, D01XW18</h4>
          </div>
          <div className="footer-item">
          <Link to="/menu"><footer-button><h4>Order Online</h4></footer-button></Link>
          <p></p><Link to="/contact"><h4>Contact Us</h4></Link>
          </div>
          <div className="footer-item">
            <Link to="https://www.instagram.com/papilloncafedublin" target="_blank" ><h4>Instagram</h4></Link>
          </div>
        </div>
      </footer>
    );
  }

export default Footer;