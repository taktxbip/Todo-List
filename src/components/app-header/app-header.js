import React from "react";
import "./app-header.css";

const AppHeader = () => {
  const h1style = {
		fontSize: "50px"
  };

  return (
		<div className="app-header">
		 <h1 style={h1style}>Todo List</h1>
			<span className="app-header-status">1 more to do, 3 done</span>
		 </div>
		 );
};

export default AppHeader;