// import React, { useState } from "react";
// import "./App.css"
// const question=[
//     {
//         questionText:"what is the capital of france?",
//         answereOptions:[
//             {answereText:"new york",isCorrect:false},
//             {answereText:"parise",isCorrect:true},
//             {answereText:"landon",isCorrect:false},
//             {answereText:"karachi",isCorrect:false}
//         ] 

        
//     },

//     {
//         questionText:"who win Champion Trophy 2017?",
//         answereOptions:[
//             {answereText:"India",isCorrect:false},
//             {answereText:"afganistan",isCorrect:false},
//             {answereText:"Pakistan",isCorrect:true},
//             {answereText:"Austraila",isCorrect:false}
//         ] 

        
//     },
//     {
//         questionText:"what is the meaning of cops?",
//         answereOptions:[
//             {answereText:"police",isCorrect:true},
//             {answereText:"death bodies",isCorrect:true},
//             {answereText:"manage",isCorrect:false},
//             {answereText:"easy",isCorrect:false}
//         ] 
//     },
//     {
//         questionText:"what is the synonemous of always ?",
//         answereOptions:[
//             {answereText:"soon",isCorrect:false},
//             {answereText:"shortly",isCorrect:true},
//             {answereText:"Certainly",isCorrect:true},
//             {answereText:"frequentle",isCorrect:false}
//         ] 
//     }
//     ,
//     {
//         questionText:"what is the synonemous of very tired ?",
//         answereOptions:[
//             {answereText:"enough",isCorrect:false},
//             {answereText:"deely",isCorrect:true},
//             {answereText:"boring",isCorrect:true},
//             {answereText:"Ehausted",isCorrect:true}
//         ] 
//     }


   
       
// ]
// function App() {
//    const[currentquestion,setCurrentQuestion]=useState(0)
//    const[answered,setanswered]=useState(false)
//    const[selectedanswere,setselectedanswered]=useState(null)
//    const[score , setscore]=useState(0)
//    const[showscore,setshowscore]=useState(false)
//    const Nextquestion=()=>{
//     setanswered(false)
//     setselectedanswered(null)
//     const nextquestion=currentquestion+1
//     if (nextquestion < question.length) {
//         setCurrentQuestion(nextquestion )

//     }else{
//         setshowscore(true)
//     }

// }
// const handleAnswereOption=(index,isCorrect)=>{
// setanswered(true)
// setselectedanswered(index)
// if(isCorrect){
// setscore(score+1)
// }
// }
//     return(
//         <div className="flex justify-center items-center h-screen">
//         <div className="w-full max-w-lg bg-white p-5 rounded shadow-lg">
//             <div className="p-2 border text-center font-bold mb-2 text-xL">Quiz App</div>
//             {showscore ? <div>
//                 Your score {score} of {question.length}
//             </div> :
//             <div>{question[currentquestion].questionText}</div>}
//            {question[currentquestion].answereOptions.map((option,index)=>{
//                 return <button
//                 onClick={()=>handleAnswereOption(index,option.isCorrect)}
//                 key={index} className={`block w-full p-2 mt-2 rounded border ${answered ? option.isCorrrect? "bg-green-200":
//                     selectedanswere==index ? "bg-green-200" :"":""
//                 }`}>{option.answereText}</button>;
//             })}
//             <button className={`${answered ? "bg-green-500" : "bg-green-200"} block w-full bg-green-500 text-white p-2 rounded`}
//             disabled={answered ?"":"disabled"}
//             onClick={Nextquestion}>Next Question</button>
//             <p className="text-center text-gray-400 text-sm">question {currentquestion+1} of {question.length}</p>
            
//         </div>
//         </div>
//     )
    
// }
// export default App



// import Stopwatch from "./componet/Stopwatch/watch";
// import "./App.css"
// function App() {
//     return(
//         <Stopwatch/>,
//         <Stopwatch/>
//     )
// }
// export default App


// import { useState ,useEffect } from "react";
// import Card from "./componet/unmount";

// function App() {
//     const[Counter,setCounter]=useState(0)

//     useEffect(()=>{
//         console.log("counter mounted");
        
            
            
        
//     },[])

    
//     useEffect(()=>{
//         console.log("user update the count...");
        
//     },[Counter])

//     const open=()=>{
//         console.log("unmounted " );
        
//     }

//     const counterIncrease=()=>{
//         setCounter(prev=>prev+1) 
    
        
//     }
//     const counterDecrease=()=>{
//         setCounter(prev=>prev-1) 

        
//     }
//     const counterReset=()=>{
//         setCounter(0)
//     }
   
//     return(
//         <>
//         <Card/>
//         <h1>Counter:{Counter}</h1>
//         <button onClick={counterIncrease}>increment</button>
//         <button onClick={counterReset}>Reset</button>
//         <button onClick={counterDecrease}>decrement</button>
//         </>

//     )
// }
// export default App

// import { useState,useRef } from "react";
// function App() {
//     const refElement=useRef("");
//     const[ fname,setfname]=useState("sameer")
// console.log(refElement);
// function reset() {
//     setfname("")
//     refElement.current.focus()

// }
// function colorfull() {
//     refElement.current.style.color="blue"
    
// }
//     return<>
//     <h1>learning useref</h1>
//     <input ref={refElement} type="text" value={fname} onChange={(e)=>setfname(
//         e.target.value

//     )}/>
//     <button onClick={reset}>Reset</button>
//     <button onClick={colorfull}>chnage color</button>
    
//     </>}
//     export default App
    
import React, { useState } from 'react';
import './App.css';

function App() {
  // State to store the counter value
  const [count, setCount] = useState(0);

  // Function to increase the count
  const increase = () => setCount(count + 1);

  // Function to decrease the count
  const decrease = () => setCount(count - 1);

  return (
    <div className="App">
      <h1>Simple Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}




    
