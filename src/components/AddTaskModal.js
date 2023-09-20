import React, { useState } from 'react';
import './modal.css';

const AddTaskModal = ({ addTask, setIsModalOpen }) => {
  const [newTask, setNewTask] = useState({ name: '', description: '', date: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleSubmit = () => {
    if (newTask.name) {
      addTask(newTask);
      setNewTask({ name: '', description: '', date: '' });
      setIsModalOpen(false);
    }
  };

  // Define a JavaScript object for input field styles
  const inputStyles = {
    border: 'none', // Remove the border
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '10px',
    fontSize: '20px',
    color: 'darkblue',
    width: '60%',
    marginLeft: '50px',
    textAlign: 'center',
  };

  // Define a JavaScript object for button styles
  const buttonStyles = {
    textAlign: 'center', // Center-align the buttons
  };

  return (
    <div className="modal-popup">
      <div className="modal-content">
        <input
          type="text"
          name="name"
          value={newTask.name}
          placeholder="Task Name"
          onChange={handleChange}
          style={inputStyles} // Apply the input field styles
        />
        <textarea
          name="description"
          value={newTask.description}
          placeholder="Task Description"
          onChange={handleChange}
          style={inputStyles} // Apply the input field styles
        />
        <input
          type="date"
          name="date"
          value={newTask.date}
          placeholder="Task Date"
          onChange={handleChange}
          style={inputStyles} // Apply the input field styles
        />
        <div style={buttonStyles}> {/* Apply the button styles */}
          <button onClick={handleSubmit}>Add</button>
          <button onClick={() => setIsModalOpen(false)}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;
