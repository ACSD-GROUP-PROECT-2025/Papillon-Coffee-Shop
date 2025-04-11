import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center text-center">
      <h2>Get in Touch – Let's Brew Some Conversation!</h2>
      
      <div className="description w-100">
        <p>At Papillon Café, we believe the best connections start over coffee — whether you want to share your latest coffee obsession, spill the beans, or just want to perk our ears.
        <br/><br/>
        Drop us a message below, and we'll get back to you faster than a pour-over drips. <br/>(Okay, maybe not that fast, but we promise no one here sleeps on emails — too much espresso, you see.)</p>
        
        <form 
          action="mailto:x24172901@student.ncirl.ie?subject=Papillon%20Café%20Webpage%20Contact" 
          method="post" 
          encType="text/plain"
          className="w-100"
        >
          <div className="mb-3">
            <label className="form-label">Name:</label>
            <input type="text" name="Name" className="form-control" required />
          </div>
          
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input type="email" name="Email" className="form-control" required />
          </div>
          
          <div className="mb-3">
            <label className="form-label">Message:</label>
            <textarea name="Message" className="form-control" required rows="4"></textarea>
          </div>
          
          <button type="submit" className="button">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;