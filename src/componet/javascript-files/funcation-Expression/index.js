const add=function (number1,number2,number3) {
    return number1+number2+number3
    
}
const value=add(2,3,2)
console.log(value);


let num=prompt("enter a value");
let i=0

const multiply=function () {
    for(i=0 ;i<10;i++){
        console.log(num *(i+1));
    }
    
}
multiply()


let n = 3;

///  // Print the returned array


let number=prompt("Enter value")
const multipl=function () {
     let table=[]
     for(i=1;i<=10;i++){
        table.push(number*i)
     }
     return table
    
}
console.log(multipl());

