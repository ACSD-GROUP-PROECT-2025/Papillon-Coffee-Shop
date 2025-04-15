import papillonImage from '../images/papillon.jpg';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const About = () => {

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center text-center">
      <h2>About Papillon Cafe</h2>
      <img
        src={papillonImage}
        alt="Papillon Cafe Desk"
        className="img-fluid mb-4"
        style={{ maxWidth: "400px"}} 
      />
      
      <div class="row">
      <div class="columnx1">
      Papillon Cafe is a proudly independent takeaway coffee stop located on Dublin’s vibrant Parnell Street. 
      Founded in late 2024 by two friends from Croatia, Papillon was born out of a love for quality coffee, 
      personal connection, and the dream of building something of their own in Ireland.<br></br><br></br>
      </div>

      <div class="columnx2">
      <h3>🌱 Mission & Brand</h3><br />
      At Papillon Cafe, we believe great coffee creates great connections. Our mission is to offer high-quality takeaway coffee 
      with a personal touch — blending Croatian hospitality with Dublin energy. We aim to build warm, welcoming spaces that 
      celebrate culture, simplicity, and community.
      </div>

      <div class="columnx2">
      <h3>🎯 Skills & Capabilities</h3><br />
      - Trained baristas skilled in specialty coffee preparation<br />
      - Stand-out branding and interior design<br />
      - Fast, friendly, and personal customer service<br />
      - Efficient takeaway model for high-traffic areas<br />
      - Active local marketing and strong word-of-mouth traction
      </div>

      <div class="columnx2">
      <h3>📋 Business Snapshot</h3><br />
      - <strong>Name:</strong> Papillon Cafe<br />
      - <strong>Type:</strong> Takeaway Coffee Shop<br />
      - <strong>Founded:</strong> 2024<br />
      - <strong>Founders:</strong> Two Croatian entrepreneurs living in Dublin since 2021<br />
      - <strong>Location:</strong> Parnell Street, Dublin<br />
      - <strong>Team:</strong> 2 full-time operators, 1 part-time staff
      </div>

      <div class="columnx2">
      <h3>🚀 Future Plans</h3><br />
      This is just the beginning. Plans are underway to:<br />
      - Open a second takeaway location in 2025<br />
      - Launch a mobile coffee cart for events and markets<br />
      - Develop a branded product line including reusable cups and packaged beans
      </div>

      <div class="columnx2">
      <h3>🎓 Training & Staff</h3><br />
      Founders trained with local barista professionals and emphasize ongoing development, including:<br />
      - Latte art<br />
      - Speed and efficiency<br />
      - Customer care and feedback handling
      </div>
      
      <div class="columnx2">
      <h3>📣 Recognitions</h3><br />
      - Nominated for local “Best New Cafe” award (2025)<br />
      - Collaborations with local creatives and independent artists<br />
      </div>

      <div class="columnx1">
      <h3>🏆 Achievements</h3><br />
      - Launched successfully within 6 months of planning<br />
      - Reached break-even point in under 3 months<br />
      - Built all branding, shop layout, and systems independently<br />
      <br></br>
      </div>
      <div/>
    </div>
    </div>
  );
};

export default About;