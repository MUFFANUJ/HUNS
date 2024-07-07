import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './mainpage';
import ContactUs from './ContactUs';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Productpage from './product';
function App() {
  const [option,setOption] = useState('')
  return (
    <Router>
      <Routes>
        <Route path="/HUNS" element={<HomePage setOption={setOption}/>} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/product" element={<Productpage option={option} setOption={setOption}/>} />
      </Routes>
    </Router>
  );
}

export default App;
