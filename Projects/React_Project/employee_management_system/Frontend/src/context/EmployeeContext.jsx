import React, { createContext, useState } from "react";

export const EmployeeDataContext = createContext();

const EmployeeContext = ({ children }) => {
  const [employee, setEmployee] = useState({
    email: "",
    firstName: "",
    lastName: "",
    gender: "",
  });

  return (
    <div>
      <EmployeeDataContext.Provider value={{ employee, setEmployee }}>
        {children}
      </EmployeeDataContext.Provider>
    </div>
  );
};

export default EmployeeContext;
