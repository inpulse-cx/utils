const objectToArray = (obj: any) => {
  if (typeof obj !== "object") return obj;
  return Object.keys(obj).map((key) => obj[key]);
};

export default objectToArray;
