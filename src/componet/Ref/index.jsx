import { useState,useEffect,useRef } from "react";

function MyComponent() {
const ref=useRef(0)
console.log(ref);


useEffect(()=>{
    console.log("component render");
    
})

    function handleClick(params) {
        ref.current++;
        console.log(ref.current);
        

        
    }
    return<>
    <button onClick={handleClick}>Click !</button>
    </>
    
}
export default MyComponent