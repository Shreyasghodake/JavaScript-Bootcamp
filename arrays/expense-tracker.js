const account = {
    name: 'Shreyas Ghodake',
    expenses: [],
    income: [],
    addExpense : function (description,amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome : function (description,amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummery : function () {
        let totalExpenses = 0
        this.expenses.forEach(function (expenses) {
            totalExpenses += expenses.amount  
        })
        let totalIncome = 0
        this.income.forEach(function (expenses) {
            totalIncome += expenses.amount  
        })
        
        return `${this.name} has a balance of $${ totalIncome - totalExpenses }. $${ totalIncome } in income. $${ totalExpenses } in expense.`
    }
}
account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Job', 1000)
console.log(account.getAccountSummery())

