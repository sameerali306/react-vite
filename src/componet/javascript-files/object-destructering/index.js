// destructering mean taking  properties of an obect or variable
const band={
    bandName:"led zippline",
    famousSong:"stairway to heaven",
    year:1998,
    student:"sameer"
}
// const bandName=band.bandName
// console.log(bandName);
// const famousSong=band.famousSong
// console.log(famousSong);
// if we want to destructer an an array we can use this mehtod too by store them in object and if we want to change the name of the variable we simple use use colon and than add our new variable name
const{bandName:var1,famousSong:var2 ,...rest}=band 
console.log(var2);
console.log(rest);


