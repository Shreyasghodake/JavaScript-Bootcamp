const getDatacallback = (callback) => {
    setTimeout( () => {
    callback(undefined, "This will log after 2 sec");
    }, 2000)
}

getDatacallback((err, data) => {
    if(data) {
        console.log(data)
    }
})

const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(()=>{
        typeof num === 'number' ? resolve(num *2) : reject('Number must be provided')
    },2000)
})

const myPromise = getDataPromise()

myPromise.then((data) => {
    console.log(data)
}, (err)=>{
    console.log(err);
})

getDataPromise(10).then((data) => getDataPromise(data)
).then((data)=> {
   return getDataPromise(data)
}).then((data) => {
    console.log(data);
}).catch((err)=>{
    console.log(err);
})
