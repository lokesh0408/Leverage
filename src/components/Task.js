import React, { useState } from 'react';
import './task.css';
const Task = ({ index, task, updateTask }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateTask(index, { ...task, [name]: value });
  };
  const inputstyle={
    fontSize:'25px',
    textAlign:'center',
    marginTop:'10px',
    color:'darkblue'
  }
  const dates={
    backgroundColor:'lightBlue',
    fontWeight:'bold',
    fontSize:'18px',
    width:'60%',
    textAlign:'center',
    marginLeft:'20%'
  }

  return (
    <div className="task-item" onClick={toggleDetails}>
      <input
        type="text"
        name="name"
        value={task.name}
        placeholder="Task Name"
        onChange={handleChange}
      />
      {showDetails && (
        <div style={inputstyle}>
          
          <div> {task.description}</div>
          <div style={dates}> {task.date}</div>
        </div>
      )}
    </div>
  );
};

export default Task;
