import React, { Component } from "react";
import "./index.css";
import TodoList from "./TodoList.js"
import todosList from "./todos.json";
import {
   Route,
   NavLink,
 } from "react-router-dom";
 import { connect } from "react-redux"
 import { 
    addTodo,
    clearCompletedTodos,

   } from "./actions.js"




class App extends Component {
  state = {
    todos: todosList
    
  };

  handleCount = () => {
    let finished = this.props.todos.filter(
      todo => todo.completed === true
    )
   
    return this.props.todos.length-finished.length;
  }

  
  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input
            className="new-todo"
            id = "new-todo"
            placeholder="What needs to be done?"
            onKeyPress = {event=> this.props.addTodo(event)} 
            autoFocus
          />
        </header>
        <Route 
          exact
          path="/"
          render={() =>
            <TodoList 
            key = {this.props.id}
              id= {this.props.id}
              todos={this.props.todos}
            />
        }/>
        <Route 
          path="/active"
          render={() =>
            <TodoList 
              handleDelete={this.handleDelete} 
              handleToggle= {this.handleToggle} 
              todos={this.props.todos.filter(todo => todo.completed === false)}
            />
        }/>
        <Route 
          path="/completed"
          render={() =>
            <TodoList 
              todos={this.state.todos.filter(todo => todo.completed === true)}
            />
        }/>
        <footer className="footer">
          <span className="todo-count">
            <strong>{this.handleCount()}</strong> item(s) left
          </span>
          <ul className="filters">
            <li><NavLink exact to="/" activeClassName = "selected">All</NavLink></li>
            <li><NavLink to="/active" activeClassName = "selected">Active</NavLink></li>
            <li><NavLink to="/completed" activeClassName = "selected">Completed</NavLink></li>
          </ul>
        
          <button 
          className="clear-completed"
          onClick = {event => this.props.clearCompletedTodos(event)}
          >Clear completed</button>
        </footer>
      </section>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}
 const mapDispatchToProps = {
   addTodo,
   clearCompletedTodos
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (App);