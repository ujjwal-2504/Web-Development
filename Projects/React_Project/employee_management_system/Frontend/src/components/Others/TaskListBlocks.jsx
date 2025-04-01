import React from "react";
import { Button } from "@material-tailwind/react";

const TaskListBlocks = ({ data, setFilter }) => {
  const handelFilter = (filter) => {
    setFilter(filter);
  };

  return (
    <div className="flex justify-between gap-5 screen mt-10">
      <Button
        variant="filled"
        className="px-9 py-6 flex-1 bg-green-900 rounded-xl cursor-pointer"
        onClick={() => handelFilter("newTask")}
      >
        <h2 className="text-3xl font-medium text-start">{data.newTask}</h2>
        <h3 className="text-2xl font-semibold text-start">New Task</h3>
      </Button>

      <Button
        variant="filled"
        className="px-9 py-6 flex-1 bg-blue-950 rounded-xl cursor-pointer"
        onClick={() => handelFilter("accepted")}
      >
        <h2 className="text-3xl font-medium text-start">{data.accepted}</h2>
        <h3 className="text-2xl font-semibold text-start">Accepted Task</h3>
      </Button>

      <Button
        variant="filled"
        className="px-9 py-6 flex-1 bg-yellow-700 rounded-xl cursor-pointer"
        onClick={() => handelFilter("completed")}
      >
        <h2 className="text-3xl font-medium text-start">{data.completed}</h2>
        <h3 className="text-2xl font-semibold text-start">Completed Task</h3>
      </Button>

      <Button
        variant="filled"
        className="px-9 py-6 flex-1 bg-red-900 rounded-xl cursor-pointer"
        onClick={() => handelFilter("failed")}
      >
        <h2 className="text-3xl font-medium text-start">{data.failed}</h2>
        <h3 className="text-2xl font-semibold text-start">Failed Task</h3>
      </Button>
    </div>
  );
};

export default TaskListBlocks;
