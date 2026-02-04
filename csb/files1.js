// function show(){
//     console.log("kriti aggarwal");
// }
// show();
// const show = () => {
//     console.log("kriti aggarwal");
// };
// show();
// (function () {
//     console.log("IIFE normal function");
// })();
// const obj = {
//     name: "Kriti",
//     show: function () {
//         (function () {
//             console.log(this.name); //undefined
//         })();
//     }
// };
// obj.show();
const obj = {
    name: "Kriti",
    show: function () {
        (() => {
            console.log(this.name); // ✅ Kriti
        })();
    }
};

obj.show();




