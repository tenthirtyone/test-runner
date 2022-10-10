"use strict";
exports.__esModule = true;
var assert_1 = require("assert");
require("../src");
describe("Startup Tests", function () {
    test("Ganache", function () {
        ganache();
    });
    test("Hardhat", function () {
        hre();
    });
    test("Foundry", function () {
        assert_1["default"].strictEqual(false, true);
    });
});
