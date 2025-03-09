import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data, empId }) => {
  return (
    <div id="taskList" className=" mt-4 flex flex-col gap-2">
      {data.map((task, idx) => {
        if (task.newTask)
          return <NewTask key={idx} task={task} empId={empId} />;
        if (task.accepted)
          return <AcceptTask key={idx} task={task} empId={empId} />;
        if (task.completed)
          return <CompleteTask key={idx} task={task} empId={empId} />;
        if (task.failed)
          return <FailedTask key={idx} task={task} empId={empId} />;
      })}
    </div>
  );
};

export default TaskList;
