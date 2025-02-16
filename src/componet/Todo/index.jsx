import React, { useState } from 'react'


function TodoInput(props) {
  const [input, setinput] = useState("");

  return (
    <div className="input-container">
      <input
        type="text"
        className="Input-box-Todo"
        placeholder="Enter your todo"
        value={input}
        onChange={(e) => setinput(e.target.value)}
      />
      <button
        className="add-button"
        onClick={() => {
          props.addlist(input);
          setinput("");
        }}
      >
        +
      </button>
    </div>
  );
}

export default TodoInput;



