var1="ali"
function app() {
    const myFun=()=>{
        // const var1="sameer"
        console.log("Hi I am INNER function",var1);
       }
       myFun()
    console.log(var1);
   
    
}
app()