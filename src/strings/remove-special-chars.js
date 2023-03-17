const replaceSpecialChars = (str, ignoreDashes) => {
  if (!str || typeof str !== 'string') return '';
  if (ignoreDashes) return str.replace(/[^\w\s-]/gi, '');
  return str.replace(/[^\w\s]/gi, '');
};

export default replaceSpecialChars;
