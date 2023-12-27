type ReplaceSpacesOptions = {
  useDashes?: boolean;
};

function replaceSpaces(string: string, options?: ReplaceSpacesOptions) {
  if (!string || typeof string !== "string") return "";
  const { useDashes = true } = options || {};
  return string.replace(/\s/g, useDashes ? "-" : " ");
}

export default replaceSpaces;
