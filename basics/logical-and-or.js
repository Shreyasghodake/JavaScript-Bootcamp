let isGeustOneVegan = false
let isGuestTwoVegan = false

if ( isGeustOneVegan && isGuestTwoVegan) {
    console.log("Offer Vegan")
} else if ( isGeustOneVegan || isGuestTwoVegan) {
    console.log("Offer some Vegan")
} else {
    console.log("Offer Any")
}