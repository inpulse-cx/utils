import dayjs from 'dayjs';

const sortByDate = (a, b, key, DESC) => {
  if (!key) return -1;
  const timestampA = dayjs(a[key].toDate()).valueOf();
  const timestampB = dayjs(b[key].toDate()).valueOf();
  let result = (timestampA < timestampB) ? -1 : 1;
  if (DESC) result = -result; // ASC by default
  return result;
};

export default sortByDate;
