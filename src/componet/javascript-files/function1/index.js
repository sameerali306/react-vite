function myfunction(array,target) {
    for (i=0; i<array.length; i++){
        if (array[i]===target) {
            return i
            
        }
       
    }
    return -1
    
}
const myarray=[1,34,4,5,76,8,9,1,12]
const ans=(myfunction(myarray,76));
console.log(ans);

