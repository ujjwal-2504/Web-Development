import React from "react";

const NewTask = ({ task }) => {
  return (
    <div className="flex-shrink-0 h-full w-1/4 bg-blue-950 rounded-xl p-5">
      <div className="flex justify-between items-center px-3 py-3 ">
        <h3 className="bg-red-500 px-2 rounded-sm">{task.category}</h3>
        <h4 className="text-sm">{task.date}</h4>
      </div>
      <h2 className="text-3xl font-semibold">{task.title}</h2>
      <p className="text-lg mt-2">{task.description}</p>
      <div className="flex justify-between mt-4">
        <button className="bg-green-500 py-1 px-2 text-sm rounded-lg">
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
