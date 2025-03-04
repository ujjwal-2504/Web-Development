import React, { createContext, useState } from "react";

// Create the AdminContext
export const AdminDataContext = createContext();

// Create the AdminProvider component
const AdminContext = ({ children }) => {
  const [adminData, setAdminData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    gender: "",
  });

  return (
    <AdminDataContext.Provider value={{ adminData, setAdminData }}>
      {children}
    </AdminDataContext.Provider>
  );
};

export default AdminContext;
