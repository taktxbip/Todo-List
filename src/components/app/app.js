import React, { Component } from "react";
import TodoList from "../todo-list/todo-list";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import Filters from "../filters/filters";
import AddForm from "../add-form";
import "./app.css";

export default class App extends Component {


	maxId = 100;

	createToDoItem(label) {
		return {
			label: label,
			important: false,
			done: false,
			visible: true,
			id: 'el' + this.maxId++
		};
	}

  state = {
    todoData: [
      this.createToDoItem('Drink Cofee'),
      this.createToDoItem('Write App'),
      this.createToDoItem('Enjoy'),
      this.createToDoItem('Sleep')
		],
		setFilter: 'All',
		term: ''
  };

  removeItem = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);
      todoData.splice(idx, 1);
			const newArray = [
				...todoData.slice(0, idx), 
				...todoData.slice(idx)
			];
      return {
        todoData: newArray
      };
    });
	};


	toggleProperty(arr, id, propName) {
		const idx = arr.findIndex(el => el.id === id);
		const oldItem = arr[idx];
		const newItem = { ...oldItem, [propName]: !oldItem[propName] };
		return [
			...arr.slice(0, idx), 
			newItem,
			...arr.slice(idx+1)
		];
	};

	onToggleImportant = (id) => {
		this.setState(( { todoData } ) => {
			return {
				todoData: this.toggleProperty(todoData, id, 'important')
			}
		});
	};
	
	onToggleDone = (id) => {
		this.setState( ( { todoData } ) => {
			return {
				todoData: this.toggleProperty(todoData, id, 'done')
			}
		});
	};
	
	tabsFilterVisible = (arr, propName) => {
		let newArray =[];
		arr.forEach( (el) => {
			if ( el[propName] === true )
				newArray.push( {...el, visible: true } );
			else
				newArray.push( {...el, visible: false } );
		});
		return newArray;
	};


	onToggleTab = (tabName) => {
		this.setState({
				setFilter: tabName
		});
	};


	updateTerm = (newTerm) => {
		this.setState({
			term: newTerm
		})
	};

	addItem = (text) => {
		const newEl = this.createToDoItem(text);
		this.setState( ( { todoData }) => {
			const newArr = [ 
				...todoData, 
				newEl 
			];
			return {
				todoData: newArr
			}
		});
		
	};
	
	onSearch = (arr, term) => {
		if ( term.length === '' )
			return arr;

		return arr.filter( (el) => {
			return el.label.toLowerCase().search(term.toLowerCase()) !== -1
		});
	}

	filter = (arr, activeTab) => {
		switch (activeTab) {
			case "All": return arr;
			case "Done": return arr.filter( (el) => el.done );
			case "Active": return arr.filter( (el) => !el.done );
			default: return arr;
		}
	}

  render() {
		const { todoData, setFilter, term } = this.state;
		const countDone = todoData.filter( (el) => el.done ).length;
		const countTodo = todoData.length - countDone;

		const dataAfterSearchAndFilter = this.filter(this.onSearch(todoData, term), setFilter);
    return (
      <div>
        <AppHeader done={ countDone } todo={ countTodo }/>
        <header className="header">
          <SearchPanel updateTerm={ this.updateTerm } />
					<Filters 
					setFilter={ setFilter } 
					onToggleTab={ this.onToggleTab }/>
        </header>
				<TodoList 
				todos={ dataAfterSearchAndFilter } 
				onRemoved={ this.removeItem } 
				onToggleDone={ this.onToggleDone } 
				onToggleImportant={ this.onToggleImportant } />
        <AddForm onAdd={ this.addItem } />

      </div>
    );
  }
}
