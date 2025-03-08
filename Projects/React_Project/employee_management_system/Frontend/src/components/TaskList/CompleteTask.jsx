import React from "react";

const CompleteTask = ({ task }) => {
  return (
    <div className="flex-shrink-0 h-full bg-yellow-700 rounded-xl p-5 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center px-3 py-3 ">
          <h3 className="bg-red-500 px-2 rounded-sm">{task.category}</h3>
          <h4 className="text-sm">{task.date}</h4>
        </div>
        <h2 className="text-3xl font-semibold mt-2">{task.title}</h2>
        <p className="text-lg mt-2">{task.description}</p>
      </div>

      <div className="flex mt-4 justify-end gap-2">
        <button className="border-3 border-yellow-500 py-1 px-2 w-full rounded-lg text-md">
          Completed
        </button>
      </div>
    </div>
  );
};

export default CompleteTask;
