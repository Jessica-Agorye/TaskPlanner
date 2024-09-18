import React, { useState, useEffect } from "react";
import InputDisplay from "./InputDisplay";

// Function to load tasks from Local Storage
const loadTaskFromLocalStorage = () => {
  const savedTasks = localStorage.getItem("tasks");
  return savedTasks ? JSON.parse(savedTasks) : [];
};

// Function to save tasks to Local Storage
const saveTaskToLocalStorage = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const InputField = () => {
  const [inputData, setInputData] = useState("");
  const [tasks, setTasks] = useState(loadTaskFromLocalStorage());

  useEffect(() => {
    saveTaskToLocalStorage(tasks); // Save tasks to Local Storage
  }, [tasks]); // Dependency array

  const handleChange = (e) => {
    setInputData(e.target.value);
    console.log(e.target.value);
  };

  const handleAddTask = () => {
    if (inputData.trim()) {
      setTasks([...tasks, inputData]);
      setInputData(""); // Clear input field after adding task
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <>
      <div className="flex justify-center items-center mt-20">
        <input
          type="text"
          value={inputData}
          placeholder="Enter tasks"
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          className="pl-4 h-10 w-80 border border-blue-600 rounded-md"
        />
      </div>

      <div className="ml-52 mt-10">
        <ul>
          {tasks.map((task, index) => (
            <InputDisplay
              key={index}
              task={task}
              onDelete={() => handleDelete(index)}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default InputField;
