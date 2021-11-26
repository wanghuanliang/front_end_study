const isArray = (a) => Object.prototype.toString.call(a) === "[object Array]";

const isEqual = (a, b) => {
  if (!isArray(a) || !isArray(b)) return false;

  if (a.length !== b.length) return false;

  const map = new Map();

  for (let i = 0; i < a.length; i++) {
    const item = JSON.stringify(a[i]);
    if (map.has(item)) {
      const value = map.get(item);
      map.set(item, value + 1);
    } else {
      map.set(item, 1);
    }
  }

  for (let i = 0; i < b.length; i++) {
    const item = JSON.stringify(b[i]);
    if (map.has(item)) {
      const value = map.get(item);
      if (value > 0) {
        map.set(item, value - 1);
      }
    } else {
      return false;
    }
  }

  return true;
};
