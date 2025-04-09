import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import './App.css';
import Home from './views/Home';
import Solar from './views/Solar';
import Wind from './views/Wind';
import Geothermal from './views/Geothermal';
import Fusion from './views/Fusion';
import Contact from './views/Contact';
import Footer from './components/Footer';

const App = () => {

  return (
    <Router>
      <header>
        <Navbar></Navbar>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solar" element={<Solar />} />
        <Route path="/wind" element={<Wind />} />
        <Route path="/geothermal" element={<Geothermal />} />
        <Route path="/fusion" element={<Fusion />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer>
        <Footer></Footer>
      </footer>
    </Router>
  );
};

export default App;
