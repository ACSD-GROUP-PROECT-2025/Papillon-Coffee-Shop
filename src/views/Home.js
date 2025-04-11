import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Home = () => {
  const home = `
    <p>Welcome to <b>EnergyInformation.net</b>, where we explore innovative technologies that harness clean, 
        renewable energy. As the demand for energy grows, the need for sustainable and renewable sources has never 
        been more urgent. Through innovation and cutting-edge research, we can reduce our dependence on fossil 
        fuels and embrace cleaner alternatives that protect our planet for future generations.
        <br></br><br></br>
        On this platform, you’ll discover a range of energy solutions—from the proven power of solar and wind 
        to emerging technologies like geothermal and fusion energy. Each solution holds the potential to 
        transform how we produce and consume energy while reducing environmental impact.
        <br></br><br></br>
        Join us on this journey to understand these exciting advancements and how they can lead us toward a 
        more sustainable future. Explore, learn, and be part of the change!</p>
  `;

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center text-center">
      <h2>Welcome to Energy Information</h2>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/64/ENERNOVARE_2.png" 
        alt="Energy on Earth"
        className="img-fluid mb-4"
        style={{ maxWidth: "400px"}} 
      />
      <div
        className="description"
        dangerouslySetInnerHTML={{ __html: home }}
      />
    </div>
  );
};

export default Home;