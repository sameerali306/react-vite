const numbers=[2,3,5,6,1]

function mul(number,index) {
    console.log(`index is ${index} number is ${number} and number multiply by  2 =${number*2}`);
    // console.log(`${number}*2=${number*2}`);
    }
    // for (let i = 0; i < numbers.length; i++) {
    //    mul(numbers[i],i)
        
    // }

    numbers.forEach(mul)


    const student=[
        {name:"sameer ali",age:19,education:"undergraduate"},
        {name:"shahzain",age:22,education:"undergraduate"},
        {name:"sartaj",age:21,education:"undergraduate"},
        {name:"khursheed",age:28,education:"graduate"},
        {name:"ashiq",age:27,education:"graduate"}
    ]

    function detail(item,index) {
        console.log(`index is ${index} and item is`,item);
        }
        student.forEach(detail)
        // for(i=0;i=student.length;i++){
        //     detail(student[i],i)

        // }