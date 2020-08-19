const enhancer = require("./enhancer.js");

const item = {
  name: "sword",
  durability: 80,
  enhancement: 15,
};

describe("repair an item", () => {
  it("returns a new item with durability restored to 100", () => {
    const expectedItem = {
      name: "sword",
      durability: 100,
      enhancement: 15,
    };

    expect(enhancer.repair(item)).toStrictEqual(expectedItem);
    expect(enhancer.repair(item)).not.toStrictEqual(item);
    expect(enhancer.repair(item)).not.toStrictEqual({});
  });
});

describe("success on an item", () => {
  it("returns a new item with enhancement increased by 1", () => {
    const expectedItm = {
      name: "sword",
      durability: 80,
      enhancement: 16,
    };
    expect(enhancer.success(item)).toEqual(expectedItm);
    expect(enhancer.success(item)).not.toEqual(item);
  });

  it("does not change enhancement level when the original item's enhancement is 20", () => {
    const item = {
      name: "sword",
      durability: 80,
      enhancement: 20,
    };

    expect(enhancer.success(item)).toEqual(item);
  });
});
