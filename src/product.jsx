import React, { useEffect, useState } from "react";
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

function Productpage({option,setOption}) {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedOption, setSelectedOption] = useState('');
  const [showHoddie,setShowHoddie] = useState(true)
  const [showTshirt,setShowTshir] = useState(true)
  const [showLowers,setShowLowers] = useState(true)


  useEffect(()=>{
    window.scrollTo(0, 0);
    if (option === 'hoddies') {
      setShowHoddie(true)
      setShowTshir(false)
      setShowLowers(false)
    } else if (option === 'tshirts') {
      setShowHoddie(false)
      setShowTshir(true)
      setShowLowers(false)
    } else if (option === 'lowers') {
      setShowHoddie(false)
      setShowTshir(false)
      setShowLowers(true)
    }else if(option === "ALL"){
      setShowHoddie(true)
      setShowTshir(true)
      setShowLowers(true)
    }
  })

  // Define product categories
  const products = [
    { category: "Hoodies", items: [hoodie, hoodie2, hoodie3, hoodie4, hoodie5] },
    { category: "T-shirts", items: [tshirt, tshirt2, tshirt3, tshirt4, tshirt5, tshirt6] },
    { category: "Trousers", items: [trouser, trouser2, trouser3, trouser4, trouser5, trouser6, trouser7, trouser8] }
  ];

  const hoddies = [
    {title : "anuj", imgURL:hoodie,description : "very nice hoodie wear and enjoy",sizes:"S , M , L",color:"red green blue",price:599},
    {title : "anuj2", imgURL:hoodie2,description : "very nice hoodie wear and enjoy",sizes:"S , M , L",color:"red green blue",price:799},
    {title : "anuj3", imgURL:hoodie3,description : "very nice hoodie wear and enjoy",sizes:"S , M , L",color:"red green blue",price:499},
    {title : "anuj4", imgURL:hoodie4,description : "very nice hoodie wear and enjoy",sizes:"S , M , L",color:"red green blue",price:699},
    {title : "anuj5", imgURL:hoodie5,description : "very nice hoodie wear and enjoy",sizes:"S , M , L",color:"red green blue",price : 91},
]
  const tshirts = [
    {title : "anuj", imgURL:tshirt,description : "very nice hoodie wear and enjoy",sizes:"S , M , L",color:"red green blue",price:599},
    {title : "anuj2", imgURL:tshirt2,description : "very nice hoodie wear and enjoy",sizes:"S , M , L",color:"red green blue",price:799},
    {title : "anuj3", imgURL:tshirt3,description : "very nice hoodie wear and enjoy",sizes:"S , M , L",color:"red green blue",price:499},
    {title : "anuj4", imgURL:tshirt4,description : "very nice hoodie wear and enjoy",sizes:"S , M , L",color:"red green blue",price:699},
    {title : "anuj5", imgURL:tshirt5,description : "very nice hoodie wear and enjoy",sizes:"S , M , L",color:"red green blue",price : 91},
    {title : "anuj6", imgURL:tshirt6,description : "very nice hoodie wear and enjoy",sizes:"S , M , L",color:"red green blue",price : 91},
]
  const lowers = [
    {title : "anuj", imgURL:trouser,description : "very nice hoodie wear and enjoy",sizes:"S , M , L",color:"red green blue",price:599},
    {title : "anuj2", imgURL:trouser2,description : "very nice hoodie wear and enjoy",sizes:"S , M , L",color:"red green blue",price:799},
    {title : "anuj3", imgURL:trouser3,description : "very nice hoodie wear and enjoy",sizes:"S , M , L",color:"red green blue",price:499},
    {title : "anuj4", imgURL:trouser4,description : "very nice hoodie wear and enjoy",sizes:"S , M , L",color:"red green blue",price:699},
    {title : "anuj5", imgURL:trouser5,description : "very nice hoodie wear and enjoy",sizes:"S , M , L",color:"red green blue",price : 91},
    {title : "anuj6", imgURL:trouser6,description : "very nice hoodie wear and enjoy",sizes:"S , M , L",color:"red green blue",price : 91},
    {title : "anuj7", imgURL:trouser7,description : "very nice hoodie wear and enjoy",sizes:"S , M , L",color:"red green blue",price : 91},
    {title : "anuj8", imgURL:trouser8,description : "very nice hoodie wear and enjoy",sizes:"S , M , L",color:"red green blue",price : 91},
]
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
            <input type="radio" id="radio2" name="selector" class="selector-item_radio"  value="hoddies"
            onChange={()=>{
              setOption("hoddies")
              }}/>
            <label for="radio2" class="selector-item_label">Hoddies</label>
        </div>
        <div class="selector-item">
            <input type="radio" id="radio3" name="selector" class="selector-item_radio" value="tshirts" 
            onChange={()=>setOption("tshirts")}/>
            <label for="radio3" class="selector-item_label">T-Shirts</label>
        </div>
        <div class="selector-item">
            <input type="radio" id="radio4" name="selector" class="selector-item_radio" value="lowers" 
            onChange={()=>setOption("lowers")} />
            <label for="radio4" class="selector-item_label">Lowers</label>
        </div>
    </div>
</div>
      {showHoddie ? (
        <div className="products">
        {
          hoddies.map((item)=>{
            return (
              // <div class="prodcontainer">
      <div class="propcard" >
        <img class="card-img" src={item.imgURL} alt="Vans" />
        <div class="card-img-overlay d-flex justify-content-end">
        </div>
        <div class="card-body">
          <h4 class="card-title">{item.title}</h4>
          <p class="card-text">
            {item.description}
          </p>
          <p class="card-text">
            Sizes: {item.sizes}
          </p>
          <p class="card-text">
            Color: {item.color}
          </p>
          <div class="buy d-flex justify-content-between align-items-center">
            <div class="price text-success"><h5 class="mt-4">{item.price}</h5></div>
          </div>
        </div>
      </div>
    // </div>
            )
          })
        }
      </div>
      ):("")}
      {showTshirt ? (
        <div className="products">
        {
          tshirts.map((item)=>{
            return (
              // <div class="prodcontainer">
      <div class="propcard">
        <img class="card-img" src={item.imgURL} alt="Vans" />
        <div class="card-img-overlay d-flex justify-content-end">
        </div>
        <div class="card-body">
          <h4 class="card-title">{item.title}</h4>
          <p class="card-text">
            {item.description}
          </p>
          <p class="card-text">
            Sizes: {item.sizes}
          </p>
          <p class="card-text">
            Color: {item.color}
          </p>
          <div class="buy d-flex justify-content-between align-items-center">
            <div class="price text-success"><h5 class="mt-4">{item.price}</h5></div>
          </div>
        </div>
      </div>
    // </div>
            )
          })
        }
      </div>
      ):("")}
      {showLowers ? (
        <div className="products">
        {
          lowers.map((item)=>{
            return (
              // <div class="prodcontainer">
      <div class="propcard" >
        <img class="card-img" src={item.imgURL} alt="Vans" />
        <div class="card-img-overlay d-flex justify-content-end">
        </div>
        <div class="card-body">
          <h4 class="card-title">{item.title}</h4>
          <p class="card-text">
            {item.description}
          </p>
          <p class="card-text">
            Sizes: {item.sizes}
          </p>
          <p class="card-text">
            Color: {item.color}
          </p>
          <div class="buy d-flex justify-content-between align-items-center">
            <div class="price text-success"><h5 class="mt-4">{item.price}</h5></div>
          </div>
        </div>
      </div>
    // </div>
            )
          })
        }
      </div>
      ):("")}
    </>
  );
}

export default Productpage;
