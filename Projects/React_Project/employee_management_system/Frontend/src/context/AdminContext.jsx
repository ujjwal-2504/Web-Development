import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Create the AdminContext
export const AdminDataContext = createContext();

// Create the AdminProvider component
const AdminContext = ({ children }) => {
  const token = localStorage.getItem("token");

  const [adminData, setAdminData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    gender: "",
    _id: "", // Ensure _id exists in the initial state
    allEmpData: [], // Initialize allEmpData to avoid undefined issues
  });

  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!token) {
  //     navigate("/admin/login");
  //   }
  // }, [token, navigate]);

  useEffect(() => {
    if (!adminData._id) return; // Ensure _id is valid before making the request

    axios
      .get(
        `${import.meta.env.VITE_BASE_URL}/admin/${adminData._id}/get-all-employee`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          setAdminData({ ...adminData, allEmpData: res.data });
        }
      })
      .catch((err) => {
        console.log("Error from Admin Context: ", err);
        navigate("/admin");
      });
  }, [adminData._id, navigate]); // Depend on adminData._id

  return (
    <AdminDataContext.Provider value={{ adminData, setAdminData }}>
      {children}
    </AdminDataContext.Provider>
  );
};

export default AdminContext;
