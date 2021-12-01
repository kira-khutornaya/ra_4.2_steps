const validateFields = (date, distance) => {
  if (!date || !distance) {
    alert('Поля "Дата" и "Пройдено км" обязательны для заполнения');
    return false;
  }

  if (!Number(distance)) {
    alert('Значение поля "Пройдено км" должно быть числом');
    return false;
  }

  const result = /^[0-3]?[0-9][.][0-3]?[0-9][.][0-9]{4}$/.test(date);
  if (!result) {
    alert('Ошибка форматирования! Введите дату в формате ДД.ММ.ГГГГ');
    return false;
  }

  return true;
};

export default validateFields;
