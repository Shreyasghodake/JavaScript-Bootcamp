const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessesLetters = ['c', 't']
}

Hangman.prototype.getPuzzle = function() {
   
    let puzzel = ''
    this.word.forEach(letter => {
        
        if (this.guessesLetters.includes( letter) || letter === ' ') {
            puzzel += letter
        } else {
            puzzel += '*'
        }
    })
    return puzzel
}
const game1 = new Hangman('Cat', 2)
const game2 = new Hangman('Ichalkaranji Maharashtra', 5)
console.log(game1.getPuzzle())

console.log(game2.getPuzzle())