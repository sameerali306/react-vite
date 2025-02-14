import { useState } from "react"

function Memo() {
    const[counter , setCounter]=useState(0)
    return(<>
     <h1>Counter :{counter}</h1> 
     <button onClick={}> increment one:{counter}</button>
     <button> increment two:{counter}</button>
    
    </>
      
    )
    
}
export default Memo