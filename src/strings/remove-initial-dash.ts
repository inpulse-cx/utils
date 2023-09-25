const removeInitialDash = (str: string) => {
  if (!str || typeof str !== "string") return "";
  return str.replace(/^-/g, "");
};

export default removeInitialDash;
