import React from "react";
import Header from "../Others/Header";
import CreateTask from "../Others/CreateTask";
import AllTask from "../Others/AllTask";

const AdminDashboard = ({ changeUser, setUserData, data }) => {
  return (
    <div className="h-screen w-full px-10 py-5">
      <Header changeUser={changeUser} data={data} />
      <CreateTask setUserData={setUserData} />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
