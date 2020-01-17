import React from "react";
import "./todo-list-item.css";

const TodoListItem = ( { label, important = false } ) => {
	
	const style = {
		color: important ? 'darkslateblue' : 'black',
		fontWeight: important ? 'bold' : 'normal',
		fontSize: '16px'
	};
	
	return (
		<span 
			className="todo-list-item" 
			style={ style }>
			{ label }
			<button type="button" class="btn btn-outline-success"><i class="fa fa-exclamation"></i></button>
			<button type="button" class="btn btn-outline-danger"><i class="fa fa-trash-o"></i></button>
		</span>
	);
};


export default TodoListItem;