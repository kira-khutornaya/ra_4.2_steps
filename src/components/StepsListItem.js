import React from 'react';
import PropTypes from 'prop-types';

function StepsListItem({ item, onEdit, onDelete }) {
  const { date, distance } = item;

  return (
    <>
      <div className="StepsListItem__date">{date.toLocaleDateString()}</div>
      <div className="StepsListItem__distance">{+distance.toFixed(1)}</div>
      <div className="StepsListItem__control">
        <button
          className="StepsListItem__editing button"
          type="button"
          onClick={onEdit(item.id)}
        >
          ✎
        </button>
        <button
          className="StepsListItem__removing button"
          type="button"
          onClick={onDelete(item.id)}
        >
          ✘
        </button>
      </div>
    </>
  );
}

StepsListItem.propTypes = {
  item: PropTypes.exact({
    id: PropTypes.string,
    date: PropTypes.instanceOf(Date),
    distance: PropTypes.number,
    edit: PropTypes.bool,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default StepsListItem;
