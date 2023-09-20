import React, { useState } from 'react';
import TodoList from './TodoList';
import './container.css';
import Navbar from './Navbar';
const TodoListContainer = () => {
  const [lists, setLists] = useState([1]); // Initialize with one list

  // Function to add a new list
  const addList = () => {
    setLists([...lists, lists.length + 1]);
  };

  return (
    <>
    <Navbar/>
    <div>
      <button className='addb' onClick={addList}>+</button>
      <div className="lists-container" style={{ display: 'flex', flexWrap: 'wrap', maxHeight: '80vh', overflowY: 'auto' }}>
        {lists.map((listId) => (
          <div key={listId} style={{ marginRight: '10px', marginBottom: '10px' }}>
            <TodoList />
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default TodoListContainer;
