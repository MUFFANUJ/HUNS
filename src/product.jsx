import React from "react";
import "./productpage.css";
import { IoMdArrowRoundBack, IoMdPersonAdd } from "react-icons/io";
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
  return (
    <>
      <div onClick={() => navigate("/HUNS")} style={{ margin: "40px" }}>
        <IoMdArrowRoundBack size={30} />
      </div>
      <div className="products">
        <div className="product">
          <img src={hoodie} alt="Hoodie" />
          <p>Hoodies</p>
        </div>
        <div className="product">
          <img src={tshirt} alt="T-shirt" />
          <p>T shirts</p>
        </div>
        <div className="product">
          <img src={trouser} alt="Lowers" />
          <p>trouser</p>
        </div>
        <div className="product">
          <img src={hoodie2} alt="Hoodie" />
          <p>Hoodies</p>
        </div>
        <div className="product">
          <img src={tshirt2} alt="T-shirt" />
          <p>T shirts</p>
        </div>
        <div className="product">
          <img src={trouser2} alt="Lowers" />
          <p>trouser</p>
        </div>
        <div className="product">
          <img src={hoodie3} alt="Hoodie" />
          <p>Hoodies</p>
        </div>
        <div className="product">
          <img src={tshirt3} alt="T-shirt" />
          <p>T shirts</p>
        </div>
        <div className="product">
          <img src={trouser3} alt="Lowers" />
          <p>trouser</p>
        </div>
        <div className="product">
          <img src={hoodie4} alt="Hoodie" />
          <p>Hoodies</p>
        </div>
        <div className="product">
          <img src={tshirt4} alt="T-shirt" />
          <p>T shirts</p>
        </div>
        <div className="product">
          <img src={trouser4} alt="Lowers" />
          <p>trouser</p>
        </div>
        <div className="product">
          <img src={hoodie5} alt="Hoodie" />
          <p>Hoodies</p>
        </div>
        <div className="product">
          <img src={tshirt5} alt="T-shirt" />
          <p>T shirts</p>
        </div>
        <div className="product">
          <img src={trouser5} alt="Lowers" />
          <p>trouser</p>
        </div>
        <div className="product">
          <img src={hoodie5} alt="Hoodie" />
          <p>Hoodies</p>
        </div>
        <div className="product">
          <img src={tshirt6} alt="T-shirt" />
          <p>T shirts</p>
        </div>
        <div className="product">
          <img src={trouser6} alt="Lowers" />
          <p>trouser</p>
        </div>
        <div className="product">
          <img src={hoodie5} alt="Hoodie" />
          <p>Hoodies</p>
        </div>
        <div className="product">
          <img src={tshirt6} alt="T-shirt" />
          <p>T shirts</p>
        </div>
        <div className="product">
          <img src={trouser7} alt="Lowers" />
          <p>trouser</p>
        </div>
        <div className="product">
          <img src={hoodie5} alt="Hoodie" />
          <p>Hoodies</p>
        </div>
        <div className="product">
          <img src={tshirt6} alt="T-shirt" />
          <p>T shirts</p>
        </div>
        <div className="product">
          <img src={trouser8} alt="Lowers" />
          <p>trouser</p>
        </div>
      </div>
    </>
  );
}

export default Productpage;
