import todosList from "./todos.json";
import {TOGGLE_TODO, CLEAR_COMPLETED_TODOS, ADD_TODO, DELETE_TODO} from "./actions.js"

const initialState = {
    todos: todosList,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_TODO:
             // this.props.toggleToDo(todoIdToToggle)
            const newTodoList = state.todos.map(todo => {
                if(todo.id === action.payload) {
                    const newTodo = { ...todo };
                    newTodo.completed = !newTodo.completed;
                    return newTodo
                }
                return todo;
            });
                return { todos: newTodoList }
        
        case CLEAR_COMPLETED_TODOS:
            const newTodoList1 = state.todos.filter(
                todo => todo.completed !== true);
            return { todos: newTodoList1}
        
        case ADD_TODO:
                let newTodoList2 = state.todos.slice();
            if(action.payload === "Enter"){
                let typedText = document.getElementById("new-todo").value;
                if (typedText !== ""){
                    console.log(newTodoList2)
                    let findLastId = 0
                    if(newTodoList2.length > 0 )
                        {findLastId = newTodoList2[newTodoList2.length-1].id+1}
                    typedText = {"userId": 1, "id": findLastId, "title": typedText, "completed": false}
                    newTodoList2.push(typedText)
                    document.getElementById("new-todo").value=""
                }
            }
            return {todos: newTodoList2};
        case DELETE_TODO:
            const newTodoList3 = state.todos.filter(
                todo => todo.id !== action.payload
            )
            return {todos: newTodoList3}
        default:
            return state;
    }
};

export default reducer;