const enhancer = require("./enhancer.js");

const item = {
  name: "sword",
  durability: 80,
  enhancement: 15,
};

describe("repair an item", () => {
  it("does not affect items with less than 0 for durability", () => {
    const item = {
      name: "sword",
      durability: -1,
      enhancement: 2,
    };

    expect(enhancer.repair(item)).toEqual(item);
  });

  it("does not affect items with less than 0 for enhancement", () => {
    const item = {
      name: "sword",
      durability: 2,
      enhancement: -2,
    };
    expect(enhancer.repair(item)).toEqual(item);
  });

  it("does not affect items with less than 0 for enhancement and durability", () => {
    const item = {
      name: "sword",
      durability: -2,
      enhancement: -2,
    };
    expect(enhancer.repair(item)).toEqual(item);
  });

  it("does not affect items with enhancement greater than 20", () => {
    const item = {
      name: "sword",
      durability: 80,
      enhancement: 216,
    };
    expect(enhancer.repair(item)).toEqual(item);
  });

  it("does not affect items with durability greater than 100", () => {
    const item = {
      name: "sword",
      durability: 1000,
      enhancement: 15,
    };
    expect(enhancer.repair(item)).toEqual(item);
  });

  it("does not affect items with durability greater than 100 and enhancement greater than 20", () => {
    const item = {
      name: "sword",
      durability: 180,
      enhancement: 216,
    };

    expect(enhancer.repair(item)).toEqual(item);
  });

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
  it("does not affect an item with less than 0 for durability", () => {
    const item = {
      name: "sword",
      durability: -80,
      enhancement: 16,
    };

    expect(enhancer.success(item)).toEqual(item);
  });

  it("does not affect an item with less than 0 for enhancement", () => {
    const item = {
      name: "sword",
      durability: 80,
      enhancement: -16,
    };

    expect(enhancer.success(item)).toEqual(item);
  });

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

describe("get method", () => {
  it("does not change item name if the enhancement level is 0", () => {
    const item = {
      name: "sword",
      durability: 80,
      enhancement: 0,
    };
    expect(enhancer.get(item)).toEqual(item);
  });

  it("changes the name to include the enhancement level in brackets with a +, ex. sword => [+7]sword", () => {
    const item = {
      name: "sword",
      durability: 80,
      enhancement: 1,
    };

    const expectedItem = {
      name: "[+1] sword",
      durability: 80,
      enhancement: 1,
    };

    expect(enhancer.get(item)).toEqual(expectedItem);
    expect(enhancer.get(item)).not.toEqual(item);
    expect(enhancer.get(item)).not.toEqual({});
  });
});
