import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const WishListLink = ({ itemCount }) => (
  <Link to="/WishList">
    <i className="fa fa-heart wish-list" title="Wish List"></i>
    <span>{itemCount}</span>
  </Link>
);

const mapStateToProps = (state) => ({
  itemCount: state.wishlist.items.length,
});

export default connect(mapStateToProps)(WishListLink);
