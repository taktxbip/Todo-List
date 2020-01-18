import React from "react";
import "./todo-list-item.css";

const TodoListItem = ( props ) => {

    const { label, onRemoved, onToggleDone, onToggleImportant, done, important } = props;

    let classNames = "todo-item-label";
    if (done) classNames += " done";
    if (important) classNames += " important";

    return (
      <span className="todo-list-item">
        <span className={classNames} onClick={ onToggleDone }>
          {label}
        </span>
        <button
          type="button"
          onClick={ onToggleImportant }
          className="btn btn-outline-success"
        >
          <i className="fa fa-exclamation"></i>
        </button>
        <button type="button" className="btn btn-outline-danger"
				onClick={ onRemoved } >
          <i className="fa fa-trash-o"></i>
        </button>
      </span>
    );
};

export default TodoListItem;