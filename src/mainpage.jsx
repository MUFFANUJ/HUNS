import React from "react";
import { useNavigate } from "react-router-dom";
import "./mainpage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "./assets/huns logo white.png";
import Why from "./assets/landing page why us.jpg";
import Brochure from "./assets/huns-brochure.pdf";
import Hoodie from "./assets/Hoodie.png";
import Tshirt from "./assets/Tshirt.png";
import Trouser from "./assets/lowers.png";


function HomePage({ setOption }) {
  const navigate = useNavigate();
  const navigateToContact = () => {
    navigate("/contact");
  };
  const navigateToProduct = (option) => {
    navigate("/product");
    setOption(option);
  };

  return (
    <div className="container">
      <header>
        <div className="logo">
          <img src={Logo} />
        </div>
        <nav>
          <a href={Brochure} download="HUNS-Brochure">
            Brochure
          </a>
          {/* <a href="#" onClick={navigateToContact}>
            Contact
          </a> */}
        </nav>
      </header>
      <section>
        <div className="hero">
          <h1>
            <strong>Quality</strong> <span>Garments</span>
            <br />
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
        <h2
          className="why"
          style={{ textAlign: "center", fontSize: "700", fontSize: "3.5rem" }}
        >
          Why Us?
        </h2>
        <div className="about">
          <div className="extra">
            <h2>
              <strong style={{ color: "orange" }}>Custom </strong>garment
              manufacturing and private labeling services
            </h2>
            <p>
              We specialize in providing high-quality custom garment
              manufacturing and private labeling services. Whether you need
              unique designs for your clothing line or want to create branded
              apparel business, we have the expertise and resources to bring
              your vision to life. Our team of skilled artisans and designers
              work closely with you to ensure every detail is perfect, from
              fabric selection to finishing touches. Be it t-shirts, hoodies,
              jackets or lowers, we have got you covered.
            </p>
          </div>

          <img src={Why} alt="About Us" />
        </div>
      </section>
      <section>
        <div className="features">
          <div className="feature">
            <div class="cardfeature">
              <div class="content">
                <div class="front front-b">{/*Bulk orders made easy*/}</div>
                <div class="back">
                  Need to place a large order? We've got you covered. Our
                  streamlined process and efficient production capabilities
                  allow us to handle bulk orders with ease, ensuring timely
                  delivery and consistent quality.
                </div>
              </div>
            </div>
          </div>
          <div className="feature">
            <div class="cardfeature">
              <div class="content">
                <div class="front front-e">
                  {/*Exceptional quality control*/}
                </div>
                <div class="back">
                  At our clothing manufacturing facility, we prioritize quality
                  control at every stage of production. From fabric inspection
                  to final packaging, we adhere to strict quality standards to
                  ensure that ev
                </div>
              </div>
            </div>
          </div>
          <div className="feature">
            <div class="cardfeature">
              <div class="content">
                <div class="front front-f">
                  {/*Fast and reliable shipping*/}
                </div>
                <div class="back">
                  We understand the importance of timely delivery. That's why we
                  have established reliable shipping partnerships to ensure your
                  orders reach you on time, no matter where you are located.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wedo">
        <h2 className="product-tag">What we do best?</h2>
        <div class="prodwrapper">
          <div class="prodcard">
            <p className="prodp">
              Discover our collection of high-quality hoodies, designed for
              comfort and style. Perfect for any season, our affordable hoodies
              offer the best in warmth and fashion. Shop now to find the perfect
              hoodie to elevate your wardrobe.
            </p>
            <div class="prodimage">
              <img src={Hoodie} className="prodimg" alt="" />
            </div>
            <div
              class="prodbutton"
              onClick={() => navigateToProduct("hoddies")}
            >
              Hoodie
            </div>
          </div>
          <div class="prodcard">
            <p className="prodp">
              Browse our selection of stylish and high-quality t-shirts, ideal
              for everyday wear. Our affordable t-shirts combine comfort and
              fashion, making them a must-have in any wardrobe. Shop now to
              upgrade your collection with the best t-shirts around.
            </p>
            <div class="prodimage">
              <img src={Tshirt} className="prodimg" alt="" />
            </div>
            <div
              class="prodbutton"
              onClick={() => navigateToProduct("tshirts")}
            >
              T-shirt
            </div>
          </div>
          <div class="prodcard">
            <p className="prodp">
              Explore our range of premium lowers, crafted for both durability
              and comfort. Our affordable lowers are perfect for any activity,
              from lounging to workouts. Find your ideal fit and enjoy top-notch
              quality without breaking the bank.
            </p>
            <div class="prodimage">
              <img
                src={Trouser}
                className="prodimg"
                alt=""
              />
            </div>
            <div class="prodbutton" onClick={() => navigateToProduct("lowers")}>
              Lowers
            </div>
          </div>
        </div>
      </section>
      <div className="faq">
        <h2>FAQ</h2>
        <div className="faq-item">
          <h3>What are minimum order quantities (MOQ)?</h3>
          <p>• We start with as low as 25 pieces.</p>
        </div>
        <div className="faq-item">
          <h3>What are your payment terms and conditions?</h3>
          <p>
            {" "}
            • We request 50% upfront on the placement of an order and 50% on the
            completion of your order.
          </p>
        </div>
        <div className="faq-item">
          <h3>What are your payment terms and conditions?</h3>
          <p>
            • Yes we can handel any type of customization you want on garments
          </p>
        </div>
        <div className="faq-item">
          <h3>What makes you different from any other manufacturer?</h3>
          <p>
            • Its simple we treat every client with utmost priority. Our aim is
            to help you succeed and make more money. Secondly we are not afraid
            of telling you the actual market prices of items so that even in
            future you do not order from us, you never pay an unfair price ever
            again. Honesty and loyalty are principles that we hold in high
            regard. Thirdly, we understand that the client may not always
            understand what product design might best suit their purpose, so we
            consult with them for free so that they make the best possible
            choices
          </p>
        </div>
        <footer>
          <button onClick={navigateToContact}>Contact Us</button>
        </footer>
      </div>
    </div>
  );
}

export default HomePage;
