const person = [{
    name: 'Shreyas',
    age: 21
},{
    name: 'Vishal',
    age: 22
},{
    name: 'Vaibhav',
    age: 20 
}]

const age22 = person.find( (person) => person.age === 22)

console.log(age22)