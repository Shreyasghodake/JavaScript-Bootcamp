const calculateAverage = (thing, ...numbers) => {
    let sum = 0
    numbers.forEach((number) => sum += number)
    const average = sum / numbers.length
    return `The average ${thing} is ${average}`
}

console.log(calculateAverage('Grade', 0, 100 , 88, 64));


const printTeam = (name,coach, ...players) => {
    console.log(`Team ${name}`)
    console.log(`Coach ${coach}`)
    console.log(`Players ${players.join(', ')}`)
}

printTeam('Liberty','casey Penn', 'Marge', 'Aiden', 'Herbert', 'Sherry')    

const team = {
    name :'Liberty',
    coach :'casey Penn',
    players: ['Marge', 'Aiden', 'Herbert', 'Sherry']    
}

printTeam(team.name, team.coach, ...team.players)

let house = {
    bedrooms: 2,
    bathrooms: 1.5,
    yearBuilt: 2017
}

let newHouse = {
    basement: true,
    bedrooms: 3,
    ...house
}

console.log(house)

console.log(newHouse)

pesrson = {
    name: 'Shreyas',
    age: 21
}

location = {
    city: 'Ichalkaranji',
    country: 'India'
}

overview = {
    ...pesrson,
    ...location
}

console.log(overview)



const todo = {
    id: 'abc',
    text: 'Pay the bills',
    completed: false
}

const printTodo = ({text, completed}) => {
    console.log(`${text}: ${completed}`)
}

printTodo(todo)

const {text:todoText, completed , details = 'No details provided', ...others} = todo

console.log(todoText)
console.log(completed)
console.log(details)
console.log(others)

const age = [65, 0, 13]
const [firstAge, ...otherAges] = age

console.log(firstAge)
console.log(otherAges)