const number = 41;
const isPrime = function (num) {
    if( num%2 ==0 && num != 2) {
        //console.log((num &1)!=0)
        return false
    }
    let i
    for(i=3; i*i <= num ; i++){
        if( num % i ==0 ){
            console.log(i)
            return false    
        }
        i++
    }
    return true
}

console.log(isPrime(number))