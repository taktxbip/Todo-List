import React from "react";
import TodoList from "../todo-list/todo-list";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import Filters from "../filters/filters";
import './app.css';


const App = () => {


	const todoData = [
		{ label: "Drink2", important: false, id: 1 },
		{ label: "Eat2", important: true, id: 2 },
		{ label: "Code", important: true, id: 3 },
		{ label: "Whatever", important: false, id: 4 }
	];

  return (
    <div>
      <AppHeader />
			<header className="header">
				<SearchPanel />
				<Filters />
			</header>
      <TodoList todos={ todoData } />
    </div>
  );
};

export default App;