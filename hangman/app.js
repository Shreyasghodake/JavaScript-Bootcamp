const puzzelEl = document.querySelector('#show-guess')
const guessesEl = document.querySelector('#remaining-guess')
const game1 = new Hangman('Cat', 2)

puzzelEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage

window.addEventListener('keypress', function(e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzelEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
    
})



getPuzzle('1').then((data) => {
    console.log(data);
}, (err) => {
    console.log(err);
})


getCountryName('IN').then((country) =>{
    console.log(country.name)
}, (err) => {
    console.log(err)
})