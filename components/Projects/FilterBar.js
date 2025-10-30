import React from "react";

const FilterBar = ({ filters, activeFilter, onFilterChange }) => {
  return (
    <div className="portfolio-filter-bar">
      <div className="filter-tabs">
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={`filter-tab ${activeFilter === filter.id ? "active" : ""}`}
            onClick={() => onFilterChange(filter.id)}
          >
            {filter.label}
          </button>
        ))}
        <span className="filter-indicator" />
      </div>
    </div>
  );
};

export default FilterBar;

