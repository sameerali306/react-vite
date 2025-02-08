import React ,{useState, useEffect,useRef} from "react";

function Stopwatch() {
    const[isrunning,setisrunning]=useState(false)
    const[elapsedtime,setelapsedtime]=useState(0)
    const intervalIdRef=useRef(null)
    const usestartTimeRef=useRef(0)
    
    useEffect(()=>{
        if (isrunning) {
            intervalIdRef.current=setInterval(()=>{
                setelapsedtime(Date.now()-usestartTimeRef.current)
            },10)
            return()=>{
                clearInterval(intervalIdRef.current)
            }
            
        }

    },[isrunning])

    function StartTime() {
        setisrunning(true)
        usestartTimeRef.current=Date.now()-elapsedtime
        console.log(usestartTimeRef.current);
        
        
    }

    function StopTime() {
        setisrunning(false)
    }

    function ResetTime() {
setelapsedtime(0)
setisrunning(false)
        
    }
    function formatTime() {
        let hours=Math.floor(elapsedtime/(1000*60*60))
        let minutes=Math.floor(elapsedtime/(1000*60)%60)
        let seconds=Math.floor(elapsedtime/(1000)%60)
        let milliseconds=Math.floor((elapsedtime %1000)/10)

        hours=String(hours).padStart(2,"0")
        minutes=String(minutes).padStart(2,"0")
        seconds=String(seconds).padStart(2,"0")
        milliseconds=String(milliseconds).padStart(2,"0")


        return(
           `${hours}:${minutes}:${seconds}:${milliseconds}`
        )
    }
return(
    <>
    <div className="stopwatch">
        <div className="display">{formatTime()}</div>
        <div className="controle">
            <button  onClick={StartTime} className="start">start</button>
            <button  onClick={ResetTime} className="reset">reset</button>
            <button  onClick={StopTime} className="stop">stop</button>
        </div>
    </div>
    </>
)
    
}
export default Stopwatch