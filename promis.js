//const getData = new Promise((resolve, reject) =>{
//    // resolve (78437)
//    reject('dshgf')
// })
// getData.then((data) =>console.log(data + 3256))
//         .catch((err) =>console.error(err))

const getData = new Promise((resolve, reject) =>{
    const num = Math.random() * 10
    console.log(num);
    if(num < 5){
        resolve('Ok');
    }
    else{
        reject('error')
    }
})
getData.then((data) =>console.log(data))
       .catch((err) =>console.error(err))
       
  
// Fetch 
function getFetch(getURL) {
    fetch(getURL)
        .then((res) => res.json())
        .then((data) =>console.log(data))
        .catch((err) => {
        console.log(err)
        })
}
       
// Async/Await
async function getFetch(getURL) {
    try{
        const res = await fetch(getURL)
        const data = await res.json()
        console.log(data);
    }
    catch(err) {
        console.log(err);
    }
}