const removeInitialDash = (str) => {
  if (!str || typeof str !== 'string') return '';
  return str.replace(/^-/g, '');
};

export default removeInitialDash;
