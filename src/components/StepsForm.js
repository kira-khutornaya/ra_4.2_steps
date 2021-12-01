import React from 'react';
import PropTypes from 'prop-types';

function StepsForm({ form, onSubmit, onChange }) {
  return (
    <div className="StepsForm-control">
      <form
        className="StepsForm"
        onSubmit={onSubmit}
      >
        <div className="StepsForm__group">
          <label htmlFor="date">Дата</label>
          <input
            className="StepsForm__field"
            id="date"
            type="text"
            name="date"
            placeholder="ДД.ММ.ГГ"
            value={form.date}
            onChange={onChange}
          />
        </div>
        <div className="StepsForm__group">
          <label htmlFor="distance">Пройдено км</label>
          <input
            className="StepsForm__field"
            id="distance"
            type="text"
            name="distance"
            placeholder="0"
            value={form.distance}
            onChange={onChange}
          />
        </div>

        <button className="StepsForm__button button" type="submit">Сохранить</button>
      </form>
    </div>
  );
}

StepsForm.propTypes = {
  form: PropTypes.exact({
    date: PropTypes.string,
    distance: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    edit: PropTypes.bool,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default StepsForm;
