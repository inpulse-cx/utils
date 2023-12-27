function trimDashes(string: string) {
  if (!string || typeof string !== "string") return "";
  return string.replace(/^-/g, "").replace(/-$/g, "");
}

export default trimDashes;
