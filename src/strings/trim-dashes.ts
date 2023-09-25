const trimDashes = (str: string) => {
  if (!str || typeof str !== "string") return "";
  return str.replace(/^-/g, "").replace(/-$/g, "");
};

export default trimDashes;
