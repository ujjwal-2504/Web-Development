import React, { useContext, useEffect, useState } from "react";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { Routes, Route } from "react-router-dom";
import AdminHomePage from "./pages/AdminHomePage";
import HomePage from "./pages/HomePage";
import EmployeeHomePage from "./pages/EmployeeHomePage";
import AdminLogin from "./pages/Auth/AdminLogin";
import AdminLogout from "./pages/Auth/AdminLogout";
import EmployeeLogin from "./pages/Auth/EmployeeLogin";
import NewEmployee from "./pages/Auth/NewEmployee";
import RegisterAdmin from "./pages/Auth/RegisterAdmin";
import EmployeeProtectedWrapper from "./pages/Auth/EmployeeProtectedWrapper";
import EmployeeLogout from "./pages/Auth/EmployeeLogout";
import AdminProtectedWrapper from "./pages/Auth/AdminProtectedWrapper";

// Test section
import AllTask from "./components/Others/AllTask";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/employee"
          element={
            <EmployeeProtectedWrapper>
              <EmployeeHomePage />
            </EmployeeProtectedWrapper>
          }
        />
        <Route path="/employee/new" element={<NewEmployee />} />
        <Route path="/employee/all-tasks" element={<AllTask />} />
        <Route path="/employee/login" element={<EmployeeLogin />} />
        <Route path="/employee/logout" element={<EmployeeLogout />} />
        <Route
          path="/admin"
          element={
            <AdminProtectedWrapper>
              <AdminHomePage />
            </AdminProtectedWrapper>
          }
        />
        <Route path="/admin/register" element={<RegisterAdmin />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/logout" element={<AdminLogout />} />
      </Routes>
    </div>
  );
};

export default App;
