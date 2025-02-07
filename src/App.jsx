import React, { useState } from "react";
import "./App.css"
const question=[
    {
        questionText:"what is the capital of france?",
        answereOptions:[
            {answereText:"new york",isCorrect:false},
            {answereText:"parise",isCorrect:true},
            {answereText:"landon",isCorrect:false},
            {answereText:"karachi",isCorrect:false}
        ] 

        
    },

    {
        questionText:"who win Champion Trophy 2017?",
        answereOptions:[
            {answereText:"India",isCorrect:false},
            {answereText:"afganistan",isCorrect:false},
            {answereText:"Pakistan",isCorrect:true},
            {answereText:"Austraila",isCorrect:false}
        ] 

        
    },
    {
        questionText:"what is the meaning of cops?",
        answereOptions:[
            {answereText:"police",isCorrect:true},
            {answereText:"death bodies",isCorrect:true},
            {answereText:"manage",isCorrect:false},
            {answereText:"easy",isCorrect:false}
        ] 
    },
    {
        questionText:"what is the synonemous of always ?",
        answereOptions:[
            {answereText:"soon",isCorrect:false},
            {answereText:"shortly",isCorrect:true},
            {answereText:"Certainly",isCorrect:true},
            {answereText:"frequentle",isCorrect:false}
        ] 
    }
    ,
    {
        questionText:"what is the synonemous of very tired ?",
        answereOptions:[
            {answereText:"enough",isCorrect:false},
            {answereText:"deely",isCorrect:true},
            {answereText:"boring",isCorrect:true},
            {answereText:"Ehausted",isCorrect:true}
        ] 
    }


   
       
]
function App() {
   const[currentquestion,setCurrentQuestion]=useState(0)
   const[answered,setanswered]=useState(false)
   const[selectedanswere,setselectedanswered]=useState(null)
   const[score , setscore]=useState(0)
   const[showscore,setshowscore]=useState(false)
   const Nextquestion=()=>{
    setanswered(false)
    setselectedanswered(null)
    const nextquestion=currentquestion+1
    if (nextquestion < question.length) {
        setCurrentQuestion(nextquestion )

    }else{
        setshowscore(true)
    }

}
const handleAnswereOption=(index,isCorrect)=>{
setanswered(true)
setselectedanswered(index)
if(isCorrect){
setscore(score+1)
}
}
    return(
        <div className="flex justify-center items-center h-screen">
        <div className="w-full max-w-lg bg-white p-5 rounded shadow-lg">
            <div className="p-2 border text-center font-bold mb-2 text-xL">Quiz App</div>
            {showscore ? <div>
                Your score {score} of {question.length}
            </div> :
            <div>{question[currentquestion].questionText}</div>}
           {question[currentquestion].answereOptions.map((option,index)=>{
                return <button
                onClick={()=>handleAnswereOption(index,option.isCorrect)}
                key={index} className={`block w-full p-2 mt-2 rounded border ${answered ? option.isCorrrect? "bg-green-200":
                    selectedanswere==index ? "bg-green-200" :"":""
                }`}>{option.answereText}</button>;
            })}
            <button className={`${answered ? "bg-green-500" : "bg-green-200"} block w-full bg-green-500 text-white p-2 rounded`}
            disabled={answered ?"":"disabled"}
            onClick={Nextquestion}>Next Question</button>
            <p className="text-center text-gray-400 text-sm">question {currentquestion+1} of {question.length}</p>
            
        </div>
        </div>
    )
    
}
export default App