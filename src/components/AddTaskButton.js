import React from 'react';

const AddTaskButton = ({ addTask }) => {
  return (
    <button onClick={addTask}>
      + Add Task
    </button>
  );
};

export default AddTaskButton;
