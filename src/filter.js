const filter = (arr, key, val) => {
  const res = [];
  arr.forEach(el => {
    if (el[key] === val) {
      res.push(el);
    }
  });
  return res;
};

export default filter;