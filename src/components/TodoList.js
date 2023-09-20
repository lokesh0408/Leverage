import React, { useState, useEffect } from 'react';
 import './list.css';
import Task from './Task';
import AddTaskModal from './AddTaskModal';
import Navbar from './Navbar';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Load tasks from localStorage on component mount
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    // Update localStorage when tasks change
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    // Add a new task to the list
    setTasks([...tasks, newTask]);
    setIsModalOpen(false);
  };
  const buttonStyles = {
    textAlign: 'center', // Center-align the buttons
  };

  return (
<>
   
    <div className='listmain'>
      {tasks.map((task, index) => (
        task.name && (
          <Task
            key={index}
            index={index}
            task={task}
            setTasks={setTasks}
            tasks={tasks}
          />
        )
      ))}
         <div style={buttonStyles}> {/* Apply the button styles */}
      <button className='add' onClick={() => setIsModalOpen(true)}>+ Add Task</button>
    </div>
    {isModalOpen && (
      <AddTaskModal addTask={addTask} setIsModalOpen={setIsModalOpen} />
    )}
  </div>
 </> 
  );
};

export default TodoList;
