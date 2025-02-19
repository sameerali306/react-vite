// import { useReducer } from "react";

// // Initial state
// const initialState = {
//   grade: "", // Initially empty grade
// };

// // Reducer function to set the grade based on input
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "SET_GRADE":
//       const grade = action.payload;
//       if (grade >= 90) return { ...state, grade: "A+" };
//       if (grade >= 80) return { ...state, grade: "A" };
//       if (grade >= 70) return { ...state, grade: "B" };
//       if (grade >= 60) return { ...state, grade: "C" };
//       if (grade >= 50) return { ...state, grade: "D" };
//       return { ...state, grade: "F" }; // F for below 50
//     default:
//       return state;
//   }
// };

// // Component to display and update grade
// const Card = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const handleGradeChange = () => {
//     const gradeInput = parseInt(prompt("Enter your grade (0-100):"), 10);
//     dispatch({ type: "SET_GRADE", payload: gradeInput });
//   };

//   return (
//     <div>
//       <h1>Sameer Ali</h1>
//       <p>Grade: {state.grade}</p>
//       <button onClick={handleGradeChange}>Set Grade</button>
//     </div>
//   );
// };

// export default Card;


// // 


// // import Form from "./componet/form"
// // function App() {
// //  return(
// //   <Form/>
// //  ) 
  
// // }
// // export default App

// import Header from "./componet/Api3/header"
// import Paragraph from "./componet/Api3/paragraf"
// import PostItem from "./componet/Api3/post-item"
// import { useEffect, useState } from "react";
// function PostApiExample() {
//     const [post, setPost] = useState([]);
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(false);
  
//     const fetchPosts = async () => {
//       setLoading(true);
//       try {
//         let response = await fetch("https://jsonplaceholder.typicode.com/posts");
//         if (!response.ok) {
//           throw new Error("failed to fetch!!");
//         }
//         let data = await response.json();
//         setPost(data);
//         console.log(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     return (
//       <>
//         <Header />
//         <button onClick={fetchPosts}>Fetch Posts</button>
//         {error && <Paragraph message={error} color="red" />}
//         {loading && <Paragraph message="Loading..." color="blue" />}
//         {post.map((item) => (
//           <PostItem key={item.id} post={item} />
//         ))}
//       </>
//     );
//   }

// export default PostApiExample


// import Memo from "./componet/useMemo";
// function App() {
//   return(
//     <Memo/>
//   )
  
// }
// export default App



// import React, { useState } from "react";
// import TodoInput from "./componet/Todo";  // Fix the path if necessary
// import TodoList from "./componet/Todo/Todolist";  // Fix the path if necessary
// import "./App.css";

// function App() {
//   const [list, setlist] = useState([]);

//   // Function to add new todo to the list
//   const addlist = (inputText) => {
//     setlist((prevList) => [...prevList, inputText]);
//   };

//   // Function to delete a todo item
//   const deleteTodo = (index) => {
//     setlist((prevList) => prevList.filter((Todo, i) => i !== index));
//   };

//   return (
//     <div className="main-container">
//       <div className="center-container">
//         <TodoInput addlist={addlist} />
//         <h1 className="app-heading">ToDo</h1>
//         <hr />
//         <ul>
//           {list.map((item, i) => (
//             <TodoList key={i} item={item} index={i} deleteTodo={deleteTodo} />
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default App;



// import React, { useRef } from 'react';

// function FocusInput() {
//   const inputRef = useRef(null);

//   const focusInput = () => {
//     if (inputRef.current) {
//       inputRef.current.focus();
//     }
//   };

//   return (
//     <div>
//       <input ref={inputRef} type="text" />
//       <button onClick={focusInput}>Focus Input</button>
//     </div>
//   );
// }

// export default FocusInput;



// import Hooks from "./componet/Memo";
// import "./App.css"
// import { useState } from "react";
// function App() {

//   return(
//     <>
//     <Hooks/>
//     </>
//   )
  
// }
// export default App


// import Input from "./componet/Ref/index2"
// function App() {
//   return(
//     <Input/>
//   )
 

  
// }
// export default App


// import MyComponent from "./componet/Ref";
// import { NavLink } from "react-router";
// import { BrowserRouter, Routes, Route } from "react-router";
// import Card from "./componet/unmount";
// function App() {
//   return(
//     <BrowserRouter>
//     <Routes>
//       <Route path="all-post" element={<MyComponent/>} />
//       <Route path="post" element={<Card/>}/>
//     </Routes>
//   </BrowserRouter>
//   )
  
// }
// export default App


// import React from 'react'
// import Counter from './componet/custom_hook'

// function App() {
//   return (
//     <div>
//       <Counter/>
//     </div>
//   )
// }

// export default App


// router examle 

// import { NavLink } from "react-router";
// import { BrowserRouter, Routes, Route } from "react-router";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<h2>Home Page</h2>} />
//         <Route path="/about" element={<h2>About Page</h2>} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;


// customhook example
// import React from 'react';
// import useToggle from './componet/custom';

// function App() {
//   const [isToggled, toggle] = useToggle();

//   return (
//     <div>
//       <p>{isToggled ? 'Toggled ON' : 'Toggled OFF'}</p>
//       <button onClick={toggle}>Toggle</button>
//     </div>
//   );
// }

// export default App;


// useCallback
// import React from 'react'
// import Call from './componet/CallBack_hook'
// import"./App.css"

// function App() {
//   return (
//     <div>
//       <Call/>
//     </div>
//   )
// }

// export default App

// import React from 'react';
// import { BrowserRouter, Routes, Route } from "react-router";
// import Rout from './componet/Rout';
// import Home from './componet/router/Home';
// import About from './componet/router/About';
// import"./App.css"

// function App() {
//   return (
//     <BrowserRouter>
//       <Rout />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router";

// Home component
function Home() {
  return <h2>Home Page</h2>;
}

// About component
function About() {
  return <h2>About Page</h2>;
}

// App component with routing
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
