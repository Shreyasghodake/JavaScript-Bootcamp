let notes = getSavedNotes()

const filters = {
    searchText: ''
}


renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
    const id = uuidv4()
    notes.push({
        id: id,
        title: '',
        body: ''
    })
    saveNotes(notes)
    location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})

window.addEventListener('storage', function(e) {
    if(e.key === 'notes') {
        notes = JSON.parse(e.newValue) 
        renderNotes(notes, filters)
    }
})

const pastDate1 = new Date('January 1 2021 12:00:00')
const timestamp1 = pastDate1.getTime()


const pastDate2 = new Date()
const timestamp2 = pastDate2.getTime()


if(timestamp1 < timestamp2) {
    console.log(pastDate1.toString())
} else {
    console.log(pastDate2.toString())
}

const myBirthday = moment()
myBirthday.year(1999).month(10).day(19)

console.log(myBirthday.format('MMM D, YYYY'))