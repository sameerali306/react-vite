// let and const are block scope 
// var is a function scope
{
    const fname="sameer ali"
   
    console.log(fname);    
}

 var fname="sameer ali"
function app() {
    if (true) {
        var fname="aali"
       
        console.log(fname);
        }
        console.log(fname);
}
console.log(fname);

app()