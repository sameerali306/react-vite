function hello() {
    console.log("happy birthday to you ......");
    
    
}
hello()


function add() {
    return 2+3
    
}
console.log(add());

function param(a,b) {
    return a+b
    
}
console.log(param(2,6));
console.log(param(8,6));
console.log(param(2,7));
console.log(param(undefined,undefined));

function threeNumber(a,b,c) {
    return a+b+c
    
}
console.log(threeNumber(12,12,12));


function EvenOrodd(number) {
    if (number%2==0) {
        return true
        
    }else{
        return false
    }
    
}
console.log(EvenOrodd(5));

function Character(word) {
    return word[2]
    
}
console.log(Character("sameer"));

function Plus(array,target) {
    for(i=0 ;i<Array.length;i++){
        for (let i = 0; i < array.length; i++) {
            if(array[i]===target){
                return i
            };
            
        }


    }
    return -1
       
    
}
const array=[1,23,32,54,67,90,12]
const ans=Plus(array,100);
console.log(ans);


