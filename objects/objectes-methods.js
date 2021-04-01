let restaurant = {
    name: 'ASB',
    geustCapaciy : 75,
    geustCount: 0,
    checkAvailability: function(partySize){
        return partySize <= (this.geustCapaciy - this.geustCount)
    },
    seatParty: function(partySize){
        this.geustCount += partySize
    },
    removeParty: function(partySize){
        this.geustCount -= partySize
    }
}
restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))