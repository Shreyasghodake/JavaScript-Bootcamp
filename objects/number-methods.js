let geussNumber = function(){
    let min = 1
    let max = 5
    return (Math.floor(Math.random() * (max-min+1)) + min)
}

console.log(1 == geussNumber())