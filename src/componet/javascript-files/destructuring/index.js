function add(a,b) {
    console.log("I am inside a funcation");
    return a+b

   
}
function result(callback) {
    console.log("I am inside anather function");
    
const sum=callback(2,3)
console.log(sum);

}  


result(add)

// function returning function
function myFun() {
    function sum(a,b) {
        return a+b
        
    }
    return sum
    }
    let ans=myFun()
    console.log(ans(2,4));
    console.log(ans(5,5));
    console.log(ans(5,10));
    console.log(ans(6,5));
    console.log(ans(5,5));
    // The function that take input anather function and return it i called higher order function
    
    
    