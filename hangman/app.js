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

const request = new XMLHttpRequest()

request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText)
        console.log(data)
    } else if (e.target.status === 4) {
        console.log('An error has occured')
    }
})

request.open('GET', 'http://puzzle.mead.io/puzzle')
request.send()