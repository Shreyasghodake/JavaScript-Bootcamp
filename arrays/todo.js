// todo = [ 'Order cat food', 'Clean kitchen', 'Buy food', 'Do work', 'Excersice' ]

const todos = [ {
    text: 'Order cat food',
    completed : false
}, {
    text: 'Clean kitchen',
    completed : false
}, {
    text: 'Buy food',
    completed : true
}, {
    text: 'Do work',
    completed : false
}, {
    text: 'Excersice',
    completed : true
}]

const deleteTodo = function (todos, text) {
    const index = todos.findIndex(function (todos) {
        return todos.text.toLowerCase() === text.toLowerCase()        
    })
    console.log(index)
    if( index >= 0) {
        todos.splice(index,1)
    }
    return

}

deleteTodo(todos, "Do work")
console.log(todos)

const getThingsToDo = function (todos) {
    return todos.filter(function (note) {
        return !note.completed
    })
    
}
const sortTodos = function (todos) {
    todos.sort(function(a, b){
        if (!a.completed && b.completed){
            return -1
        }
        else if (!b.completed  && a.completed ){
            return 1
        }
        else {
            return 0
        }
    })
}
// console.log(getThingsToDo(todos))
sortTodos(todos)
console.log(todos)