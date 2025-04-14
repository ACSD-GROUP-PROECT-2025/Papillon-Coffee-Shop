import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Menu = () => {
  const menuDescription = ``;

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center text-center">
      <h2>Coffee Menu</h2>
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
    </ul>
    </div>
    <div class="columnx2">
    <h3>🥤 Cold Drinks</h3>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Coca Cola / Sprite / San Pellegrino / Fanta – €2.90</li>
      <li class="list-group-item">Mineral Water – €2.50</li>
    </ul>
    <h3>🍰 Sweets</h3>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Cake (Chocolate, Lemon, Carrot, Toffee) – €3.90</li>
      <li class="list-group-item">Pastry (Cinnamon bun, Croissants, Caramel bites, Baklava) – €3.30</li>
    </ul>
    <h3>🥪 Food</h3>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Toastie Sandwich (Chicken/Bacon, Tuna Melt, Ham/Cheese, Triple Cheese) – €4.50</li>
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
      <div
        className="description"
        dangerouslySetInnerHTML={{ __html: menuDescription }}
      />
    </div>
  );
};

export default Menu;
