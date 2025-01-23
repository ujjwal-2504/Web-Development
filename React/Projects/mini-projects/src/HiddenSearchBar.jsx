import { useState } from "react";
import "./HiddenSearchBar.css";
import { FaSearch } from "react-icons/fa";

export const HiddenSearchBar = () => {
  const [showInput, setShowInput] = useState(false);
  const [bgColor, setBgColor] = useState("white");

  const handelClick = (e) => {
    setBgColor("#1a1a1a");

    if (e.target.className === "container") {
      setShowInput(false);
      setBgColor("white");
    }
  };

  return (
    <section
      className="container"
      style={{ backgroundColor: bgColor }}
      onClick={handelClick}
    >
      {showInput ? (
        <input type="text" placeholder="search..."></input>
      ) : (
        <FaSearch onClick={() => setShowInput(true)} />
      )}
    </section>
  );
};
