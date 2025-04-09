

 

// Import components from react-router-dom for routing

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

 
// Import Navbar component

import Navbar from './components/Navbar';


// Import Home component

import Home from './components/Home';

 



 

// Import Wind component

import Wind from './components/Wind';

 

// Import Solar component

import Solar from './components/Solar';

 

// Import Hydro component

import Hydro from './components/Hydro';

 

// Import Wave component

import Wave from './components/Wave';

 

// Import Contact component

import Contact from './components/Contact';

 

// Import external CSS file

import './App.css';

 

function App() {

  return (

    // Wrap application in Router to enable routing


    <div>
    
    <Router>
Hi 
      

        {/* Include Navbar component */}

        <Navbar />
        

        <Home />
        

        <Routes>

          {/* Set up routes for the Home Page and five linked components */}

          <Route path="/" element={<Home />} />

          <Route path="/wind" element={<Wind />} />

          <Route path="/solar" element={<Solar />} />

          <Route path="/hydro" element={<Hydro />} />

          <Route path="/wave" element={<Wave />} />

          <Route path="/contact" element={<Contact />} />

        </Routes>

     

    </Router>

    </div>



  );

}

 

// Export App component as default

export default App;

