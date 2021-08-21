import React from 'react';
import PropTypes from 'prop-types';
import StepsList from './StepsList';

function StepsTable({ stepsData, onEdit, onDelete }) {
  stepsData.sort((a, b) => b.date.getTime() - a.date.getTime());

  return (
    <div className="StepsTable">
      <div className="StepsTable__header">
        <span>Дата</span>
        <span>Пройдено км</span>
        <span>Действия</span>
      </div>

      <StepsList
        data={stepsData}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </div>
  );
}

StepsTable.defaultProps = {
  stepsData: [],
};

StepsTable.propTypes = {
  stepsData: PropTypes.arrayOf(PropTypes.object),
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default StepsTable;
