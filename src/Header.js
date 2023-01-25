import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Swal from "sweetalert2";
import Home from "./Home";
import Footer from "./Footer";
import Shopinfo from "./Shopinfo";
import Shop from "./Shop";
import Blog from "./Blog";
import ShoppingCart from "./ShoppingCart";
import Checkout from "./Checkout";
import BlogDetails from "./BlogDetails";
import Contact from "./Contact";
import Upload from "./Upload";
import Login from "./Login";

function Header() {
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  const handleSellButtonClick = () => {
    setShowLoginPrompt(true);
  };

  if (showLoginPrompt) {
    Swal.fire({
      title: "Please log in to continue",
      html:
        '<a href="#" class="btn btn-primary mr-2">Log in with Facebook</a>' +
        '<a href="#" class="btn btn-danger">Log in with Google</a>',
      showCancelButton: true,
      confirmButtonText: "Cancel",
      onClose: () => setShowLoginPrompt(false),
    });
  }

  return (
    <header>
      <div className="container">
        <header className="header">
          <div className="header__top">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="header__top__left">
                    <ul>
                      <li>
                        <i className="fa fa-envelope"></i> example@domain.com |
                      </li>
                      <li>Buy and Sell Agricultural Products</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="header__top__right">
                    <div className="header__top__right__social">
                      <a href="https://www.facebook.com">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="https://www.twitter.com">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </div>
                    <div className="header__top__right__language">
                      <img src="img/language.png" alt="" />
                      <div>English</div>
                      <span className="arrow_carrot-down"></span>
                      <ul>
                        <li>
                          <a href="#">Spanish</a>
                        </li>
                        <li>
                          <a href="#">English</a>
                        </li>
                      </ul>
                    </div>
                    <div className="header__top__right__auth mx-2 px-2 border btn btn-primary">
                      <Link to="/Login">
                        <i className="fa fa-user "></i> Login
                      </Link>
                    </div>
                    |
                    <div className="header__top__right__auth mx-2 border px-2 btn btn-primary">
                      <Link to="/Login">
                        <i className="fa fa-user "></i> Register
                      </Link>
                    </div>
                    |
                    <button
                      className="btn btn-danger mx-2 px-2"
                      onClick={handleSellButtonClick}
                    >
                      Sell
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="header__logo">
                  <Link to="/">
                    <img src="img/logo.png" alt="" className="w-2" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <nav className="header__menu">
                  <ul>
                    <li className="active">
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/Shop">Shop</Link>
                    </li>
                    <li>
                      <Link to="#">Pages</Link>
                      <ul className="header__menu__dropdown">
                        <li>
                          <Link a="/Shopinfo">Shop Details</Link>
                        </li>
                        <li>
                          <Link to="/ShoppingCart">Shoping Cart</Link>
                        </li>
                        <li>
                          <Link to="/Checkout">Check Out</Link>
                        </li>
                        <li>
                          <Link to="/BlogDetails">Blog Details</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/Blog">Blog</Link>
                    </li>
                    <li>
                      <Link to="/Contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-lg-3">
                <div className="header__cart">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-heart"></i> <span>1</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-shopping-bag"></i> <span>3</span>
                      </a>
                    </li>
                  </ul>
                  <div className="header__cart__price">
                    <span>$10.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hamburger__open ">
              <i className="fa fa-bars"></i>
            </div>
          </div>
        </header>
      </div>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/ShopInfo" element={<Shopinfo />} />
        <Route path="/ShoppingCart" element={<ShoppingCart />} />
        <Route path="/BlogDetails" element={<BlogDetails />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </header>
  );
}

export default Header;
