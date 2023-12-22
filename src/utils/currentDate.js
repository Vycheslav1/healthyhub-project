export const getCurrentDate = () => {
  const date = new Date();
  const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
  const formattedDate = date.toLocaleDateString('ru-RU', options);
  return formattedDate;
};
