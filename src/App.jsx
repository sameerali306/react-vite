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

import React, {useState , useEffect} from "react";

function App() {
  const[Counter, setCounter]=useState(0)
 

  useEffect(()=>{
    document.title=`Count: ${Counter}`
  }, )

  function addCount() {
    setCounter(c=>c+1)
    
  }
  function lessCount() {
    setCounter(c=>c-1)

   

    
  }
 
    
  
  return<>
  <p>Count:{Counter}</p>
  <button onClick={addCount}>add</button>
  <button onClick={lessCount}>substract</button>
  </>
  
}
export default App