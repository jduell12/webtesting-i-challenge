module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  if (item.durability < 0 || item.enhancement < 0) {
    return item;
  } else {
    return {
      ...item,
      //checks if enhancement of item is at 20
      enhancement:
        item.enhancement === 20 ? item.enhancement : item.enhancement + 1,
    };
  }
}

function fail(item) {
  if (item.enhancement < 15) {
    return { ...item, durability: item.durability - 5 };
  } else if (item.enhancement >= 15) {
    if (item.enhancement > 16) {
      return {
        ...item,
        enhancement: item.enhancement - 1,
        durability: item.durability - 10,
      };
    } else {
      return { ...item, durability: item.durability - 10 };
    }
  }
}

function repair(item) {
  if (
    item.durability < 0 ||
    item.enhancement < 0 ||
    item.enhancement > 20 ||
    item.durability > 100
  ) {
    return item;
  } else {
    return { ...item, durability: 100 };
  }
}

function get(item) {
  if (item.enhancement === 0) {
    return { ...item };
  } else if (item.enhancement > 0) {
    const enhancement = item.enhancement;
    return { ...item, name: `[+${enhancement}] ` + item.name };
  }
}
