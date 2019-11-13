import React, { Component } from "react";
import TodoItem from "./TodoItem.js"
import "./index.css";

class TodoList extends Component {
  render() {
    return (
      <section className="main">
        <ul className="todo-list">
          {this.props.todos.map(todo => (
            <TodoItem 
            key = {todo.id}
            title={todo.title} 
            id = {todo.id} 
            completed={todo.completed} />
          ))}
          
        </ul>
      </section>
    );
  }
}

export default TodoList;
