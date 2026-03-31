import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white text-center py-4 shadow-inner mt-5">
      <p className="text-sm">
        © {new Date().getFullYear()} Employee Management System. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
