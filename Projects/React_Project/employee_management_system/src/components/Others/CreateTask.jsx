import React from "react";

const CreateTask = () => {
  return (
    <div>
      <form className="bg-zinc-900 p-5 flex justify-between items-center mt-5 rounded-lg">
        <div className="flex flex-col gap-4 h-full w-[45%]">
          <div className="flex flex-col text-lg">
            <label htmlFor="title">Task Title: </label>
            <input
              id="title"
              type="text"
              placeholder="eg: Make a UI design"
              className="border-1 border-white px-2 py-1 rounded-lg text-lg"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="date">Date: </label>
            <input
              type="date"
              className="border-1 border-white px-2 py-1 rounded-lg text-lg"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="assignTo">Assign to: </label>
            <input
              id="assignTo"
              type="text"
              placeholder="employee name"
              className="border-1 border-white px-2 py-1 rounded-lg text-lg"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="category">Category: </label>
            <input
              id="category"
              type="text"
              placeholder="desing, dev, etc"
              className="border-1 border-white px-2 py-1 rounded-lg text-lg"
            />
          </div>
        </div>

        <div className="flex flex-col w-[45%] text-lg">
          <label htmlFor="description">Description: </label>
          <textarea
            name="desc"
            id="description"
            cols="30"
            rows="7"
            className="border-1 border-white rounded-lg p-2"
          ></textarea>
          <button className="mt-4 bg-green-700 py-2 text-xl rounded-lg">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
