import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br /> <span className="text-3xl font-semibold">Ujjwal 👋</span>
      </h1>
      <button className="bg-red-500 text-white py-2 px-4 rounded-lg text-lg font-medium">
        Log Out
      </button>
    </div>
  );
};

export default Header;
