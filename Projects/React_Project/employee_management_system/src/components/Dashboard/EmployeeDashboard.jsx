import React from "react";
import Header from "../Others/Header";
import TaskListBlocks from "../Others/TaskListBlocks";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ data }) => {
  return (
    <div>
      <div className="px-10 py-5 h-screen">
        <Header data={data} />
        <TaskListBlocks data={data.taskNumbers} />
        <TaskList data={data.tasks} />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
