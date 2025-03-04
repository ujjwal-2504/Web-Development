import React from "react";
import { Link } from "react-router-dom";

function Navbar({ who }) {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <Link to={"/"} className="text-2xl font-bold">
        Employee Management System
      </Link>
      {who && (
        <div>
          <Link to={`/${who}/logout`} className="mr-4">
            Logout
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
