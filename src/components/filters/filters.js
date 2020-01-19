import React, { Component } from "react";
import "./filters.css";

export default class Filters extends Component {
  render() {
    const { setFilter, onToggleTab } = this.props;

    const setActiveTab = name => {
      return (
        <button
          type="button"
          onClick= { () => onToggleTab(name) }
          className={
            setFilter === name ? "btn btn-info" : "btn btn-outline-secondary"
          }>
          {name}
        </button>
      );
    };

    return (
      <div className="filters">
        {setActiveTab("All")}
        {setActiveTab("Active")}
        {setActiveTab("Done")}
      </div>
    );
  }
}
