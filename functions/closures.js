const createAdder = (a) => {
    return (b) => {
        return a+b
    }
}

const add5 = createAdder(5)
console.log(add5(3))

const createTipper = (tipPercentage) => {
    return (billAmount) => {
        return tipPercentage * billAmount 
    }
}

const tip15 = createTipper(.15)
const tip20 = createTipper(.20)
const tip25 = createTipper(.25)

console.log(tip20(100))
console.log(tip15(100))