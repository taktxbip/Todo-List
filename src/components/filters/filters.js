import React, { Component } from "react";
import "./filters.css";

export default class Filters extends Component {
  render() {
    const { setFilter, onTab } = this.props;

    const setActiveTab = name => {
      // console.log( setFilter );



      return (
        <button
          type="button"
          // onClick= { onTab(name) }
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
        {setActiveTab("Important")}
        {setActiveTab("Done")}
      </div>
    );
  }
}
