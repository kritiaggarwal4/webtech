// const calculator = (operator, a, b) => {
//   switch (operator) {
//     case "add":
//       return a + b;

//     case "sub":
//       return a - b;

//     case "mul":
//       return a * b;

//     case "divide":
//       return b !== 0 ? a / b : "Cannot divide by zero";

//     default:
//       return "Invalid operator";
//   }
// };

// // Examples
// console.log(calculator("add", 5, 4));     // 9
// console.log(calculator("sub", 10, 3));    // 7
// console.log(calculator("mul", 6, 2));     // 12
// console.log(calculator("divide", 8, 0));  // Cannot divide by zero

/*const calculator = () => {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const divide = (a, b) => b !== 0 ? a / b : "Cannot divide";
  return {
    add,
    sub,
    mul,
    divide
  };
};
const calc = calculator();
console.log(calc.add(5, 4))
console.log(calc.sub(5,4))
console.log(calc.mul(7,9))*/
const calculater = (op,a,b) =>{
switch(op){
    case "add":
        return a+b;
        case "sub":
            return a-b;
            case "mul":
                return a*b;
                case "divide":
                    return b!=0?a/b:"cannot  divide by zero";
                    default:
                        return "invalid operator";
}
};
console.log(calculater("add",4,6));
console.log(calculater("sub",5,3));
console.log(calculater("mul",4,6));

