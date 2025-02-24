import React, { useRef } from 'react'

function Ref2() {
    const inputElement=useRef()
    const handlechange=()=>{
        console.log(inputElement.current);
        inputElement.current.style.background="green"
        
    }
  return (
    <div>
        <input className='border-2 flex justify-center items-center' type="text" ref={inputElement}/>
        <button className='border-2 flex justify-center items-center' onClick={handlechange}>clicked</button>
      
    </div>
  )
}

export default Ref2
