
const MAGIC_NUMBER = 1e3;

function convertToTime(n: number) {
  return Math.round(MAGIC_NUMBER * n);
}

function convertToDateTime(n: number) {
  return Math.round(n / MAGIC_NUMBER);
}

function getDateTime() {
  return convertToDateTime(new Date().getTime());
}

export { convertToTime, convertToDateTime, getDateTime }
