const app=()=>{
    function add(num1,num2) {
        return num1+num2
        }
    const mul=(num1,num2)=>{
        return num1*num2

    }  
    const Hello=function(){
        console.log("hi I am funcation expression");
        
    }
    const x=mul(4,5)
    console.log(x);
    
    console.log(add(5,6))  
    Hello()
    
    

    console.log("inside a function");
    
}
app();
