import React from 'react';
import FilterStyles from './FilterStyles';

const Filter = ({onFilterItemClickHandler}) => {
  return (
    <FilterStyles>
      <div >
        Filter
        <ul>
          <li onClick={(event) => onFilterItemClickHandler(event, "all")}>All</li>
          <li onClick={(event) => onFilterItemClickHandler(event, "completed")}>Completed</li>
          <li onClick={(event) => onFilterItemClickHandler(event, "pending")}>Pending</li>
        </ul>
      </div>
    </FilterStyles>
  )
}

export default Filter;