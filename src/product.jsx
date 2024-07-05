import React, { useState } from "react";
import "./productpage.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import hoodie from "./assets/Hoodie pic 1.jpg";
import hoodie2 from "./assets/hoodie pic white.jpg";
import hoodie3 from "./assets/redesign blue.jpg";
import hoodie4 from "./assets/welham brown.jpg";
import hoodie5 from "./assets/welham turqoise.jpg";

import tshirt from "./assets/Sd block front.jpg";
import tshirt2 from "./assets/Sd block back.jpg";
import tshirt3 from "./assets/tiny einstein back.jpg";
import tshirt4 from "./assets/tiny einstein front.jpg";
import tshirt5 from "./assets/vivo back.jpg";
import tshirt6 from "./assets/vivo front.jpg";

import trouser from "./assets/lady lower 1.webp";
import trouser2 from "./assets/lady lower 3.webp";
import trouser3 from "./assets/lady lower 4.webp";
import trouser4 from "./assets/man lower 1.webp";
import trouser5 from "./assets/man lower 2.jpg";
import trouser6 from "./assets/man lower 3.webp";
import trouser7 from "./assets/man lower 4.webp";
import trouser8 from "./assets/man lower 5.webp";

function Productpage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Define product categories
  const products = [
    { category: "Hoodies", items: [hoodie, hoodie2, hoodie3, hoodie4, hoodie5] },
    { category: "T-shirts", items: [tshirt, tshirt2, tshirt3, tshirt4, tshirt5, tshirt6] },
    { category: "Trousers", items: [trouser, trouser2, trouser3, trouser4, trouser5, trouser6, trouser7, trouser8] }
  ];

  // Function to handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div onClick={() => navigate("/HUNS")} style={{ margin: "40px" }}>
        <IoMdArrowRoundBack size={30} />
      </div>
      <div className="dropdown-center">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Category
        </button>
        <ul className="dropdown-menu">
          <li>
            <button className="dropdown-item" onClick={() => handleCategoryChange("All")}>
              All
            </button>
          </li>
          <li>
            <button className="dropdown-item" onClick={() => handleCategoryChange("Hoodies")}>
              Hoodies
            </button>
          </li>
          <li>
            <button className="dropdown-item" onClick={() => handleCategoryChange("T-shirts")}>
              T-Shirts
            </button>
          </li>
          <li>
            <button className="dropdown-item" onClick={() => handleCategoryChange("Trousers")}>
              Trousers
            </button>
          </li>
        </ul>
      </div>
      <div className="products">
        {selectedCategory === "All" ? (
          // Display all products if "All" is selected
          products.flatMap((category) =>
            category.items.map((item, idx) => (
              <div key={idx} className="product box-container">
                <img src={item} alt={category.category} className="anime-img" />
                <p className="anime">{category.category}</p>
              </div>
            ))
          )
        ) : (
          // Display products based on selected category
          products
            .find((category) => category.category === selectedCategory)
            .items.map((item, idx) => (
              <div key={idx} className="product box-container">
                <img src={item} alt={selectedCategory} className="anime-img" />
                <p className="anime">{selectedCategory}</p>
              </div>
            ))
        )}
      </div>
    </>
  );
}

export default Productpage;
