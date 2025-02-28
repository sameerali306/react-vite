import React, { useCallback, useState } from 'react'
import Child from './Child'

function Callback() {
    const [counter,setcounter]=useState(0)
    const Learning=useCallback(()=>{},[])
  return (
    <div>
        <h1 className='flex justify-center text-3xl'>Learning useCallback hook</h1>
        <h1 className='flex justify-center text-2xl'>Counter : {counter}</h1>
        <button 
  onClick={() => setcounter(counter + 1)} 
  className="border-2 bg-gray-300 flex justify-center mx-auto my-auto rounded-full px-4 py-2"
>
  Click me
</button>
      <Child Learning={Learning}/>
    </div>
  )
}

export default Callback
