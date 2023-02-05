import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Swal from "sweetalert2";
import Home from "./Home";
import SellerDetails from "./SellerInfo";
import Buy from "./Buy";
import Blog from "./Blog";
import WishList from "./WishList";
import Checkout from "./Checkout";
import BlogDetails from "./BlogDetails";
import Contact from "./Contact";
import Upload from "./Upload";
import Login from "./Login";
import Register from "./Register";
import Chat from "./Chat";
import Items from "./Items";

function Header() {
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleFaBarsClick = () => {
    setShowMobileNav(!showMobileNav);
  };

  const handleSellButtonClick = () => {
    setShowLoginPrompt(true);
  };

  if (showLoginPrompt) {
    Swal.fire({
      title: "Please log in to continue",
      html:
        '<a href="https://www.facebook.com/v8.0/dialog/oauth" class="btn btn-primary bi bi-facebook mx-2 mr-2">Log in with Facebook</a>' +
        '<a href="https://accounts.google.com/o/oauth2/auth" class="btn btn-danger bi bi-google mx-2">Log in with Google</a>' +
        '<a href="/Register" class="btn btn-success bi bi-telephone-inbound-fill mr-4 mt-2">Login With Phone Number</a>',
      showCancelButton: true,
      confirmButtonText: "Exit",
      onClose: () => setShowLoginPrompt(false),
    });
  }

  return (
    <header>
      <div className="container-fluid">
        <header className="header">
          <div className="header__top">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="header__top__left">
                    <ul>
                      <li>
                        <i className="fa fa-envelope"></i> example@domain.com
                      </li>
                      <li>Buy and Sell Agricultural Products</li>
                      <Link to="/Chat">
                        <i class="bi bi-bell-fill mx-2 "></i>
                        <span>3</span>
                      </Link>
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
                    <div className="header__top__right__auth mx-2 px-2 border btn btn-success">
                      <Link to="/Login">
                        <i className="fa fa-user "></i> Login
                      </Link>
                    </div>
                    |
                    <div className="header__top__right__auth mx-2 border px-2 btn btn-success">
                      <Link to="/Register">
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
              <div className="col-lg-2">
                <div className="header__logo">
                  <Link to="/">
                    <img src="img/logo.png" alt="" className="w-2" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-8">
                <nav className="header__menu">
                  <ul>
                    <li className="actives">
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/Buy">Buy</Link>
                    </li>

                    <li>
                      <Link a="/SellerDetails">Seller Details</Link>
                    </li>
                    <li>
                      <Link to="/WishList">Wish-List</Link>
                    </li>

                    <li>
                      <Link to="/Contact">Support</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-lg-2">
                <div className="header__cart">
                  <ul>
                    <li>
                      <Link to="/WishList">
                        <i
                          className="fa fa-heart wish-list"
                          title="Wish List"
                        ></i>
                        <span>1</span>
                      </Link>
                    </li>
                  </ul>
                  <div className="header__cart__price">
                    <span>Kshs. 10.00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="hamburger__open">
              <i className="fa fa-bars" onClick={handleFaBarsClick}></i>
              {showMobileNav && (
                <div className="mobile-nav bg-secondary text-white ">
                  <ul className="mx-4 side-nav">
                    <li>
                      <Link to="/" onClick={handleFaBarsClick}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/Buy" onClick={handleFaBarsClick}>
                        Buy
                      </Link>
                    </li>

                    <li>
                      <Link to="/SellerDetails" onClick={handleFaBarsClick}>
                        Seller Details
                      </Link>
                    </li>
                    <li>
                      <Link to="/WishList" onClick={handleFaBarsClick}>
                        Wish List
                      </Link>
                    </li>

                    <li>
                      <Link to="/Contact" onClick={handleFaBarsClick}>
                        Support
                      </Link>
                    </li>
                    <div className="user-buttons p-2">
                      <Link to="/Login" onClick={handleFaBarsClick}>
                        <button className="btn btn-primary mx-2">Log In</button>
                      </Link>
                      <Link to="/Register" onClick={handleFaBarsClick}>
                        <button className="btn btn-primary mx-2">
                          Register
                        </button>
                      </Link>
                    </div>
                    <Link to="/Upload" onClick={handleFaBarsClick}>
                      <button className="btn btn-danger">Sell</button>
                    </Link>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </header>
      </div>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/Buy" element={<Buy />} />
        <Route path="/SellerDetails" element={<SellerDetails />} />
        <Route path="/WishList" element={<WishList />} />
        <Route path="/BlogDetails" element={<BlogDetails />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Upload" element={<Upload />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Items" element={<Items />} />
      </Routes>
    </header>
  );
}

export default Header;
