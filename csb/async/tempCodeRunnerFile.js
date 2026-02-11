console.log("1) Start");

// const p = new Promise((resolve, reject) => {
//   console.log("2) Promise created ");
//   setTimeout(() => {
//     resolve("3) Work finished");
//   }, 1000);
// });
// console.log("4) After creating promise");

// p.then((value) => {
//   console.log(value); // runs AFTER resolve(...)
//   console.log("5) then() runs only when promise is resolved");
// });
// // //1) Start
// // 2) Promise created 
// // 4) After creating promise
// // 6) End (JS keeps running; then will run later)
// // 3) Work finished
// // 5) then() runs only when promise is resolved
// console.log("6) End (JS keeps running; then will run later)");