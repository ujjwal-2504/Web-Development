import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import {
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AdminHomePage from "./pages/AdminHomePage";
import HomePage from "./pages/HomePage";
import EmployeeHomePage from "./pages/EmployeeHomePage";
import AdminLogin from "./components/Auth/AdminLogin";
import EmployeeLogin from "./components/Auth/EmployeeLogin";
import { UserDataContext } from "./context/UserContext";
import NewEmployee from "./components/Auth/NewEmployee";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminHomePage />} />
        <Route path="/employee" element={<EmployeeHomePage />} />
        <Route path="/new/employee" element={<NewEmployee />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/employee/login" element={<EmployeeLogin />} />
      </Routes>
    </div>
  );
};

export default App;
