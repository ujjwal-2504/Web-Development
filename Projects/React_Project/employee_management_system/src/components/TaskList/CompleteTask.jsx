import React from "react";

const CompleteTask = ({ task }) => {
  return (
    <div className="flex-shrink-0 h-full w-1/4 bg-green-900 rounded-xl p-5">
      <div className="flex justify-between items-center px-3 py-3 ">
        <h3 className="bg-red-500 px-2 rounded-sm">{task.category}</h3>
        <h4 className="text-sm">{task.date}</h4>
      </div>
      <h2 className="text-3xl font-semibold">{task.title}</h2>
      <p className="text-lg mt-2">{task.description}</p>
      <div className="flex mt-4 w-full">
        <button className="bg-green-500 py-1 px-2 w-full rounded-lg">
          Completed
        </button>
      </div>
    </div>
  );
};

export default CompleteTask;
