type RemoveSpecialCharsOptions = {
  ignoreDashes?: boolean;
  ignoreDots?: boolean;
};

function removeSpecialChars(
  string: string,
  options?: RemoveSpecialCharsOptions
) {
  if (!string || typeof string !== "string") return "";
  const { ignoreDashes, ignoreDots } = options || {};
  if (ignoreDashes && ignoreDots) {
    return string.replace(/[^\w\s-\.]/gi, "");
  } else if (ignoreDashes) {
    return string.replace(/[^\w\s-]/gi, "");
  } else if (ignoreDots) {
    return string.replace(/[^\w\s\.]/gi, "");
  }
  return string.replace(/[^\w\s]/gi, "");
}

export default removeSpecialChars;
