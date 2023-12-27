function removeInitialDash(string: string) {
  if (!string || typeof string !== "string") return "";
  return string.replace(/^-/g, "");
}

export default removeInitialDash;
