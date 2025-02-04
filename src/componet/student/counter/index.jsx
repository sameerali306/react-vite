function Counter() {
     const[Counter,setCounter]=useState(0)
      return(
        <div className="main">
        <h1 className={`${Counter <0 && "negative"}`}>{Counter}</h1>
        <div>
          <button id="decrease" onClick={()=>setCounter(prev=>prev-1)}>decrement</button>
          <button id="reset" onClick={()=>setCounter(0)}>Reset</button>
          <button id="increase" onClick={()=>setCounter(prev=>prev+1)}>increment</button>
        </div>
        
        </div>
      )
      
    }

export default Counter