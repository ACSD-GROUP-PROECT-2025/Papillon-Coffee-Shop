// Import React library

//import React from 'react';

 

// Importing Link component from react-router-dom for navigation

import { Link } from 'react-router-dom';

 

function Navbar() {

  return (

    <div>
      
      <nav> {/* Navigation bar */}

      <ul> {/* Unordered list for navigation links */}

        <li><Link to="/">Home</Link></li> {/* Link to Home page */}

        <li><Link to="/wind">Wind</Link></li> {/* Link to Wind page */}

        <li><Link to="/solar">Solar</Link></li> {/* Link to Solar page */}

        <li><Link to="/hydro">Hydro</Link></li> {/* Link to Hydro page */}

        <li><Link to="/wave">Wave</Link></li> {/* Link to Wave page */}

        <li><Link to="/contact">Contact</Link></li> {/* Link to Contact page */}

      </ul>

    </nav>

  </div>

  );

}

 

// Export Navbar component as default

export default Navbar;

