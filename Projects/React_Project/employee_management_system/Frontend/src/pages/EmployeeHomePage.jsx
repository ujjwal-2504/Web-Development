import React, { useContext, useState, useEffect } from "react";
import { Card, CardContent } from "../components/ui/Card";
import { Briefcase, Users, PlusCircle } from "lucide-react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Navbar from "../components/Others/Navbar";
import { EmployeeDataContext } from "../context/EmployeeContext";
import EmployeeDashboard from "../components/Dashboard/EmployeeDashboard";
import AllTasks from "../components/sections/AllTasks";
import MyTeam from "../components/sections/MyTeam";
import axios from "axios";

export default function EmployeeHomePage() {
  const { employee } = useContext(EmployeeDataContext);
  const [selectedOption, setSelectedOption] = useState("dashboard");
  const [allEmpTasks, setAllEmpTasks] = useState([]);

  const handelOptions = (option) => {
    setSelectedOption(option);
  };

  const getAllEmpTasks = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/task/all`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (response.status === 200) {
        setAllEmpTasks(response.data);
      }
    } catch (error) {
      console.error(
        "Error in getting all employee tasks:",
        error.response ? error.response.data : error.message
      );
    }
  };

  useEffect(() => {
    getAllEmpTasks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar who="employee" data={employee} />

      {/* Quick Links */}
      <div className="w-full p-2 flex gap-2 bg-gray-400 h-40 mt-2">
        <Card className="flex-1 h-full pt-2">
          <CardContent className=" flex flex-col flex-1 items-center text-center gap-2">
            <h2 className="text-neutral-900 text-xl">My tasks</h2>
            <button
              id="dashboard"
              className="w-full flex items-center justify-center gap-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              onClick={() => handelOptions("dashboard")}
            >
              <DashboardIcon
                sx={{ fontSize: 40 }}
                className="text-orange-300"
              />
              <span>Dashboard</span>
            </button>
          </CardContent>
        </Card>

        <Card className=" flex-1 h-full pt-2">
          <CardContent className=" flex flex-col flex-1 items-center text-center gap-2">
            <h2 className="text-neutral-900 text-xl">View Team Progress</h2>
            <button
              id="myTeam"
              className="w-full flex items-center justify-center gap-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              onClick={() => handelOptions("myTeam")}
            >
              <Users size={40} className="text-green-600" />
              <span>View My Team</span>
            </button>
          </CardContent>
        </Card>

        <Card className=" flex-1  h-full pt-2">
          <CardContent className=" flex flex-col flex-1 items-center text-center gap-2">
            <h2 className="text-neutral-900 text-xl">
              See the list of all tasks
            </h2>
            <button
              id="allTasks"
              className="w-full flex items-center justify-center gap-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              onClick={() => handelOptions("allTasks")}
            >
              <Briefcase size={40} className="text-orange-300" />
              <span>All Tasks</span>
            </button>
          </CardContent>
        </Card>
      </div>

      {selectedOption === "dashboard" && <EmployeeDashboard data={employee} />}
      {selectedOption === "myTeam" && <MyTeam />}
      {selectedOption === "allTasks" && (
        <AllTasks
          allEmpTasks={allEmpTasks}
          refreshAllTask={getAllEmpTasks}
          currEmp={employee._id}
        />
      )}
    </div>
  );
}
