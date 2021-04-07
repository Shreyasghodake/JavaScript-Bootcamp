class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessesLetters = []
        this.status = 'playing'
    }
    calculateStatus() {
        const finished = this.word.every( (letter) => this.guessesLetters.includes(letter) || letter === ' ')
    
        if(this.remainingGuesses == 0) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
    }
    get statusMessage() {
        if (this.status === 'playing') {
            return `Guesses left :${this.remainingGuesses}`
        } else if (this.status === 'failed') {
            return `Nice try! The word was "${this.word.join('')}"`
        } else {
            return 'Great work! You guessed the word.'
        }
    }
    get puzzle() {
   
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
    makeGuess(guess) {
    
         guess = guess.toLowerCase()
        const isUnique = !this.guessesLetters.includes(guess) 
        const isBadguess = !this.word.includes(guess)
    
        if (this.status !== 'playing') {
            return
        }
    
        if (isUnique) {
            this.guessesLetters = [...this.guessesLetters ,guess]
        }
        if (isUnique && isBadguess) {
            this.remainingGuesses --
            
        }
        this.calculateStatus()
    }
}


// const Hangman = function (word, remainingGuesses) {
//     this.word = word.toLowerCase().split('')
//     this.remainingGuesses = remainingGuesses
//     this.guessesLetters = []
//     this.status = 'playing'
// }

// // Hangman.prototype.makeGuess = function (guess) {
// //     if (!this.guessesLetters.includes(guess) && !this.falseGuesses.includes(guess)){
// //         if(this.word.includes(guess)) {
// //             this.guessesLetters.push(guess)
// //         } else {
// //             this.falseGuesses.push(guess)
// //             this.remainingGuesses -= 1
// //         }
// //     }
// // }

// Hangman.prototype.calculateStatus = function() {
//     // let finished = true
//     // this.word.forEach( (letter) => {
//     //     if(!this.guessesLetters.includes(letter)) {
//     //         finished = false
//     //     }
//     // }) 

//     const finished = this.word.every( (letter) => this.guessesLetters.includes(letter))

//     if(this.remainingGuesses == 0) {
//         this.status = 'failed'
//     } else if (finished) {
//         this.status = 'finished'
//     } else {
//         this.status = 'playing'
//     }

// }

// Hangman.prototype.getStatusMessage = function() {
//     if (this.status === 'playing') {
//         return `Guesses left :${this.remainingGuesses}`
//     } else if (this.status === 'failed') {
//         return `Nice try! The word was "${this.word.join('')}"`
//     } else {
//         return 'Great work! You guessed the word.'
//     }
// }

// Hangman.prototype.getPuzzle = function() {
   
//     let puzzel = ''
//     this.word.forEach(letter => {
        
//         if (this.guessesLetters.includes( letter) || letter === ' ') {
//             puzzel += letter
//         } else {
//             puzzel += '*'
//         }
//     })
//     return puzzel
// }

// Hangman.prototype.makeGuess = function (guess) {
    
//     guess = guess.toLowerCase()
//     const isUnique = !this.guessesLetters.includes(guess) 
//     const isBadguess = !this.word.includes(guess)

//     if (this.status !== 'playing') {
//         return
//     }

//     if (isUnique) {
//         this.guessesLetters.push(guess)
//     }
//     if (isUnique && isBadguess) {
//         this.remainingGuesses --
        
//     }
//     this.calculateStatus()
// }

