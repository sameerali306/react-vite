import { useState } from "react"


function useCounter() {
     const [count,setcount]=useState(0)
        
    
        const increment=()=>setcount(count+1)
    
        const decrement=()=>setcount(count-1)
  return[count,increment,decrement]
}

export default useCounter
