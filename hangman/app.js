const puzzelEl = document.querySelector('#show-guess')
const guessesEl = document.querySelector('#remaining-guess')
let game1 

// puzzelEl.textContent = game1.puzzle
// guessesEl.textContent = game1.statusMessage

window.addEventListener('keypress', function(e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
    
})



// then((data) => {
//     console.log(data);
// }, (err) => {
//     console.log(err);
// })

// getLocation().then((location) => {
//    // console.log(`you are in ${location.city} ${location.region} ${location.country}`)
//     return getCountry(location.country)
// }).then((country)=>{
//     console.log(country.name);
// }).catch((err) => {
//     console.log(err)
// })

// getCountryName('IN').then((countryName) =>{
//     console.log(countryName)
// }).catch((err)=> {
//     console.log(err)
// })


// getPuzzle('1').then((puzzle) => {
//     console.log(puzzle)
// }).catch((err)=> {
//     console.log(err)
// })

// getCurrentCountry().then((country) => {
//     console.log(country.name);
// }).catch((err)=>{
//     console.log(err);
// })
const render = () => {
    puzzelEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
}

const startGame = async () => {
    const puzzle =await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()