import { useState } from "react";

export default function LikeButton() {
  let [isLiked, setIsLiked] = useState(false);

  let clicked = () => {
    setIsLiked(!isLiked);
  };

  let boxStyle = {
    border: "0.2rem solid #ffd43b",
    backgroundColor: "#ffd43b",
    padding: "1rem",
    borderRadius: "50%",
  };

  return (
    <div>
      <p style={!isLiked ? boxStyle : null}>
        {isLiked ? (
          <i
            onClick={clicked}
            className="fa-solid fa-heart fa-2xl"
            style={{ color: "#ffd43b" }}
          ></i>
        ) : (
          <i
            onClick={clicked}
            className="fa-solid fa-heart fa-2xl"
            style={{ color: "#242424" }}
          ></i>
        )}
      </p>
    </div>
  );
}
