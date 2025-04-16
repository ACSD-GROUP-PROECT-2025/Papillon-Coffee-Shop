import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Link } from "react-router-dom";
import WeatherWidget from "../components/WeatherWidget";

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
      <WeatherWidget />
      <div class="row">
  <div class="columnx2">
    <h3>Your Dublin Escape</h3>
    <p>Nestled in the heart of historic Parnell Square, Papillon Coffee Shop is your perfect stop
     for a comforting cup of coffee, a delightful pastry, and a moment of relaxation away from 
     the city's bustle. <br></br><br></br>
     Whether you're exploring Dublin's rich culture or simply seeking 
     a peaceful retreat, we have got you covered.
      </p></div>
  <div class="columnx2">      
    <h3>Why Papillon?</h3>
          <p>Authentic Dublin Charm  
          Immerse yourself in the warmth of Irish hospitality with every sip.
          <br></br><br></br>
          Locally-Sourced Goodness  
          We proudly serve the finest Irish coffee blends and homemade treats.
          <br></br><br></br>
          Cozy & Inviting Atmosphere  
          Take a break from sightseeing in our stylish yet comfortable cafe.
          </p></div>
  <div class="columnx1">
  <h3>Just a Stroll Away</h3>
        <p>Papillon sits in Parnell Square, a hub of culture and history. While you're here, 
        explore some of Dublins top attractions: </p>
        
        <ul><p><Link to="https://hughlane.ie/" target="_blank" >The Hugh Lane Gallery</Link> <br></br>
        Discover masterpieces and contemporary art just minutes away. 
        The Dublin Writers Museum 
        Dive into Irelands literary legacy and the minds behind the classics. 
        </p></ul>
        <ul><p><Link to="https://heritageireland.ie/places-to-visit/garden-of-remembrance/" target="_blank" >The Garden of Remembrance</Link> <br></br>
        A tranquil spot to reflect on Irelands history.</p></ul>


        <p>Join Us for a Taste of Dublin<br></br>
      Whether you're visiting for the day or making Dublin your home, 
      Papillon Coffee Shop invites you to experience a perfect brew, a cozy seat, 
      and a moment to unwind.

</p><p><Link to="/findus">Visit us</Link> today and let Dublins magic unfold one cup at a time. </p>
  </div>
  </div>
      <div/>
    </div>
  );
};

export default Home;