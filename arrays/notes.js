// const notes = [ 'Notes 1', 'Notes 2', 'Notes 3']
// console.log(notes.length)

// notes.forEach( function(item) {
//     console.log(item)
// })
// notes.forEach( function() {
//     console.log('no parameter')
// })
// notes.forEach( function(item,i) {
//     console.log(item,i)
// })

// for (let count=notes.length-1; count >= 0; count-- ) {
//     console.log(notes[count])
// }

const notes  = [ {
    title: 'My next trip',
    body: 'I would like to go to spain'
}, {
    title: 'Habits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
} ]




const filteredNotes = notes.filter(function (notes) {
    return notes.title.toLowerCase().includes('trip') || notes.body.toLowerCase().includes('get')
})


console.log(filteredNotes)

// const findNote = function (note , title) {
//     const notes = note.find(function(note,index){
//         return note.title === title
//     })
//     return notes
// }



// const note  =  findNote( notes, 'Office modification')     

// console.log(note)