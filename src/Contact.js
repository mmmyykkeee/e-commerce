import React from 'react'
import Header from "./Header";
import Footer from "./Footer";

function Contact() {
  return (
    <div>
      <Header />
      <section class="hero">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <div class="hero__categories">
                <div class="hero__categories__all">
                  <i class="fa fa-bars"></i>
                  <span>All Departments</span>
                </div>
                <ul>
                  <li>
                    <a href="#">Fresh Meat</a>
                  </li>
                  <li>
                    <a href="#">Vegetables</a>
                  </li>
                  <li>
                    <a href="#">Fruit & Nut Gifts</a>
                  </li>
                  <li>
                    <a href="#">Fresh Berries</a>
                  </li>
                  <li>
                    <a href="#">Ocean Foods</a>
                  </li>
                  <li>
                    <a href="#">Butter & Eggs</a>
                  </li>
                  <li>
                    <a href="#">Fastfood</a>
                  </li>
                  <li>
                    <a href="#">Fresh Onion</a>
                  </li>
                  <li>
                    <a href="#">Papayaya & Crisps</a>
                  </li>
                  <li>
                    <a href="#">Oatmeal</a>
                  </li>
                  <li>
                    <a href="#">Fresh Bananas</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-9">
              <div class="hero__search">
                <div class="hero__search__form">
                  <form action="#">
                    <div class="hero__search__categories">
                      All Categories
                      <span class="arrow_carrot-down"></span>
                    </div>
                    <input
                      type="text"
                      placeholder="What are you looking for?"
                    />
                    <button type="submit" class="site-btn">
                      SEARCH
                    </button>
                  </form>
                </div>
                <div class="hero__search__phone">
                  <div class="hero__search__phone__icon">
                    <i class="fa fa-phone"></i>
                  </div>
                  <div class="hero__search__phone__text">
                    <h5>704-768-7449</h5>
                    <span>24/7 Support</span>
                  </div>
                </div>
              </div>
              <div class="hero__item set-bg" data-setbg="img/hero/banner.jpg">
                <div class="hero__text">
                  <span>FRESH FRUIT</span>
                  <h2>
                    Vegetable <br />
                    100% Organic
                  </h2>
                  <p>Free Pickup and Delivery Available</p>
                  <a href="#" class="primary-btn">
                    SHOP NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        class="breadcrumb-section set-bg"
        data-setbg="img/breadcrumb.jpg"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <div class="breadcrumb__text">
                <h2>Contact Us</h2>
                <div class="breadcrumb__option">
                  <a href="./index.html">Home</a>
                  <span>Contact Us</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="contact spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-6 text-center">
              <div class="contact__widget">
                <span class="icon_phone"></span>
                <h4>Phone</h4>
                <p>704-768-7449</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 text-center">
              <div class="contact__widget">
                <span class="icon_pin_alt"></span>
                <h4>Address</h4>
                <p>1317 Harry Place 28204 NC</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 text-center">
              <div class="contact__widget">
                <span class="icon_clock_alt"></span>
                <h4>Open time</h4>
                <p>10:00 am - 23:00 pm</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 text-center">
              <div class="contact__widget">
                <span class="icon_mail_alt"></span>
                <h4>Email</h4>
                <p>info@ogami.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10962.792225115849!2d15.6691062!3d46.6129698!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2cb1d6206b041%3A0x80c71d39fbc13e9!2sHarry%20Pl%2C%20Thonotosassa%2C%20FL%2033527%2C%20USA!5e0!3m2!1sen!2ssi!4v1592214730014!5m2!1sen!2ssi"
          width="600"
          height="450"
          frameborder="0"
          style="border:0;"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
        <div class="map-inside">
          <i class="icon_pin"></i>
          <div class="inside-widget">
            <h4>North Carolina</h4>
            <ul>
              <li>Phone: 704-768-7449</li>
              <li>Add: 1317 Harry Place, 28204 NC </li>
            </ul>
          </div>
        </div>
          </div>
        <div class="contact-form spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="contact__form__title">
                        <h2>Leave Message</h2>
                    </div>
                </div>
            </div>
            <form action="#">
                <div class="row">
                    <div class="col-lg-6 col-md-6">
                        <input type="text" placeholder="Your name"/>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <input type="text" placeholder="Your Email"/>
                    </div>
                    <div class="col-lg-12 text-center">
                        <textarea placeholder="Your message"></textarea>
                        <button type="submit" class="site-btn">SEND MESSAGE</button>
                    </div>
                </div>
            </form>
        </div>
    </div>  
      <Footer />
    </div>
  );
}

export default Contact
