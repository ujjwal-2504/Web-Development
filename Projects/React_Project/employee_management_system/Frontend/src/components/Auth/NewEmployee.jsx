import { Link } from "react-router-dom";
import { Button } from "../ui/Button";
import { Card, CardContent } from "../ui/Card";
import { useState } from "react";
import Navbar from "../Others/Navbar";
import axios from "axios";

export default function NewEmployeeForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newEmployee = formData;

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/employee`,
      newEmployee
    );

    setFormData({
      firstName: "",
      lastName: "",
      gender: "",
      email: "",
      password: "",
    });
    // Add form submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* New Employee Form */}
      <div className="flex justify-center items-center h-[80vh] mt-5 ">
        <Card className="w-1/2 p-6">
          <CardContent>
            <h2 className="text-2xl font-bold text-center text-blue-600">
              New Employee Form
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
                Add Employee
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
