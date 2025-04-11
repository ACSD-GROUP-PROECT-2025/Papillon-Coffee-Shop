import React from "react";

const CoffeePage = () => {
  return (
    <div className="coffee-page">
      <h2>Guatemalan Coffee Production</h2>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Coffee_Harvest_Guatemala.jpg"
        alt="Guatemalan Coffee Harvest"
        style={{ width: "100%", maxWidth: "600px", borderRadius: "8px" }}
      />
      <p>
        Guatemala is renowned for its high-quality coffee, grown in its rich volcanic soil and unique microclimates. 
        Coffee production in the country is primarily done on small farms, ensuring careful cultivation and harvesting.
        The beans are typically grown at high altitudes, which results in a rich, complex flavor profile with chocolatey and fruity notes.
      </p>
      <p>
        Guatemalan coffee is a major export and plays a vital role in the country's economy, supporting thousands of farmers and local communities.
      </p>
    </div>
  );
};

export default CoffeePage;
