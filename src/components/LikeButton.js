import React, { useState } from "react";

const LikeButton = ({ items }) => {
  const [likes, setLikes] = useState(0);
  const [likedItem, setLikedItem] = useState("");

  const handleLikeClick = () => {
    if (likes > 0 && likedItem === items) {
      setLikes(0);
      setLikedItem("");
    } else {
      setLikes(likes + 1);
      setLikedItem(items);
    }
  };

  return (
    <div>
      <div onClick={handleLikeClick}>
        <i className="fa fa-heart text-danger"></i>
        {likes}
      </div>
      {likes > 0 && <p>{likedItem}</p>}
    </div>
  );
};

export default LikeButton;
