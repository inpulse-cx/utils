const formatCardSchema = (data) => {
  const {
    code,
    gaps,
    lengths,
    niceType,
    type,
  } = data;
  const max = Math.max(...lengths);
  const min = Math.min(...lengths);
  const schema = {
    code: {
      label: code.name,
      mask: Array.from(Array(code.size), () => 0).join(''),
      min: code.size,
    },
    label: niceType,
    number: {
      mask: Array.from(Array(max), () => 0).reduce((array, val, index) => {
        if (gaps.includes(index)) array.push(' ');
        array.push(val);
        return array;
      }, []).join(''),
      max,
      min,
    },
    type,
  };
  return schema;
};

export default formatCardSchema;
