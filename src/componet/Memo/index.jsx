import React, { useMemo } from 'react'
import { useState } from 'react';

const Hooks = () => {
    const[add, setadd]=useState(0);
  const[minus, setminus]=useState(100)
  const memo=useMemo(function multiply() {
    console.log("multiply");
    
    return add*10
    
  },[add])
  return (
    <div className='App'>
        <h1 className='Header'>Learning Usememo</h1>
        {memo}
        <button className='btn' onClick={()=>setadd(add+1)}>addition</button>
        <span>{add}</span>
        <br />
        <button className='btn1' onClick={()=>setminus(minus - 1)}>substraction</button>
        <span>{minus}</span>
    </div>
  )
}

export default Hooks
