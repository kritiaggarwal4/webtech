// const p = new Promise((resolve, reject) => { //A Promise can settle only once.
//   reject("Big Block error"); //when task failed jisko phele call what will get executed next one will be ignored
//   resolve("sab theek hai"); //used when task is successful 
// });
// p.then((value) => { //then handles resolve
//   console.log(value);
// }).catch((error) => { //catch handles reject
//   console.log("error hai", error);
// });

// console.log("1) Start");

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


function roll(num, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Roll. no. is " + num);
      resolve(num); // pass value to next step
    }, delay);
  });
}
roll(12212, 1000)
  .then(() => {
    console.log("wait its getting downloaded");
    return roll(12312, 2000);
  })
  .then(() => {
    console.log("wait its getting downloaded");
    return roll(12412, 3000);
  })
  .then(() => {
    console.log("wait its almost over");
    return roll(12512, 4000);
  })
  .catch((err) => {
    console.log("Error:", err);
  })
  .finally(() => {
    console.log("Done with viva)");
  });

//another way to handle 
// roll(12212, 1000)
//   .then(() => (console.log("downloading..."), roll(12312, 2000)))
//   .then(() => (console.log("downloading..."), roll(12412, 3000)))
//   .then(() => (console.log("almost over..."), roll(12512, 4000)))
//   .catch(console.log)
//   .finally(() => console.log("Done with viva)"));