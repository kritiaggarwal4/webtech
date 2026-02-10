// function sum(...num) { //rest operator - we can take multiple values input and convert it in array 
//     let total = 0;
//     for (let i of num) {
//         total = total + i;
//     }
//     return total;
// }

// console.log(sum(1, 2, 3, 4, 4));  // 14

// //console.log(sum(1,2,3,4,4))  //it will print zero because its not an array and its length is not defined
// let a =[1,2,3,4,5]
// let[first,second, ...rest] = a
// console.log(first)
// console.log(...rest) //it will spread (...array = spreaded values )
const evenfunc = (a) => {
    if (a % 2 == 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
};

evenfunc(6);   // even
//reversing string
 reverseStr = (str) => {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
};

console.log(reverseStr("hello"));
average = (...nums) =>{
    let sum = 0;
    for(let i in nums){
    sum = sum+nums[i]
    }
    let avg = sum/nums.length
    if(avg>=40){
        console.log("pass")
    }
    else{
        console.log("fail")
    }
}
average(1,2,3,4,5,6,7,8)



