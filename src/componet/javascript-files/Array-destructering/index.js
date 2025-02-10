let myArray=["sameeer","zohaib","Ali","shahzain","ehsan","sartaj"]
let[var1,var2,...mynewArray]=myArray
console.log("value of  var1",var1);
console.log("value of  var2",var2);
// console.log("value of var3",var3);
// let mynewArray=myArray.slice(3)
console.log(mynewArray);


let mixed=["apple","mange","grape","biscuit","juice","pepsi","rice","pulses","beans"]
let fruits=mixed.slice(0,3)
console.log(fruits);
let bakery=mixed.slice(3,6)
console.log(bakery);
let home=mixed.slice(6,9)
console.log(home);

let[array1,array2,array3,...array4]=mixed
console.log(array1);
console.log(array4);








