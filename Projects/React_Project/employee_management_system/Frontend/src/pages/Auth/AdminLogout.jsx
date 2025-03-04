import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogout = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/admin/logout`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          localStorage.removeItem("token");
          navigate("/");
        }
      });
  }, [navigate, token]);

  return <div>AdminLogout</div>;
};

export default AdminLogout;
