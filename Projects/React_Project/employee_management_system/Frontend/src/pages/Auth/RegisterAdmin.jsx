import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { Card, CardContent } from "../../components/ui/Card";
import { useState } from "react";
import Navbar from "../../components/Others/Navbar";
import axios from "axios";
import AdminContext, { AdminDataContext } from "../../context/AdminContext";

export default function RegisterAdmin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    password: "",
  });

  const { adminData, setAdminData } = React.useContext(AdminDataContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      gender: "",
      email: "",
      password: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newAdmin = { ...formData };
    resetForm();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/admin/register`,
        newAdmin
      );

      if (response.status === 201) {
        const data = response.data;
        setAdminData({ ...data.newAdmin, isLoggedIn: true });
        localStorage.setItem("token", data.token);
        navigate("/admin");
      }
      console.log(response);
    } catch (error) {
      console.error("Error during admin registration:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Admin Registeration Form */}
      <div className="flex justify-center items-center h-[80vh] mt-5 ">
        <Card className="w-1/2 p-6">
          <CardContent>
            <h2 className="text-2xl font-bold text-center text-blue-600">
              Admin Registration Form
            </h2>
            <form onSubmit={handleSubmit} className="mt-6 px-4">
              <div className="flex gap-4">
                <div className="mb-4 flex-1">
                  <label className="block text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 bg-gray-300 placeholder-gray-500 border-none"
                    placeholder="Enter first name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4 flex-1">
                  <label className="block text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 bg-gray-300 placeholder-gray-500 border-none"
                    placeholder="Enter last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Gender</label>
                <select
                  name="gender"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 bg-gray-300 placeholder-gray-500 border-none"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="" defaultChecked>
                    Select Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 bg-gray-300 placeholder-gray-500 border-none"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 bg-gray-300 placeholder-gray-500 border-none"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button type="submit" className="w-full mt-4">
                Register
              </Button>
            </form>
          </CardContent>
          <div className="text-black text-center">
            Already an admin?{" "}
            <Link className="text-blue-700 font-bold" to="/admin/login">
              Login as Admin
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
