import React from "react";
import "./filters.css";

const Filters = () => {
  return (
    <div className="filters">
      <button type="button" className="btn btn-info">All</button>
      <button type="button" className="btn btn-outline-secondary">Active</button>
      <button type="button" className="btn btn-outline-secondary">Done</button>
    </div>
  );
};

export default Filters;