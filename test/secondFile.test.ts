import assert from "assert";
import "../src";

describe("Second File Tests", () => {
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
});
