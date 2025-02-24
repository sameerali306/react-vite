import React from 'react'
import { useState } from 'react'

function Hook() {
    const[count,setcount]=useState(0)

    const increase=()=>{
        setcount(prevs=>count+4)
      
    }

    const decrease=()=>{
        setcount(prevs=>count-4)
       
        
    }
  return (
    <div>
       <div className="flex flex-col justify-center items-center min-h-screen">
  <h1 className="text-3xl mb-4">Counter: {count}</h1>
  <button onClick={increase} className="text-2xl mb-4 p-2 bg-blue-500 text-white rounded">Increase</button>
  <button onClick={decrease} className="text-2xl p-2 bg-red-500 text-white rounded">Decrease</button>
</div>
      
    </div>
  )
}

export default Hook
