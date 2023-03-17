const trimDashes = (str) => {
  if (!str || typeof str !== 'string') return '';
  return str.replace(/^-/g, '').replace(/-$/g, '');
};

export default trimDashes;
