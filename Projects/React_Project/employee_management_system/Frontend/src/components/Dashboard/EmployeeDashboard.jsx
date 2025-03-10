import React, { useState } from "react";
import Header from "../Others/EmpHeader";
import TaskListBlocks from "../Others/TaskListBlocks";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ data }) => {
  const [filter, setFilter] = useState("newTask");

  return (
    <div className="px-8">
      <div>
        <TaskListBlocks data={data.taskNumbers} setFilter={setFilter} />
        <TaskList data={data.tasks} empId={data._id} filter={filter} />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
