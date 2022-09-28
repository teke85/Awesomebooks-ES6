// display date & time dynamically using luxon

export const timeDate = document.getElementById('date')
export const displayDateAndTime = () => {
  const dt = DateTime.now()
  timeDate.textContent = dt
    .setLocale('en-US')
    .toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS)
}
setInterval(displayDateAndTime, 1000)


