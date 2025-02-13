let person={
    firstname:"sameer",
    lastname:"Ali",
    
    get fullname(){
return `${this.firstname} ${this.lastname}`
    }

}
console.log(person.fullname);

let number="age"
let person1={
    name:"sameer",
    [number]:12

}
console.log(person1.age);



