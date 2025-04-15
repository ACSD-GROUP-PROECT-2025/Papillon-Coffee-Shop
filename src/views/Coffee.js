import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Coffee = () => {

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center text-center">
      <h2>Guatemalan Coffee Production</h2>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Coffee_beans_being_sorted_and_pulped.jpg"
        alt="Coffee beans being sorted, Guatemala"
        className="img-fluid mb-4"
      />
      
      <div class="row">
      <div class="columnx1">
      Guatemala is renowned for its high-quality coffee, grown in its rich volcanic soil and unique microclimates. 
        Coffee production in the country is primarily done on small farms, ensuring careful cultivation and harvesting.
        The beans are typically grown at high altitudes, which results in a rich, complex flavor profile with chocolatey and fruity notes.
      <br></br><br></br></div>

      <div class="columnx1">
      Guatemalan coffee is a major export and plays a vital role in the country's economy, supporting thousands of farmers and local communities.
      <br></br><br></br></div>

      <div/>
    </div>
    </div>
  );
};

export default Coffee;