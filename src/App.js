import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './mainpage';
import ContactUs from './ContactUs';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Productpage from './product';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/HUNS" element={<HomePage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/product" element={<Productpage />} />
      </Routes>
    </Router>
  );
}

export default App;
