import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  return (
    <div id="taskList" className=" mt-4 flex flex-col gap-2">
      {data.map((task, idx) => {
        if (task.newTask) return <NewTask key={idx} task={task} />;
        if (task.accepted) return <AcceptTask key={idx} task={task} />;
        if (task.completed) return <CompleteTask key={idx} task={task} />;
        if (task.failed) return <FailedTask key={idx} task={task} />;
      })}
    </div>
  );
};

export default TaskList;
