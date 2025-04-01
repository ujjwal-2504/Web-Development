import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { Card, CardContent } from "../../components/ui/Card";
import { useState, useContext } from "react";
import Navbar from "../../components/Others/Navbar";
import axios from "axios";
import { EmployeeDataContext } from "../../context/EmployeeContext";

export default function EmployeeLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { employee, setEmployee } = useContext(EmployeeDataContext);

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const employeeData = { email: email, password: password };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/employee/login`,
        employeeData
      );

      console.log(employee);
      console.log("The status is:", response.status);

      if (response.status === 200) {
        const data = response.data;
        setEmployee(data.employee);
        localStorage.setItem("token", data.token);
        resetForm();
        navigate("/employee");
      }
    } catch (error) {
      if (error.response?.status === 401) {
        alert(`${error.response.data.message}`);
      } else {
        alert("An error occurred during login");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Login Form */}
      <div className="flex justify-center items-center h-[80vh]">
        <Card className="w-full max-w-md p-6">
          <CardContent>
            <h2 className="text-2xl font-bold text-center text-blue-600">
              Employee Login
            </h2>
            <form onSubmit={handleSubmit} className="mt-6">
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-300 placeholder-gray-500 text-gray-700 border-none"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-300 placeholder-gray-500 border-none"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full mt-4">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
