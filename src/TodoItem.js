import React, { Component } from "react";
import "./index.css";
import {connect} from "react-redux"
import { toggleTodo,
          deleteTodo
         } from "./actions.js"



class TodoItem extends Component {
  render() {
    return (
      <li className={this.props.completed ? "completed" : ""}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={this.props.completed}
            onChange = {()=>this.props.toggleTodo(this.props.id)}
          />
          <label>{this.props.title}</label>
          <button className="destroy" onClick={() => this.props.deleteTodo(this.props.id)}/>
        </div>
      </li>
    );
  }
}
const mapDispatchToProps = {
  toggleTodo,
  deleteTodo
};

export default connect(
  null,
  mapDispatchToProps
)(TodoItem);
