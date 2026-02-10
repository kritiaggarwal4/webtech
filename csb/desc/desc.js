let student = {
 name: "abhishek",
  age :"10",
  course: "bitech",
  address: "ghazianad"
};
const{name:stuname = "amit",course,address} = student
const { age = 20 } = student;
console.log(age);
console.log(stuname)
//function destructuring
function displayStu(student) {
  //console.log(`My name is ${student.name} and age is ${student.age}`);
console.log(`my name is ${stuname}`)
}
displayStu(student)
//destructuring (swap)
