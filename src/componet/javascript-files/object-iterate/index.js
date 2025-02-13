const person={
    name:"sameer ali",
    age:20,
    hobies:["music","playing circket","playing football"]
}
for(let key in person){
    console.log(person[key]);
    console.log(`${key}:${person[key]}`);
    console.log(typeof (Object.keys(person)));
    const obj=Array.isArray(Object.keys(person))
    console.log(obj);
    for (let key of(Object.keys(person))){
        console.log(key);
        
    }
    
    
}