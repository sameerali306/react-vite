import React, { useState } from 'react'

function Card() {
    const[car,setcar]=useState({
        fname:"sameer",
        color:"blue"


    })
    const handlechange=()=>{
        setcar((prevs)=>{
            return{...prevs , fname:"ali",color:"red"}
        })

    }

  return (
    <div>
        <h1>I have {car.color} Car {car.fname}</h1>
        {/* <h2>I have {red} car {sameer}</h2> */}
        <button onClick={handlechange}>clicked</button>
      
    </div>
  )
}

export default Card
