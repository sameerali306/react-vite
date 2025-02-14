import React,{useState,useCallback} from "react";
function Form() {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[loginStatus,setLoginStatus]=useState("null")
    const loginForm=useCallback(()=>{
        if (email==="sam@gmail.com" && password==="1234567") {
            setLoginStatus("loggon in successfully")
        }else{
            setLoginStatus("invalid email or passwore")
        }
    },[email,password])
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("password submitted",email)
        console.log("email subbmit",password);
        loginForm()
        setEmail("")
        setPassword("")
        
    }
    return<>
    <h3>Callback hook example</h3>
    <form onSubmit={handleSubmit}>
        <label >email:</label>
        <input
         type="email"
         value={email}
         placeholder="Enter your email"
         onChange={(e)=>setEmail(e.target.value)}
         />
         <label >password:</label>
         <input 
         type="password"
         value={password}
         placeholder="Enter your password"
         onChange={(e)=>setPassword(e.target.value)}
         
         />
<button type="submit">Login Form</button>
    </form>
        
        

    
    
    </>
    
}
export default Form