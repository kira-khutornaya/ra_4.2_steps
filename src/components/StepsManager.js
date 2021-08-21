import React, { useState } from 'react';
import shortid from 'shortid';
import StepsForm from './StepsForm';
import StepsTable from './StepsTable';

function StepsManager() {
  const clearForm = {
    date: '',
    distance: '',
    edit: false,
  };
  const [form, setForm] = useState(clearForm);
  const [stepsData, setData] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.date || !form.distance) return;

    const formatDate = form.date.split('.');
    const date = new Date(formatDate[2], formatDate[1] - 1, formatDate[0]);

    const dateIndex = stepsData.findIndex((el) => el.date.getTime() === date.getTime());
    if (dateIndex === -1) {
      setData((prev) => [...prev, {
        id: shortid.generate(),
        date,
        distance: +(form.distance),
        edit: false,
      }]);
    } else if (form.edit) {
      stepsData[dateIndex].distance = +(form.distance);
    } else {
      stepsData[dateIndex].distance += +(form.distance);
    }

    setForm(clearForm);
  };

  const onChange = ({ target }) => {
    setForm((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const onDelete = (id) => () => {
    setData(() => stepsData.filter((el) => el.id !== id));
  };

  const onEdit = (id) => () => {
    const result = stepsData.find((el) => el.id === id);
    setForm({
      date: result.date.toLocaleDateString(),
      distance: result.distance,
      edit: true,
    });
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
