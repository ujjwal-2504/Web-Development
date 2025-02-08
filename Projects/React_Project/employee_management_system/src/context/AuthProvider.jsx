import React, { createContext, useState, useEffect } from "react";
import { getLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  function handleSetUserData(data) {
    setUserData(data);
  }

  useEffect(() => {
    const { employees, admin } = getLocalStorage();
    handleSetUserData({ employees, admin });
  }, []);

  return (
    <div>
      <AuthContext.Provider
        value={{ userData, setUserData }}
        setUserData={setUserData}
      >
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
