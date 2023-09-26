function sortByAlphabet(a: any, b: any, key: string, extraKey: string) {
  if (extraKey) return a[key][extraKey] < b[key][extraKey] ? -1 : 1;
  if (key) return a[key] < b[key] ? -1 : 1;
  return a < b ? -1 : 1;
}

export default sortByAlphabet;
