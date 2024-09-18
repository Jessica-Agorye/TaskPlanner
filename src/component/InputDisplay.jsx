import React from "react";

const InputDisplay = ({ task, onDelete }) => {
  return (
    <div className="grid grid-cols-2 ml-28">
      <div className="flex items-center ">
        <input type="checkbox" className="" />
        <li className="ml-2 list-none">{task}</li>
      </div>
      <div>
        <button
          onClick={onDelete}
          className="ml-4 text-blue bg-blue-300 text-white text-xs px-4 mt-2"
        >
          Delete Task
        </button>
      </div>
    </div>
  );
};

export default InputDisplay;
