import React from 'react'
import { useState } from 'react'

function Card() {
    const[office ,setoffice]=useState("z-s plaza")
    const[name, setname]=useState(" sameer")

    const handleChange=()=>{
        setoffice("nli-market")
        setname("shahzain")
       
        
    }
  return (
    <div>
        <h1 className='text-3xl text-amber-300 flex  justify-center'>This is {name} office in gilgit near {office}</h1>
        <h1 className='text-3xl text-blue-300  flex  justify-center'>This is {name} office near {office}</h1>
        <button onClick={handleChange} className=' border-2 flex justify-center align-middle text-2xl bg-emerald-950'>Click me....!</button>
      
    </div>
  )
}

export default Card
