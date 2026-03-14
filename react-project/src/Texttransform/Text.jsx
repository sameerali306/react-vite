import React from 'react'
import { useState } from 'react'

function Text(props) {
    const[text,settext]=useState("")

    const TextChange=()=>{
        console.log(text);
        
        let newText=text.toUpperCase();
        console.log(newText);
        settext(newText)
    }
    
    const hangleChange=(e)=>{
        settext(e.target.value);
        
    }


    return (
        <>
       
         <div className="mr-6">
            <h1 className=' ml-20 mt-5 flex justify-center text-2xl mask-linear-to-neutral-600'>{props.header}</h1>
        <textarea className='flex justify-center bg-amber-200 text-2xl align-middle ml-20 mr-20 p-5 hover:bg-transparent w-300 border-2 rounded-2xl ' rows={8} onChange={hangleChange} value={text}></textarea>
        <button className='bg-blue-700 p-4 ml-20 mt-5 rounded  hover:bg-transparent hover:border-2 hover:text-4xl hover:rounded-2xl' onClick={TextChange}>Conver to UpperCase</button>
        </div>
        <div className="ml-12 mt-8  text-3xl border-2 rounded-2xl align-middle p-7">
            <h1>Your text summary </h1>
            <p>you have {text.split(" ").length} word {text.length} character</p>
        </div>
       
        </>
        
    )
}

export default Text
