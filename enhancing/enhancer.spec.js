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

describe("success enhancement", () => {
  it("returns a new item with enhancement increased by 1 and durability unchanged", () => {
    const expectedItm = {
      name: "sword",
      durability: 80,
      enhancement: 16,
    };
    expect(enhancer.success(item)).toEqual(expectedItm);
    expect(enhancer.success(item)).not.toEqual(item);
  });

  it("does not change enhancement level when the original item's enhancement is 20 or durability ", () => {
    const item = {
      name: "sword",
      durability: 80,
      enhancement: 20,
    };

    expect(enhancer.success(item)).toEqual(item);
    expect(enhancer.success(item)).not.toEqual({
      name: "sword",
      durability: 80,
      enhancement: 21,
    });
  });
});

describe("fail enhancement", () => {
  it("original item has enhancement less than 15, returns a new item with durability decreased by 5", () => {
    const item = {
      name: "sword",
      durability: 80,
      enhancement: 14,
    };
    const expectedItem = {
      name: "sword",
      durability: 75,
      enhancement: 14,
    };

    expect(enhancer.fail(item)).toEqual(expectedItem);
    expect(enhancer.fail(item)).not.toEqual(item);
    expect(enhancer.fail(item)).not.toEqual({});
  });

  it("original item has enhancement is 15 or more and returns a new item with durability decreased by 10", () => {
    const item = {
      name: "sword",
      durability: 80,
      enhancement: 15,
    };
    const expectedItem = {
      name: "sword",
      durability: 70,
      enhancement: 15,
    };

    expect(enhancer.fail(item)).toEqual(expectedItem);
    expect(enhancer.fail(item)).not.toEqual(item);
    expect(enhancer.fail(item)).not.toEqual({});
  });

  it("original item has enhancement of more than 16 and returns a new item with durability decreased by 10 and enhancement decreased by 1", () => {
    const item = {
      name: "sword",
      durability: 80,
      enhancement: 17,
    };
    const expectedItem = {
      name: "sword",
      durability: 70,
      enhancement: 16,
    };

    expect(enhancer.fail(item)).toEqual(expectedItem);
    expect(enhancer.fail(item)).not.toEqual(item);
    expect(enhancer.fail(item)).not.toEqual({});
  });

  it("item has enhancement of 16 and only durability is decreased", () => {
    const item = {
      name: "sword",
      durability: 80,
      enhancement: 16,
    };
    const expectedItem = {
      name: "sword",
      durability: 70,
      enhancement: 16,
    };

    expect(enhancer.fail(item)).toEqual(expectedItem);
    expect(enhancer.fail(item)).not.toEqual(item);
    expect(enhancer.fail(item)).not.toEqual({});
  });
});
