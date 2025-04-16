import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Menu = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [orders, setOrders] = useState([]);
  const [lastOrder, setLastOrder] = useState([]);
  const [userName, setUserName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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
      { name: "Cinnamon Bun", price: 3.30 },
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

  const handleLogin = (name) => {
    setIsLoggedIn(true);
    setUserName(name);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName('');
    setOrders([]);
    setSubmitStatus(null);
  };

  const addToOrder = (item) => {
    setOrders((prevOrders) => [...prevOrders, item]);
  };

  const removeFromOrder = (itemToRemove) => {
    setOrders(orders.filter(item => item !== itemToRemove));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const name = e.target.username.value;
    handleLogin(name);
  };

  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    if (orders.length === 0) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://formspree.io/f/mblgbjqq", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          _subject: "New Order from Menu Page",
          user: userName,
          items: orders.map(item => `${item.name} – €${item.price}`).join(', '),
          total: `€${orders.reduce((total, item) => total + item.price, 0).toFixed(2)}`
        }),
      });

      if (response.ok) {
        setLastOrder(orders);
        setSubmitStatus('success');
        setOrders([]);
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      console.error('Order submission error:', err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center text-center">
      <h2>Menu</h2>

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG"
        alt="Coffee"
        className="img-fluid mb-4"
        style={{ maxWidth: "400px" }} 
      />

      <div className="row w-100">
        <div className="col-md-4">
          <h3>☕ Coffee</h3>
          <ul className="list-group list-group-flush">
            {menuItems.coffee.map((item, index) => (
              <li key={index} className="list-group-item">
                {item.name} – €{item.price}
                {isLoggedIn && (
                  <button
                    onClick={() => addToOrder(item)}
                    className="btn btn-success btn-sm ms-2"
                  >
                    Add to Order
                  </button>
                )}
              </li>
            ))}
          </ul>

          <h3>🥤 Cold Drinks</h3>
          <ul className="list-group list-group-flush">
            {menuItems.coldDrinks.map((item, index) => (
              <li key={index} className="list-group-item">
                {item.name} – €{item.price}
                {isLoggedIn && (
                  <button
                    onClick={() => addToOrder(item)}
                    className="btn btn-success btn-sm ms-2"
                  >
                    Add to Order
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="col-md-4">

          <h3>🍰 Sweets</h3>
          <ul className="list-group list-group-flush">
            {menuItems.sweets.map((item, index) => (
              <li key={index} className="list-group-item">
                {item.name} – €{item.price}
                {isLoggedIn && (
                  <button
                    onClick={() => addToOrder(item)}
                    className="btn btn-success btn-sm ms-2"
                  >
                    Add to Order
                  </button>
                )}
              </li>
            ))}
          </ul>

          <h3>🥪 Food</h3>
          <ul className="list-group list-group-flush">
            {menuItems.food.map((item, index) => (
              <li key={index} className="list-group-item">
                {item.name} – €{item.price}
                {isLoggedIn && (
                  <button
                    onClick={() => addToOrder(item)}
                    className="btn btn-success btn-sm ms-2"
                  >
                    Add to Order
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="col-md-4">
          <h3>🔥 Promotions</h3>
          <ul className="list-group list-group-flush">
            {menuItems.promotions.map((item, index) => (
              <li key={index} className="list-group-item">
                {item.name} – €{item.price}
                {isLoggedIn && (
                  <button
                    onClick={() => addToOrder(item)}
                    className="btn btn-success btn-sm ms-2"
                  >
                    Add to Order
                  </button>
                )}
              </li>
            ))}
          </ul>

          <h3>Your Order</h3>
          

      {isLoggedIn ? (
        <>
          <h4>Welcome, {userName}!</h4>
          <button onClick={handleLogout} className="btn btn-danger mb-4">
            Log Out
          </button>
        </>
      ) : (
        <form onSubmit={handleLoginSubmit} className="mb-4">
          <input type="text" name="username" placeholder="Enter your name" required /><p></p>
          <button type="submit" className="btn btn-primary">
            Log In
          </button>
        </form>
      )}
          <ul className="list-group list-group-flush">
            {orders.map((order, index) => (
              <li key={index} className="list-group-item">
                {order.name} – €{order.price}
                <button
                  onClick={() => removeFromOrder(order)}
                  className="btn btn-danger btn-sm ms-2"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          {orders.length > 0 && (
            <div className="mt-3">
              <h4>Total: €{orders.reduce((total, item) => total + item.price, 0).toFixed(2)}</h4>
              <form onSubmit={handleOrderSubmit}>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Placing Order...
                    </>
                  ) : 'Place Order'}
                </button>
              </form>
            </div>
          )}

          {submitStatus === 'success' && (
            <div className="alert alert-success mt-3 text-start">
              <h5>Your order has been placed! We'll brew it with love ☕💛</h5>
              <hr />
              <p><strong>Order Summary:</strong></p>
              <ul>
                {lastOrder.map((item, index) => (
                  <li key={index}>
                    {item.name} – €{item.price}
                  </li>
                ))}
              </ul>
              <p><strong>Total:</strong> €{lastOrder.reduce((total, item) => total + item.price, 0).toFixed(2)}</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="alert alert-danger mt-3">
              Oops! Something went wrong while placing your order. Please try again.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
