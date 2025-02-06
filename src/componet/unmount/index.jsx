import { useState } from "react";

function Card({text}) {
const[state,setstate]=useState<Boolean>(true)    
return <>
return(
    <button onClick={e=>setstate(!state)} >{text}</button>
    {state ? <Counter/> : ""}
)
</>
}
export default Card