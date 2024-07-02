import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './mainpage';
import ContactUs from './ContactUs';
import 'bootstrap/dist/js/bootstrap.bundle.min';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/HUNS" element={<HomePage />} />
        <Route path="/contact" element={<ContactUs />} />
        
      </Routes>
    </Router>
  );
}

export default App;
