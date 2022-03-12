export const getTimeLeft = (day, hour, minute) => {
  const now = new Date();
  let dayLeft = day - now.getDay() + 6;

  let hourLeft = hour - now.getHours() + 23;
  if (hourLeft >= 24) {
    hourLeft = 0;
  }
  let minuteLeft = minute - now.getMinutes() + 60;
  if (dayLeft === 6) {
    if (hour - now.getHours() <= 0) {
      dayLeft = 6;
    } else {
      dayLeft = 0;
    }
  }
  return { dayLeft, hourLeft, minuteLeft };
};
