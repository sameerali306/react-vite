import React, { useMemo, useState } from 'react'

function Card() {
    const[number, setnumber]=useState(0)
    const[Counter,setcounter]=useState(0)
    function cubnumber(num) {
        console.log("CalculaTION DONE !");
        return Math.pow(num,3)
        }
        const result= useMemo(()=>cubnumber(number),[number])
  return (
    <div className="flex flex-col items-center space-y-4 p-6">
  <input
    type="number"
    value={number}
    onChange={(e) => setnumber(e.target.value)}
    className="p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <h1 className="text-2xl font-semibold text-gray-700">
    Cube of the number: <span class="font-bold text-blue-600">{result}</span>
  </h1>
  <button className="text-2xl border-gray-100 rounded-lg bg-gray-500"onClick={()=>{setcounter(Counter+1)}}>Counter++</button>
  <h1 className='text-3xl border-gray-300 '>Counter value={Counter}</h1>
</div>

  )
}

export default Card
