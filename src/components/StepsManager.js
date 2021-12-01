import React, { useState } from 'react';
import shortid from 'shortid';
import INITIAL_FORM_STATE from '../StepsManager.constants';
import validateFields from '../functions/validateFields';
import StepsForm from './StepsForm';
import StepsTable from './StepsTable';

function StepsManager() {
  const [form, setForm] = useState(INITIAL_FORM_STATE);
  const [stepsData, setData] = useState([]);
  const [editId, setEditId] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    const { date, distance, edit } = form;
    if (!validateFields(date, distance)) return;

    const dateArr = date.split('.');
    const formatDate = new Date(dateArr[2], dateArr[1] - 1, dateArr[0]);
    const dateEl = stepsData.find((el) => el.date.getTime() === formatDate.getTime());

    if (!dateEl && !edit) {
      setData((prev) => [...prev, {
        id: shortid.generate(),
        date: formatDate,
        distance: Number(distance),
        edit: false,
      }]);
    } else if (!dateEl && edit) {
      const updatedData = stepsData.map((el) => (
        el.id === editId ? {
          ...el,
          date: formatDate,
          distance: Number(distance),
        } : el
      ));

      setData(updatedData);
    } else if (dateEl && !edit) {
      const updatedData = stepsData.map((el) => (
        el.id === dateEl.id ? {
          ...el, distance: dateEl.distance + Number(distance),
        } : el
      ));

      setData(updatedData);
    } else {
      const updatedData = stepsData.map((el) => (
        el.id === dateEl.id ? {
          ...el,
          date: formatDate,
          distance: Number(distance),
        } : el
      ));

      setData(updatedData);
    }

    setForm(INITIAL_FORM_STATE);
  };

  const onChange = ({ target }) => {
    setForm((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const onDelete = (id) => {
    setData(() => stepsData.filter((el) => el.id !== id));
    setForm(INITIAL_FORM_STATE);
  };

  const onEdit = (id) => {
    const result = stepsData.find((el) => el.id === id);
    setForm({
      date: result.date.toLocaleDateString(),
      distance: result.distance,
      edit: true,
    });
    setEditId(id);
  };

  return (
    <div className="StepsManager">
      <StepsForm
        form={form}
        onSubmit={onSubmit}
        onChange={onChange}
      />
      <StepsTable
        stepsData={stepsData}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </div>
  );
}

export default StepsManager;
