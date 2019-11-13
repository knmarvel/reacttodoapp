import React, { Component } from "react";
import "./index.css";
import {connect} from "react-redux"
import { toggleTodo } from "./actions.js"



class TodoItem extends Component {
  render() {
    return (
      <li className={this.props.completed ? "completed" : ""}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={this.props.completed}
            onClick = {()=>this.props.toggleTodo(this.props.id)}
          />
          <label>{this.props.title}</label>
          <button className="destroy" onClick={this.props.handleDelete}/>
        </div>
      </li>
    );
  }
}
const mapDispatchToProps = {
  toggleTodo
};

export default connect(
  null,
  mapDispatchToProps
)(TodoItem);
