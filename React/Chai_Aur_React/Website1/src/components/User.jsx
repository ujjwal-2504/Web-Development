import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  return (
    <div className="text-center bg-amber-900 text-white p-5 text-4xl">
      user: {id}
    </div>
  );
}

export default User;
