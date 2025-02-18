import React from 'react'
import { useState } from 'react'
import useCounter from './useCounter'

function Counter() {
   const[count,increment,decrement]=useCounter()
  return (
    <div className='app'>
      <div>{count}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter
