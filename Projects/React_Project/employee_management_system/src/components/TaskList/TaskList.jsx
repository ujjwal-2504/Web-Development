import React from "react";

const TaskList = () => {
  return (
    <div
      id="taskList"
      className="h-[55%] overflow-x-auto flex gap-5 items-center flex-nowrap w-full py-5  mt-10"
    >
      <div className="flex-shrink-0 h-full w-1/4 bg-yellow-700 rounded-xl p-5">
        <div className="flex justify-between items-center px-5 py-3 ">
          <h3 className="bg-red-500 px-2 rounded-sm text-white">High</h3>
          <h4 className="text-sm">20 feb 2025</h4>
        </div>
        <h2 className="text-3xl font-semibold">Make a chai</h2>
        <p className="text-lg mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui
          vel aperiam deleniti quae reprehenderit!
        </p>
      </div>

      <div className="flex-shrink-0 h-full w-1/4 bg-blue-950 rounded-xl p-5">
        <div className="flex justify-between items-center px-5 py-3 ">
          <h3 className="bg-red-500 px-2 rounded-sm">High</h3>
          <h4 className="text-sm">20 feb 2025</h4>
        </div>
        <h2 className="text-3xl font-semibold">Make a chai</h2>
        <p className="text-lg mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui
          vel aperiam deleniti quae reprehenderit!
        </p>
      </div>

      <div className="flex-shrink-0 h-full w-1/4 bg-red-900 rounded-xl p-5">
        <div className="flex justify-between items-center px-5 py-3 ">
          <h3 className="bg-red-500 px-2 rounded-sm">High</h3>
          <h4 className="text-sm">20 feb 2025</h4>
        </div>
        <h2 className="text-3xl font-semibold">Make a chai</h2>
        <p className="text-lg mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui
          vel aperiam deleniti quae reprehenderit!
        </p>
      </div>

      <div className="flex-shrink-0 h-full w-1/4 bg-green-900 rounded-xl p-5">
        <div className="flex justify-between items-center px-5 py-3 ">
          <h3 className="bg-red-500 px-2 rounded-sm">High</h3>
          <h4 className="text-sm">20 feb 2025</h4>
        </div>
        <h2 className="text-3xl font-semibold">Make a chai</h2>
        <p className="text-lg mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui
          vel aperiam deleniti quae reprehenderit!
        </p>
      </div>
    </div>
  );
};

export default TaskList;
