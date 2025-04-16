import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import twofifty from '../images/7742db_374c358768ee43ce8d6108d2cb8ac255~mv2.png';

const Coffee = () => {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center text-center my-5">
      <h2 className="mb-4">Guatemalan Coffee Production</h2>
      
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Coffee_beans_being_sorted_and_pulped.jpg"
        alt="Coffee beans being sorted, Guatemala"
        className="img-fluid mb-4 rounded shadow"
      />

      <div className="row">
        <div className="col-md-6 mb-4">
          <p>
            Guatemala is one of the world’s most renowned coffee-growing countries, known for its distinct coffee regions 
            like Antigua, Huehuetenango, and Cobán. Each area produces beans with unique flavor profiles—ranging from sweet 
            cocoa and spice notes to bright citrus and floral aromas. The coffee is typically grown at altitudes over 1,500 meters, 
            contributing to the complexity in cup.
          </p>
          <p>
            Farmers in Guatemala rely on traditional methods of cultivation and often process the beans using the 
            <strong> wet method</strong>, which involves fermenting and washing the beans to enhance their clarity and brightness. 
            This careful post-harvest handling ensures a refined and clean flavor.
          </p>
        </div>

        <div className="col-md-6 mb-4">
          <p>
            Coffee production plays a vital economic and cultural role in Guatemala. It supports hundreds of thousands of farmers, 
            many of whom are part of cooperatives focused on sustainability and fair trade practices. Coffee exports are a major 
            driver of the national economy and a symbol of pride for many communities.
          </p>
          <p>
            Specialty-grade Guatemalan beans are often found in premium coffee shops and roasters around the world—like 
            <strong> Two Fifty Square</strong> in Dublin.
          </p>
        </div>
      </div>

      <hr className="my-4" style={{ width: '100%' }} />

      <div className="text-center">
        <h3 className="mb-3">Roaster Spotlight: Two Fifty Square</h3>
        <img
          src={twofifty}
          alt="Two Fifty Square Coffee"
          className="img-fluid mb-3 rounded"
          style={{ maxWidth: "300px" }}
        />
        <p>
          <a href="https://www.twofiftysquare.com/" target="_blank" rel="noopener noreferrer">
            Two Fifty Square
          </a> is a Dublin-based specialty coffee roaster and café group with a reputation for 
          high-quality, ethically sourced coffee. Their roastery is located in Terenure, where they roast 
          beans in small batches to highlight each origin’s unique characteristics.
        </p>
        <p>
          Their Guatemalan offerings are known for chocolate and red fruit notes, and they also feature beans 
          from Ethiopia, Rwanda, and Peru. You can enjoy their coffee at their cozy cafés in Rathmines, 
          Ranelagh, and Terenure—or order online via their website. They offer subscriptions, brewing equipment, 
          and barista-friendly guides.
        </p>
        <p>
          Two Fifty Square is more than just coffee—they’re a passionate part of Dublin’s specialty scene, 
          serving thoughtful brunches and building community around the perfect cup.
        </p>
        <p>
          🔗 <a href="https://www.twofiftysquare.com/" target="_blank" rel="noopener noreferrer">
            Visit their official website for full offerings and subscription details.
          </a>
        </p>
      </div>
    </div>
  );
};

export default Coffee;
