import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

const CreateTask = ({ id, className, adminData }) => {
  const employees = adminData.allEmpData;

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  let newTask = {};

  function createTask(title, description, date, category, assignedBy) {
    newTask = {
      title: title,
      description: description,
      date: date,
      category: category,
      accepted: false,
      newTask: true,
      completed: false,
      failed: false,
      assignedBy: assignedBy,
    };
  }

  function resetForm() {
    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
    newTask = {};
  }

  // ---------------------------------------------------------
  // Date

  // Get today's date in YYYY-MM-DD format
  const getCurrentDate = () => {
    return new Date().toISOString().split("T")[0];
  };

  // Get the max allowed date (2 months from today)
  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 2); // Add 2 months
    return maxDate.toISOString().split("T")[0];
  };

  //----------------------------------------------------------

  const submitHandler = async (e) => {
    e.preventDefault();

    // Get current date and time
    const currentDateTime = new Date().toISOString();
    console.log(currentDateTime);

    const assignedBy = {
      adminName: {
        firstName: adminData.firstName,
        lastName: adminData.lastName,
      },
      admin: adminData._id,
    };
    createTask(taskTitle, taskDescription, taskDate, category, assignedBy);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/employee/createTask`,
        { newTask, assignTo }
      );

      if (response.status === 200) {
        console.log("Task Created");
      }
    } catch (error) {
      console.error("Error during assigning task:", error);
    }

    resetForm();
  };

  return (
    <div>
      <form
        id={id}
        onSubmit={(e) => submitHandler(e)}
        className={`bg-indigo-300 text-black p-5 flex justify-between items-center mt-5 rounded-lg ${className}`}
      >
        <div className="flex flex-col gap-4 h-full w-[45%]">
          <div className="flex flex-col text-lg">
            <label htmlFor="title">Task Title: </label>
            <input
              required
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              id="title"
              type="text"
              placeholder="eg: Make a UI design"
              className="border-3 border-blue-900 px-2 py-1 rounded-lg text-lg"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="date">Date: </label>
            <input
              required
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              type="date"
              min={getCurrentDate()} // Set min date as today
              max={getMaxDate()} // Set max date as 2 months ahead
              className="border-3 border-blue-900 px-2 py-1 rounded-lg text-lg"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="assignTo">Assign to:</label>
            <select
              className="border-3 border-blue-900 px-2 py-1 rounded-lg text-lg"
              id="assignTo"
              name="assignTo"
              value={assignTo} // ✅ Control selection
              onChange={(e) => setAssignTo(e.target.value)}
              required
            >
              <option value="" disabled>
                Select an employee
              </option>{" "}
              {/* Placeholder */}
              {(employees || []).map((employee) => (
                <option key={employee._id} value={employee._id}>
                  {employee.firstName} {employee.lastName}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="category">Category: </label>
            <input
              required
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              id="category"
              type="text"
              placeholder="desing, dev, etc"
              className="border-3 border-blue-900 px-2 py-1 rounded-lg text-lg"
            />
          </div>
        </div>

        <div className="flex flex-col w-[45%] text-lg">
          <label htmlFor="description">Description: </label>
          <textarea
            required
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            id="description"
            cols="30"
            rows="7"
            className="border-3 border-blue-900 rounded-lg p-2"
          ></textarea>
          <button className="mt-4 bg-green-900 py-2 text-xl rounded-lg text-white">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
