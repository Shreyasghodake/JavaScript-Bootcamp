let temprature = function (fehrenheit) {
    return   {
        fehrenheit: fehrenheit,
        celcius : (fehrenheit-32) * 5/9,
        kelvin : (fehrenheit+ 459.67) *  5/9
    }
}
let temp = temprature(74)
console.log(temp)