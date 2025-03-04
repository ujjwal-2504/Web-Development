import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeContext, {
  EmployeeDataContext,
} from "../../context/EmployeeContext";
import axios from "axios";

const EmployeeProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const { employee, setEmployee } = React.useContext(EmployeeDataContext);

  useEffect(() => {
    if (!token) {
      navigate("/employee/login");
    }
  }, [token, navigate]);

  axios
    .get(`${import.meta.env.VITE_BASE_URL}/employee/profile`, {
      headers: {
        Authorization: `Bearer: ${token}`,
      },
    })
    .then((response) => {
      if (response.status === 200) {
        setEmployee(response.data);
        setIsLoading(false);
      }
    })
    .catch((err) => {
      console.log("Error from Employee Protected Wrapper: ", err);
      localStorage.removeItem("token");
      navigate("/employee/login");
    });

  if (isLoading) {
    return <>Loding...</>;
  }

  return <>{children}</>;
};

export default EmployeeProtectedWrapper;
