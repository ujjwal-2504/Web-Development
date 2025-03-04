import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminContext, { AdminDataContext } from "../../context/AdminContext";
import axios from "axios";

const AdminProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const { adminData, setAdminData } = React.useContext(AdminDataContext);

  useEffect(() => {
    if (!token) {
      navigate("/admin/login");
    }
  }, [token, navigate]);

  axios
    .get(`${import.meta.env.VITE_BASE_URL}/admin/profile`, {
      headers: {
        Authorization: `Bearer: ${token}`,
      },
    })
    .then((response) => {
      if (response.status === 200) {
        setAdminData(response.data.admin);
        setIsLoading(false);
      }
    })
    .catch((err) => {
      console.log("Error from Admin Protected Wrapper: ", err);
      localStorage.removeItem("token");
      navigate("/admin/login");
    });

  if (isLoading) {
    return <>Loding...</>;
  }

  return <>{children}</>;
};

export default AdminProtectedWrapper;
