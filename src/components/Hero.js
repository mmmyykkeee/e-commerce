import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Shop from "./Shop";

function Hero() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleMenuButtonClick = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);

  const handleSubMenuButtonClick = () => {
    setIsSubMenuVisible(!isSubMenuVisible);
  };

  const [isSubMenu2Visible, setIsSubMenu2Visible] = useState(false);

  const handleSubMenu2ButtonClick = () => {
    setIsSubMenu2Visible(!isSubMenu2Visible);
  };

  const [isSubMenu3Visible, setIsSubMenu3Visible] = useState(false);

  const handleSubMenu3ButtonClick = () => {
    setIsSubMenu3Visible(!isSubMenu3Visible);
  };

  const [isSubMenu4Visible, setIsSubMenu4Visible] = useState(false);


  const handleSearchBarCategories = () => {
    setIsSubMenu4Visible(!isSubMenu4Visible);
  };
  ;

  return (
    <div>
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="hero__categories">
                <div
                  className="hero__categories__all"
                  onClick={handleMenuButtonClick}
                >
                  <i className="fa fa-bars"></i>
                  <span>All Departments</span>
                </div>
                <ul style={{ display: isMenuVisible ? "none" : "block" }}>
                  <li className="align-items-bottom">
                    Farm Products
                    <i
                      class="bi bi-caret-down-fill mx-2 "
                      onClick={handleSubMenuButtonClick}
                    ></i>
                    <ul
                      className="border border-white pt-0 px-2"
                      style={{ display: isSubMenuVisible ? "none" : "block" }}
                    >
                      <li>Cabbage</li>
                      <li>Avocado</li>
                      <li>Potatoes</li>
                      <li>Arrow-roots (Nduma)</li>
                      <li>Sweet Potatoes</li>
                      <li>Bananas</li>
                    </ul>
                  </li>
                  <li>
                    Animal Products
                    <i
                      class="bi bi-caret-down-fill mx-2 "
                      onClick={handleSubMenu2ButtonClick}
                    ></i>
                    <ul
                      className="border border-white pt-0 px-2"
                      style={{ display: isSubMenu2Visible ? "none" : "block" }}
                    >
                      <li>Eggs</li>
                      <li>Milk</li>
                      <li>Manure</li>
                      <li>Fresh Meat</li>
                    </ul>
                  </li>
                  <li>
                    Animals
                    <i
                      class="bi bi-caret-down-fill mx-2 "
                      onClick={handleSubMenu3ButtonClick}
                    ></i>
                    <ul
                      className="border border-white pt-0 px-2"
                      style={{
                        display: isSubMenu3Visible ? "none" : "block",
                      }}
                    >
                      <li>Chicken</li>
                      <li>Cow</li>
                      <li>Pig</li>
                      <li>Rabbit</li>
                    </ul>
                  </li>
                
                </ul>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="hero__search">
                <div className="hero__search__form">
                  <form action="#">
                    <div className="hero__search__categories">
                      All Categories
                      <span
                        className="arrow_carrot-down"
                        onClick={handleSearchBarCategories}
                      ></span>
                     
                    </div>
                    <input
                      type="text"
                      placeholder="What are you looking for?"
                    />
                    <button type="submit" className="site-btn">
                      SEARCH
                    </button>
                  </form>
                </div>
                <div className="hero__search__phone">
                  <div className="hero__search__phone__icon">
                    <i className="fa fa-phone"></i>
                  </div>
                  <div className="hero__search__phone__text">
                    <h5>704-768-7449</h5>
                    <span>24/7 Support</span>
                  </div>
                </div>
              </div>
              <div
                className="hero__item set-bg"
                data-setbg="img/hero/banner.jpg"
              >
                <div className="hero__text">
                  <span>FRESH FRUIT</span>
                  <h2>
                    Vegetable <br />
                    100% Organic
                  </h2>
                  <p>Trust us to deliver</p>
                  <Link to="/Shop" className="primary-btn">
                    <i class="bi bi-basket-fill mx-2"></i> SHOP NOW
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Routes>
          <Route path="/Shop" element={<Shop />} />
        </Routes>
      </section>
    </div>
  );
}

export default Hero;
