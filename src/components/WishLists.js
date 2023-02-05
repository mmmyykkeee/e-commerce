import React, { useState } from "react";

const LikeButton = ({ item }) => {
  const [likes, setLikes] = useState(0);
  const [likedItem, setLikedItem] = useState("");

  const handleLikeClick = () => {
    if (likes > 0 && likedItem === item) {
      setLikes(0);
      setLikedItem("");
    } else {
      setLikes(likes + 1);
      setLikedItem(item);
    }
  };

  return { likes, likedItem, handleLikeClick };
};

const LikedList = ({ likes, likedItem }) => (
  <div>
    <h2>Likes</h2>
    <ul>
      {likes.map((like, index) => (
        <li key={index}>{like}</li>
      ))}
    </ul>
  </div>
);

const WishLists = () => {
  const [likes, setLikes] = useState([]);
  const [likedItem, setLikedItem] = useState("");

  const handleLikeClick = () => {
    setLikes([...likes, likedItem]);
  };

  return (
    <div>
      <LikeButton
        item={likedItem}
        handleLikeClick={handleLikeClick}
        setLikes={setLikes}
        setLikedItem={setLikedItem}
      />
      <LikedList likes={likes} />
    </div>
  );
};

export default WishLists;
