import assert from "assert";
import "../src";

describe("Startup Tests", () => {
  let total = 0;
  test("Ganache", () => {
    ganache.provider();
    total += 2;
  });
  test("Hardhat", () => {
    hre();
  });
  test("Foundry", () => {
    assert.strictEqual(true, true);
  });

  describe("Nested describe", () => {
    test("oh nelly", () => {
      assert.strictEqual(total, 2);
    });
    test("Failure!", () => {
      throw new Error("OH NO");
    });
    describe("Nested describe", () => {
      test("oh nelly", () => {
        assert.strictEqual(total, 2);
      });
      test("Failure!", () => {
        throw new Error("OH NO DOS");
      });
      test("STUB");
    });
  });

  test("After nested");
});
