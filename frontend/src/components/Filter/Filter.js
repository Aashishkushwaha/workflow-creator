import React from "react";
import FilterStyles from "./FilterStyles";

const Filter = ({ onFilterItemClickHandler, currentFilter }) => {
  return (
    <FilterStyles>
      <div>
        <span className="label">Filter</span>
        <span
          className={"filter__indicator"}
          style={{
            opacity: currentFilter !== "all" ? 1 : 0,
            transition: "opacity .4s",
          }}
        />
        <ul style={{ width: "100%" }}>
          <li onClick={(event) => onFilterItemClickHandler(event, "all")}>
            All
          </li>
          <li onClick={(event) => onFilterItemClickHandler(event, "pending")}>
            Pending
            <span
              className={"filter__indicator"}
              style={{
                background: "#fff",
                opacity: currentFilter === "pending" ? 1 : 0,
                transition: "opacity .4s",
              }}
            />
          </li>
          <li onClick={(event) => onFilterItemClickHandler(event, "completed")}>
            Completed
            <span
              className={"filter__indicator"}
              style={{
                background: "#fff",
                opacity: currentFilter === "completed" ? 1 : 0,
                transition: "opacity .4s",
              }}
            />
          </li>
        </ul>
      </div>
    </FilterStyles>
  );
};

export default Filter;
