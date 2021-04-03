'use strict'

const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')
    try {
        return todosJSON ? JSON.parse(todosJSON) : []
    } catch (e) {
        return []
    }
    
    
} 

const saveTodos = ( todos) =>{
    localStorage.setItem('todos', JSON.stringify(todos))
    
} 

const removeTodo = (id) => {
    const todoIndex = todos.findIndex(function (todo) {
        return todo.id === id
    })

    if( todoIndex >-1) {
        todos.splice(todoIndex, 1)
    }
} 

const toggleTodo = (id) => {
    const todo = todos.find((todo) =>   todo.id === id)

    if(todo) {
        todo.completed = !todo.completed
    }
} 
    

const renderTodos = (todos, filters) => {
    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter( (todo) => !todo.completed)

    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))
   
    filteredTodos.forEach((todo) => {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
   
}

const generateTodoDOM = (todo) => {
    
    const todoEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')
    checkbox.setAttribute('type','checkbox')
    checkbox.checked = todo.completed
    
    todoText.textContent = todo.text
    removeButton.textContent = 'x'

    todoEl.appendChild(checkbox)
    checkbox.addEventListener('change',() => {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    

    todoEl.appendChild(todoText)
    todoEl.appendChild(removeButton)
    
   
    removeButton.addEventListener('click',()=> {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    
    return todoEl
}

const generateSummaryDOM = ( incompleteTodos) =>{
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary 

}