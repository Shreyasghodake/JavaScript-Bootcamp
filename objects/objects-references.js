let myAccount = {
    name:'Shreyas',
    expences: 0,
    income: 0
}
let addExpense = function (account, amount) {
    account.expences += amount 
}

let addIncome = function (account, income) {
    account.income += income
}

let resetAccount = function (account, amount) {
    account.expences=  0
    account.income = 0
}

let getAccountSummery = function (account) {
    return `Account for ${account.name} has $${account.income - account.expences}. $${account.income} in income. $${account.expences} in expences.` 
}

addIncome(myAccount, 2000)
addExpense(myAccount, 2.50)
addExpense(myAccount, 160)
console.log(getAccountSummery(myAccount))
resetAccount(myAccount)
console.log(getAccountSummery(myAccount))