console.log(1);
console.log(2);
console.log(3);
// setInterval(() =>{
//     console.log(4);
// }, 1000)
let num = 0;
const intervalId = setInterval(() =>{
    console.log(num++);
    if(num === 10){
        clearInterval(intervalId);
    }
})
console.log(5);
console.log(6);
console.log(7);

