import React, { useState } from "react"

function App() {

let [Counter ,setCounter]=useState(0)

const addValue=()=>{
  
  setCounter(Counter+1)
  
}
const ResetValue=()=>{
  
  setCounter(0)
  
}

const removeValue=()=>{
  if (Counter<=0) {
    stop

    
  }else{
    setCounter(Counter-1)
  }
  
}
  return (
    <>
    <div className="outer">
      <div className="counter">
      <h1 className="heading">Counter App</h1>
    <h2 className="heading2">Counter : {Counter}</h2>

    <button className="btn1"  onClick={addValue}>Increment {Counter}</button>
    <button className="btn2" onClick={ResetValue}>Reset {Counter}</button>
    <button className="btn3" onClick={removeValue}>decrement {Counter}</button>
    </div>
    </div>
    </>
  )
  
}
export default App