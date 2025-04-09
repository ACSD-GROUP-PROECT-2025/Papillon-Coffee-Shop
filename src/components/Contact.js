

// Import React library
import React from 'react'; 
 

// Import external CSS file
import '../App.css';

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out to us:</p>
      
      <p>Email: <a href="mailto:info@energyapp.com">info@energyapp.com</a></p>
      <p>Website: <a href="https://www.energyapp.com">www.energyapp.com</a></p>
      <p>Phone: <a href="tel:+35312345678">+353 (01) 2345678</a></p>
      
      {/* Sample image */}
      <img src="https://static.wixstatic.com/media/dcb342_ba92404ea2204c0388f56316ba6a34a6~mv2.jpg" alt="Contact Us" />
    </div>
  );
}

// Export Contact component as default
export default Contact;


