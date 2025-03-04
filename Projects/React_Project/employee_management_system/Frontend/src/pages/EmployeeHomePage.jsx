import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Card, CardContent } from "../components/ui/Card";
import { Briefcase, Users, PlusCircle } from "lucide-react";
import Navbar from "../components/Others/Navbar";
import { EmployeeDataContext } from "../context/EmployeeContext";

export default function EmployeeHomePage() {
  const { employee } = useContext(EmployeeDataContext);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar who="employee" />

      {/* Display Employee Information */}
      <div className="container mx-auto p-8 text-black">
        <h1 className="text-2xl font-bold">
          Welcome, {employee.firstName} {employee.lastName}
        </h1>
        <p className="text-gray-600">Email: {employee.email}</p>
        <p className="text-gray-600">Gender: {employee.gender}</p>
      </div>

      {/* Quick Links */}
      <div className="container mx-auto p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Briefcase size={40} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-neutral-800">
              View Tasks
            </h3>
            <p className="text-gray-600">See the list of all tasks</p>
            <Button asChild className="mt-4">
              <Link to="/employees">All Tasks</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Users size={40} className="text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-neutral-800">Team</h3>
            <p className="text-gray-600">View Team Progress</p>
            <Button asChild className="mt-4">
              <Link to="/teams">View My Teams</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex flex-col items-center text-center">
            <PlusCircle size={40} className="text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold text-neutral-800">Tasks</h3>
            <p className="text-gray-600">Your tasks and task status</p>
            <Button asChild className="mt-4">
              <Link to="/add-employee">View My Tasks</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
