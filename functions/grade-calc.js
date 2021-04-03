let getGrade = function (marks , totalscore) {
    if (typeof marks === 'number' && typeof totalscore === 'number' ) {
        let grade
        let percentage = marks * 100/ totalscore
        if (percentage >= 90) {
            grade = 'A'
        } else if ( percentage >= 80) {
            grade = 'B'
        } else if ( percentage >= 70) {
            grade = 'C'
        } else if ( percentage >= 60) {
            grade = 'D'
        } else {
            grade = 'F'
        }

        return  `You got a ${grade} (${percentage}%)!`
    } else {
        throw Error('Please provide th valid inputs')
    }
}
try {
    const result = getGrade('', 20)
    console.log(result)
} catch(e) {
    console.log(e.message)
}
