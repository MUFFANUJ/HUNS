import React, { useEffect, useState } from "react";
import "./productpage.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import hoodie from "./assets/Hoodie pic 1.jpg";
import hoodie2 from "./assets/welham brown.jpg";
import hoodie3 from "./assets/welham turqoise.jpg";
import hoodie4 from "./assets/hoddieimg.jpg";
import hoodie5 from "./assets/hoodieimag4.jpg";
import hoodie6 from "./assets/hoodieimg2.jpg";
import hoodie7 from "./assets/hoodieimg3.jpg";
import hoodie8 from "./assets/hoodie23.jpg";

import tshirt from "./assets/Sd block front.jpg";
import tshirt2 from "./assets/tiny einstein front.jpg";
import tshirt3 from "./assets/tshirtimg.jpg";
import tshirt4 from "./assets/tshirtimg2.jpg";
import tshirt5 from "./assets/tshirtimg3.jpg";
import tshirt6 from "./assets/tshirtimg5.jpg";
import tshirt7 from "./assets/vivo front.jpg";

import trouser from "./assets/lady lower 1.webp";
import trouser2 from "./assets/lady lower 3.webp";
import trouser3 from "./assets/lady lower 4.webp";
import trouser4 from "./assets/man lower 1.webp";
import trouser5 from "./assets/man lower 2.jpg";
import trouser6 from "./assets/man lower 3.webp";
import trouser7 from "./assets/man lower 4.webp";
import trouser8 from "./assets/man lower 5.webp";

