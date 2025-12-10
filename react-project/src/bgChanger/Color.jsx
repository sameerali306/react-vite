import React, { useState } from 'react'

function Color() {

    const [Color,setColor]=useState("gray")
    return(
        <>
       <div className='w-full h-screen duration-200' style={{backgroundColor:Color}}>
         <button className='p-2 m-5 bg-red-600 rounded' onClick={()=>setColor("red")}>Red</button>
        <button className='p-2 m-5 bg-green-600 rounded' onClick={()=>setColor("green")}>Green</button>
        <button className='p-2 m-5 bg-yellow-600 rounded' onClick={()=>setColor("yellow")}>Yellow</button>
       </div>
        </>
    )
}

export default Color
