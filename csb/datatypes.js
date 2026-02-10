"use strict"; //treats all JS code as newer version
//alert(3+3) // we are using node js not browser
let num = "167";
let name = "kriti";
let isfinal = false
let address;
let num1 = 1;
//number -> range 2 to power 53
//bigint->stores large range of number 
//string
//boolean 
//undefined ->lf declared and not initialized - TYPE
//symbol->mostly used in react
//null - standalone value - OBJECT
//object ->non primitive data type
console.log(typeof(num))
console.log(typeof(null)) //object
console.log(typeof(undefined)) //undefined
//conversion
let ValueInNumber = Number(num);
console.log(typeof ValueInNumber );
let BoolNum = Boolean(num1);
console.log(BoolNum);
//"33" -> 33
//"33abc" =>NaN
//"hitesh" =>NaN
//true->1 false->0
//  let value = 3
//  let negvalue = -value
//  console.log(negvalue);
//  console.log(2*2)
//   console.log(2**3) //2 to the power 3
//   console.log(2/3) //proper fraction value
//   console.log(2%3) //modulus
 let str1 = "hello";
 let str2 = "kriti"
 let str3 = str1+" " +str2
 console.log(str3)
 console.log(1+2)//3
  console.log(1+"2")//12
 console.log("1"+2) //12
 console.log(1+2+"3")//33
 console.log("1"+2+2) //122