function Productpage({ option, setOption }) {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedOption, setSelectedOption] = useState("");
  const [showHoddie, setShowHoddie] = useState(true);
  const [showTshirt, setShowTshir] = useState(true);
  const [showLowers, setShowLowers] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (option === "hoddies") {
      setShowHoddie(true);
      setShowTshir(false);
      setShowLowers(false);
    } else if (option === "tshirts") {
      setShowHoddie(false);
      setShowTshir(true);
      setShowLowers(false);
    } else if (option === "lowers") {
      setShowHoddie(false);
      setShowTshir(false);
      setShowLowers(true);
    } else if (option === "ALL") {
      setShowHoddie(true);
      setShowTshir(true);
      setShowLowers(true);
    }
  });

  // Define product categories
  const products = [
    {
      category: "Hoodies",
      items: [
        hoodie,
        hoodie2,
        hoodie3,
        hoodie4,
        hoodie5,
        hoodie6,
        hoodie7,
        hoodie8,
      ],
    },
    {
      category: "T-shirts",
      items: [tshirt, tshirt2, tshirt3, tshirt4, tshirt5, tshirt6, tshirt7],
    },
    {
      category: "Trousers",
      items: [
        trouser,
        trouser2,
        trouser3,
        trouser4,
        trouser5,
        trouser6,
        trouser7,
        trouser8,
      ],
    },
  ];

  const hoddies = [
    {
      title: "",
      imgURL: hoodie,
      description: "",
      sizes: "",
      color: "",
      price: 0,
    },
    {
      title: "",
      imgURL: hoodie2,
      description: "",
      sizes: "",
      color: "",
      price: 0,
    },
    {
      title: "",
      imgURL: hoodie3,
      description: "",
      sizes: "",
      color: "",
      price: 0,
    },
    {
      title: "",
      imgURL: hoodie4,
      description: "",
      sizes: "",
      color: "",
      price: 0,
    },
    {
      title: "",
      imgURL: hoodie5,
      description: "",
      sizes: "",
      color: "",
      price: 0,
    },
    {
      title: "",
      imgURL: hoodie6,
      description: "",
      sizes: "",
      color: "",
      price: 0,
    },
    {
      title: "",
      imgURL: hoodie7,
      description: "",
      sizes: "",
      color: "",
      price: 0,
    },
    {
      title: "",
      imgURL: hoodie8,
      description: "",
      sizes: "",
      color: "",
      price: 0,
    },
  ];

  const tshirts = [
    {
      title: "",
      imgURL: tshirt,
      description: "",
      sizes: "",
      color: "",
      price: 0,
    },
    {
      title: "",
      imgURL: tshirt2,
      description: "",
      sizes: "",
      color: "",
      price: 0,
    },
    {
      title: "",
      imgURL: tshirt3,
      description: "",
      sizes: "",
      color: "",
      price: 0,
    },
    {
      title: "",
      imgURL: tshirt4,
      description: "",
      sizes: "",
      color: "",
      price: 0,
    },
    {
      title: "",
      imgURL: tshirt5,
      description: "",
      sizes: "",
      color: "",
      price: 0,
    },
    {
      title: "",
      imgURL: tshirt6,
      description: "",
      sizes: "",
      color: "",
      price: 0,
    },
    {
      title: "",
      imgURL: tshirt7,
      description: "",
      sizes: "",
      color: "",
      price: 0,
    },
  ];

  const lowers = [
    {
      title: "",
      imgURL: trouser,
      description: "",
      sizes: "",
      color: "",
      price: 0,
    },
    {
      title: "",
      imgURL: trouser2,
      description: "",
      sizes: "",
      color: "",
      price: 0,
    },
    {
      title: "",
      imgURL: trouser3,
      description: "",
      sizes: "",
      color: "",
      price: 0,
    },
    {
      title: "",
      imgURL: trouser4,
      description: "",
      sizes: "",
      color: "",
      price: 0,
    },
    {
      title: "",
      imgURL: trouser5,
      description: "",
      sizes: "",
      color: "",
      price: 0,
    },
    {
      title: "",
      imgURL: trouser6,
      description: "",
      sizes: "",
      color: "",
      price: 0,
    },
    {
      title: "",
      imgURL: trouser7,
      description: "",
      sizes: "",
      color: "",
      price: 0,
    },
    {
      title: "",
      imgURL: trouser8,
      description: "",
      sizes: "",
      color: "",
      price: 0,
    },
  ];

  // Function to handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  // const handleOptionChange = (event) => {
  //   if (event === 'hoddies') {
  //     console.log("Hoddies")
  //     setShowHoddie(true)
  //     setShowTshir(false)
  //     setShowLowers(false)
  //   } else if (event === 'tshirts') {
  //     console.log("T-Shirts")
  //     setShowHoddie(false)
  //     setShowTshir(true)
  //     setShowLowers(false)
  //   } else if (event === 'lowers') {
  //     console.log("Lowers")
  //     setShowHoddie(false)
  //     setShowTshir(false)
  //     setShowLowers(true)
  //   }else if(event === "ALL"){
  //     setShowHoddie(true)
  //     setShowTshir(true)
  //     setShowLowers(true)
  //   }
  // };

  return (
    <>
      <div onClick={() => navigate("/HUNS")} style={{ margin: "40px" }}>
        <IoMdArrowRoundBack size={30} />
      </div>
      <div class="radiocontainer">
        <div class="selector">
          {/* <div class="selector-item">
            <input type="radio" id="radio1" name="selector" class="selector-item_radio"  value="hoddies"
            onChange={()=>handleOptionChange("ALL")}/>
            <label for="radio1" class="selector-item_label">ALL</label>
        </div> */}
          <div class="selector-item">
            <input
              type="radio"
              id="radio2"
              name="selector"
              class="selector-item_radio"
              value="hoddies"
              onChange={() => {
                setOption("hoddies");
              }}
            />
            <label for="radio2" class="selector-item_label">
              Hoddies
            </label>
          </div>
          <div class="selector-item">
            <input
              type="radio"
              id="radio3"
              name="selector"
              class="selector-item_radio"
              value="tshirts"
              onChange={() => setOption("tshirts")}
            />
            <label for="radio3" class="selector-item_label">
              T-Shirts
            </label>
          </div>
          <div class="selector-item">
            <input
              type="radio"
              id="radio4"
              name="selector"
              class="selector-item_radio"
              value="lowers"
              onChange={() => setOption("lowers")}
            />
            <label for="radio4" class="selector-item_label">
              Lowers
            </label>
          </div>
        </div>
      </div>
      {showHoddie ? (
        <div className="products">
          {hoddies.map((item) => {
            return (
              // <div class="prodcontainer">
              <div class="propcard">
                <img class="card-img" src={item.imgURL} alt="Vans" />
                <div class="card-img-overlay d-flex justify-content-end"></div>
                <div class="card-body">
                  <h4 class="card-title">{item.title}</h4>
                  <p class="card-text">{item.description}</p>
                  <p class="card-text">Sizes: {item.sizes}</p>
                  <p class="card-text">Color: {item.color}</p>
                  <div class="buy d-flex justify-content-between align-items-center">
                    <div class="price text-success">
                      <h5 class="mt-4">{item.price}</h5>
                    </div>
                  </div>
                </div>
              </div>
              // </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
      {showTshirt ? (
        <div className="products">
          {tshirts.map((item) => {
            return (
              // <div class="prodcontainer">
              <div class="propcard">
                <img class="card-img" src={item.imgURL} alt="Vans" />
                <div class="card-img-overlay d-flex justify-content-end"></div>
                <div class="card-body">
                  <h4 class="card-title">{item.title}</h4>
                  <p class="card-text">{item.description}</p>
                  <p class="card-text">Sizes: {item.sizes}</p>
                  <p class="card-text">Color: {item.color}</p>
                  <div class="buy d-flex justify-content-between align-items-center">
                    <div class="price text-success">
                      <h5 class="mt-4">{item.price}</h5>
                    </div>
                  </div>
                </div>
              </div>
              // </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
      {showLowers ? (
        <div className="products">
          {lowers.map((item) => {
            return (
              // <div class="prodcontainer">
              <div class="propcard">
                <img class="card-img" src={item.imgURL} alt="Vans" />
                <div class="card-img-overlay d-flex justify-content-end"></div>
                <div class="card-body">
                  <h4 class="card-title">{item.title}</h4>
                  <p class="card-text">{item.description}</p>
                  <p class="card-text">Sizes: {item.sizes}</p>
                  <p class="card-text">Color: {item.color}</p>
                  <div class="buy d-flex justify-content-between align-items-center">
                    <div class="price text-success">
                      <h5 class="mt-4">{item.price}</h5>
                    </div>
                  </div>
                </div>
              </div>
              // </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Productpage;
