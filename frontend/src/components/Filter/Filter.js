import React from 'react';
import FilterStyles from './FilterStyles';

const Filter = props => {
  return (
    <FilterStyles>
      <div >
        Filter
        <ul>
          <li>Completed</li>
          <li>In Progress</li>
          <li>Pending</li>
        </ul>
      </div>
    </FilterStyles>
  )
}

export default Filter;