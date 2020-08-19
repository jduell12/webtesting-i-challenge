module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  return {
    ...item,
    //checks if enhancement of item is at 20
    enhancement:
      item.enhancement === 20 ? item.enhancement : item.enhancement + 1,
  };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
