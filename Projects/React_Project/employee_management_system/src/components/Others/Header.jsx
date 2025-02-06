import React, { useState } from "react";

const Header = ({ data }) => {
  // const [username, setUsername] = useState("");

  // if (!data) setUsername("Admin");
  // else setUsername(data.firstName);

  const logOut = () => {
    localStorage.setItem("loggedInUser", "");
    window.location.reload();
  };

  return (
    <div className="flex items-center justify-between bg-[#1c1c1c] rounded-xl py-3 px-4">
      <h1 className="text-2xl font-medium">
        Hello, <span className="text-3xl font-semibold">Admin 👋</span>
      </h1>
      <button
        onClick={logOut}
        className="bg-red-500 text-white py-1 px-2 rounded-lg text-md font-medium"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
