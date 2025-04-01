import React, { useState } from "react";

const AllTasks = ({ allEmpTasks, refreshAllTasks, currEmp }) => {
  // State for filters
  const [activeFilter, setActiveFilter] = useState("all");
  // State for selected task details
  const [selectedTask, setSelectedTask] = useState(null);

  // Function to flatten all tasks from all employees
  const getAllTasks = () => {
    const tasks = [];

    allEmpTasks.forEach((emp) => {
      // Map each task to include employee information
      const employeeTasks = emp.tasks.map((task) => ({
        ...task,
        employeeName: `${emp.firstName} ${emp.lastName}`,
        employeeEmail: emp.email,
        employeeId: emp._id.$oid,
      }));

      tasks.push(...employeeTasks);
    });

    // Sort tasks by date in descending order (latest first)
    return tasks.sort((a, b) => {
      return new Date(b.date.$date) - new Date(a.date.$date);
    });
  };

  const allTasks = getAllTasks();

  // Apply filters to tasks
  const filteredTasks = allTasks.filter((task) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "completed") return task.completed;
    if (activeFilter === "failed") return task.failed;
    if (activeFilter === "accepted")
      return task.accepted && !task.completed && !task.failed;
    if (activeFilter === "new") return task.newTask;
    return true;
  });

  // Function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Function to get status class - using higher contrast colors
  const getStatusClass = (task) => {
    if (task.completed) return "bg-green-600 text-white";
    if (task.failed) return "bg-red-600 text-white";
    if (task.accepted) return "bg-blue-600 text-white";
    if (task.newTask) return "bg-amber-600 text-white";
    return "bg-gray-600 text-white";
  };

  // Function to get category color
  const getCategoryColor = (category) => {
    switch (category.toLowerCase()) {
      case "design":
        return "bg-purple-600 text-white";
      case "development":
        return "bg-blue-600 text-white";
      case "marketing":
        return "bg-pink-600 text-white";
      case "sales":
        return "bg-teal-600 text-white";
      default:
        return "bg-gray-600 text-white";
    }
  };

  // Function to get status text
  const getStatusText = (task) => {
    if (task.completed) return "Completed";
    if (task.failed) return "Failed";
    if (task.accepted) return "Accepted";
    if (task.newTask) return "New";
    return "Unknown";
  };

  // Handle view task details
  const handleViewDetails = (task) => {
    setSelectedTask(task);
  };

  // Close task details modal
  const closeTaskDetails = () => {
    setSelectedTask(null);
  };

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
        All Tasks
      </h2>

      <div className="mb-4 flex flex-wrap gap-2">
        <span className="text-sm font-medium mr-2 text-indigo-700">
          Filter by status:
        </span>
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium cursor-pointer ${activeFilter === "all" ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"}`}
          onClick={() => setActiveFilter("all")}
        >
          All
        </span>
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium cursor-pointer ${activeFilter === "accepted" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"}`}
          onClick={() => setActiveFilter("accepted")}
        >
          Accepted
        </span>
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium cursor-pointer ${activeFilter === "new" ? "bg-amber-600 text-white" : "bg-gray-200 text-gray-800"}`}
          onClick={() => setActiveFilter("new")}
        >
          New
        </span>
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium cursor-pointer ${activeFilter === "completed" ? "bg-green-600 text-white" : "bg-gray-200 text-gray-800"}`}
          onClick={() => setActiveFilter("completed")}
        >
          Completed
        </span>
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium cursor-pointer ${activeFilter === "failed" ? "bg-red-600 text-white" : "bg-gray-200 text-gray-800"}`}
          onClick={() => setActiveFilter("failed")}
        >
          Failed
        </span>
      </div>

      {filteredTasks.length === 0 ? (
        <div className="text-center py-8 bg-gray-100 rounded-lg text-gray-700">
          No tasks found matching your filter
        </div>
      ) : (
        <div className="grid gap-6">
          {filteredTasks.map((task) => (
            <div
              key={task._id}
              className="border rounded-lg shadow-md p-5 bg-white hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusClass(task)}`}
                    >
                      {getStatusText(task)}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(task.category)}`}
                    >
                      {task.category}
                    </span>
                    <span className="text-gray-500 text-sm">
                      Due: {formatDate(task.date)}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {task.title}
                  </h3>
                </div>
              </div>

              <p className="text-gray-700 mb-4 border-l-4 border-gray-300 pl-3">
                {task.description}
              </p>

              <div className="grid md:grid-cols-2 gap-4 text-sm border-t pt-4 mt-2">
                <div className="flex items-center">
                  <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center text-gray-700 mr-3">
                    {task.employeeName.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-gray-800">
                      {task.employeeName}
                    </span>
                    <span className="text-gray-600">{task.employeeEmail}</span>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center text-blue-700 mr-3">
                    {task.assignedBy?.adminName?.firstName.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-gray-800">
                      {task.assignedBy?.adminName?.firstName}{" "}
                      {task.assignedBy?.adminName?.lastName}
                    </span>
                    <span className="text-gray-600">Admin</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-4">
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  onClick={() => handleViewDetails(task)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Task Details Modal */}
      {selectedTask && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-screen overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">Task Details</h3>
              <button
                onClick={closeTaskDetails}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="mb-4">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusClass(selectedTask)}`}
              >
                {getStatusText(selectedTask)}
              </span>
              <h2 className="text-black text-2xl font-bold my-2">
                {selectedTask.title}
              </h2>
            </div>

            <div className="grid gap-4 mb-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-1">
                  Description
                </h4>
                <p className="text-gray-700">{selectedTask.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-1">Category</h4>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(selectedTask.category)}`}
                  >
                    {selectedTask.category}
                  </span>
                </div>

                <div>
                  <h4 className=" font-semibold text-gray-700 mb-1">
                    Due Date
                  </h4>
                  <p className="text-gray-800">
                    {formatDate(selectedTask.date)}
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t pt-4">
              <h4 className="font-semibold text-gray-700 mb-3">
                Assignment Information
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center p-3 bg-gray-50 rounded-lg text-gray-950">
                  <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center text-gray-700 mr-3">
                    {selectedTask.employeeName.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold">{selectedTask.employeeName}</p>
                    <p className="text-sm text-gray-600">
                      {selectedTask.employeeEmail}
                    </p>
                    <p className="text-xs text-gray-500">Employee</p>
                  </div>
                </div>

                <div className="flex items-center p-3 bg-blue-50 rounded-lg text-gray-950">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center text-blue-700 mr-3">
                    {selectedTask.assignedBy?.adminName?.firstName.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold">
                      {selectedTask.assignedBy?.adminName?.firstName}{" "}
                      {selectedTask.assignedBy?.adminName?.lastName}
                    </p>
                    <p className="text-xs text-gray-500">Admin</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={closeTaskDetails}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllTasks;
