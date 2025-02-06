import React from "react";

const TaskListBlocks = ({ data }) => {
  return (
    <div className="flex justify-between gap-5 screen mt-10">
      <div className="px-9 py-6 flex-1 bg-green-900 rounded-xl">
        <h2 className="text-3xl font-medium">{data.newTask}</h2>
        <h3 className="text-2xl font-semibold">New Task</h3>
      </div>

      <div className="px-9 py-6 flex-1 bg-blue-950 rounded-xl">
        <h2 className="text-3xl font-medium">{data.accepted}</h2>
        <h3 className="text-2xl font-semibold">Accepted Task</h3>
      </div>

      <div className="px-9 py-6 flex-1 bg-yellow-700 rounded-xl">
        <h2 className="text-3xl font-medium">{data.completed}</h2>
        <h3 className="text-2xl font-semibold">Completed Task</h3>
      </div>

      <div className="px-9 py-6 flex-1 bg-red-900 rounded-xl">
        <h2 className="text-3xl font-medium">{data.failed}</h2>
        <h3 className="text-2xl font-semibold">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListBlocks;
