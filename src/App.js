import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Galery from './pages/Galery';
import Contact from './pages/Contact';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galery" element={<Galery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
