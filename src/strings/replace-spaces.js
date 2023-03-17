const replaceSpaces = (str, useDashes) => {
  if (!str || typeof str !== 'string') return '';
  return str.replace(/\s/g, useDashes ? '-' : ' ');
};

export default replaceSpaces;
