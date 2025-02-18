import { useState,useEffect,useRef } from "react";

import React from 'react'

function Input() {
    const inputRef1=useRef(null)
    const inputRef2=useRef(null)
    const inputRef3=useRef(null)

    useEffect(()=>{
        console.log("Component render");
        
    })

    function handleClick1() {
        inputRef1.current.focus()
        inputRef1.current.style.background="green"
        inputRef2.current.style.background=""
        inputRef3.current.style.background=""
    }

    function handleClick2() {
        inputRef2.current.focus()
        inputRef1.current.style.background=""
        inputRef2.current.style.background="yellow"
        inputRef3.current.style.background=""
    }
    

    function handleClick3() {
        inputRef3.current.focus();
        inputRef1.current.style.background = "";
        inputRef2.current.style.background = "";
        inputRef3.current.style.background = "gold"; // Use 'gold' instead of 'golden'
    }
  return (
    <div>
      <button onClick={handleClick1}>Click ! 1</button>
      <input ref={inputRef1} />

      <button onClick={handleClick2}>Click ! 2</button>
      <input ref={inputRef2} />

      <button onClick={handleClick3}>Click ! 3</button>
      <input ref={inputRef3} />
    </div>
  )
}

export default Input
