import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Menu = () => {
  // Handle login status and user orders
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [orders, setOrders] = useState([]);
  const [userName, setUserName] = useState('');

  const menuItems = {
    coffee: [
      { name: "Espresso", price: 3.00 },
      { name: "Americano", price: 3.20 },
      { name: "Cappuccino", price: 3.80 },
      { name: "Latte", price: 3.80 },
      { name: "Flat White", price: 3.50 },
      { name: "Cortado", price: 3.20 },
      { name: "Chai Latte", price: 4.00 },
      { name: "Dirty Chai Latte", price: 4.50 },
      { name: "Hot Chocolate", price: 3.80 },
      { name: "Matcha", price: 4.00 },
    ],
    coldDrinks: [
      { name: "Coca Cola", price: 2.90 },
      { name: "Sprite", price: 2.90 },
      { name: "San Pellegrino", price: 2.90 },
      { name: "Fanta", price: 2.90 },
      { name: "Mineral Water", price: 2.50 },
    ],
    sweets: [
      { name: "Chocolate Cake", price: 3.90 },
      { name: "Lemon Cake", price: 3.90 },
      { name: "Carrot Cake", price: 3.90 },
      { name: "Toffee Cake", price: 3.90 },
      { name: "Cinnamon bun Pastry", price: 3.30 },
      { name: "Croissants Pastry", price: 3.30 },
      { name: "Caramel bites Pastry", price: 3.30 },
      { name: "Baklava Pastry", price: 3.30 },
    ],
    food: [
      { name: "Chicken & Bacon Toastie", price: 4.50 },
      { name: "Tuna Melt Toastie", price: 4.50 },
      { name: "Ham & Cheese Toastie", price: 4.50 },
      { name: "Triple Cheese Toastie", price: 4.50 },
      { name: "Hot Dog", price: 4.50 },
    ],
    promotions: [
      { name: "Coffee + Pastry", price: 4.95 },
      { name: "Coffee + Sandwich", price: 5.95 },
      { name: "Coffee + Cake", price: 5.95 },
    ]
  };

  // Function to handle login
  const handleLogin = (name) => {
    setIsLoggedIn(true);
    setUserName(name);
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName('');
    setOrders([]);
  };

  // Function to add an item to the order
  const addToOrder = (item) => {
    setOrders((prevOrders) => [...prevOrders, item]);
  };

  // Function to remove an item from the order
  const removeFromOrder = (itemToRemove) => {
    setOrders(orders.filter(item => item !== itemToRemove));
  };

  // Function to handle login form submission
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const name = e.target.username.value;
    handleLogin(name);
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center text-center">
      <h2>Menu</h2>

      {isLoggedIn ? (
        <>
          <h4>Welcome, {userName}!</h4>
          <button onClick={handleLogout} className="btn btn-danger mb-4">
            Log Out
          </button>
        </>
      ) : (
        <form onSubmit={handleLoginSubmit} className="mb-4">
          <input type="text" name="username" placeholder="Enter your name" required />
          <button type="submit" className="btn btn-primary">
            Log In
          </button>
        </form>
      )}

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG"
        alt="Coffee"
        className="img-fluid mb-4"
        style={{ maxWidth: "400px" }} 
      />

      <div className="row">
        <div className="col-md-6">
          {/* Coffee */}
          <h3>☕ Coffee</h3>
          <ul className="list-group list-group-flush">
            {menuItems.coffee.map((item, index) => (
              <li key={index} className="list-group-item">
                {item.name} – €{item.price}
                {isLoggedIn && (
                  <button
                    onClick={() => addToOrder(item)}
                    className="btn btn-success btn-sm ml-2"
                  >
                    Add to Order
                  </button>
                )}
              </li>
            ))}
          </ul>

          {/* Cold Drinks */}
          <h3>🥤 Cold Drinks</h3>
          <ul className="list-group list-group-flush">
            {menuItems.coldDrinks.map((item, index) => (
              <li key={index} className="list-group-item">
                {item.name} – €{item.price}
                {isLoggedIn && (
                  <button
                    onClick={() => addToOrder(item)}
                    className="btn btn-success btn-sm ml-2"
                  >
                    Add to Order
                  </button>
                )}
              </li>
            ))}
          </ul>

          {/* Sweets */}
          <h3>🍰 Sweets</h3>
          <ul className="list-group list-group-flush">
            {menuItems.sweets.map((item, index) => (
              <li key={index} className="list-group-item">
                {item.name} – €{item.price}
                {isLoggedIn && (
                  <button
                    onClick={() => addToOrder(item)}
                    className="btn btn-success btn-sm ml-2"
                  >
                    Add to Order
                  </button>
                )}
              </li>
            ))}
          </ul>

          {/* Food */}
          <h3>🥪 Food</h3>
          <ul className="list-group list-group-flush">
            {menuItems.food.map((item, index) => (
              <li key={index} className="list-group-item">
                {item.name} – €{item.price}
                {isLoggedIn && (
                  <button
                    onClick={() => addToOrder(item)}
                    className="btn btn-success btn-sm ml-2"
                  >
                    Add to Order
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="col-md-6">
          {/* Promotions */}
          <h3>🔥 Promotions</h3>
          <ul className="list-group list-group-flush">
            {menuItems.promotions.map((item, index) => (
              <li key={index} className="list-group-item">
                {item.name} – €{item.price}
                {isLoggedIn && (
                  <button
                    onClick={() => addToOrder(item)}
                    className="btn btn-success btn-sm ml-2"
                  >
                    Add to Order
                  </button>
                )}
              </li>
            ))}
          </ul>

          {/* Your Order */}
          <h3>Your Order</h3>
          <ul className="list-group list-group-flush">
            {orders.map((order, index) => (
              <li key={index} className="list-group-item">
                {order.name} – €{order.price}
                <button
                  onClick={() => removeFromOrder(order)}
                  className="btn btn-danger btn-sm ml-2"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          {/* Total */}
          {orders.length > 0 && (
            <div className="mt-3">
              <h4>Total: €{orders.reduce((total, item) => total + item.price, 0).toFixed(2)}</h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
