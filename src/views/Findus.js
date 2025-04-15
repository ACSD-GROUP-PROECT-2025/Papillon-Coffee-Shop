import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Findus = () => {
  const findUs = `

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.578144735779!2d-6.268318287258041!3d53.35080737217513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670f2929fbfd89%3A0xf330878fcf4522ef!2sPapillon%20Cafe%20Dublin!5e0!3m2!1sen!2sie!4v1744321665601!5m2!1sen!2sie" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  `;

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center text-center">
      <h2>Find Papillon Café Dublin</h2>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/74/Location_icon_from_Noun_Project.png"
        alt="Find us"
        className="img-fluid mb-4"
        style={{ maxWidth: "400px", marginTop: "-55px" }} 
      />
      <div class="row">
      <div class="columnx1">
      <h3>Where Coffee Meets Comfort in the Heart of the City</h3>
        <p class="marginTop: -60px" >Nestled on bustling Parnell Street, Papillon Café Dublin is your cozy escape for artisanal coffee, fresh pastries, and warm hospitality. Whether you're stopping by for your morning espresso or a leisurely lunch, we can’t wait to welcome you.</p>
      </div>

        <div class="columnx2">
          <h3>Our Address:</h3>
            <p>192 Parnell Street, Dublin 1, D01 XW18</p>
        </div>
        
        <div class="columnx2">
          <h3>Need Directions?</h3>
            <p>Use the interactive map below to plan your visit. We’re just a short walk from the Rotunda Hospital and a 10-minute stroll from O’Connell Street.</p>
        </div>

      </div>
      <div
        className="description"
        dangerouslySetInnerHTML={{ __html: findUs }}
      />
    </div>
  );
};

export default Findus;
