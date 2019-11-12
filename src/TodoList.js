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
            handleDelete = {event => this.props.handleDelete(event, todo.id)} 
            handleToggle = {event => this.props.handleToggle(event, todo.id)}
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
