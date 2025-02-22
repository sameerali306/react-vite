const person=[
    {name:"sameer ali",age:"20"},
    {name:"aliyan khan",age:"22"}
]

person.forEach(function(person){
    console.log(person.name);
    
})

for (let information of person){
    console.log(information.age);
    
}

// map method
const numbers=[2,4,3,5]
// function square(number) {
//     return number*number
    
// }
const result=numbers.map((number,index)=> {
    return `index=${index}, number=${number*number}`
    
})
console.log(result);

const users=[
    {Id:0, userName:"sameer ali",age:20,eduction:"undergraduate"},
    {Id:1, userName:"sanan syed",age:23, eduction:"undergraduate"},
    {Id:2, userName:" ali",age:22 ,eduction:"matriculate"},
    {Id:3, userName:"adian",age:10 ,eduction:"middle"},
    {Id:4, userName:"ashiq ali",age:26 , eduction:"graduate"}
]
const ans=users.map((item,index)=>{
    return `item=${item.Id} and index=${index}`
})
console.log(ans);

const ans2=users.map((item,index)=>{
    return `item=${item.userName} and  index=${index}`
})
console.log(ans2);

const ans3=users.map((item,index)=>{
    return `item=${item.age} and index=${index}`

})
console.log(ans3);

const ans4=users.map((item,index)=>{
    return `item=${item.eduction} and index=${index}`
})
console.log(ans4);





