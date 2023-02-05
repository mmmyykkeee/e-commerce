import React from 'react'
import {Link} from 'react-router-dom'
import WishedProducts from './WishedProducts';
import Footer from './Footer';

function WishList({img, ProductName, Price, Quantity, Total}) {
  return (
    <div>
      <section className="shoping-cart spad">
        <div className="container">
          <div className="rw">
            <div className="col-lg-12">
              <div className="shoping__cart__table">
                <table>
                  <thead>
                    <nav className='d-flex justify-content-between'>
                      <b className=' w-50 text-left'>Product</b>
                      <b className=' w-2 text-left'>Price</b>
                      <b className='w-25'>Quantity</b>
                      <b>Total</b>
                    </nav>
                    <hr />
                  </thead>
                  <tbody>
                    <tr>
                      <WishedProducts
                        img="img/cart/cart-1.jpg"
                        ProductName="Vegetable"
                        Price="100"
                        Quantity="1"
                        Total="100"
                      />
                      <WishedProducts
                        img="img/cart/cart-2.jpg"
                        ProductName="Fresh Garden Vegetable"
                        Price="40"
                        Quantity="1"
                        Total="40"
                      />
                      <WishedProducts
                        img="img/cart/cart-3.jpg"
                        ProductName="Organic Bananas"
                        Price="70"
                        Quantity="1"
                        Total="70"
                      />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="shoping__cart__btns">
                <Link
                  to="/Buy"
                  className="primary-btn cart-btn btn btn-primary"
                >
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

export default WishList








 