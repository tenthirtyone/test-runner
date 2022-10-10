import assert from "assert";
import "../src";

describe("Startup Tests", () => {
  test("Ganache", () => {
    ganache();
  });
  test("Hardhat", () => {
    hre();
  });
  test("Foundry", () => {
    assert.strictEqual(false, true);
  });
});
