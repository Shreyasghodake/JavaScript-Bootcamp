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

const getDataPromise = () => new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('resolve')
        reject('reject')
    },2000)
})

const myPeomise = getDataPromise()

myPeomise.then((data) => {
    console.log(data)
}, (err)=>{
    console.log(err);
})

