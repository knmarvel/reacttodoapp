import React, { Component } from "react";
import "./index.css";
import TodoList from "./TodoList.js"
import todosList from "./todos.json";
import {
   Route,
   Link,
 } from "react-router-dom";



class App extends Component {
  state = {
    todos: todosList
    
  };

  handleCount = () => {
    let finished = this.state.todos.filter(
      todo => todo.completed === true
    )
   
    return this.state.todos.length-finished.length;
  }

  handleDelete = (todoIdToDelete) => {
    console.log({todoIdToDelete}.todoIdToDelete)
    const newTodos = this.state.todos.filter(
      todo => todo.id !== {todoIdToDelete}.todoIdToDelete
    );
    this.setState({todos: newTodos})
    this.handleCount();
  };

  handleToggle= (todoIdToToggle) =>{
    todoIdToToggle = {todoIdToToggle}.todoIdToToggle
    const newTodos2 = this.state.todos.slice()
    for(let i = 0; i <newTodos2.length; i++){
    if(newTodos2[i].id === todoIdToToggle && newTodos2[i].completed === true){
      newTodos2[i].completed = false
    }
    else if(newTodos2[i].id === todoIdToToggle && newTodos2[i].completed === false){
      newTodos2[i].completed = true
    }
  }
    this.setState({todos: newTodos2});
    this.handleCount();
  }

  handleNewToDoItems = (event) =>{
    if(event.key=== 'Enter'){
      console.log(this.state.todos.slice())
      let typedText = document.getElementById("new-todo").value;
      if (typedText !== ""){
      const newTodos3 = this.state.todos.slice();
      let findLastId = newTodos3[newTodos3.length-1].id+1
      typedText = {"userId": 1, "id": findLastId, "title": typedText, "completed": false}
      newTodos3.push(typedText)
      this.setState({todos: newTodos3});
      document.getElementById("new-todo").value=""}
    }
  }

  handleDeleteCompleted = (event) =>{
    const newTodos = this.state.todos.filter(
      todo => todo.completed !== true);
    this.setState({todos: newTodos})
    this.handleCount();
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
            onKeyPress = {event => this.handleNewToDoItems(event)} 
            autoFocus
          />
        </header>
        <Route 
          exact
          path="/"
          render={() =>
            <TodoList 
              handleDelete={this.handleDelete} 
              handleToggle= {this.handleToggle} 
              todos={this.state.todos}
            />
        }/>
        <Route 
          path="/active"
          render={() =>
            <TodoList 
              handleDelete={this.handleDelete} 
              handleToggle= {this.handleToggle} 
              todos={this.state.todos.filter(todo => todo.completed === false)}
            />
        }/>
        <Route 
          path="/completed"
          render={() =>
            <TodoList 
              handleDelete={this.handleDelete} 
              handleToggle= {this.handleToggle} 
              todos={this.state.todos.filter(todo => todo.completed === true)}
            />
        }/>
        <footer className="footer">
          <span className="todo-count">
            <strong>{this.handleCount()}</strong> item(s) left
          </span>
          <ul className="filters">
            <li><Link to="/">All</Link></li>
            <li><Link to="/active">Active</Link></li>
            <li><Link to="/completed">Completed</Link></li>
          </ul>
          <button 
          className="clear-completed"
          onClick = {event => this.handleDeleteCompleted(event)}
          >Clear completed</button>
        </footer>
      </section>
    );
  }
}
export default App;
