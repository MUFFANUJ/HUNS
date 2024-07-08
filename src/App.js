import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./mainpage";
import ContactUs from "./ContactUs";
import Productpage from "./product";

function App() {
  const [option, setOption] = useState("");
  return (
    <>
    <Router>
      <Routes>
        <Route path="/HUNS" element={<HomePage setOption={setOption} />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route
          path="/product"
          element={<Productpage option={option} setOption={setOption} />}
        />
      </Routes>
    </Router>
    </>
  );
}

export default App;
