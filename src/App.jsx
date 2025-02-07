// import Massage from "./Massage"
// function App() {
//   return <div><Massage/></div>
  
// }
// export default App



// import Massage from "./componet/heading";
// import Para from "./componet/para"
// import Button from "./componet/button"

// function App() {
//   return <><Massage text={"Medium"}/>
//   <Para text={"Sign up to Discover Human Stories that deepen your understanding of the world "}/>
//   <Button text={"click me" }/>
//   <Button text={"click me" }/>
//   </>;
// }

// export default App;





// import Card from "./componet/card"
// import "./App.css";
// function App() {
//   return<>
//   <Card/>
  
//   </>
  
// }
// export default App



// src/App.js
// import React from "react";
// import Header from "./componet/heading";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <p>This is a simple React app.</p>
//     </div>
//   );
// }

// export default
// 
//


// import Student from "./componet/student"
// import "./App.css";

// function App() {
//   return(<>
//   <Student fname="Sameer Ali" age={19} isStudent={true}/>
//   <Student fname="shahzain" age={22} isStudent={true}/>
//   <Student fname="Ali sher" age={32} isStudent={false}/>
//   </>
//   )
// }
// export default App;












// import {useState} from "react";

// import "./App.css";
// // import Counter from "./componet/counter";
// function App() {
//   const[Counter,setCounter]=useState(0)
//   return(
//     <div className="main">
//     <h1 className={`${Counter <0 && "negative"}`}>{Counter}</h1>
//     <div>
//       <button id="decrease" onClick={()=>setCounter(prev=>prev-1)}>decrement</button>
//       <button id="reset" onClick={()=>setCounter(0)}>Reset</button>
//       <button id="increase" onClick={()=>setCounter(prev=>prev+1)}>increment</button>
//     </div>
    
//     </div>
//   )

  
  
// }
// export default App



// import Nav from "./componet/nav/indes";
// import HeroSection from "./componet/nav/hero"
// import "./App.css";
// function App() {
//   return(
//     <>
//     <Nav/>
//     <HeroSection/>
//     </>
//   )
  
// }
// export default App

// import React, {useState , useEffect} from "react";
// import "./App.css"
// import Card from "./componet/unmount"
// import Button from "./componet/button";

// function App() {
 
//   const[Counter, setCounter]=useState(0)
//   // const[state,setstate]=useState(true) 
 

//   useEffect(()=>{
//     console.log("counter mounted");

//     return function () {
//       console.log("unmunt counter.....");
      
      
//     }
    
//   },[] )

//   useEffect(()=>{
//     console.log("counter updated.....");
    
//   },[Counter])

//   function addCount() {
//     setCounter(c=>c+1)
    
//   }
//   function lessCount() {
//     setCounter(c=>c-1)
// }
// function reset() {
//   setCounter(0)
  
// }
 
    
  
//   return<>
//   <div className="div">
  
//   <p className="para">Count:{Counter}</p>
//   <button onClick={addCount} className="btn">add</button>
//   <button onClick={reset} className="btn">Reset</button>
//   <button onClick={lessCount} className="btn">substract</button>
//   <Button text={"toggle"}/>
//   </div>
 
//   </>
  
// }
// export default App


// import Start from "./componet/quiz/start";
// import Quiz from "./componet/quiz/Quiz";
// import Result from "./componet/quiz/result";
// import ReactDom from "react-dom"
// ReactDOM.return(<App/> ,document.getElementById("root"))



// function App() {
//  return(
//   <button/>
//  )
  
// }
// export default App

import React, { useEffect, useState } from "react";
// import "./App.css"
export default function Home() {
    const[num,setnum]=useState(0)
    useEffect(()=>{
        document.title=`you click me ${num} times`
    })
    return (
    <button onClick={()=>{
        setnum(num+1)
    }}>click me {num}</button>
    )
}  