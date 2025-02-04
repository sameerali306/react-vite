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
import Student from "./componet/student"
import "./App.css";

function App() {
  return(<>
  <Student fname="Sameer Ali" age={19} isStudent={true}/>
  <Student fname="shahzain" age={22} isStudent={true}/>
  <Student fname="Ali sher" age={32} isStudent={false}/>
  </>
  )
}
export default App;












// import {useState} from "react";
// import "./App.css";
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




