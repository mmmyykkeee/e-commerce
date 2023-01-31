import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function WishList() {
  return (
    <div>
      <section className="shoping-cart spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="shoping__cart__table">
                <table>
                  <thead>
                    <tr>
                      <th className="shoping__product">Products</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="shoping__cart__item">
                        <img src="img/cart/cart-1.jpg" alt="" />
                        <h5>Vegetable’s Package</h5>
                      </td>
                      <td className="shoping__cart__price">Kshs. 55.00</td>
                      <td className="shoping__cart__quantity">
                        <div className="quantity">
                          <div className="pro-qty">
                            <input type="text" value="1" />
                          </div>
                        </div>
                      </td>
                      <td className="shoping__cart__total">Kshs. 110.00</td>
                      <td className="shoping__cart__item__close">
                        <span className="icon_close"></span>
                      </td>
                    </tr>
                    <tr>
                      <td className="shoping__cart__item">
                        <img src="img/cart/cart-2.jpg" alt="" />
                        <h5>Fresh Garden Vegetable</h5>
                      </td>
                      <td className="shoping__cart__price">Kshs. 39.00</td>
                      <td className="shoping__cart__quantity">
                        <div className="quantity">
                          <div className="pro-qty">
                            <input type="text" value="1" />
                          </div>
                        </div>
                      </td>
                      <td className="shoping__cart__total">Kshs. 39.99</td>
                      <td className="shoping__cart__item__close">
                        <span className="icon_close"></span>
                      </td>
                    </tr>
                    <tr>
                      <td className="shoping__cart__item">
                        <img src="img/cart/cart-3.jpg" alt="" />
                        <h5>Organic Bananas</h5>
                      </td>
                      <td className="shoping__cart__price">Kshs. 69.00</td>
                      <td className="shoping__cart__quantity">
                        <div className="quantity">
                          <div className="pro-qty">
                            <input type="text" value="1" />
                          </div>
                        </div>
                      </td>
                      <td className="shoping__cart__total">Kshs. 69.99</td>
                      <td className="shoping__cart__item__close">
                        <span className="icon_close"></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="shoping__cart__btns">
                <Link to="/Buy" className="primary-btn cart-btn btn btn-primary">
                  CONTINUE SHOPPING
                </Link>
                <a href="!#" className="primary-btn cart-btn cart-btn-right">
                  <span className="icon_loading"></span>
                  UPDATE CART
                </a>
              </div>
            </div>
            <div className="col-lg-6 border invisible">
              <div className="shoping__continue">
                <div className="shoping__discount">
                  <h5>Discount Codes</h5>
                  <form action="#">
                    <input type="text" placeholder="Enter your coupon code" />
                    <button type="submit" className="site-btn">
                      APPLY COUPON
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="shoping__checkout">
                <h5>Cart Total</h5>
                <ul>
                  <li>
                    Subtotal <span>Kshs. 454.98</span>
                  </li>
                  <li>
                    Total <span>Kshs. 454.98</span>
                  </li>
                </ul>
                <a href="!#" className="primary-btn">
                  PROCEED TO CHECKOUT
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default WishList;
