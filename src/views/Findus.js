import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Findus = () => {
  const ORS_API_KEY = "5b3ce3597851110001cf6248d8cdf0d419014e93a3c439310fac24cc"; 
  const BUSINESS_ADDRESS = "192 Parnell Street, Dublin, Ireland"; 

  const [travelTimes, setTravelTimes] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [userAddress, setUserAddress] = useState("");

  // Geocode an address to coordinates
  const geocodeAddress = async (address) => {
    try {
      const response = await fetch(
        `https://api.openrouteservice.org/geocode/search?api_key=${ORS_API_KEY}&text=${encodeURIComponent(address)}`
      );
      const data = await response.json();
      return data.features?.[0]?.geometry?.coordinates || null; 
    } catch (error) {
      console.error("Geocoding error:", error);
      return null;
    }
  };

  const calculateTravelTimes = async (startCoords) => {
    setIsLoading(true);
    const endCoords = await geocodeAddress(BUSINESS_ADDRESS);
    if (!endCoords) {
      alert("Could not find café location.");
      setIsLoading(false);
      return;
    }

    const modes = [
      { id: "driving-car", name: "Drive" },
      { id: "cycling-regular", name: "Bike" },
      { id: "foot-walking", name: "Walk" },
      { id: "public-transport", name: "Public Transport" },
    ];

    const results = {};
    for (const mode of modes) {
      try {
        const response = await fetch(
          `https://api.openrouteservice.org/v2/directions/${mode.id}?api_key=${ORS_API_KEY}&start=${startCoords[0]},${startCoords[1]}&end=${endCoords[0]},${endCoords[1]}`
        );
        const data = await response.json();
        const duration = data.features?.[0]?.properties?.segments?.[0]?.duration;
        if (duration) {
          results[mode.id] = `${Math.round(duration / 60)} min (${mode.name})`;
        }
      } catch (error) {
        console.error(`Error fetching ${mode.name} data:`, error);
      }
    }
    setTravelTimes(results);
    setIsLoading(false);
  };

  // Visitors location
  const handleCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const startCoords = [position.coords.longitude, position.coords.latitude];
          await calculateTravelTimes(startCoords);
        },
        () => alert("Location access denied. Enter an address manually.")
      );
    } else {
      alert("Geolocation not supported. Enter an address manually.");
    }
  };

  // Get travel time from entered address
  const handleAddressSubmit = async () => {
    if (!userAddress.trim()) return alert("Please enter an address.");
    const startCoords = await geocodeAddress(userAddress);
    if (startCoords) await calculateTravelTimes(startCoords);
    else alert("Address not found. Try a more specific location.");
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center text-center">
      <h2>Find Papillon Café Dublin</h2>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/74/Location_icon_from_Noun_Project.png"
        alt="Find us"
        className="img-fluid mb-4"
        style={{ maxWidth: "400px", marginTop: "-55px" }} 
      />
      <div className="row">
        <div className="columnx1">
          <h3>Where Coffee Meets Comfort in the Heart of the City</h3>
          <p>
            Nestled on bustling Parnell Street, Papillon Café Dublin is your cozy escape for artisanal coffee, fresh pastries, and warm hospitality.
          </p>
        </div>

        <div className="columnx2">
          <h3>Where to find us</h3>
          <a href="https://maps.app.goo.gl/UrhfcruW5DSQetpF8" target="_blank"><p>192 Parnell Street, Dublin 1, D01XW18</p></a><br></br><br></br>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.578144735779!2d-6.268318287258041!3d53.35080737217513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670f2929fbfd89%3A0xf330878fcf4522ef!2sPapillon%20Cafe%20Dublin!5e0!3m2!1sen!2sie!4v1744321665601!5m2!1sen!2sie" width="100%" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
<br></br>
<br></br>
        </div>

        <div className="columnx2">
          <h3>How far away are we?</h3>
          <button 
            onClick={handleCurrentLocation} 
            className="button"
            disabled={isLoading}
          >
            {isLoading ? "Calculating..." : "Use Your Location"}
          </button>
          <br></br><p>or enter your address below:</p>
          <input
            type="text"
            placeholder="Enter your address"
            value={userAddress}
            onChange={(e) => setUserAddress(e.target.value)}
            className="form-control mb-2"
          />
          <button 
            onClick={handleAddressSubmit}
            className="button"
            disabled={isLoading}
          >
            Calculate
          </button>

          {travelTimes && (
            <div className="mt-4">
              <h4>Travel Times:</h4>
              <div className="row text-center mt-3">
                {/* Walk Time */}
                {travelTimes["foot-walking"] && (
                  <div className="col-md-6">
                    <div className="transport-icon mb-2">
                    </div>
                    <h5>Walk</h5>
                    <p>{travelTimes["foot-walking"].split('(')[0].trim()}</p>
                  </div>
                )}
                {/* Bike Time */}
                {travelTimes["cycling-regular"] && (
                  <div className="col-md-6">
                    <div className="transport-icon mb-2">
                    </div>
                    <h5>Bike</h5>
                    <p>{travelTimes["cycling-regular"].split('(')[0].trim()}</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Findus;