let user = {
    name : "kriti", 
    course:"btech",
    branch: "cs"
};
// let name = user.name
// let course = user.course
// let branch = user.branch 
//instead of doing this
//Variable names must match keys
let {name,course,branch} = user
console.log(name)
console.log(course)
console.log(branch)

// let student = {
//   name: "diya",
//   course: "bitech"
// };

let { name: studentname, course: coursereg } = student; //reanaming keys 

console.log(studentname); // diya
//array destructuring
let num = [10,20,30]
let[a,b,c,d] = num
console.log(a)
console.log(b)
console.log(c)
console.log(d) //not declared hence it will be printed as undefined
//skip values
let[,r,s]= num //take different variable name (will skip first value )
console.log(r)
//rest operator with destructuring
let[first, ...rest] = num
console.log(first) //10
console.log(rest)//[20, 30]
