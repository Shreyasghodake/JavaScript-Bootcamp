// const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest()

//     request.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText)
//             resolve(data.puzzle)
//         } else if (e.target.readyState === 4) {
//             reject('An error has taken place')
//         }
//     })

//     request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//     request.send()
// })

// const getPuzzle = (wordCount) => {
//     return fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
//         if (response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error('Unable to fetch the puzzle')
//         }
//     }).then((data) => {
//         return data.puzzle
//     })
// }


const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)

    if(response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to get puzzle')
    }
}

// const getCountryName = (countryCode) => new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest()

//     request.addEventListener('readystatechange', (e)=>{
//         if(e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText)
//                 const country =  data.find( country =>  (country.alpha2Code == countryCode) )
//                 resolve(country)
                    
//         } else if (e.target.readyState === 4) {
//             reject("An error has occured")
//         }
//     })
//     request.open('GET', )
//     request.send()
// })

// const getCountry = (countryCode) => {
//     return fetch('http://restcountries.eu/rest/v2/all').then((response) => {
//         if(response.status === 200) {
//              response.json()
//         } else {
//             throw new Error('Unable to fetch the request')
//         }
//     }).then((data) =>{
//       return   data.find((country) =>  country.alpha2Code == countryCode)
//     }) 
// }

const getCurrentCountry = async () => {
    const location = await getLocation()
    const country = await getCountry(location.country)
    return country
}

const getCountry = async (countryCode) => {
    const response = await fetch('http://restcountries.eu/rest/v2/all')

    if (response.status === 200) {
        const data = await response.json()
        return data.find((country) => {
            return country.alpha2Code === countryCode
        })
    } else {
        throw new Error('Unable to fetch the country')
    }
}

// const getLocation = () => {
//     return fetch('http://ipinfo.io/json?token=4015b1aafa68a7').then((response)=>{
//         if(response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error('Unable to fetch location')
//         }
//     })
// }
const getLocation = async () => {
        const response = await fetch('http://ipinfo.io/json?token=4015b1aafa68a7')
         
        if(response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to get the current location')
        }
}