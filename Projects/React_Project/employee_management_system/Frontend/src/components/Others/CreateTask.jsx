import React, { useState } from "react";
import { getLocalStorage } from "../../utils/LocalStorage";

const CreateTask = ({ setUserData }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  let newTask = {};

  function createTask(title, description, date, category) {
    newTask = {
      title: title,
      description: description,
      date: date,
      category: category,
      accepted: false,
      newTask: true,
      completed: false,
      failed: false,
    };
  }

  function searchEmployee(name) {
    const { employees, admin } = getLocalStorage();
    const targetEmployee = employees.find((emp) => {
      return emp.firstName === name;
    });

    return { targetEmployee, employees, admin };
  }

  function resetForm() {
    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
    newTask = {};
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const { targetEmployee, employees, admin } = searchEmployee(assignTo);

    if (targetEmployee) {
      createTask(taskTitle, taskDescription, taskDate, category);
      targetEmployee.tasks.push(newTask);
      targetEmployee.taskNumbers.newTask++;
      localStorage.setItem("employees", JSON.stringify(employees));
      setUserData({ employees, admin });
    }

    resetForm();
  };

  return (
    <div>
      <form
        onSubmit={(e) => submitHandler(e)}
        className="bg-zinc-900 p-5 flex justify-between items-center mt-5 rounded-lg"
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
              className="border-1 border-white px-2 py-1 rounded-lg text-lg"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="date">Date: </label>
            <input
              required
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              type="date"
              className="border-1 border-white px-2 py-1 rounded-lg text-lg"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="assignTo">Assign to: </label>
            <input
              required
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              id="assignTo"
              type="text"
              placeholder="employee name"
              className="border-1 border-white px-2 py-1 rounded-lg text-lg"
            />
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
              className="border-1 border-white px-2 py-1 rounded-lg text-lg"
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
