
//synchronous programming language
// console.log("first")
// console.log("second")
// console.log("third")
// //first second third
//asynchronous programming 
//if there are any thing that takes time and that does not affect coming operations this is called as asynchronous programming

// console.log("Start");

// setTimeout(function () {
//     console.log("Inside Timeout"); //it will take 2 second hault and then it will print "inside timeout"
// }, 4000);

// console.log("End");
//set intervel

// x = setInterval(() => {
// //     console.log("first"); infinite times it will run
// // }, 3000);
// let count = 0;

// let x = setInterval(() => {
//     if (count === 5) {
//         clearInterval(x);
//         return;
//     }

//     console.log("first");
//     count++;
// }, 3000);

// function roll(num,next){
//     setTimeout(()=>{
//         console.log("Roll no.is"+num);
//         if(next)
//             next();
//     },2000);
// }

// roll(12212,()=>{
//     console.log("wait its getting download");

// roll(12312,()=>{
//     console.log("wait its getting download");

// roll(12412,()=>{
//     console.log("wait its getting over");
//     roll(12512);

// });
// });
// });
//now change timeout of every other roll number
// function roll(num, next, t) {
//     setTimeout(() => {
//         console.log("Roll no. is " + num);
//         if (next) next();
//     }, t);
// }
// roll(12212, () => {
//     console.log("wait its getting download");

//     roll(12312, () => {
//         console.log("wait its getting download");

//         roll(12412, () => {
//             console.log("wait its getting over");

//             roll(12512, null, 1000);

//         }, 4000);

//     }, 3000);

// }, 2000);
function roll(num,delay,next){
    setTimeout(()=>{
        console.log("Roll no.is"+num);
        if(next)
            next();
    },delay );
}

roll(12212,2000,()=>{
    console.log("wait its getting download");
});

roll(12312,4000,()=>{
    console.log("wait its getting download");
});

roll(12412,6000,()=>{
    console.log("wait its getting over");
    roll(12512);

});
