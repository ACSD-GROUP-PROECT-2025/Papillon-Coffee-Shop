import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Home = () => {

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center text-center">
      <h1>Welcome to Papillon Coffee Shop</h1>
      <img
        src="../../Papillon_Cafe_Logo.png" 
        alt="Papillon Cafe Logo"
        className="img-fluid mb-4"
        style={{ maxWidth: "400px"}} 
      />
      <div class="row">
  <div class="columnx2">
    <h3>Your Dublin Escape</h3>
    <p>Nestled in the heart of historic Parnell Square, Papillon Coffee Shop is your perfect stop
     for a comforting cup of coffee, a delightful pastry, and a moment of relaxation away from 
     the city's bustle. Whether you're exploring Dublin's rich culture or simply seeking 
     a peaceful retreat, we have got you covered.
      </p></div>
  <div class="columnx2">      
    <h3>Why Papillon?</h3>
          <p>Authentic Dublin Charm  
          Immerse yourself in the warmth of Irish hospitality with every sip.

          Locally-Sourced Goodness  
          We proudly serve the finest Irish coffee blends and homemade treats.

          Cozy & Inviting Atmosphere  
          Take a break from sightseeing in our stylish yet comfortable cafe.
          </p></div>
  <div class="columnx1">
  <h3>Just a Stroll Away</h3>
        <p>Papillon sits in Parnell Square, a hub of culture and history. While you're here, 
        explore some of Dublins top attractions: 
        
        The Hugh Lane Gallery 
        Discover masterpieces and contemporary art just minutes away. 
        The Dublin Writers Museum 
        Dive into Irelands literary legacy and the minds behind the classics. 
         
        The Garden of Remembrance 
        A tranquil spot to reflect on Irelands history.
    <br></br><br></br> Join Us for a Taste of Dublin
      Whether you're visiting for the day or making Dublin your home, 
      Papillon Coffee Shop invites you to experience a perfect brew, a cozy seat, 
      and a moment to unwind.

    Visit us today and let Dublins magic unfold one cup at a time. </p>
  </div>
  </div>
      <div/>
    </div>
  );
};

export default Home;