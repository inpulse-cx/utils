import { getTime } from "date-fns";

function sortByDate(a: any, b: any, key: string, DESC: boolean) {
  if (!key) return -1;
  const timestampA = getTime(a[key].toDate());
  const timestampB = getTime(b[key].toDate());
  let result = timestampA < timestampB ? -1 : 1;
  if (DESC) result = -result; // ASC by default
  return result;
}

export { sortByDate };
