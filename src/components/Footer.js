import React from "react";

function Footer() {
  return (
    <div>
      <footer className="footer spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer__about">
                <div className="footer__about__logo">
                  <a href="./index.html">
                    <img src="img/logo.png" alt="" className="w-2" />
                  </a>
                </div>
                <ul>
                  <li>Address: Membley, Nairobi</li>
                  <li>Phone: 704-768-7449</li>
                  <li>Email: info@Mama Mboga.com</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 offset-lg-1 col-md-6 col-sm-6">
              <div className="footer__widget">
                <h6>Useful Links</h6>
                <ul>
                  <li>
                    <a href="!#">About Us</a>
                  </li>
                  <li>
                    <a href="!#">About Our Shop</a>
                  </li>
                  <li>
                    <a href="!#">Secure Shopping</a>
                  </li>
                  <li>
                    <a href="!#">Delivery infomation</a>
                  </li>
                  <li>
                    <a href="!#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="!#">Our Sitemap</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="!#">Who Are We</a>
                  </li>
                  <li>
                    <a href="!#">Our Services</a>
                  </li>
                  <li>
                    <a href="!#">Projects</a>
                  </li>
                  <li>
                    <a href="!#">Contact</a>
                  </li>
                  <li>
                    <a href="!#">Innovation</a>
                  </li>
                  <li>
                    <a href="!#">Testimonials</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="footer__widget">
                <h6>Join Our Newsletter Now</h6>
                <p>
                  Get E-mail updates about our latest shop and special offers.
                </p>
                <form action="#">
                  <input type="text" placeholder="Enter your mail" />
                  <button type="submit" className="site-btn">
                    Subscribe
                  </button>
                </form>
                <div className="footer__widget__social">
                  <a href="https://www.facebook.com">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="https://www.facebook.com">
                    <i className="bi bi-messenger"></i>
                  </a>
                  <a href="https://www.twitter.com">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="https://web.whatsapp.com">
                    <i className="bi bi-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="footer__copyright">
                <div className="footer__copyright__text">
                  <p>
                    Copyright &copy;
                    <script>
                      document.write(new Date().getFullYear());
                    </script>{" "}
                    All rights reserved | <b>Anthony Thuita</b>
                  </p>
                </div>
                <div className="footer__copyright__payment"></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
