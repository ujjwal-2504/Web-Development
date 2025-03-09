import React, { createContext, useState } from "react";
import axios from "axios";

export const EmployeeDataContext = createContext();

const EmployeeContext = ({ children }) => {
  const [employee, setEmployee] = useState({
    email: "",
    firstName: "",
    lastName: "",
    gender: "",
  });

  // Function to refresh employee data from backend
  const refreshEmployeeData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/employee/profile`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (response.status === 200) {
        setEmployee(response.data);
      }
    } catch (error) {
      console.error("Error refreshing employee data:", error);
    }
  };

  return (
    <div>
      <EmployeeDataContext.Provider
        value={{ employee, setEmployee, refreshEmployeeData }}
      >
        {children}
      </EmployeeDataContext.Provider>
    </div>
  );
};

export default EmployeeContext;
