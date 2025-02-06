import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);

  return (
    <div className="bg-zinc-900 p-5 mt-4 rounded-lg flex flex-col gap-2">
      <div className="bg-orange-950 px-4 flex justify-between items-center rounded-lg">
        <h2 className="flex-1 text-lg h-10 flex items-center px-2">
          Employee Name
        </h2>
        <h3 className="flex-1 text-lg h-10 flex items-center px-2 bg-green-900">
          New Task
        </h3>
        <h5 className="flex-1 text-lg h-10 flex items-center px-2 bg-blue-950">
          Accepted Task
        </h5>
        <h5 className="flex-1 text-lg h-10 flex items-center px-2 bg-yellow-700">
          Completed Task
        </h5>
        <h5 className="flex-1 text-lg h-10 flex items-center px-2 bg-red-900">
          Failed Task
        </h5>
      </div>

      <div className="h-8/10 flex flex-col gap-2">
        {authData.employees.map(function (employee) {
          return (
            <div className="border-3 border-green-900 py-2 px-4 flex justify-between rounded-lg">
              <h2 className="flex-1 text-xl font-medium">
                {employee.firstName}
              </h2>
              <h3 className="flex-1 text-center text-lg">
                {employee.taskNumbers.newTask}
              </h3>
              <h5 className="flex-1 text-center text-lg">
                {employee.taskNumbers.accepted}
              </h5>
              <h5 className="flex-1 text-center text-lg">
                {employee.taskNumbers.completed}
              </h5>
              <h5 className="flex-1 text-center text-lg">
                {employee.taskNumbers.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
