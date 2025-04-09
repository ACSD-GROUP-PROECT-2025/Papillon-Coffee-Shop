import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import './App.css';
import Home from './views/Home';
import About from './views/About';
import Coffee from './views/Coffee';
import Menu from './views/Menu';
import Findus from './views/Findus';
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
        <Route path="/about" element={<About />} />
        <Route path="/coffee" element={<Coffee />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/findus" element={<Findus />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer>
        <Footer></Footer>
      </footer>
    </Router>
  );
};

export default App;
