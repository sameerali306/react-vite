import React, { useState } from 'react'
import Child from './child'

function Call() {
    const[add,setadd]=useState(0)
  return (
    <div className='app'>
        <Child/>
    
        <h1>Learning useCallBack</h1>
        <h1>{add}</h1>
        <button onClick={()=>setadd(add+1)}>Click</button>
      
    </div>
  )
}

export default Call
