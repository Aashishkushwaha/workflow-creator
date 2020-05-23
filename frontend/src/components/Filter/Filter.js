import React from 'react';
import FilterStyles from './FilterStyles';

const Filter = props => {
  return (
    <FilterStyles>
      <div >
        Filter

        <ul>
          <li>completed</li>
          <li>in progress</li>
          <li>pending</li>
        </ul>
      </div>
    </FilterStyles>
  )
}

export default Filter;