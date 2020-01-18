import React, { Component } from "react";
import "./todo-list-item.css";

export default class TodoListItem extends Component {
  state = {
    done: false,
    important: false
  };

  onLabelClick = () => {
    this.setState( ({ done }) => {
			return {
				done: !done
			}
		});
  };

  onImportantClick = () => {
    this.setState(( { important }) => {
			return {
				important: !important
			}
		});
  };

  render() {
    const { label } = this.props;
    const { done, important } = this.state;

    let classNames = "todo-item-label";
    if (done) classNames += " done";
    if (important) classNames += " important";

    return (
      <span className="todo-list-item">
        <span className={classNames} onClick={this.onLabelClick}>
          {label}
        </span>
        <button
          type="button"
          onClick={this.onImportantClick}
          className="btn btn-outline-success"
        >
          <i className="fa fa-exclamation"></i>
        </button>
        <button type="button" className="btn btn-outline-danger">
          <i className="fa fa-trash-o"></i>
        </button>
      </span>
    );
  }
}
