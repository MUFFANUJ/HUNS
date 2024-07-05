import React from "react";
import { useNavigate } from "react-router-dom";
import "./mainpage.css";
import tshirt from "./assets/Sd block front.jpg";
import hoodie from "./assets/Hoodie pic 1.jpg";
import trouser from "./assets/man lower 1.webp";
import "bootstrap/dist/css/bootstrap.min.css";
function HomePage() {
  const navigate = useNavigate();
  const navigateToContact = () => {
    navigate("/contact");
  };
  const navigateToProduct = () => {
    navigate("/product");
  };

  return (
    <div className="container">
      <header>
        <div className="logo">HUNS</div>
        <nav>
          <a href="#">Brochure</a>
          {/* <a href="#" onClick={navigateToContact}>
            Contact
          </a> */}
        </nav>
      </header>
      <section>
        <div className="hero">
          <h1>
            <strong>Quality</strong> <span>Garments</span><br/>
            <span>
              <strong>Affordable</strong> prices
            </span>
          </h1>
          <p>
            With over 20 years of expertise, our garment manufacturing company
            is dedicated to producing clothes that boast exceptional fit and
            finish. We combine our industry experience with a commitment to
            quality, ensuring every piece we create meets the highest standards.
            Partner with us for reliable, top-tier garments crafted to
            perfection.
          </p>
          <button onClick={navigateToContact}>Contact Us</button>
        </div>
      </section>
      <section>
        <div className="about">
          <h2>Why Us?</h2>
          <img
            src="https://pixlr.com/images/index/product-image-one.webp"
            alt="About Us"
          />
        </div>
      </section>
      <section>
        <div className="extra">
          <h2>
            <strong>Custom </strong>garment manufacturing and private labeling
            services
          </h2>
          <p>
            We specialize in providing high-quality custom garment manufacturing
            and private labeling services. Whether you need unique designs for
            your clothing line or want to create branded apparel business, we
            have the expertise and resources to bring your vision to life. Our
            team of skilled artisans and designers work closely with you to
            ensure every detail is perfect, from fabric selection to finishing
            touches. Be it t-shirts, hoodies, jackets or lowers, we have got you
            covered.
          </p>
        </div>

        <div className="features">
          <div className="feature">
            <h3>Bulk orders made easy</h3>
            <p>
              Need to place a large order? We've got you covered. Our
              streamlined process and efficient production capabilities allow us
              to handle bulk orders with ease, ensuring timely delivery and
              consistent quality.
            </p>
          </div>
          <div className="feature">
            <h3>Exceptional quality control</h3>
            <p>
              At our clothing manufacturing facility, we prioritize quality
              control at every stage of production. From fabric inspection to
              final packaging, we adhere to strict quality standards to ensure
              that every garment meets your expectations.
            </p>
          </div>
          <div className="feature">
            <h3>Fast and reliable shipping</h3>
            <p>
              We understand the importance of timely delivery. That's why we
              have established reliable shipping partnerships to ensure your
              orders reach you on time, no matter where you are located.
            </p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="product-tag">What we do best?</h2>
        <div className="products">
          <div className="product">
            {<img src={hoodie} alt="Hoodie" onClick={navigateToProduct} />}
            <p>Hoodies</p>
          </div>
          <div className="product">
            {<img src={tshirt} alt="T-shirt" onClick={navigateToProduct} />}
            <p>T shirts</p>
          </div>
          <div className="product">
            {<img src={trouser} alt="Lowers" onClick={navigateToProduct} />}
            <p>Hoodies</p>
          </div>
        </div>
      </section>
      <div className="faq">
        <h2>FAQ</h2>
        <div className="faq-item">
          <h3>What are minimum order quantities (MOQ)?</h3>
          <p>
            We understand the challenges faced by small and emerging brands,
            which is why we offer lower minimum order quantities compared to
            larger manufacturers. This flexibility allows you to place smaller,
            more manageable orders as you grow your business.
          </p>
        </div>
        <div className="faq-item">
          <h3>
            Do you offer custom garment manufacturing based on our designs?
          </h3>
          <p></p>
        </div>
        <div className="faq-item">
          <h3>What are your payment terms and conditions?</h3>
          <p></p>
        </div>
        <div className="faq-item">
          <h3>What makes you different from any other manufacturer?</h3>
          <p></p>
        </div>
        <footer>
          <button onClick={navigateToContact}>Contact Us</button>
        </footer>
      </div>
    </div>
  );
}

export default HomePage;
