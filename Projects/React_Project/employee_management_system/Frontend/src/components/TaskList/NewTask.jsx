import React, { useContext } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import { EmployeeDataContext } from "../../context/EmployeeContext";

const NewTask = ({ task, empId }) => {
  const adminName = `${task.assignedBy.adminName.firstName} ${task.assignedBy.adminName.lastName}`;

  const { refreshEmployeeData } = useContext(EmployeeDataContext);

  const handelClick = async () => {
    await axios
      .patch(`${import.meta.env.VITE_BASE_URL}/task/accept-task`, {
        taskId: task._id,
        empId: empId,
      })
      .then((response) => {
        if (response.status === 200) {
          refreshEmployeeData();
        }
      })
      .catch((err) => {
        console.log("Error from newTask handelClick: ", err);
      });
  };

  return (
    <div className="flex-shrink-0 h-full bg-green-900 rounded-xl p-5 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center px-3 ">
          <span className="flex gap-2">
            <h3 className="bg-red-500 px-2 rounded-sm">{task.category}</h3>
            <h3 className="bg-amber-500 rounded-sm px-2 text-black">
              Assigned By: <b className="text-gray-900">{`${adminName}`}</b>
            </h3>
          </span>

          <h4 className="text-sm">{task.date}</h4>
        </div>
        <h2 className="text-3xl font-semibold mt-2">{task.title}</h2>
        <p className="text-lg mt-2">{task.description}</p>
      </div>

      <div className="flex justify-end gap-2 mt-4">
        <Button
          variant="contained"
          color="success"
          onClick={() => handelClick()}
        >
          Accept Task
        </Button>
      </div>
    </div>
  );
};

export default NewTask;
