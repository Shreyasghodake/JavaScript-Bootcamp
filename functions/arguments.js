let getTip = function (total ,tipPercentage = .2 ) {   
    return `A ${tipPercentage}% on $${total} would be $${total * tipPercentage} `
}

console.log(getTip(100,0.25))