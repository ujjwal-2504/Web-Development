import { useContext, useState, useEffect } from "react";
import { AdminDataContext } from "../context/AdminContext";
import Navbar from "../components/Others/Navbar";

const ManageTeams = () => {
  const { adminData } = useContext(AdminDataContext);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar who="admin" data={adminData} />;
    </div>
  );
};

export default ManageTeams;
