import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
    const navigate = useNavigate()

  const [taskText, setTaskText] = useState("");
  const [taskId, setTaskId] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  // State for error handling
  const [error, setError] = useState("");

  // Handle change for text input
  const handleTextChange = (e) => {
    setTaskText(e.target.value);
  };

  // Handle change for ID input
  const handleIdChange = (e) => {
    setTaskId(e.target.value);
  };

  // Handle change for completion status
  const handleSelectChange = (e) => {
    setIsCompleted(e.target.value === "true");
  };

  // Handle form submission and API call
  const handleAddClick = async () => {
    if (!taskText || !taskId) {
      setError("Task Text and Task ID are required");
      return;
    }

    try {
      const response = await axios.post("https://example.com/api/tasks", {
        taskText,
        taskId,
        isCompleted,
      });
      console.log("Task Added:", response.data);
      setError(""); // Clear any previous errors
    } catch (error) {
      console.error("Error adding task:", error);
      setError("Failed to add task. Please try again.");
    }
  };

  // Handle back button click
  const handleBackClick = () => {
    // You can implement navigation logic here, e.g., using React Router
    navigate(-1)
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-2xl font-semibold mb-6 text-center">Add Task</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <div className="mb-4">
          <label htmlFor="taskText" className="block text-gray-700">Task Name</label>
          <input
            type="text"
            id="taskText"
            value={taskText}
            onChange={handleTextChange}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter task description"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="taskId" className="block text-gray-700">User ID</label>
          <input
            type="number"
            id="taskId"
            value={taskId}
            onChange={handleIdChange}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter task ID"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="isCompleted" className="block text-gray-700">Completed ?</label>
          <select
            id="isCompleted"
            value={isCompleted}
            onChange={handleSelectChange}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="false">false</option>
            <option value="true">true</option>
          </select>
        </div>

        <div className="flex justify-between">
          <button
            onClick={handleAddClick}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Add
          </button>
          <button
            onClick={handleBackClick}
            className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
