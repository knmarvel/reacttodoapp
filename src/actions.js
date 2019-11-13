export const TOGGLE_TODO = "TOGGLE_TODO"
export const CLEAR_COMPLETED_TODOS = "CLEAR_COMPLETED_TODOS"
export const ADD_TODO = "ADD_TODO"
export const DELETE_TODO = "DELETE_TODO"



export const toggleTodo = (todoIdToToggle) => {
    return {
        type: TOGGLE_TODO,
        payload: todoIdToToggle
    }
}

export const clearCompletedTodos = (event) => {
    return {
        type: CLEAR_COMPLETED_TODOS
    }
}

export const addTodo = (event) => {
    return{
        type: ADD_TODO,
        payload: event.key
    }
}

export const deleteTodo = (todoIdToDelete) => {
    return{
        type: DELETE_TODO,
        payload: todoIdToDelete
    }
}