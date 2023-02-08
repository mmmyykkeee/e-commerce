import React from "react";
import LikeButton from "./LikeButton";
import '../App.css'

function Items2({img,name,description}) {
  return (
    <div className="all-cards">
      <div className="row">
        <div className="container col-md-12">
          <div className="card">
            <div className="card-image">
              <img src={img} alt="" />
            </div>
            <div className="card-description">
              <p className="text-title text-white">{name}</p>
              <p className="text-body text-white m-1">{description}</p>
              <button className="text-dark d-flex align-items-center border border-dark w-75 m-auto btn btn-primary">
                <p className="m-auto text-white">Add to Wish-list</p>
                <LikeButton />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Items2;
