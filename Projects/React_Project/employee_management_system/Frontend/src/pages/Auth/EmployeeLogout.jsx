import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EmployeeLogout = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/employee/logout`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          localStorage.removeItem("token");
          console.log(response);
          navigate("/");
        }
      });
  }, [navigate, token]);

  return <div>EmployeeLogout</div>;
};

export default EmployeeLogout;
