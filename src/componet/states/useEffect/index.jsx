import React, { useEffect, useState } from 'react'

function Hook2() {
    const [count,setcount]=useState(0)
    useEffect(()=>{
        setTimeout(()=>{
            setcount(count+1)

        },2000)
    },[])
  return (
    <div>
        <h1 className='text-4xl flex justify-center items-center mb-2.5'>Counter : {count}</h1>
        <h1 className='text-4xl flex justify-center items-center mb-3.5'>I have render {count} time</h1>
      
    </div>
  )
}

export default Hook2
