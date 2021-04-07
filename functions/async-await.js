const getDAtaPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num*2) : reject('Provide a number')
    },2000)
})

const processData = async () => {
    let data = await getDAtaPromise(2)
    data = await getDAtaPromise(data)
    console.log(typeof data)
    return data
}

processData().then((data) => {
    console.log('Data', data)
}).catch((err) => {
    console.log(err);
})