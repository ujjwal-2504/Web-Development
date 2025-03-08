import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Card, CardContent } from "../components/ui/Card";
import { Briefcase, Users, PlusCircle } from "lucide-react";
import AddTaskIcon from "@mui/icons-material/AddTask";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Navbar from "../components/Others/Navbar";
import { AdminDataContext } from "../context/AdminContext";
import { useContext } from "react";

export default function AdminHomePage() {
  const { adminData } = useContext(AdminDataContext);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar who={"admin"} data={adminData} />

      {/* Quick Links */}

      <div className="container mx-auto p-2 flex gap-2 bg-indigo-300 mt-2">
        <CardContent className=" flex flex-col w-full items-center text-center gap-2">
          <Link
            to="/employees"
            id="employees"
            className="w-full flex items-center justify-center gap-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Briefcase size={40} />
            <span>View Employees</span>
          </Link>
        </CardContent>

        <CardContent className=" flex flex-col w-full items-center text-center gap-2">
          <Link
            to={`/assign-task/${adminData._id}`}
            id="employees"
            className="w-full flex items-center justify-center gap-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <AddTaskIcon sx={{ fontSize: 40 }} className="text-emerald-400" />
            <span>Assign Tasks</span>
          </Link>
        </CardContent>

        <CardContent className=" flex flex-col w-full items-center text-center gap-2">
          <Link
            to="/manage-teams"
            id="teams"
            className="w-full flex items-center justify-center gap-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Users size={40} className="text-green-600" />
            <span>Manage Teams</span>
          </Link>
        </CardContent>

        <CardContent className=" flex flex-col w-full items-center text-center gap-2">
          <Link
            id="allTasks"
            to="/employee/new"
            className="w-full flex items-center justify-center gap-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <PlusCircle size={40} className="text-green-200" />
            <span>Add Employee</span>
          </Link>
        </CardContent>
      </div>
    </div>
  );
}
