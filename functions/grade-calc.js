let getGrade = function (marks , totalscore) {
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
}

console.log(getGrade(15, 20))