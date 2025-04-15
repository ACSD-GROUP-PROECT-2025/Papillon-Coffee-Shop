import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Menu = () => {

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center text-center">
      <h2>Menu</h2>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG"
        alt="Coffee"
        className="img-fluid mb-4"
        style={{ maxWidth: "400px" }} 
      />
       <div class="row">
       <div class="columnx2">
       <h3>☕ Coffee</h3>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Espresso – €3.00</li>
      <li class="list-group-item">Americano – €3.20</li>
      <li class="list-group-item">Cappuccino – €3.80</li>
      <li class="list-group-item">Latte – €3.80</li>
      <li class="list-group-item">Flat White – €3.50</li>
      <li class="list-group-item">Cortado – €3.20</li>
      <li class="list-group-item">Chai Latte – €4.00</li>
      <li class="list-group-item">Dirty Chai Latte – €4.50</li>
      <li class="list-group-item">Hot Chocolate – €3.80</li>
      <li class="list-group-item">Matcha – €4.00</li>
      <br></br>
      <br></br>
      <h3>🥤 Cold Drinks</h3>
      <ul class="list-group list-group-flush">
      <li class="list-group-item">Coca Cola – €2.90</li>
      <li class="list-group-item">Sprite – €2.90</li>
      <li class="list-group-item">San Pellegrino – €2.90</li>
      <li class="list-group-item">Fanta – €2.90</li>
      <li class="list-group-item">Mineral Water – €2.50</li>
    </ul>
    
    </ul>
    </div>
    <div class="columnx2">
    <h3>🍰 Sweets</h3>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Chocolate Cake – €3.90</li>
      <li class="list-group-item">Lemon Cake – €3.90</li>
      <li class="list-group-item">Carrot Cake – €3.90</li>
      <li class="list-group-item">Toffee Cake – €3.90</li>
      <li class="list-group-item">Cinnamon bun Pastry – €3.30</li>
      <li class="list-group-item">Croissants Pastry – €3.30</li>
      <li class="list-group-item">Caramel bites Pastry – €3.30</li>
      <li class="list-group-item">Baklava Pastry – €3.30</li>
      </ul>
      <br></br>
      <br></br>
      <h3>🥪 Food</h3>
      <ul class="list-group list-group-flush">
      <li class="list-group-item">Chicken & Bacon Toastie – €4.50</li>
      <li class="list-group-item">Tuna Melt Toastie – €4.50</li>
      <li class="list-group-item">Ham & Cheese Toastie – €4.50</li>
      <li class="list-group-item">Triple Cheese Toastie – €4.50</li>
       <li class="list-group-item">Hot Dog – €4.50</li>
    </ul>
    </div>
    <div class="columnx1">
    <h3>🔥 Promotions</h3>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Coffee + Pastry – €4.95</li>
      <li class="list-group-item">Coffee + Sandwich – €5.95</li>
      <li class="list-group-item">Coffee + Cake – €5.95</li>
    </ul>
        </div>
        </div>
    </div>
  );
};

export default Menu;
