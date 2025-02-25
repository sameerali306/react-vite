const num=[1,3,4,5,6,9,1]
const sum=num.reduce((accumulator,currentvalue)=>{
    return accumulator+currentvalue
})
console.log(sum);

const card=[
    {productId:1, productname:"tv",productprice:30000},
    {productId:2, productname:"laptop",productprice:230000},
    {productId:3, productname:"carpet",productprice:34000},
    {productId:4, productname:"washinfmachine",productprice:560000},
]
const add=card.reduce((totalprice,currentprice)=>{
    return totalprice+currentprice
})
console.log(add);