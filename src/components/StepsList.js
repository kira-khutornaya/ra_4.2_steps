import React from 'react';
import PropTypes from 'prop-types';
import StepsListItem from './StepsListItem';

function StepsList({ data, onEdit, onDelete }) {
  return (
    <ul className="StepsList">
      {
        data.map((item) => (
          <li className="StepsList__item" key={item.id}>
            <StepsListItem
              item={item}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          </li>
        ))
      }
    </ul>
  );
}

StepsList.defaultProps = {
  data: [],
};

StepsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default StepsList;
