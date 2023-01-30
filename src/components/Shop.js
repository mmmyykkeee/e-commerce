import { React } from "react";
import Footer from "./Footer";
import Hero from "./Hero";
import Items from "./Items";

function Shop() {
  
  return (
    <div>
      <Hero />
      <section
        className="breadcrumb-section set-bg"
        data-setbg="img/breadcrumb.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb__text">
                <h2>Mama Mboga Shop</h2>
                <div className="breadcrumb__option">
                  <a href="./index.html">Home</a>
                  <span>Shop</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product spad">
        <div className="container">
        

          <Items />
        </div>
      </section>
      <Footer />
      
    </div>
  );
}

export default Shop;
