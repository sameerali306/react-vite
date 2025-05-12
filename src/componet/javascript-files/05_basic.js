/* the data type in the javascript is divide into two main category
primitive and non_primitive data type
primitive data type  :-)they are immutable and store value directle in a memory
*/

//************************ immutable  *******************************

let str="hello"
str="Hi"  //this str variable is overwrite instead of change the original variable the original hello word is still in memory
// console.log(str);



/* non primitive data type :-)non primitive data typ is data type that is mutable and store the reference of data
where it is store*/

// object
const person={
    name:"sameer ali",
    age:22
}
person.name="samir"
// console.log(person);

// array
const color=["green","blue","yellow"]

color[1]="purple"
// console.log(color);


const today=new Date()
// console.log(today);

const pattern = /ab+c/;
console.log(pattern);




