const student=[
{Id:1,userName:"sameer ali",password:"2233123"},
{Id:2,userName:"ahsan mir",password:"2253123"},
{Id:3,userName:"shoaib akther",password:"2255123"},
{Id:4,userName:"shahzain alam",password:"22339833"}
]
function detail(information) {
    return information.password
}
const inform=student.map(detail)    
console.log(inform);
