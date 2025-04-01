import React, { useState } from "react";
import TaskListBlocks from "../Others/TaskListBlocks";
import TaskList from "../TaskList/TaskList";
import Title from "../ui/Title";

const EmployeeDashboard = ({ data }) => {
  const [filter, setFilter] = useState("newTask");

  return (
    <div className="px-8 mt-5">
      <div className="flex flex-col">
        <Title title="My Tasks" />
        <TaskListBlocks data={data.taskNumbers} setFilter={setFilter} />
        <TaskList data={data.tasks} empId={data._id} filter={filter} />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
