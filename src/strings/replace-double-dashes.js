const replaceDoubleDashes = (str) => {
  if (!str || typeof str !== 'string') return '';
  return str.replace(/-+/g, '-');
};

export default replaceDoubleDashes;
