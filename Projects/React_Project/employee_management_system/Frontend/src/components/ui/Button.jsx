import React from "react";

export function Button({ asChild, children, className = "", ...props }) {
  const Component = asChild ? "span" : "button";
  return (
    <Component
      className={`px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
