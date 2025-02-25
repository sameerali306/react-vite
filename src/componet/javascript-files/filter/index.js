const num=[12,3,4,4,6,1,90,8,56,54,53,5,41,33,7]
function isEven(number) {
    return number%2==0
    
}
const x=num.filter(isEven)
console.log(x);


const isOdd=(number)=>{
    return number%2!==0
}
const y=num.filter(isOdd)
console.log(y);


const student=[
    {Id:1,userName:"sameer ali",password:"2233123"},
    {Id:2,userName:"ahsan mir",password:"2253123"},
    {Id:3,userName:"shoaib akther",password:"2255123"},
    {Id:4,userName:"shahzain alam",password:"22339833"}

]
const filteredStudents = student.filter(student => student.userName === "ahsan mir");
console.log(filteredStudents);
const detail=student.filter(student=>student.Id===4)
console.log(detail);

function information(details) {
    return details.password === "2233123";  // Ensure password is a string if necessary
}

const name = student.filter(information);

if (name.length > 0) {
    console.log(name);
} else {
    console.log("No students found with the matching password.");
}