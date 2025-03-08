import React, { useState } from "react";

const EmpHeader = ({ data }) => {
  return (
    <div className="flex items-center justify-between bg-[#1c1c1c] py-3 px-4">
      <h1 className="text-2xl font-medium">
        Hello,{" "}
        <span className="text-3xl font-semibold">{data.firstName} 👋</span>
      </h1>
    </div>
  );
};

export default EmpHeader;
