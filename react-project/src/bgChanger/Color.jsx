import React, { useState } from 'react'

function Color() {

    const [Color,setColor]=useState("gray")

    let RedColor=()=>{
        setColor("red")
    }
     let GreenColor=()=>{
        setColor("green")
    }
    let YellowColor=()=>{
        setColor("yellow")
    }
     let BrownColor=()=>{
        setColor("brown")
    }
     let BlackColor=()=>{
        setColor("black")
    }
     let PurpleColor=()=>{
        setColor("purple")
    }
    

    return(
        <>
       <div className='w-full h-screen duration-200' style={{backgroundColor:Color}}>
         <div className="flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
            <div className="flex flex-wrap justify-center px-2 py-2 gap-2 shadow-lg bg-white rounded-3xl ">
            <button className='p-2 m-5 bg-red-600 rounded' onClick={RedColor}>Red</button>
        <button className='p-2 m-5 bg-green-600 rounded' onClick={GreenColor}>Green</button>
        <button className='p-2 m-5 bg-yellow-600 rounded' onClick={YellowColor}>Yellow</button>
         <button className='p-2 m-5 bg-amber-700 rounded' onClick={BrownColor}>brown</button>
        <button className='p-2 m-5 bg-purple-600 rounded' onClick={PurpleColor}>purple</button>
        <button className='p-2 m-5 bg-black rounded' onClick={BlackColor}>black</button>
         </div>
         </div>
       </div>
        </>
    )
}

export default Color
