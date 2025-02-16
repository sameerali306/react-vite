import React from 'react'

function TodoList({ item, index, deleteTodo }) {
    return (
      <li>
        {item}
        <button
          className="delete-button"
          onClick={() => deleteTodo(index)} // Trigger deleteTodo on click
        >
          <i className="fa-solid fa-trash"></i> {/* Font Awesome trash icon */}
        </button>
      </li>
    );
  }
  
  export default TodoList;
  
  
