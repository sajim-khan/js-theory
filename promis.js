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
        resolve('dsfndc');
    }
    else{
        reject('error')
    }
})
getData.then((data) =>console.log(data + 3256))
       .catch((err) =>console.error(err))
       
       
       