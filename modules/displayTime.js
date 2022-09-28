// display date & time dynamically
export const date = document.querySelector('.date');
export const timeDate = () => {
  const newDate = new Date();
  date.innerHTML = `${newDate.toDateString()}, ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}pm `;
  setTimeout(timeDate, 1000);
};
window.onload = timeDate();
