import React, { useEffect, useRef, useState } from 'react'

function Hook4() {
    const[value,setvalue]=useState(0)
    // const[count, setcount]=useState(0)
    const count=useRef(0)


    useEffect(()=>{
        count.current=count.current+1
    })
  return (
    <div>
        <button className='text-2xl flex justify-center items-center bg-blue-400 text-white' 
        onClick={()=>{setvalue(prevs=>prevs-1)}}
        >-1</button>
        <h1 className='text-4xl flex justify-center items-center'>Counter :{value}</h1>
        <button className='text-2xl flex justify-center items-center bg-red-400 text-white'
         onClick={()=>{setvalue(prevs=>prevs+1)}}
        >+1</button>
        <h2 className='text-4xl flex justify-center items-center'>Render Count:{count.current}</h2>
      
    </div>
  )
}

export default Hook4
