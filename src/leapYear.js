export function leapYear() {
  const date = new Date();
  let inputStart = prompt("start year", -45);
  let inputEnd = prompt("end year", date.getFullYear());
  let leapYear = [];
  inputStart = parseInt(inputStart, 10);
  inputEnd = parseInt(inputEnd, 10);
  if (isNaN(inputStart) || isNaN(inputEnd) || inputStart > inputEnd) {
    return leapYear();
  } else {
    while (inputEnd >= inputStart) {
      if (
        (inputStart % 100 !== 0 && inputStart % 4 === 0) ||
        inputStart % 400 === 0
      ) {
        leapYear.push(inputStart);
      }
      inputStart++;
    }
    console.log(leapYear);
  }
}
