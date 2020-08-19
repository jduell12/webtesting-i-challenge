const enhancer = require("./enhancer.js");

const item = {
  name: "sword",
  durability: 80,
  enhancement: 15,
};

describe("repair item", () => {
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
