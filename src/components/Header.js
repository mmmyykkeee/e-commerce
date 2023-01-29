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
import Register from "./Register";
import Chat from "./Chat";
import { Button } from "react-bootstrap";

function Header() {
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleFaBarsClick = () => {
    setShowMobileNav(!showMobileNav);
  };


  // const handleExit = () => {
  //   Swal({
  //     title: "Are you sure?",
  //     text: "Once deleted, you will not be able to recover this imaginary file!",
  //     icon: "warning",
  //     buttons: true,
  //     dangerMode: true,
  //   }).then((willDelete) => {
  //     if (willDelete) {
  //       Swal("Poof! Your imaginary file has been deleted!", {
  //         icon: "success",
  //       });
  //     } else {
  //       Swal("Your imaginary file is safe!");
  //     }
  //   });
  // }

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
                    {/* <Link to="/Upload">
                      Upload
                    </Link> */}
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
                    <li className="actives">
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
                    <span>Kshs. 10.00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="hamburger__open ">
              <i className="fa fa-bars" onClick={handleFaBarsClick}></i>
              {showMobileNav && (
                <div className="mobile-nav">
                  <ul className="mx-4 side-nav">
                    <li>
                      <Link to="/" onClick={handleFaBarsClick}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/Shop" onClick={handleFaBarsClick}>
                        Shop
                      </Link>
                    </li>
                    <li onClick={handleFaBarsClick}>
                      Pages
                      <ul className="mx-4 d-down">
                        <li>
                          <Link to="/ShopInfo" onClick={handleFaBarsClick}>
                            Shop Details
                          </Link>
                        </li>
                        <li>
                          <Link to="/ShoppingCart" onClick={handleFaBarsClick}>
                            Shopping Cart
                          </Link>
                        </li>
                        <li>
                          <Link to="/Checkout" onClick={handleFaBarsClick}>
                            Checkout
                          </Link>
                        </li>
                        <li>
                          <Link to="/BlogDetails" onClick={handleFaBarsClick}>
                            BlogDetails
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/Blog" onClick={handleFaBarsClick}>
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link to="/Contact" onClick={handleFaBarsClick}>
                        Contacts
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
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
        <Route path="/Register" element={<Register />} />
        <Route path="/Upload" element={<Upload />} />
        <Route path="/Chat" element={<Chat />} />
      </Routes>
    </header>
  );
}

export default Header;
