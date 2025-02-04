import React from "react";
import Header from "../Others/Header";
import TaskListBlocks from "../Others/TaskListBlocks";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = () => {
  return (
    <div>
      <div className="p-10 h-screen">
        <Header />
        <TaskListBlocks />
        <TaskList />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
