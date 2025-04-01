import React from "react";

function Title({ title }) {
  return (
    <h1 className="text-3xl font-bold mb-2 text-black p-2 border-y-2 border-blue-950 rounded-xl text-center w-fit self-center">
      {title || "Title"}
    </h1>
  );
}

export default Title;
