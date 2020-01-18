import React from "react";
import "./app-header.css";

const AppHeader = ({ todo, done }) => {


  return (
		<div className="app-header">
		 <h1>Todo List</h1>
			<span className="app-header-status">{ todo } more to do, { done } done</span>
		 </div>
		 );
};

export default AppHeader;